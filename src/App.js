import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import DevBlog from './pages/DevBlog';
import FirmanEsittely from './pages/FirmanEsittely';
import PelinEsittely from './pages/PelinEsittely';
import Resurssit from './pages/Resurssit';
import NoPage from './pages/NoPage';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PelinEsittely />} />
          <Route path="FirmanEsittely" element={<FirmanEsittely />} />
          <Route path="DevBlog" element={<DevBlog />} />
          <Route path="Resurssit" element={<Resurssit />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
