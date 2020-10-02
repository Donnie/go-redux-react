package main

import "gorm.io/gorm"

// Record for internal record keeping
type Record struct {
	gorm.Model

	Name *string `json:"name,omitempty"`
}
