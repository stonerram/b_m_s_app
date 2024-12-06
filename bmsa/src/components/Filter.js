import React, { useState } from 'react';

const Filter = ({ setFilters }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedFormat, setSelectedFormat] = useState('');
  const [showLanguageButtons, setShowLanguageButtons] = useState(false);
  const [showGenreButtons, setShowGenreButtons] = useState(false);
  const [showFormatButtons, setShowFormatButtons] = useState(false);

  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: value,
    }));
  };

  const handleButtonClick = (type, value) => {
    if (type === 'language') {
      setSelectedLanguage(value);
      handleFilterChange('language', value === 'Languages' ? '' : value);
      setShowLanguageButtons(false);
    } else if (type === 'genre') {
      setSelectedGenre(value);
      handleFilterChange('genre', value === 'All Genres' ? '' : value);
      setShowGenreButtons(false);
    } else if (type === 'format') {
      setSelectedFormat(value);
      handleFilterChange('format', value);
      setShowFormatButtons(false);
    }
  };

  const languages = [
    'English',
    'Telugu',
    'Hindi',
    'Tamil',
    'Malayalam',
    'Bengali',
    'Gujarati',
    'Kannada',
    'Marathi',
  ];

  const genres = ['Comedy', 'Drama', 'Action', 'Thriller', 'Animation'];
  const formats = ['2D', '3D', 'IMAX'];

  return (
    <div className="filter-container">
      <h3>Filters</h3>

      {/* Language Select */}
      <section className="filter-section">
        <div className="select-icon" onClick={() => setShowLanguageButtons(!showLanguageButtons)}>
          <span>{selectedLanguage || 'Language'}</span>
          <span className="caret-icon">
            {showLanguageButtons ? '▲' : '▼'}
          </span>
        </div>
        {showLanguageButtons && (
          <div className="button-container">
            {languages.map((language) => (
              <button
                key={language}
                className="filter-btn"
                onClick={() => handleButtonClick('language', language)}
              >
                {language}
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Genre Select */}
      <section className="filter-section">
        <div className="select-icon" onClick={() => setShowGenreButtons(!showGenreButtons)}>
          <span>{selectedGenre || 'Genre'}</span>
          <span className="caret-icon">
            {showGenreButtons ? '▲' : '▼'}
          </span>
        </div>
        {showGenreButtons && (
          <div className="button-container">
            {genres.map((genre) => (
              <button
                key={genre}
                className="filter-btn"
                onClick={() => handleButtonClick('genre', genre)}
              >
                {genre}
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Format Select */}
      <section className="filter-section">
        <div className="select-icon" onClick={() => setShowFormatButtons(!showFormatButtons)}>
          <span>{selectedFormat || 'Format'}</span>
          <span className="caret-icon">
            {showFormatButtons ? '▲' : '▼'}
          </span>
        </div>
        {showFormatButtons && (
          <div className="button-container">
            {formats.map((format) => (
              <button
                key={format}
                className="filter-btn"
                onClick={() => handleButtonClick('format', format)}
              >
                {format}
              </button>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Filter;
