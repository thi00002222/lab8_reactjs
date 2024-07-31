import React, { createContext, useState } from 'react';

export const ColorContext = createContext({ colors: [] });

const ColorProvider = ({ children }) => {
  const [colors, setColors] = useState(['red', 'blue', 'green']);

  return (
    <ColorContext.Provider value={{ colors, setColors }}>
      {children}
    </ColorContext.Provider>
  );
};

export default  ColorProvider ;
