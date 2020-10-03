import React from 'react';
import { Repository } from '../types'

type Props = {
  repo: Repository
}

export default function RepoItem({ repo }: Props) {
  return (
    <div key={repo.full_name} className="results-item">
      <span className="item-name">{repo.name}</span>
      <span className="item-star">
        <span>{repo.stargazers_count}</span>
        <span role="img" aria-label="star">⭐️</span>
      </span>
    </div>
  )
}
