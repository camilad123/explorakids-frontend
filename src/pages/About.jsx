import React from 'react';
import { Link } from 'react-router-dom';

// 1. IMPORTAMOS LAS FOTOS REALES
// Nota: Ajusta la ruta si es necesario, pero basándome en tu estructura es así:
import adolfoImg from '../components/img/Adolfo.jpeg';
import camilaImg from '../components/img/Camila.png';
import julianaImg from '../components/img/Juliana.jpeg';
import zarethImg from '../components/img/Zareth.jpeg';

function About() {
  return (
    <div className="page-container">
      
      {/* Sección Historia */}
      <section className="hero-split" style={{ minHeight: '50vh', background: 'transparent', gap: '2rem' }}>
        <div className="hero-text">
          <span style={{ color: '#2563eb', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Nuestra Historia
          </span>
          <h1 className="hero-title" style={{ fontSize: '2.5rem', marginTop: '1rem' }}>
            Conectando el aula con <br/> el mundo real.
          </h1>
          <p className="hero-subtitle" style={{ marginBottom: '1.5rem' }}>
            ExploraKids nació con una misión clara: romper las paredes del salón de clases. 
            Identificamos que los niños aprenden teoría, pero les falta vivir la práctica. 
            Nosotros nos encargamos de la logística compleja para que los colegios y padres solo se preocupen por aprender.
          </p>
        </div>
        <div className="hero-image-wrapper" style={{ justifyContent: 'center' }}>
          <img 
            src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1000&auto=format&fit=crop" 
            alt="Equipo ExploraKids" 
            className="hero-img-style"
            style={{ height: '250px', maxWidth: '400px' }} 
          />
        </div>
      </section>

      {/* Sección Equipo */}
      <div className="section-container" style={{ paddingTop: '2rem' }}>
        <h2 className="section-title">Nuestro Equipo Ejecutivo</h2>
        
        {/* Grid ajustado para 4 personas */}
        <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          
          {/* Adolfo */}
          <div className="feature-card">
            {/* AUMENTÉ EL TAMAÑO A 180px (antes era 100px) */}
            <div style={{ width: '180px', height: '180px', borderRadius: '50%', background: '#e2e8f0', margin: '0 auto 1.5rem', overflow: 'hidden', border: '4px solid white', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
              <img src={adolfoImg} alt="Adolfo" style={{ width: '100%', height:'100%', objectFit: 'cover'}} />
            </div>
            <h3 style={{ fontSize: '1.4rem', color: '#0f172a', marginBottom: '0.5rem' }}>Adolfo Castañeda</h3>
            <p style={{ color: '#2563eb', fontWeight: '700', fontSize: '1rem', textTransform: 'uppercase' }}>CEO & Director General</p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.95rem', color: '#64748b' }}>Ingeniero Físico</p>
          </div>

          {/* Camila */}
          <div className="feature-card">
            <div style={{ width: '190px', 
              height: '190px', 
              borderRadius: '50%', 
              background: '#e2e8f0', 
              margin: '0 auto 1.5rem', 
              border: '4px solid white', 
              boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
              overflow: 'hidden' }}>
              <img src={camilaImg} alt="Camila" style={{ width: '100%', height:'100%', objectFit: 'cover',transform: 'scale(1.1)',transformOrigin: 'center 110%'}} />
            </div>
            <h3 style={{ fontSize: '1.4rem', color: '#0f172a', marginBottom: '0.5rem' }}>Camila Durán</h3>
            <p style={{ color: '#2563eb', fontWeight: '700', fontSize: '1rem', textTransform: 'uppercase' }}>COO & Directora de Operaciones</p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.95rem', color: '#64748b' }}>Ingeniera Física</p>
          </div>

          {/* Juliana */}
          <div className="feature-card">
            <div style={{ width: '180px', height: '180px', borderRadius: '50%', background: '#e2e8f0', margin: '0 auto 1.5rem', overflow: 'hidden', border: '4px solid white', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
              <img src={julianaImg} alt="Juliana" style={{ width: '100%', height:'100%', objectFit: 'cover'}} />
            </div>
            <h3 style={{ fontSize: '1.4rem', color: '#0f172a', marginBottom: '0.5rem' }}>Juliana Cardona</h3>
            <p style={{ color: '#2563eb', fontWeight: '700', fontSize: '1rem', textTransform: 'uppercase' }}>CTO & Directora de Tecnología</p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.95rem', color: '#64748b' }}>Ingeniera Física</p>
          </div>

           {/* Zareth */}
           <div className="feature-card">
            <div style={{ width: '180px', height: '180px', borderRadius: '50%', background: '#e2e8f0', margin: '0 auto 1.5rem', overflow: 'hidden', border: '4px solid white', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
              <img src={zarethImg} alt="Zareth" style={{ width: '100%', height:'100%', objectFit: 'cover'}} />
            </div>
            <h3 style={{ fontSize: '1.4rem', color: '#0f172a', marginBottom: '0.5rem' }}>Zareth Andrade</h3>
            <p style={{ color: '#2563eb', fontWeight: '700', fontSize: '1rem', textTransform: 'uppercase' }}>CIO & Directora de Innovación</p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.95rem', color: '#64748b' }}>Ingeniera Física</p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default About;