import React, { useEffect, useState } from 'react'
import RepoList from '../parts/repo-list'
import SearchArea from '../parts/search-area'
import { Repository } from '../types'
import { fetchRepos } from '../services'
import '../App.css'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("facebook")
  const [repoList, setRepolist] = useState([] as Repository[])

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
      <header className="header">Repository Explorer</header>
      <SearchArea searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <RepoList repos={repoList} />
    </div>
  )
}
