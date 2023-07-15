import React, { useState } from 'react';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Array of anime titles
  const animeList = [
    'Attack on Titan (Final Season)',
    'Jujutsu Kaisen',
    'Our Last Crusade or Rise of The New World',
    'Noblesse',
    'The Irregular at Magic High School 2 (Visitor Arc)',
    'Akudama Drive',
    'Date A Bullet (Dead or Bullet)',
    "King's Raid (Successors of the Will)"
  ];

  // Function to handle search input change
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    searchAnime(e.target.value);
  };

  // Function to perform search
  const searchAnime = (query) => {
    const filteredResults = animeList.filter((anime) =>
      anime.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Type to search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <div className="autocom-box">
        <ul>
          {searchResults.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchComponent;
