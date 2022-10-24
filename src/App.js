import './App.css';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import PlayerList from './components/PlayerList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlayerInfo from './components/PlayerInfo';
import ErrorPage from './components/ErrorPage';
import Contact from './components/Contact';
import About from './components/About';
import Wrapper from './components/Wrapper';
import useLocalStorage from 'use-local-storage';
import ThemeState from './contexts/ThemeState';

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <>
      <div className='app' data-theme={theme}>
        <ThemeState >
          <Router>
            <Wrapper>
              <Navbar theme={theme} toggleTheme={toggleTheme} />
              <Routes>
                <Route path='/' element={<><Jumbotron /> <About /></>} />
                <Route path='players' element={<PlayerList />} />
                <Route path='players/:id/:name' element={<PlayerInfo />} />
                <Route path='about' element={<About />} />
                <Route path="contact" element={<Contact />} />
                {/* For error page */}
                <Route path='*' element={<ErrorPage />} />

              </Routes>
            </Wrapper>
          </Router>
        </ThemeState>
      </div>
    </>
  );
}

export default App;
