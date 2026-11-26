import {Link} from "react-router-dom"

export default function Navbar ()
{
    return (
        <nav>
            <Link to="/">Inicio</Link>
            <Link to="/filmes">Filmes</Link>
            <Link to="/favoritos">Favoritos</Link>
            <Link to="/sobre">Sobre mim</Link>
        </nav>
    )
}
