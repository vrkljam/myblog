
import './App.css';
import About from './pages/About';
import ArticlePage from './pages/ArticlePage';
import Articleslistpage from './pages/Articleslistpage';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div id='page-body'>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/articles" element={<Articleslistpage />} />
            <Route path="/" element={<HomePage />}/>
            <Route path="/articles/:articleId" element={<ArticlePage />}/>
            <Route path="*" element={<NotFound />}/>
            
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
