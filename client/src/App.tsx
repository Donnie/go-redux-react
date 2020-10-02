import React, { useEffect, useState } from 'react';
import { Repository } from './types'
import { fetchRepos } from './services'
import './App.css';

export default function App() {
  const [searchTerm, setSearchTerm] = useState("facebook")
  const [repoList, setRepolist] = useState([] as Repository[])

  useEffect(() => {
    async function doit() {
      try {
        await fetchRepos(searchTerm)
          .then(res => setRepolist([...res]))
      } catch (err) {
        console.log(err)
      }
    }
    doit()
  }, [searchTerm])

  return (
    <div className="app">
      <header className="header">Repository Explorer</header>
      <div className="search-area">
        <input
          type="search"
          className="search-box"
          placeholder="Search anything..."
          onChange={e => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </div>
      <div className="results-area">
        {
          repoList.map(repo => (
            <div key={repo.full_name} className="results-item">
              <span className="item-name">{repo.name}</span>
              <span className="item-star">
                <span>{repo.stargazers_count}</span>
                <span role="img" aria-label="star">⭐️</span>
              </span>
            </div>
          ))
        }
      </div>
    </div>
  );
}
