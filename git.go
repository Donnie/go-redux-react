package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
)

var httpcl = &http.Client{Timeout: 10 * time.Second}
var cacheDuration = time.Minute

func fetch(url string) (str string, err error) {
	r, err := httpcl.Get(url)
	if err != nil {
		return
	}
	defer r.Body.Close()

	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		return
	}
	str = string(body)
	return
}

func (st *State) getJSON(url string, target interface{}) {
	jsonStr, err := st.Cache.Get(ctx, url).Result()
	if err != nil {
		jsonStr, err = fetch(url)
		check(err)
		err = st.Cache.Set(ctx, url, jsonStr, cacheDuration).Err()
		check(err)
	}
	json.Unmarshal([]byte(jsonStr), target)
}

func (st *State) fetchRepos(c *gin.Context) {
	var repos []Repository
	url := fmt.Sprintf("https://api.github.com/users/%s/repos", c.Param("user"))
	st.getJSON(url, &repos)
	c.JSON(200, &repos)
}

func (st *State) fetchCommits(c *gin.Context) {
	var commits []Commit
	url := fmt.Sprintf("https://api.github.com/repos/%s/%s/commits", c.Param("user"), c.Param("repo"))
	st.getJSON(url, &commits)
	c.JSON(200, &commits)
}

func check(err error) {
	if err != nil {
		panic(err)
	}
}
