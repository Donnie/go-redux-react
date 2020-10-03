import React from 'react'
import { connect } from "react-redux";
import { createSelector } from 'reselect';
import styled from 'styled-components'
import { Commit, CommitSearch } from '../types'

const COMMIT = styled.div`
  color: white;
  margin: 25px 0 10px 10px;
  display: flex;
  line-height: 1.6;
`

const AUTHOR = styled.div`
  margin: 0 15px 0 0;
`

const MESSAGE = styled.div`
  text-align: justify;
  text-justify: inter-word;
`

type Props = {
  commits: Commit[],
}

function CommitList({ commits }: Props) {
  return (
    <div>
      {
        commits.map((commit, i) => (
          <COMMIT key={commit.date}>
            <AUTHOR>{`${commit.author_name} committed:`}</AUTHOR>
            <MESSAGE>{commit.message}</MESSAGE>
          </COMMIT>
        ))
      }
    </div>
  )
}

const getSearchTerm = (state: CommitSearch) => state.searchTerm
const getCommits = (state: CommitSearch) => state.commits

const getVisibleCommits = createSelector(
  [getSearchTerm, getCommits],
  (searchTerm: string, commits: Commit[]) => { 
    return commits.filter(comm => comm.message.toLowerCase()
      .includes(searchTerm.toLowerCase()))
      .slice(0,20)
  }
)

const mapStateToProps = (state: CommitSearch) => ({
  commits: getVisibleCommits(state),
  query: state.searchTerm,
})

export default connect(mapStateToProps, null)(CommitList)
