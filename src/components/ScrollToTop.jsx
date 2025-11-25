import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Intenta subir la ventana normal
    window.scrollTo(0, 0);
    
    // 2. Intenta subir el documento HTML (Chrome/Firefox)
    document.documentElement.scrollTo(0, 0);
    
    // 3. Intenta subir el Body (Safari/Mobile)
    document.body.scrollTo(0, 0);

    // 4. CRÍTICO: Intenta subir el contenedor de React (#root)
    // (A veces es este el que tiene el scroll si usamos CSS de altura fija)
    const rootDiv = document.getElementById('root');
    if (rootDiv) {
      rootDiv.scrollTo(0, 0);
    }

  }, [pathname]);

  return null;
}