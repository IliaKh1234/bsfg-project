import { Game } from "../types/game";

export const fetchGames = async (): Promise<Game[]> => {
  try {
    const res = await fetch("https://api.remailer.eu/games/list.php");
    const json = await res.json();
    return json.data || [];
  } catch (err) {
    console.error("Failed to fetch games:", err);
    return [];
  }
};
