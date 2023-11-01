import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const MainApp: React.FC = () => {
  return (
    <div>
      <App />
    </div>
  );
};

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<MainApp />);
