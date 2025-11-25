import { Link } from 'react-router-dom';

// 1. IMPORTAMOS TODAS LAS IMÁGENES LOCALES
import chalecoLocal from './img/chaleco.jpg';
import seguroLocal from './img/seguroviaje.jpg';
import botellaLocal from './img/botella4.jpg';
import dronLocal from './img/dron.jpg'; // <--- NUEVA IMAGEN

function ProductCard({ product }) {
  
  // 2. LÓGICA PARA SELECCIONAR LA IMAGEN CORRECTA
  // Por defecto usa la del JSON
  let imagenAMostrar = product.image; 

  // Sobrescribimos con las locales si coincide el ID
  if (product.id === "SEG-002") {
    imagenAMostrar = chalecoLocal;
  } else if (product.id === "SRV-003") {
    imagenAMostrar = seguroLocal;
  } else if (product.id === "MER-004") {
    imagenAMostrar = botellaLocal;
  } else if (product.id === "DIG-005") {
    imagenAMostrar = dronLocal; // <--- ASIGNAMOS EL DRON
  }

  return (
    <div className="product-card">
      <img src={imagenAMostrar} alt={product.name} className="card-image" />
      
      <div className="card-info">
        <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#94a3b8', fontWeight: '600', letterSpacing: '1px' }}>
          {product.category}
        </span>
        <h3 style={{ margin: '0.5rem 0', fontSize: '1.2rem', color: '#0f172a' }}>
          {product.name}
        </h3>
        <p className="price">
          ${product.commercial.price.toLocaleString()}
        </p>
        <Link to={`/producto/${product.id}`} className="btn-details">
          Ver Ficha Técnica
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;