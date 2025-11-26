import { useParams, Link } from 'react-router-dom';
import products from '../data/products.json';
import ProductCard from '../components/ProductCard';

// IMPORTAR IMÁGENES LOCALES
import chalecoLocal from '../components/img/chaleco.jpg';
import seguroLocal from '../components/img/seguroviaje.jpg';
import botellaLocal from '../components/img/botella4.jpg';
import dronLocal from '../components/img/dron.jpg';
import feriaLocal from '../components/img/FeriadecienciaServicio.jpeg';
import energiaLocal from '../components/img/EnergiaRenovable.jpeg';
import microscopiaLocal from '../components/img/analisisdemateriales.jpeg';
import clubQuimicaLocal from '../components/img/ClubQuimica.jpeg';
import industriaLocal from '../components/img/TECNICASINDUSTRIALES.jpeg'; // <--- ÚLTIMA IMAGEN

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  // RELACIONADOS
  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 3);

  const finalRelated = relatedProducts.length > 0 
    ? relatedProducts 
    : products.filter(p => p.id !== product?.id).slice(0, 3);

  if (!product) return <div className="page-container"><h2>Producto no encontrado</h2></div>;

  // LÓGICA DE IMAGEN
  let imagenAMostrar = product.image;
  if (product.id === "SEG-002") imagenAMostrar = chalecoLocal;
  else if (product.id === "SRV-003") imagenAMostrar = seguroLocal;
  else if (product.id === "MER-004") imagenAMostrar = botellaLocal;
  else if (product.id === "DIG-005") imagenAMostrar = dronLocal;
  else if (product.id === "SERV-MENTOR-PROY-10") imagenAMostrar = feriaLocal;
  else if (product.id === "SERV-ENERG-REN-09") imagenAMostrar = energiaLocal;
  else if (product.id === "SERV-ANALISIS-MAT-06") imagenAMostrar = microscopiaLocal;
  else if (product.id === "SERV-QUIM-FOREN-12") imagenAMostrar = clubQuimicaLocal;
  else if (product.id === "SERV-RUTAS-INDUS-14") imagenAMostrar = industriaLocal; // <--- ASIGNACIÓN

  return (
    <div className="page-container" style={{ paddingBottom: '4rem' }}>
      
      <div style={{ padding: '2rem 0' }}>
        <Link to="/catalogo" style={{ textDecoration: 'none', color: '#64748b', fontWeight: '500' }}>
          &larr; Volver al catálogo
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', marginBottom: '6rem' }}>
        
        <div>
          <img 
            src={imagenAMostrar} 
            alt={product.name} 
            style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)' }} 
          />
          <div className="detail-card" style={{ marginTop: '2rem' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Resumen Comercial</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '1rem' }}>
              <span style={{ color: '#64748b' }}>Garantía</span>
              <span style={{ fontWeight: '600' }}>{product.commercial.warranty}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem' }}>
              <span style={{ color: '#64748b' }}>Entrega</span>
              <span style={{ fontWeight: '600' }}>{product.commercial.deliveryTime}</span>
            </div>
          </div>
        </div>

        <div className="detail-card">
          <span style={{ background: '#dbeafe', color: '#1e40af', padding: '0.6rem 1.2rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '1px' }}>
            {product.category.toUpperCase()}
          </span>
          <h1 style={{ fontSize: '2.5rem', color: '#0f172a', margin: '1.5rem 0 0.5rem', lineHeight: '1.1' }}>{product.name}</h1>
          <p style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: '1.5rem' }}>Modelo: {product.model}</p>
          
          <div style={{ marginBottom: '2rem', color: '#334155', lineHeight: '1.6' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#0f172a', marginBottom: '0.5rem' }}>Descripción:</h3>
            <p>{product.description}</p>
          </div>

          <p style={{ fontSize: '2.5rem', fontWeight: '700', color: '#2563eb', marginBottom: '2.5rem' }}>
             ${product.commercial.price.toLocaleString()}
          </p>

          <h3 style={{ borderBottom: '2px solid #f1f5f9', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Especificaciones</h3>
          <table className="specs-table" style={{ width: '100%' }}>
            <tbody>
              <tr><th style={{padding:'10px 0', color:'#64748b'}}>Capacidad</th><td style={{fontWeight:'500'}}>{product.technical.capacity}</td></tr>
              <tr><th style={{padding:'10px 0', color:'#64748b'}}>Materiales</th><td style={{fontWeight:'500'}}>{product.technical.materials}</td></tr>
              <tr><th style={{padding:'10px 0', color:'#64748b'}}>Certificaciones</th><td style={{fontWeight:'500'}}>{product.technical.certifications}</td></tr>
            </tbody>
          </table>

          <button className="btn-primary" style={{ width: '100%', marginTop: '3rem', border: 'none', cursor: 'pointer' }}>
            Contactar para Compra
          </button>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '4rem' }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#0f172a' }}>También te podría interesar</h3>
        <div className="product-grid">
          {finalRelated.map((related) => (
            <ProductCard key={related.id} product={related} />
          ))}
        </div>
      </div>

    </div>
  );
}

export default ProductDetail;