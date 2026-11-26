import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom"


import Navbar from "./components/Navbar"
import Catalogo from "./pages/Catalogo"
import Favoritos from "./pages/Favoritos"
import Erro from "./pages/Erro"
import Sobre from "./pages/SobreMim"
import Inicio from "./pages/Inicio"

export default function App()
{
  return (
  <BrowserRouter>
    <nav>
      <Link to= "/Catalogo">Catalogo</Link>
      <Link to= "/Favoritos">Filmes Favoritos</Link>
      <Link to= "/Sobre">Sobre mim</Link>  
    </nav>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/Catalogo" element={<Catalogo/>} />
      <Route path="/Sobre" element={<Sobre />} />
      <Route path="/Favoritos" element={<Favoritos/>} />
      <Route path="*" element={<Erro />} />
    </Routes>
  </BrowserRouter>
  )
} 