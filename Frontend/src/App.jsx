import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Hero from './pages/Hero';
import Header from './pages/Header';
import Footer from './pages/Footer';
import About from './pages/About';
import Client from './pages/Client';
import Contact from './pages/Contact';
import NavigationBar from './pages/NavigationBar';
import Project from './pages/Project';
import Service from './pages/Service';
import Skills from './pages/Skills';
import NotFound from './pages/404'; 

// Scroll to section based on pathname
const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    const id = location.pathname.substring(1); // remove leading '/'
    if (id) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
};

// ScrollSpy: Updates URL based on visible section
const ScrollSpy = () => {
  const sectionIds = ['hero', 'about', 'skills', 'services', 'projects', 'clients', 'contact'];
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          let found = false;
          for (let id of sectionIds) {
            const el = document.getElementById(id);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= 80 && rect.bottom > 80) { // 80px from top (adjust as needed)
                if (window.location.pathname !== (id === 'hero' ? '/' : `/${id}`)) {
                  window.history.replaceState(null, '', id === 'hero' ? '/' : `/${id}`);
                }
                found = true;
                break; 
              }
            }
          }
          if (!found && window.location.pathname !== '/') {
            window.history.replaceState(null, '', '/');
          }
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
};

const MainLayout = () => {
  return (
    <>
      <Header />
      <ScrollToSection />
      <ScrollSpy /> 
      <main>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="services"><Service /></section>
        <section id="projects"><Project /></section>
        <section id="clients"><Client /></section>
        <section id="contact"><Contact /></section>
      </main>
      <NavigationBar />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* All routes render the full sequence */}
        <Route path="/" element={<MainLayout />} />
        <Route path="/about" element={<MainLayout />} />
        <Route path="/skills" element={<MainLayout />} />
        <Route path="/services" element={<MainLayout />} />
        <Route path="/projects" element={<MainLayout />} />
        <Route path="/clients" element={<MainLayout />} />
        <Route path="/contact" element={<MainLayout />} />

        {/* Fallback 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
