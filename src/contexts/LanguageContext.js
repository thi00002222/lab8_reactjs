// // LanguageContext.js
// import React, { createContext, useState } from 'react';

// const LanguageContext = createContext({ language: 'english', onLanguageChange: () => {} });

// const LanguageStore = ({ children }) => {
//   const [language, setLanguage] = useState('english');

//   const onLanguageChange = (newLanguage) => {
//     setLanguage(newLanguage);
//   };

//   return (
//     <LanguageContext.Provider value={{ language, onLanguageChange }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// export default LanguageStore;