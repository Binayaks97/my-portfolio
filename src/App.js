import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setDarkMode(systemPrefersDark);

  const listener = (e) => {
    setDarkMode(e.matches);
    toast(`Switched to ${e.matches ? 'Dark' : 'Light'} Mode (System)`, {
      position: 'top-right',
      autoClose: 2000,
      theme: e.matches ? 'dark' : 'light'
    });
  };

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', listener);

  return () => {
    window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', listener);
  };
}, []);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-theme' : 'light-theme';
  }, [darkMode]);

  return (
    <Router>
      <ToastContainer />
      <div className="d-flex flex-column min-vh-100">
        <Header />

        <main className="flex-grow-1 py-4">
          <div className="container">
            <div className="text-end mb-3">
              <button
                onClick={() => {
                  const newMode = !darkMode;
                  setDarkMode(newMode);
                  toast(
                    `${
                      newMode
                        ? "🌙 Switched to Dark Mode"
                        : "☀️ Switched to Light Mode"
                    }`,
                    {
                      position: "top-right",
                      autoClose: 2000,
                      hideProgressBar: false,
                      theme: newMode ? "dark" : "light",
                    }
                  );
                }}
                className={`btn btn-sm ${
                  darkMode ? "btn-outline-light" : "btn-outline-dark"
                }`}
              >
                {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
              </button>
            </div>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
