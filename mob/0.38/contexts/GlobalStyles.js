// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';
import { useContext } from 'react';
import { AppContext } from './AppContext';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => (theme.darkMode ? '#121212' : '#ffffff')};
    color: ${({ theme }) => (theme.darkMode ? '#ffffff' : '#000000')};
    transition: background-color 0.3s, color 0.3s;
  }
   colorButton: ${({ theme }) => (theme.darkMode ? 'white' : 'black')};
   bottomMenu: ${({ theme }) => (theme.darkMode ? '#000' : '#eee')};
   label: {
    fontSize: 16,
    marginBottom: 2,
     color: ${({ theme }) => (theme.darkMode ? '#ffffff' : '#000000')};
  },
  container: {
      flex: 1,
      padding: 20,
      backgroundColor: ${({ theme }) => (theme.darkMode ? '#121212' : '#fff')};
    };
`;

const GlobalStylesWrapper = ({ children }) => {
  const { darkMode } = useContext(AppContext);

  return (
    <>
      <GlobalStyles theme={{ darkMode }} />
      {children}
    </>
  );
};

export default GlobalStylesWrapper;
