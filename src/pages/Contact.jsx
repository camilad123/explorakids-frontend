import React, { useState, useEffect } from 'react';
import products from '../data/products.json';
import ProductCard from '../components/ProductCard';

function Catalog() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ESTADOS
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  // CATEGORÍAS
  const categories = [
    "Todos",
    "Productos Principales",
    "Productos de Soporte",
    "Valor Agregado",
    "Soluciones Integrales"
  ];

  // FILTRADO
  const filteredProducts = products.filter((product) => {
    const matchCategory = selectedCategory === "Todos" || product.category === selectedCategory;
    const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        product.description?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="page-container">
      
      {/* --- ENCABEZADO --- */}
      {/* Usamos width: 100% para asegurar que ocupe todo el ancho disponible */}
      <div style={{ width: '100%', margin: '4rem 0 3rem 0' }}>
        
        {/* 1. TÍTULO CENTRADO A LA FUERZA */}
        <h1 style={{ 
          fontSize: '2.8rem', 
          fontWeight: '800', 
          color: '#0f172a', 
          letterSpacing: '-1px',
          marginBottom: '2rem',
          textAlign: 'center', // Centra el texto
          width: '100%',         // Ocupa todo el ancho
          display: 'block'
        }}>
          Catálogo de Productos
        </h1>

        {/* 2. BARRA DE BÚSQUEDA CENTRADA A LA FUERZA */}
        <div style={{ 
          width: '100%', 
          maxWidth: '600px', 
          marginBottom: '2rem',
          marginLeft: 'auto',  // Empuja desde la izquierda
          marginRight: 'auto'  // Empuja desde la derecha (Resultado: Centro)
        }}>
          <input 
            type="text" 
            placeholder="🔍 Buscar por nombre (ej: Chaleco, Drone...)" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '1rem 1.5rem',
              borderRadius: '50px',
              border: '2px solid #e2e8f0',
              fontSize: '1.1rem',
              outline: 'none',
              textAlign: 'center',
              boxShadow: '0 4px 10px rgba(0,0,0,0.03)',
              transition: 'border-color 0.3s'
            }}
            onFocus={(e) => e.target.style.borderColor = '#2563eb'}
            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
          />
        </div>

        {/* 3. BOTONES CENTRADOS */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', // Centra los botones en el flex
          gap: '0.8rem', 
          flexWrap: 'wrap', 
          maxWidth: '900px',
          marginLeft: 'auto', // Fuerza el bloque al centro
          marginRight: 'auto' 
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '0.6rem 1.2rem',
                borderRadius: '30px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '0.9rem',
                transition: 'all 0.3s',
                backgroundColor: selectedCategory === cat ? '#2563eb' : 'white',
                color: selectedCategory === cat ? 'white' : '#64748b',
                boxShadow: selectedCategory === cat ? '0 4px 10px rgba(37, 99, 235, 0.3)' : '0 2px 5px rgba(0,0,0,0.05)',
                border: selectedCategory === cat ? 'none' : '1px solid #f1f5f9'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* --- RESULTADOS --- */}
      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '4rem', color: '#64748b' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>😕 No encontramos resultados</h3>
          <button 
            onClick={() => { setSearchTerm(""); setSelectedCategory("Todos"); }}
            style={{ marginTop: '1rem', color: '#2563eb', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', fontSize: '1rem' }}
          >
            Limpiar filtros
          </button>
        </div>
      )}
      
    </div>
  );
}

export default Catalog;