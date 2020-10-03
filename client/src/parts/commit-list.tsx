import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Commit, CommitSearch } from '../types'

type Props = {
  commits: Commit[],
}

function CommitList({ commits }: Props) {
  const [viewCommitList, setViewCommitList] = useState([] as Commit[])
  const query = useSelector((state: CommitSearch) => state.searchTerm)

  useEffect(() => {
    const view = commits.filter(comm => comm.message.toLowerCase()
      .includes(query.toLowerCase()))
    setViewCommitList([...view])
  }, [query, commits])

  return (
    <div>
      {
        viewCommitList.map(commit => (
          <div key={commit.date}>
            {commit.message}
          </div>
        ))
      }
    </div>
  )
}

export default CommitList
