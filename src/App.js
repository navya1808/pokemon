
import Home from './Components/Home';
import {Routes, Route } from "react-router-dom";
import ParticularPokemon from './Components/ParticularPokemon';
import NoPage from './Components/NoPage';
import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/:search" element={<ParticularPokemon/>} />
        <Route path="/error" element={<NoPage />} />
        <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

export default App;
