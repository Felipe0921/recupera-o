import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom"

import Catalogo from "./pages/Catalogo"
import Favoritos from "./pages/Favoritos"
import Inicio from "./pages/Inicio"
import Sobre from "./pages/SobreMim"

export default function app()
{
  <BrowserRouter>
    <nav>
      <Link to= "/Catalogo">Catalogo</Link>
      <Link to= "/Favoritos">Filmes Favoritos</Link>
      <Link to= "/Sobre">Sobre mim</Link>
      
    </nav>
  </BrowserRouter>
} 