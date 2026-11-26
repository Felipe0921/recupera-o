export default function CardFilme ({poster, titulo, ano, genero, sinopse })
{
    return (
        <div>
            <img src={poster} alt={titulo}></img>
            <h2>{titulo}</h2>
            <p>{ano}</p>
            <p>{genero}</p>
            <p>{sinopse}</p>
        </div>
    )
}