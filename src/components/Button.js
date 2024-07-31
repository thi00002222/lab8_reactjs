import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageStore';
import { ColorContext } from '../contexts/ColorContext';
// import LanguageContext from '../contexts/LanguageContext'; 
// import ColorContext from '../contexts/ColorContext'; 

const Button = () => {
  const { language } = useContext(LanguageContext);
  const { color } = useContext(ColorContext);

  const renderSubmit = () => {
    return language === 'english' ? 'Submit' : 'Soumettre';
  };

  return (
    <button className={`ui button ${color}`}>
      {renderSubmit()}
    </button>
  );
};

export default Button;
