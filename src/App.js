// import logo from './logo.svg';
import './App.css';
import LanguageSelector from './components/LanguageSelector';
import UserCreate from './components/UserCreate';
import ColorProvider from './contexts/ColorContext';
import LanguageStore from './contexts/LanguageStore';
// import LanguageStore from './contexts/LanguageContext';

function App() {
  return (
  <>
  <div className='ui container'>
    <LanguageStore>

      <LanguageSelector/>

      <ColorProvider>

      <UserCreate/>

      </ColorProvider>

    </LanguageStore>
  </div>
  </>
  );
}

export default App;
