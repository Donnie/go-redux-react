import React, { useEffect, useState } from 'react'
import { Commit } from '../types'

type Props = {
  commits: Commit[],
  searchTerm: string,
}

function CommitList({ commits, searchTerm }: Props) {
  const [viewCommitList, setViewCommitList] = useState([] as Commit[])

  useEffect(() => {
    const view = commits.filter(comm => comm.message.toLowerCase()
      .includes(searchTerm.toLowerCase()))
    setViewCommitList([...view])
  }, [searchTerm, commits])

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
