import React from 'react';
import RepoItem from './repo-item'
import { Repository } from '../types'

type Props = {
  repos: Repository[]
}

export default function RepoList({ repos }: Props) {
  return (
    <div className="results-area">
      {
        repos.map(repo => <RepoItem repo={repo} />)
      }
    </div>
  )
}
