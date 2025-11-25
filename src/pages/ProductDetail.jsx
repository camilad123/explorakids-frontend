import { useParams, Link } from 'react-router-dom';
import products from '../data/products.json';

// TUS IMPORTACIONES ORIGINALES (INTACTAS)
import chalecoLocal from '../components/img/chaleco.jpg';
import seguroLocal from '../components/img/seguroviaje.jpg';
import botellaLocal from '../components/img/botella4.jpg';
import dronLocal from '../components/img/dron.jpg';

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return <div className="page-container"><h2>Producto no encontrado</h2></div>;

  // TU LÓGICA PARA LA IMAGEN (INTACTA)
  let imagenAMostrar = product.image;
  if (product.id === "SEG-002") imagenAMostrar = chalecoLocal;
  else if (product.id === "SRV-003") imagenAMostrar = seguroLocal;
  else if (product.id === "MER-004") imagenAMostrar = botellaLocal;
  else if (product.id === "DIG-005") imagenAMostrar = dronLocal;

  return (
    <div className="page-container" style={{ paddingBottom: '4rem' }}>
      
      {/* Botón volver */}
      <div style={{ padding: '2rem 0' }}>
        <Link to="/catalogo" style={{ textDecoration: 'none', color: '#64748b', fontWeight: '500' }}>
          &larr; Volver al catálogo
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
        
        {/* Columna Izquierda: Imagen + Resumen */}
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
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '1rem' }}>
              <span style={{ color: '#64748b' }}>Entrega</span>
              <span style={{ fontWeight: '600' }}>{product.commercial.deliveryTime}</span>
            </div>
             <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem' }}>
              <span style={{ color: '#64748b' }}>Política</span>
              <span style={{ fontWeight: '600', textAlign: 'right' }}>{product.commercial.returnPolicy}</span>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Información Detallada en TARJETA BLANCA */}
        <div className="detail-card">
          <span style={{ background: '#dbeafe', color: '#1e40af', padding: '0.6rem 1.2rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '1px' }}>
            {product.category.toUpperCase()}
          </span>
          
          <h1 style={{ fontSize: '2.5rem', color: '#0f172a', margin: '1.5rem 0 0.5rem', lineHeight: '1.1' }}>{product.name}</h1>
          <p style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: '1.5rem' }}>Modelo: {product.model}</p>
          
          {/* --- AQUÍ ESTÁ EL CAMBIO: DESCRIPCIÓN AGREGADA --- */}
          <div style={{ marginBottom: '2rem', color: '#334155', lineHeight: '1.6' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#0f172a', marginBottom: '0.5rem' }}>Descripción:</h3>
            <p>{product.description}</p>
          </div>
          {/* ------------------------------------------------- */}

          <p style={{ fontSize: '2.5rem', fontWeight: '700', color: '#2563eb', marginBottom: '2.5rem' }}>
             ${product.commercial.price.toLocaleString()}
          </p>

          <h3 style={{ borderBottom: '2px solid #f1f5f9', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
            Especificaciones Técnicas
          </h3>
          
          {/* Tabla Justificada */}
          <table className="specs-table" style={{ width: '100%', textAlign: 'justify' }}>
            <tbody>
              <tr><th style={{padding:'10px 0', color:'#64748b'}}>Dimensiones</th><td style={{fontWeight:'500'}}>{product.technical.dimensions}</td></tr>
              <tr><th style={{padding:'10px 0', color:'#64748b'}}>Materiales</th><td style={{fontWeight:'500'}}>{product.technical.materials}</td></tr>
              <tr><th style={{padding:'10px 0', color:'#64748b'}}>Certificaciones</th><td style={{fontWeight:'500'}}>{product.technical.certifications}</td></tr>
              <tr><th style={{padding:'10px 0', color:'#64748b'}}>Resistencia</th><td style={{fontWeight:'500'}}>{product.technical.resistance}</td></tr>
            </tbody>
          </table>

          <h3 style={{ borderBottom: '2px solid #f1f5f9', paddingBottom: '0.5rem', marginBottom: '1.5rem', marginTop: '3rem' }}>
            Datos Logísticos
          </h3>
          
          <table className="specs-table" style={{ width: '100%', textAlign: 'justify' }}>
            <tbody>
              <tr><th style={{padding:'10px 0', color:'#64748b'}}>Código HS</th><td style={{fontWeight:'500'}}>{product.logistics.hsCode}</td></tr>
              <tr><th style={{padding:'10px 0', color:'#64748b'}}>Empaque</th><td style={{fontWeight:'500'}}>{product.logistics.packageDims}</td></tr>
              <tr><th style={{padding:'10px 0', color:'#64748b'}}>Peso Total</th><td style={{fontWeight:'500'}}>{product.logistics.packageWeight}</td></tr>
              <tr><th style={{padding:'10px 0', color:'#64748b'}}>Origen</th><td style={{fontWeight:'500'}}>{product.logistics.origin}</td></tr>
            </tbody>
          </table>

          <button className="btn-primary" style={{ width: '100%', marginTop: '3rem', border: 'none', cursor: 'pointer' }}>
            Contactar para Compra
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;