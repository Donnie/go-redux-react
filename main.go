package main

import (
	"context"

	"github.com/gin-contrib/cors"
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
	r.Use(cors.New(cors.Config{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{"GET"},
		AllowHeaders: []string{"Origin"},
	}))
	r.GET("/health", func(c *gin.Context) {
		c.JSON(200, nil)
	})
	r.GET("/fetch-repos/:user", st.handleRepos)
	r.GET("/fetch-commits/:user/:repo", st.handleCommits)
	r.GET("/fetch-recent", st.handleRecent)
	r.Run()
}
