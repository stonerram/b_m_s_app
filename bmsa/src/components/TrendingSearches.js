import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TrendingCard from './TrendingCard';
import './styles.css';

const TrendingSearches = () => {
  const [trendingSearches, setTrendingSearches] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1141/api/trending-searches')
      .then((response) => setTrendingSearches(response.data))
      .catch((error) => console.error('Error fetching trending searches:', error));
  }, []);

  return (
    <div className="trending-container">
      <h2 className="trending-title">Trending Searches Right Now</h2>
      <div className="trending-grid">
        {trendingSearches.map((item, index) => (
          <TrendingCard key={index} title={item.title} category={item.category} />
        ))}
      </div>
    </div>
  );
};

export default TrendingSearches;
