package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"
)

var myClient = &http.Client{Timeout: 10 * time.Second}

func getJSON(url string, target interface{}) error {
	r, err := myClient.Get(url)
	if err != nil {
		return err
	}
	defer r.Body.Close()

	return json.NewDecoder(r.Body).Decode(target)
}

func fetchRepos(user string) (repos []Repository) {
	url := fmt.Sprintf("https://api.github.com/users/%s/repos", user)
	getJSON(url, &repos)
	return
}
