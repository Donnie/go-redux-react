import React from 'react'
import { RouteComponentProps } from 'react-router'

type RouteParams = {
  user: string,
  repo: string,
}

export default function Commits(props: RouteComponentProps<RouteParams>) {
  const {
    user,
    repo,
  } = props.match.params

  return (
    <div className="commits-page">
      <header className="header">Commits Explorer</header>
      {user} {repo}
    </div>
  )
}
