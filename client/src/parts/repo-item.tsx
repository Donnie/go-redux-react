import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Repository } from '../types'

const DIV = styled.div`
  background-color: darkolivegreen;
  border-radius: .25rem;
  color: lightcyan;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin: 15px 20px;
  padding: 10px 20px;
  width: 20vw;
  word-wrap: break-word;
`

const ITEMSTAR = styled.span`
  align-items: flex-end;
  margin-left: auto;
`

type Props = {
  repo: Repository
}

export default function RepoItem({ repo }: Props) {
  return (
    <Link to={`/${repo.full_name}`} href="#">
      <DIV>
        <span>{repo.name}</span>
        <ITEMSTAR>
          <span>{repo.stargazers_count}</span>
          <span role="img" aria-label="star">⭐️</span>
        </ITEMSTAR>
      </DIV>
    </Link>
  )
}
