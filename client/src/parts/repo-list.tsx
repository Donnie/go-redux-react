import React from 'react'
import styled from 'styled-components'
import RepoItem from './repo-item'
import { Repository } from '../types'

const RESULTS = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
`

type Props = {
  repos: Repository[]
}

export default function RepoList({ repos }: Props) {
  return (
    <RESULTS>
      {
        repos.map(repo => <RepoItem repo={repo} key={repo.full_name} />)
      }
    </RESULTS>
  )
}
