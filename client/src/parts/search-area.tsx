import React from 'react'
import styled from 'styled-components'

const SEARCHBOX = styled.div`
  margin: 20px 0px;
`

const SEARCH = styled.input`
  border-radius: .25rem;
  border-width: 0;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
  font-size: large;
  margin-left: auto;
  margin-right: auto;
  outline-offset: -2px;
  padding: .75rem;
  width: 40rem;
`

type Props = {
  placeholder: string,
  searchTerm: string,
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>,
}

function SearchArea({ placeholder, searchTerm, setSearchTerm }: Props) {
  return (
    <SEARCHBOX>
      <SEARCH
        onChange={e => setSearchTerm(e.target.value)}
        placeholder={placeholder}
        type="search"
        value={searchTerm}
      />
    </SEARCHBOX>
  )
}

export default SearchArea
