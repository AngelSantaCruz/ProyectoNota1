import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./componentes/Home"; 
import { About } from "./componentes/About";
import { Ranking } from "./componentes/Ranking";
import { Reviews } from "./componentes/Reviews";
import { Support } from "./componentes/Support";
import { Mostrar } from "./componentes/Mostrar";
import { Formulario } from "./componentes/Formulario";
import './App.css';
import { BarraNavegaBootstrao } from "./componentes/BarraNavega";


function App() {

  return (
   
    <Router>
      <BarraNavegaBootstrao/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Ranking" element={<Ranking/>}/>
          <Route path="/Mostrar" element={<Mostrar/>}/>
          <Route path="/Formulario" element={<Formulario/>}/>
          <Route path="/Reviews" element={<Reviews/>}/>
          <Route path="/Support" element={<Support/>}/>
        </Routes>        
    </Router>
  );
}

export default App;
