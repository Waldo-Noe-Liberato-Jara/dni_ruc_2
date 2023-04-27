import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { NumeroDocumentoContext } from "./Components/NumeroDocumentoContext";

import Home from "./Components/Home";
import Consulta from './Components/Consulta/Consulta'
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  const [numeroDocumento, setNumeroDocumento] = useState('');

  return (
    <Router>
      <NumeroDocumentoContext.Provider value={{ numeroDocumento, setNumeroDocumento }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consultas" element={<Consulta />} />
        </Routes>
        <Footer />
      </NumeroDocumentoContext.Provider>
    </Router>
  );
}

export default App;
