// LanguageSelector.js
import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageStore';
// import LanguageContext from '../contexts/LanguageContext';

const LanguageSelector = () => {
  const { onLanguageChange } = useContext(LanguageContext);

  return (
    <div>
      Select a language:
      <i className="flag us" onClick={() => onLanguageChange('english')} />
      <i className="flag nl" onClick={() => onLanguageChange('dutch')} />
    </div>
  );
};

export default LanguageSelector;
