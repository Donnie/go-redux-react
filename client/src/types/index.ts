export interface Repository {
    description: string,
    full_name: string,
    name: string,
    stargazers_count: number,
}

export interface Commit {
    author_name: string,
    date: string,
    message: string,
    url: string,
}

export interface CommitSearch {
    searchTerm: string,
    commits: Commit[],
}

export interface Recent {
    repo_user: string,
    repo_name: string,
}
