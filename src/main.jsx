import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import Page from './components/page'

function App() {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = ''; // C'est nécessaire pour certains navigateurs comme Chrome
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Nettoyage lors de la destruction du composant
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return <Page />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
