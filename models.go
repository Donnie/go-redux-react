package main

import (
	"time"

	"gorm.io/gorm"
)

// Record for internal record keeping
type Record struct {
	gorm.Model

	Name *string `json:"name,omitempty"`
}

// Owner is github owner
type Owner struct {
	AvatarURL         *string `json:"avatar_url"`
	EventsURL         *string `json:"events_url"`
	FollowersURL      *string `json:"followers_url"`
	FollowingURL      *string `json:"following_url"`
	GistsURL          *string `json:"gists_url"`
	GravatarID        *string `json:"gravatar_id"`
	HTMLURL           *string `json:"html_url"`
	ID                *int    `json:"id"`
	Login             *string `json:"login"`
	NodeID            *string `json:"node_id"`
	OrganizationsURL  *string `json:"organizations_url"`
	ReceivedEventsURL *string `json:"received_events_url"`
	ReposURL          *string `json:"repos_url"`
	SiteAdmin         *bool   `json:"site_admin"`
	StarredURL        *string `json:"starred_url"`
	SubscriptionsURL  *string `json:"subscriptions_url"`
	Type              *string `json:"type"`
	URL               *string `json:"url"`
}

// Repository is a GitHub repo
type Repository struct {
	Archived         *bool     `json:"archived"`
	ArchiveURL       *string   `json:"archive_url"`
	AssigneesURL     *string   `json:"assignees_url"`
	BlobsURL         *string   `json:"blobs_url"`
	BranchesURL      *string   `json:"branches_url"`
	CloneURL         *string   `json:"clone_url"`
	CollaboratorsURL *string   `json:"collaborators_url"`
	CommentsURL      *string   `json:"comments_url"`
	CommitsURL       *string   `json:"commits_url"`
	CompareURL       *string   `json:"compare_url"`
	ContentsURL      *string   `json:"contents_url"`
	ContributorsURL  *string   `json:"contributors_url"`
	CreatedAt        time.Time `json:"created_at"`
	DefaultBranch    *string   `json:"default_branch"`
	DeploymentsURL   *string   `json:"deployments_url"`
	Description      *string   `json:"description"`
	Disabled         *bool     `json:"disabled"`
	DownloadsURL     *string   `json:"downloads_url"`
	EventsURL        *string   `json:"events_url"`
	Fork             *bool     `json:"fork"`
	Forks            *int      `json:"forks"`
	ForksCount       *int      `json:"forks_count"`
	ForksURL         *string   `json:"forks_url"`
	FullName         *string   `json:"full_name"`
	GitCommitsURL    *string   `json:"git_commits_url"`
	GitRefsURL       *string   `json:"git_refs_url"`
	GitTagsURL       *string   `json:"git_tags_url"`
	GitURL           *string   `json:"git_url"`
	HasDownloads     *bool     `json:"has_downloads"`
	HasIssues        *bool     `json:"has_issues"`
	HasPages         *bool     `json:"has_pages"`
	HasProjects      *bool     `json:"has_projects"`
	HasWiki          *bool     `json:"has_wiki"`
	Homepage         *string   `json:"homepage"`
	HooksURL         *string   `json:"hooks_url"`
	HTMLURL          *string   `json:"html_url"`
	ID               *int      `json:"id"`
	IssueCommentURL  *string   `json:"issue_comment_url"`
	IssueEventsURL   *string   `json:"issue_events_url"`
	IssuesURL        *string   `json:"issues_url"`
	KeysURL          *string   `json:"keys_url"`
	LabelsURL        *string   `json:"labels_url"`
	Language         *string   `json:"language"`
	LanguagesURL     *string   `json:"languages_url"`
	License          *string   `json:"license"`
	MergesURL        *string   `json:"merges_url"`
	MilestonesURL    *string   `json:"milestones_url"`
	MirrorURL        *string   `json:"mirror_url"`
	Name             *string   `json:"name"`
	NodeID           *string   `json:"node_id"`
	NotificationsURL *string   `json:"notifications_url"`
	OpenIssues       *int      `json:"open_issues"`
	OpenIssuesCount  *int      `json:"open_issues_count"`
	OwnerID          *int      `json:"owner_id"`
	Owner            *Owner    `json:"owner"`
	Private          *bool     `json:"private"`
	PullsURL         *string   `json:"pulls_url"`
	PushedAt         time.Time `json:"pushed_at"`
	ReleasesURL      *string   `json:"releases_url"`
	Size             *int      `json:"size"`
	SSHURL           *string   `json:"ssh_url"`
	StargazersCount  *int      `json:"stargazers_count"`
	StargazersURL    *string   `json:"stargazers_url"`
	StatusesURL      *string   `json:"statuses_url"`
	SubscribersURL   *string   `json:"subscribers_url"`
	SubscriptionURL  *string   `json:"subscription_url"`
	SvnURL           *string   `json:"svn_url"`
	TagsURL          *string   `json:"tags_url"`
	TeamsURL         *string   `json:"teams_url"`
	TreesURL         *string   `json:"trees_url"`
	UpdatedAt        time.Time `json:"updated_at"`
	URL              *string   `json:"url"`
	Watchers         *int      `json:"watchers"`
	WatchersCount    *int      `json:"watchers_count"`
}

// CommitAuthor from Github
type CommitAuthor struct {
	Date  *time.Time `json:"date"`
	Email *string    `json:"email"`
	Name  *string    `json:"name"`
}

// CommitTree from Github
type CommitTree struct {
	Sha *string `json:"sha"`
	URL *string `json:"url"`
}

// Verification from Github
type Verification struct {
	Payload   *string `json:"payload"`
	Reason    *string `json:"reason"`
	Signature *string `json:"signature"`
	Verified  *bool   `json:"verified"`
}

// CommitData from Github
type CommitData struct {
	Author       *CommitAuthor `json:"author"`
	CommentCount *int          `json:"comment_count"`
	Committer    *CommitAuthor `json:"committer"`
	Message      *string       `json:"message"`
	Tree         *CommitTree   `json:"tree"`
	URL          *string       `json:"url"`
	Verification *Verification `json:"verification"`
}

// CommitParent from Github
type CommitParent struct {
	HTMLURL *string `json:"html_url"`
	Sha     *string `json:"sha"`
	URL     *string `json:"url"`
}

// Commit from Github
type Commit struct {
	Author      *Owner          `json:"author"`
	CommentsURL *string         `json:"comments_url"`
	Commit      *CommitData     `json:"commit"`
	Committer   *Owner          `json:"committer"`
	HTMLURL     *string         `json:"html_url"`
	NodeID      *string         `json:"node_id"`
	Parents     *[]CommitParent `json:"parents"`
	Sha         *string         `json:"sha"`
	URL         *string         `json:"url"`
}
