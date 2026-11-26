import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom"

import Catalogo from "./pages/Catalogo"
import Favoritos from "./pages/Favoritos"
import Erro from "./pages/Erro"
import Sobre from "./pages/SobreMim"

export default function App()
{
  return (
  <BrowserRouter>
    <nav>
      <Link to= "/Catalogo">Catalogo</Link>
      <Link to= "/Favoritos">Filmes Favoritos</Link>
      <Link to= "/Sobre">Sobre mim</Link>  
    </nav>

    <Routes>
      <Route path="/" element={<Navigate to="/Catalogo" />} />
      <Route path="/Catalogo" element={<Catalogo/>} />
      <Route path="/Sobre" element={<Sobre />} />
      <Route path="/Favoritos" element={<Favoritos/>} />
      <Route path="*" element={<Erro />} />
    </Routes>
  </BrowserRouter>
  )
} 