import Header from "./components/Header";
import Hero from "./components/Hero";
import GameTypes from "./components/GameTypes";
import { ApiResponse, Game } from "./types/game";

interface HomeProps {
  games: Game[];
}

export const fetchGames = async (): Promise<Game[]> => {
  const res = await fetch("https://api.remailer.eu/games/list.php");
  if (!res.ok) throw new Error("Failed to fetch games");
  const data: ApiResponse<Game> = await res.json();
  return data.data;
};

export default function Home({ games }: HomeProps) {
  return (
    <>
      <Header />
      <Hero />
      <GameTypes initialGames={games} /> {/* ✅ pass SSR games */}
    </>
  );
}
