import "./App.css";
import GameCard from "./components/GameCard";
import { useState } from "react";
type Game = {
    id: number;
    title: string;
    genre: string;
    price: number;
    available: boolean;
};

const games: Game[] = [
    {
        id: 1,
        title: "Hollow Knight",
        genre: "Aventura",
        price: 14.99,
        available: true,
    },
    {
        id: 2,
        title: "Celeste",
        genre: "Plataformas",
        price: 19.99,
        available: true,
    },
    {
        id: 3,
        title: "Stardew Valley",
        genre: "Simulación",
        price: 13.99,
        available: false,
    },
    {
        id: 4,
        title: "ARK: Survival Ascended",
        genre: "Supervivencia",
        price: 29.99,
        available: true,
    },
    {
        id: 5,
        title: "Forza Horizon 5",
        genre: "Carreras",
        price: 59.99,
        available: true,
    },
    {
        id: 6,
        title: "League of Legends",
        genre: "MOBA",
        price: 0,
        available: true,
    },
    {
        id: 7,
        title: "Tekken 8",
        genre: "Lucha",
        price: 69.99,
        available: false,
    },
    {
        id: 8,
        title: "Minecraft",
        genre: "Sandbox",
        price: 26.95,
        available: true,
    },
    {
        id: 9,
        title: "Elden Ring",
        genre: "Acción RPG",
        price: 59.99,
        available: true,
    },
    {
        id: 10,
        title: "Terraria",
        genre: "Sandbox",
        price: 9.99,
        available: false,
    },
];

function App() {
    const [onlyAvailable, setOnlyAvailable] = useState(false);
    const [onlyUnder15, setOnlyUnder15] = useState(false);
    const visibleGames = games.filter((game) => {
        if (onlyAvailable && !game.available) return false;

        if (onlyUnder15 && game.price >= 15) return false;

        return true;
    });

    return (
        <main className="app">
            <h1>GameShelf</h1>
            <p>Mi catálogo de videojuegos</p>
            <button onClick={() => setOnlyAvailable(!onlyAvailable)}>
                {onlyAvailable ? "Mostrar todos" : "Mostrar disponibles"}
            </button>
            <button onClick={() => setOnlyUnder15(!onlyUnder15)}>
                {onlyUnder15 ? "Mostrar todos" : "Precio debajo de 15"}
            </button>
            <section className="catalog">
                {visibleGames.map((game) => (
                    <GameCard
                        key={game.id}
                        title={game.title}
                        genre={game.genre}
                        price={game.price}
                        available={game.available}
                    />
                ))}
            </section>
        </main>
    );
}

export default App;
