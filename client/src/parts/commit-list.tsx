import React from 'react'
import { connect } from "react-redux";
import { createSelector } from 'reselect';
import { Commit, CommitSearch } from '../types'

type Props = {
  commits: Commit[],
}

function CommitList({ commits }: Props) {
  return (
    <div>
      {
        commits.map(commit => (
          <div key={commit.date}>
            {commit.message}
          </div>
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
