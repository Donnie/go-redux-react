package main

import (
	"context"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

var ctx = context.Background()

func init() {
	godotenv.Load(".env")
}

func main() {
	db := initPostgres()
	rdb := initRDB()

	st := State{
		Orm:   db,
		Cache: rdb,
	}

	r := gin.Default()
	r.GET("/health", func(c *gin.Context) {
		c.JSON(200, nil)
	})
	r.GET("/fetch-repos/:user", st.fetchRepos)
	r.GET("/fetch-commits/:user/:repo", st.fetchCommits)
	r.Run()
}
