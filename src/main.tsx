// main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { rootStore } from './stores';
import { Provider } from 'mobx-react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider {...rootStore}>
    <App />
    </Provider>
  </StrictMode>
);