import { useEffect,useState } from "react";
import axios from "axios";
import "./App.css";
import type {Game} from "./types/Game"
import GameCard from "./components/GameCard";

const API_URL="https://api.sampleapis.com/switch/games";

function App() {
    const [games,setGames] =useState<Game[]>([]);
    const [onlyracing, setRacing] = useState(false);
    const [loading, setLoading] = useState(true);
    const[error, setError]= useState<string | null>(null);
    const visibleGames = games.filter((game) => {
         if ( onlyracing && !game.genre?.includes("Racing")) return false;

         return true;
       });

    useEffect(()=>{
        async function loadGame() {
            try {
                const response = await axios.get<Game[]>(API_URL);
                setGames(response.data.slice(0,15));
            } catch (error) {
                console.log(error);
                setError("No se pudo cargar");
            }finally{
                setLoading(false);
            }
            
        }
        loadGame();
    },[]);
    return(
        <main className="app">
            <h1>Gameshelf</h1>
            <br />
            <p>Videojuegos recibidos desde la api</p>
            {loading && <p role="alert">{error}</p>}
            <button onClick={() => setRacing(!onlyracing)}>
                {onlyracing ? "Mostrar todos" : "Solo el genero racing"}
            </button>
            {!loading && !error && games.length > 0 &&(
                
                <section className="catalog">{
                    visibleGames.map((game)=>(<GameCard key={game.id} game={game}/>

                    ))}</section>
            )}
        </main>
    )
}
export default App;