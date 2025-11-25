import { Link } from 'react-router-dom';
// 1. Importamos el logo desde la carpeta img
import logoImg from './img/LogoExploraKids.jpeg';

function Navbar() {
  return (
    <nav className="navbar">
      
      {/* 2. Sección del Logo + Texto */}
      <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
        
        {/* Imagen del Logo */}
        <img 
          src={logoImg} 
          alt="Logo ExploraKids" 
          style={{ 
            height: '75px',        /* Tamaño de la imagen */
            width: '75px',         
            objectFit: 'cover',    /* Evita que se deforme */
            borderRadius: '50%',   /* Lo hace redondo */
            border: '2px solid #e2e8f0' /* Un borde sutil */
          }} 
        />

        {/* Texto del Logo */}
        <div className="logo">ExploraKids.</div>
        
      </Link>

      {/* 3. Enlaces del Menú */}
      <div className="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="/catalogo">Catálogo</Link>
        <Link to="/nosotros">Nosotros</Link> {/* Agregué el link a Nosotros */}
        <Link to="/contacto">Contacto</Link>
      </div>
      
    </nav>
  );
}

export default Navbar;