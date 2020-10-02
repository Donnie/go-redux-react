package main

import (
	"fmt"
	"os"
	"time"

	"github.com/go-redis/redis/v8"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func initRDB() *redis.Client {
	opts, err := redis.ParseURL(os.Getenv("REDIS_URL"))
	if err != nil {
		fmt.Println("Failed to connect to redis")
		os.Exit(1)
	}
	opts.DB = 0
	return redis.NewClient(opts)
}

func initPostgres() *gorm.DB {
	dsn := fmt.Sprintf(
		"user=%s password=%s dbname=%s port=%s host=%s",
		os.Getenv("PG_USER"),
		os.Getenv("PG_PASS"),
		os.Getenv("PG_DBAS"),
		os.Getenv("PG_PORT"),
		os.Getenv("PG_HOST"),
	)
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		fmt.Println("Failed to connect to database")
		os.Exit(1)
	}
	sqlDB, err := db.DB()
	sqlDB.SetConnMaxLifetime(time.Hour)
	sqlDB.SetMaxOpenConns(10)
	db.AutoMigrate(&RecentRepo{})

	return db
}
