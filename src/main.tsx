import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ReactQueryProvider } from './providers/ReactQueryProvider';
import PokemonList from './pages/PokemonList';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReactQueryProvider>
      <PokemonList />
    </ReactQueryProvider>
  </React.StrictMode>
);
