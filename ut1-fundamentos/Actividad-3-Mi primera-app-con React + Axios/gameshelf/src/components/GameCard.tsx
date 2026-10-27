import type { Game } from "../types/Game";


type GameCardprop={
    game: Game;
}

export default function GameCard({game}: GameCardprop) {
    return (
        <article className="card">
            <h2>{game.name}</h2>
            <p>Género: {game.genre?.join(",") ?? "Sin genero disponible"}</p>
            <p>Lanzamiento en Europa: {game.realeasesDates?.Europe ?? "Sin datos disponible"}</p>
        </article>
    );
}
