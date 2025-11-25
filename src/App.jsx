import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import About from './pages/About';
import ScrollToTop from './components/ScrollToTop'; // 1. Importación

import './App.css';

function App() {
  return (
    <Router>
      {/* 2. ¡AQUÍ ES DONDE DEBE IR! Sin esto, la importación no hace nada */}
      <ScrollToTop />

      <Navbar />
      
      {/* Contenedor principal con altura mínima */}
      <div style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/nosotros" element={<About />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;