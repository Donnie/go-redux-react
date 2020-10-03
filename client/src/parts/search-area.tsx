import React from 'react';

type Props = {
  searchTerm: string,
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>,
}

export default function SearchArea({ searchTerm, setSearchTerm }: Props) {
  return (
    <div className="search-area">
      <input
        type="search"
        className="search-box"
        placeholder="Search anything..."
        onChange={e => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
    </div>
  )
}
