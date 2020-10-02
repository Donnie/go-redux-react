package main

import (
	"fmt"

	"github.com/gin-gonic/gin"
)

func (st *State) handleRepos(c *gin.Context) {
	c.Header("Access-Control-Allow-Origin", "*")
	c.Header("Access-Control-Allow-Headers", "access-control-allow-origin, access-control-allow-headers")
	var repos []Repository
	url := fmt.Sprintf("https://api.github.com/users/%s/repos", c.Param("user"))
	st.getJSON(url, &repos)
	c.JSON(200, &repos)
}

func (st *State) handleCommits(c *gin.Context) {
	c.Header("Access-Control-Allow-Origin", "*")
	c.Header("Access-Control-Allow-Headers", "access-control-allow-origin, access-control-allow-headers")
	repo := c.Param("repo")
	user := c.Param("user")
	st.saveSelection(user, repo)

	var commits []Commit
	url := fmt.Sprintf("https://api.github.com/repos/%s/%s/commits", user, repo)
	st.getJSON(url, &commits)
	c.JSON(200, &commits)
}

func (st *State) handleRecent(c *gin.Context) {
	c.Header("Access-Control-Allow-Origin", "*")
	c.Header("Access-Control-Allow-Headers", "access-control-allow-origin, access-control-allow-headers")
	var recentRepos []RecentRepo
	st.Orm.Limit(20).Order("id desc").Find(&recentRepos)
	c.JSON(200, &recentRepos)
}
