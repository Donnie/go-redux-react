package main

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
	"strings"
	"time"

	"gorm.io/gorm/clause"
)

var httpcl = &http.Client{Timeout: 10 * time.Second}
var cacheDuration = time.Minute
var fallbackDuration = time.Hour

func (st *State) getJSON(url string, target interface{}) {
	url = strings.ToLower(url)
	jsonStr, err := st.Cache.Get(ctx, url).Result()
	if err != nil {
		jsonStr, err = fetch(url)
		if err != nil {
			jsonStr, _ = st.Cache.Get(ctx, "fallback:"+url).Result()
		} else {
			st.Cache.Set(ctx, "fallback:"+url, jsonStr, fallbackDuration)
			st.Cache.Set(ctx, url, jsonStr, cacheDuration)
		}
	}
	json.Unmarshal([]byte(jsonStr), target)
}

func (st *State) saveSelection(user, repo string) {
	st.Orm.Clauses(clause.OnConflict{DoNothing: true}).
		Create(&RecentRepo{
			RepoName: &repo,
			RepoUser: &user,
		})
}

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

func check(err error) {
	if err != nil {
		panic(err)
	}
}
