import React from 'react'
import { Recent } from '../types'

type Props = {
  recents: Recent[],
}

export default function RecentList({ recents }: Props) {
  return (
    <div>
      <h3>Recent repositories: </h3>
      {
        recents.map(rec => (
          <div>
            {rec.repo_name}
          </div>
        ))
      }
    </div>
  )
}
