import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Dialogs from './pages/Dialogs';
import AgreementForm from './components/AgreementForm'; // Импорт нового компонента

function App() {
  return (
    <Router>
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/dialogs">Dialogs</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <AgreementForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/dialogs/*" element={<Dialogs />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
