import Header from "./components/Header";
import Hero from "./components/Hero";
import GameTypes from "./components/GameTypes";
import { fetchGames } from "./types/fetchGames";
import { Suspense } from "react";

export default async function Home() {
  const games = await fetchGames();
  return (
    <>
      <Suspense fallback={<div className="text-white">Loading</div>}>
        <Header />
        <Hero />
        <GameTypes initialGames={games} />
      </Suspense>
    </>
  );
}
