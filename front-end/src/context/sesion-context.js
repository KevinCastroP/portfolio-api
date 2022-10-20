import React, { useState } from 'react';

const SesionContext = React.createContext({});

function SesionContextProvider({ children }) {

  const [sesion, setSesion] = useState({
    userName: 'dafault-user-name',
  });

  const updateSesion = ({ newUserName = sesion.userName }) => {
    setSesion({
      userName: newUserName
    });
  };

  return <SesionContext.Provider value={{ sesion, updateSesion }}>
    {children}
  </SesionContext.Provider>;
}

export { SesionContext, SesionContextProvider };