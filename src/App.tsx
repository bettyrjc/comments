import React from 'react';
import Routers from './routers';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="h-screen bg-purple-100">
      <Toaster
        position="top-right"
        toastOptions={{
          // Define default options
          duration: 3000,
        }}
      />
      <Routers />
    </div>
  );
}

export default App;
