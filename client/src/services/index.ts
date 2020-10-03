import axios from "axios"
import { Repository, Commit, Recent } from '../types'

const meister = axios.create({
  baseURL: "http://localhost:5000"
})

export const fetchRepos = async (searchTerm: string): Promise<Repository[]> => {
  const response = await meister.get(`/fetch-repos/${searchTerm}`)
  return response.data
}

export const fetchCommits = async (user: string, repo: string): Promise<Commit[]> => {
  const response = await meister.get(`/fetch-commits/${user}/${repo}`)
  return response.data.map((datum: any) => ({
    author_name: datum.commit.author.name,
    date: datum.commit.author.date,
    message: datum.commit.message,
    url: datum.commit.url,
  }))
}

export const fetchRecent = async (): Promise<Recent[]> => {
  const response = await meister.get(`/fetch-recent`)
  return response.data
}
