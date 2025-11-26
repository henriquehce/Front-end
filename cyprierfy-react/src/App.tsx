import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "../pages/Home";
import Login from "../pages/Login";
import CriarConta from "../pages/CriarConta";
import Planos from "../pages/Planos";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/criar-conta" element={<CriarConta />} />
        <Route path="/planos" element={<Planos />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
