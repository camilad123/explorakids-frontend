import products from '../data/products.json';
import ProductCard from '../components/ProductCard';

function Catalog() {
  return (
    <div className="page-container">
      
      {/* TÍTULO CON MÁS ESPACIO Y ESTILO */}
      <h1 style={{ 
        margin: '4rem 0 3rem 0',  /* 4rem arriba, 3rem abajo (Mucho aire) */
        fontSize: '2.8rem',       /* Letra más grande */
        fontWeight: '800',        /* Negrita fuerte (Poppins) */
        color: '#0f172a',         /* Azul oscuro corporativo */
        letterSpacing: '-1px'
      }}>
        Catálogo de Productos y Servicios
      </h1>

      {/* Grilla de productos */}
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
    </div>
  );
}

export default Catalog;