import React from 'react';
// 1. IMPORTAMOS LAS IMÁGENES
// La ruta es ./img/ porque la carpeta 'img' está dentro de 'components'
import facebookIcon from './img/facebook.png';
import instagramIcon from './img/pngegg.png'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="page-container footer-grid">
        
        {/* Columna 1: Marca */}
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem' }}>ExploraKids.</h2>
          <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>
            Transformando la logística escolar en una aventura educativa segura y confiable.
          </p>
        </div>

        {/* Columna 2: Enlaces */}
        <div>
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li>Inicio</li>
            <li>Catálogo de Productos</li>
            <li>Nuestra Historia</li>
            <li>Seguridad</li>
          </ul>
        </div>

        {/* Columna 3: Contacto (ACTUALIZADO) */}
        <div>
          <h4>Contacto</h4>
          <ul>
            <li>info@explorakids.com</li>
            <li>+57 3107962145</li>
            <li>Manizales, Caldas</li>
          </ul>
        </div>

        {/* Columna 4: Redes Sociales (NUEVO) */}
        <div>
          <h4>Síguenos</h4>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            
            {/* Icono Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img 
                src={facebookIcon} 
                alt="Facebook" 
                style={{ 
                  width: '40px', 
                  height: '40px', 
                  objectFit: 'contain',
                  cursor: 'pointer',
                  transition: 'transform 0.2s'
                }} 
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </a>

            {/* Icono Instagram (pngegg.png) */}
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img 
                src={instagramIcon} 
                alt="Instagram" 
                style={{ 
                  width: '40px', 
                  height: '40px', 
                  objectFit: 'contain',
                  cursor: 'pointer',
                  transition: 'transform 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </a>

          </div>
        </div>

      </div>
      <div style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #1e293b', color: '#64748b', fontSize: '0.9rem' }}>
        © 2025 ExploraKids Logistics. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;