import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// IMPORTACIÓN DE FOTOS
import fotohorizontalImg from '../components/img/fotohorizontal.jpg';
import adolfoImg from '../components/img/Adolfo.jpeg';
import camilaImg from '../components/img/Camila.png';
import julianaImg from '../components/img/Juliana.jpeg';
import zarethImg from '../components/img/Zareth.jpeg';

function About() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ESTILO BASE PARA EL CÍRCULO (El marco)
  const cardImageContainer = {
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    background: '#e2e8f0',
    margin: '0 auto 1.5rem',
    border: '4px solid white',
    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    position: 'relative'
  };

  // ESTILO BASE PARA LA FOTO
  const imgBase = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s'
  };

  return (
    <div className="page-container">
      
      {/* Sección Historia */}
      <section className="hero-split" style={{ minHeight: '50vh', background: 'transparent', gap: '2rem' }}>
     <div className="hero-text">
          <span style={{ color: '#2563eb', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Nuestra Historia
          </span>
          <h1 className="hero-title" style={{ fontSize: '2.5rem', marginTop: '1rem' }}>
            Ingeniería al servicio de <br/> la curiosidad.
          </h1>
          
          {/* --- TEXTO DE ORIGEN NUEVO --- */}
      <p className="hero-subtitle" style={{ marginBottom: '1.5rem', lineHeight: '1.8', textAlign: 'justify' }}>
            ExploraKids nació en los pasillos de la facultad de Ingeniería Física. Notamos que la ciencia se enseñaba en tableros abstractos, 
            mientras el mundo real estaba lleno de fenómenos por descubrir. Decidimos aplicar nuestra experiencia en datos y optimización para crear un sistema logístico que derribara las barreras del aula, 
            permitiendo que la curiosidad de los niños viaje segura hacia el conocimiento práctico.
          </p>
          {/* ----------------------------- */}

        </div>
        <div className="hero-image-wrapper" style={{ justifyContent: 'center' }}>
          <img 
            src={fotohorizontalImg} 
            alt="Historia ExploraKids" 
            className="hero-img-style"
            style={{ height: '250px', maxWidth: '400px', width: '100%', objectFit: 'cover' }} 
          />
        </div>
      </section>

      {/* Sección Equipo */}
      <div className="section-container" style={{ paddingTop: '2rem' }}>
        <h2 className="section-title">Nuestro Equipo Ejecutivo</h2>
        
        <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          
          {/* 1. ADOLFO */}
          <div className="feature-card">
            <div style={cardImageContainer}>
              <img src={adolfoImg} alt="Adolfo" style={{ 
                ...imgBase, 
                transform: 'scale(1.1)',      
                transformOrigin: 'center 20%' 
              }} />
            </div>
            <h3 style={{ fontSize: '1.4rem', color: '#0f172a', marginBottom: '0.5rem' }}>Adolfo Castañeda</h3>
            <p style={{ color: '#2563eb', fontWeight: '700', fontSize: '1rem', textTransform: 'uppercase' }}>CEO & Director General</p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.95rem', color: '#64748b' }}>Ingeniero Físico</p>
          </div>

          {/* 2. CAMILA */}
          <div className="feature-card">
            <div style={cardImageContainer}>
              <img src={camilaImg} alt="Camila" style={{ 
                ...imgBase, 
                transform: 'scale(1.2)',       
                transformOrigin: 'center 15%'  
              }} />
            </div>
            <h3 style={{ fontSize: '1.4rem', color: '#0f172a', marginBottom: '0.5rem' }}>Camila Durán</h3>
            <p style={{ color: '#2563eb', fontWeight: '700', fontSize: '1rem', textTransform: 'uppercase' }}>COO & Directora de Operaciones</p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.95rem', color: '#64748b' }}>Ingeniera Física</p>
          </div>

          {/* 3. JULIANA */}
          <div className="feature-card">
            <div style={cardImageContainer}>
              <img src={julianaImg} alt="Juliana" style={{ 
                ...imgBase, 
                transform: 'scale(1.3)',       
                transformOrigin: 'center 20%'  
              }} />
            </div>
            <h3 style={{ fontSize: '1.4rem', color: '#0f172a', marginBottom: '0.5rem' }}>Juliana Cardona</h3>
            <p style={{ color: '#2563eb', fontWeight: '700', fontSize: '1rem', textTransform: 'uppercase' }}>CTO & Directora de Tecnología</p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.95rem', color: '#64748b' }}>Ingeniera Física</p>
          </div>

           {/* 4. ZARETH */}
           <div className="feature-card">
            <div style={cardImageContainer}>
              <img src={zarethImg} alt="Zareth" style={{ 
                ...imgBase, 
                transform: 'scale(1.3)',       
                transformOrigin: 'center 30%'  
              }} />
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