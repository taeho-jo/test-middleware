import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from './Theme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.scss';

import Home from './pages/Home';
import Feature from './pages/Feature';
import { Solution1, Solution2, Solution3, Solution4 } from './pages/Solution';
import Pricing from './pages/Pricing';
import TRI from './pages/TRI';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 500,
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/usecases/ui" element={<Solution1 />} />
          <Route path="/usecases/ux" element={<Solution2 />} />
          <Route path="/usecases/scenario" element={<Solution3 />} />
          <Route path="/usecases/customer" element={<Solution4 />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/tri" element={<TRI />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
