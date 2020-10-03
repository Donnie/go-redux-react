import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import { Commit } from '../types'
import SearchArea from '../parts/search-area'
import { fetchCommits } from '../services'

type RouteParams = {
  user: string,
  repo: string,
}

export default function Commits(props: RouteComponentProps<RouteParams>) {
  const {
    user,
    repo,
  } = props.match.params

  const [searchTerm, setSearchTerm] = useState("")
  const [commitList, setCommitList] = useState([] as Commit[])

  useEffect(() => {
    async function doit() {
      try {
        await fetchCommits(user, repo)
          .then(res => setCommitList([...res]))
      } catch (err) {
        console.log(err)
      }
    }
    doit()
  }, [user, repo])

  return (
    <div className="commits-page">
      <header className="header">Commits Explorer</header>
      <SearchArea placeholder="Search commit message..." searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {user} {repo}
      <div>
        {
          commitList.map(commit => (
            <div>
              {commit.message}
            </div>
          ))
        }
      </div>
    </div>
  )
}
