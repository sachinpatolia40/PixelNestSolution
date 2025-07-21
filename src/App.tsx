import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ServicesPage from './components/ServicesPage';
import GalleryPage from './components/GalleryPage';
import ProjectDetailPage from './components/ProjectDetailPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path={`${import.meta.env.BASE_URL}`} element={<HomePage />} />
          <Route path={`${import.meta.env.BASE_URL}/about`} element={<AboutPage />} />
          <Route path={`${import.meta.env.BASE_URL}/services`} element={<ServicesPage />} />
          <Route path={`${import.meta.env.BASE_URL}/gallery`} element={<GalleryPage />} />
          <Route path={`${import.meta.env.BASE_URL}/contact`} element={<ContactPage />} />
          <Route path={`${import.meta.env.BASE_URL}/project/:id`} element={<ProjectDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;