import React from 'react';
import './styles.css';

const TrendingCard = ({ title, category }) => {
  return (
    <div className="trending-card">
      <h4>{title}</h4>
      <p>{category}</p>
    </div>
  );
};

export default TrendingCard;
