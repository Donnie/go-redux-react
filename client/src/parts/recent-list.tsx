import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Recent } from '../types'

const RECENTLIST = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
`

const RECENT = styled.div`
  color: lightcyan;
  cursor: pointer;
  margin: 0 10px 20px 0;
`

type Props = {
  recents: Recent[],
}

export default function RecentList({ recents }: Props) {
  return recents.length ? (
    <div>
      <h3>Recent repositories: </h3>
      <RECENTLIST>
        {
          recents.map(rec => (
            <Link to={`/${rec.repo_user}/${rec.repo_name}`} href="#" key={`${rec.repo_user}/${rec.repo_name}`}>
              <RECENT>{rec.repo_name}</RECENT>
            </Link>
          ))
        }
      </RECENTLIST>
    </div>
  ) : <></>
}
