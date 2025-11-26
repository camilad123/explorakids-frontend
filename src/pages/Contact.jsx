import React, { useEffect, useState } from 'react';

function Contact() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('sent');
      alert("¡Mensaje enviado! Gracias por contactarnos.");
    }, 2000);
  };

  return (
    <div className="page-container">
      
      <div style={{ textAlign: 'center', margin: '4rem 0' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#0f172a', fontWeight: '800', marginBottom: '1rem' }}>
          Contáctanos
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem' }}>
          Estamos aquí para resolver tus dudas sobre logística educativa.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', marginBottom: '5rem' }}>
        
        {/* COLUMNA IZQUIERDA: INFORMACIÓN Y MAPA */}
        <div>
          <div className="detail-card" style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1.5rem', color: '#0f172a' }}>Información de Contacto</h3>
            
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>📍</span>
              <div>
                <p style={{ fontWeight: '600', color: '#0f172a' }}>Sede Principal</p>
                <p style={{ color: '#64748b' }}>Manizales, Caldas, Colombia</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>📞</span>
              <div>
                <p style={{ fontWeight: '600', color: '#0f172a' }}>Teléfono</p>
                <p style={{ color: '#64748b' }}>+57 310 796 2145</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>✉️</span>
              <div>
                <p style={{ fontWeight: '600', color: '#0f172a' }}>Correo Electrónico</p>
                <p style={{ color: '#64748b' }}>info@explorakids.com</p>
              </div>
            </div>
          </div>

          {/* Mapa Simulado */}
          <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', height: '300px', position: 'relative' }}>
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" 
              alt="Mapa de Ubicación" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ 
              position: 'absolute', bottom: '20px', left: '20px', 
              background: 'white', padding: '0.5rem 1rem', borderRadius: '8px', 
              fontWeight: '600', color: '#0f172a', boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}>
              📍 Manizales, Caldas
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: FORMULARIO */}
        <div className="detail-card">
          <h3 style={{ marginBottom: '1.5rem', color: '#0f172a' }}>Envíanos un mensaje</h3>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#475569', fontWeight: '500' }}>Nombre Completo</label>
              <input type="text" placeholder="Tu nombre" required style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#475569', fontWeight: '500' }}>Correo Electrónico</label>
              <input type="email" placeholder="tucorreo@ejemplo.com" required style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#475569', fontWeight: '500' }}>Asunto</label>
              <select style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', background: 'white' }}>
                <option>Información General</option>
                <option>Cotizar una Ruta</option>
                <option>Soporte Técnico</option>
                <option>Alianzas con Colegios</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#475569', fontWeight: '500' }}>Mensaje</label>
              <textarea rows="4" placeholder="¿Cómo podemos ayudarte?" required style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', fontFamily: 'inherit' }}></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', border: 'none', cursor: 'pointer', opacity: formStatus === 'sending' ? 0.7 : 1 }} disabled={formStatus === 'sending'}>
              {formStatus === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
            {formStatus === 'sent' && <p style={{ color: '#10b981', textAlign: 'center', fontWeight: '600' }}>✅ ¡Mensaje enviado con éxito!</p>}
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;