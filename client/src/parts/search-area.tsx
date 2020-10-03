import React from 'react';

type Props = {
  placeholder: string,
  searchTerm: string,
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>,
}

export default function SearchArea({ placeholder, searchTerm, setSearchTerm }: Props) {
  return (
    <div className="search-area">
      <input
        type="search"
        className="search-box"
        placeholder={placeholder}
        onChange={e => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
    </div>
  )
}
