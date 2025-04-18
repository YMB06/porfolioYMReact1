import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { useEffect } from 'react';
import { AppRoutes } from './routes/AppRoutes';
import './App.css';

function App() {
  useEffect(() => {
    // Añadir Bootstrap CSS
    const bootstrapCSS = document.createElement('link');
    bootstrapCSS.rel = 'stylesheet';
    bootstrapCSS.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
    document.head.appendChild(bootstrapCSS);

    // Añadir Bootstrap JS
    const bootstrapJS = document.createElement('script');
    bootstrapJS.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';
    bootstrapJS.defer = true;
    document.body.appendChild(bootstrapJS);

    // Detectar clics fuera del menú desplegable para cerrarlo
    const handleOutsideClick = (event: MouseEvent) => {
      const menu = document.getElementById('navbarNav');
      if (menu && !menu.contains(event.target as Node)) {
        menu.classList.remove('show'); // Asegurarse de que el menú se cierre
      }
    };
  
    document.addEventListener('click', handleOutsideClick);
  
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <body className='amon'>
      <div className="container-full flex flex-col min-h-screen">
        <Header />
        <main className="container flex-1 mt-5">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </body>
  );
}

export default App;

