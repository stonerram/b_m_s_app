import React from "react";

const Languages = ({ setFilters }) => {
  const handleLanguageFilter = (language) => {
    setFilters({ language });
  };

  const languages = [
    "English",
    "Telugu",
    "Hindi",
    "Tamil",
    "Malayalam",
    "Kannada",
    "Bengali",
    "Japanese",
  ];

  return (
    <div className="filter-bar">
      {languages.map((language) => (
        <button
          key={language}
          className="language-btn"
          type="button"
          onClick={() => handleLanguageFilter(language)}
        >
          {language} 
        </button>
      ))}
    </div>
  );
};

export default Languages;
