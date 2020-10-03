import React, { useEffect, useState } from 'react'
import { HEADER } from '../parts/styled'
import RecentList from '../parts/recent-list'
import RepoList from '../parts/repo-list'
import SearchArea from '../parts/search-area'
import { Recent, Repository } from '../types'
import { fetchRecent, fetchRepos } from '../services'
import '../App.css'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("facebook")
  const [repoList, setRepolist] = useState([] as Repository[])
  const [recentList, setRecentlist] = useState([] as Recent[])

  useEffect(() => {
    async function doit() {
      await fetchRecent().then(res => setRecentlist([...res]))
    }
    doit()
  }, [])

  useEffect(() => {
    async function doit() {
      try {
        await fetchRepos(searchTerm)
          .then(res => setRepolist([...res]))
      } catch (err) {
        console.log(err)
      }
    }
    const timeOutId = setTimeout(() => doit(), 500)
    return () => clearTimeout(timeOutId)
  }, [searchTerm])

  return (
    <div className="home">
      <HEADER>Repository Explorer</HEADER>
      <SearchArea placeholder="Search repo name..." searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <RecentList recents={recentList} />
      <RepoList repos={repoList} />
    </div>
  )
}
