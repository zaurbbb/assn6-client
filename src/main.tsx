import { createRoot } from 'react-dom/client';
import App from './app/App.tsx';
import "./styles/main.scss";
createRoot(document.getElementById('root')!).render(
  <App />,
);
