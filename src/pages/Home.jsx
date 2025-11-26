import { Link } from 'react-router-dom';
import fotoverticalImg from '../components/img/fotovertical.jpg';

function Home() {
  return (
    <div>
      
      {/* 1. SECCIÓN HERO DIVIDIDA */}
      <section className="hero-split">
      <div className="hero-text">
          <h1 className="hero-title">
            Logística escolar inteligente con <br />
            <span className="highlight">propósito educativo.</span>
          </h1>
          <p className="hero-subtitle">
            Gestionamos salidas pedagógicas con los más altos estándares de seguridad. 
            Unimos transporte certificado, rastreo satelital y experiencias científicas 
            prácticas para conectar a los estudiantes con el mundo real.
          </p>
          <Link to="/catalogo" className="btn-primary">
            Explorar Catálogo
          </Link>
        </div>

        <div className="hero-image-wrapper">
          <img 
            src={fotoverticalImg}
            alt="Niño explorando con lupa" 
            className="hero-img-style" 
          />
        </div>
      </section>

      {/* 2. SECCIÓN DE CARACTERÍSTICAS CON FONDO AZUL ESPECÍFICO (#c6d2eb) */}
      {/* Envolvemos la sección en un div full-width con el color que pediste */}
      <div style={{ backgroundColor: '#c6d2eb', width: '100%' }}> 
        <div className="section-container">
          <h2 className="section-title">¿Por qué elegir ExploraKids?</h2>
          
          <div className="features-grid">
            {/* Card 1 */}
            <div className="feature-card">
              <div style={{ color: '#2563eb', marginBottom: '1rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h3 style={{ marginBottom: '0.5rem', color: '#0f172a' }}>Rastreo GPS</h3>
              <p style={{ color: '#64748b' }}>Monitoreo satelital en tiempo real para tranquilidad total de los padres.</p>
            </div>

            {/* Card 2 */}
            <div className="feature-card">
              <div style={{ color: '#2563eb', marginBottom: '1rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7.31"/><path d="M14 2v7.31"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.52 16h12.96"/></svg>
              </div>
              <h3 style={{ marginBottom: '0.5rem', color: '#0f172a' }}>Ciencia Divertida</h3>
              <p style={{ color: '#64748b' }}>Kits de exploración y guías certificadas en cada trayecto.</p>
            </div>

            {/* Card 3 */}
            <div className="feature-card">
              <div style={{ color: '#2563eb', marginBottom: '1rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 style={{ marginBottom: '0.5rem', color: '#0f172a' }}>Seguridad Premium</h3>
              <p style={{ color: '#64748b' }}>Pólizas de seguro todo riesgo y conductores verificados.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. SECCIÓN: SOBRE NOSOTROS */}
      <div style={{ background: '#ffffff', padding: '5rem 5%', display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{ flex: '0 0 400px', minWidth: '300px' }}>
          <img 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000" 
            alt="Misión ExploraKids" 
            style={{ 
              width: '100%', 
              height: '300px',
              objectFit: 'cover',
              borderRadius: '20px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)' 
            }}
          />
        </div>

        <div style={{ flex: 1, minWidth: '300px' }}>
          <span style={{ color: '#2563eb', fontWeight: '700', letterSpacing: '1px', fontSize: '0.9rem' }}>SOBRE EXPLORAKIDS</span>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2.5rem', color: '#0f172a', margin: '1rem 0', lineHeight: '1.2' }}>
            Más que transporte, <br/> somos educación.
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
            Nacimos para resolver el problema de la logística educativa en Colombia. 
            Conectamos colegios y familias con experiencias reales, garantizando seguridad, 
            trazabilidad y aprendizaje en cada kilómetro.
          </p>
          <Link to="/nosotros" style={{ textDecoration: 'none', color: '#0f172a', fontWeight: '600', borderBottom: '2px solid #2563eb', paddingBottom: '2px' }}>
            Conoce nuestra historia &rarr;
          </Link>
        </div>
      </div>
      
    </div>
  );
}

export default Home;