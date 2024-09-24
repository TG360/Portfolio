// App.tsx
import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/theme-provider';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
