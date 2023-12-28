import React from 'react';
import { createRoot } from 'react-dom/client';
import Application from './components/Application';
import { BrowserRouter } from 'react-router-dom';
import IsLoginProvider from "@src/IsLoginProvider";


createRoot(document.getElementById('app')).render(
  <BrowserRouter>
    <IsLoginProvider>
      <Application />
    </IsLoginProvider>
  </BrowserRouter>
);
