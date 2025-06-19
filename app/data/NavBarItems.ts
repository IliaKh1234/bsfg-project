// /data/navbarItems.ts
import menuImg from "../images/menu_image.png";
import promotionImg from "../images/promotions_image.png";
import vipClubImg from "../images/vip_club_image.png";
import tournamentImg from "../images/tournaments_image.png";
import slotsImg from "../images/slots_image.png";
import blackjackImg from "../images/blackjack_image.png";
import rouletteImg from "../images/roulette_image.png";
import baccaratImg from "../images/sidebar_baccarat_image.png";
import languageImg from "../images/language_image.png";
import supportImg from "../images/support_image.png";
import svgRepoIconCarrierImg from "../images/SVGRepo_iconCarrier.png";
import recentImg from "../images/recent_image.png";
import favoritesImg from "../images/favorites_image.png";
import videoPokerImg from "../images/video_poker.png";
import diceImg from "../images/dice_image.png";
import crashImg from "../images/crash_image.png";
import liveDealersImg from "../images/live_dealers_image.png";
import fruitsImg from "../images/Frame.png";
import books from "../images/Frame (1).png";
import bonus from "../images/game_row_header_image.png";

export const navGroups = [
  {
    items: [promotionImg, vipClubImg, tournamentImg],
    names: ["Promotions", "VIP Club", "Tournaments"],
  },
  {
    items: [
      slotsImg,
      blackjackImg,
      rouletteImg,
      baccaratImg,
      liveDealersImg,
      crashImg,
      diceImg,
      videoPokerImg,
      fruitsImg,
      books,
      bonus,
    ],
    names: [
      "Slots",
      "Blackjack",
      "Roulette",
      "Live",
      "Baccarat",
      "Crash",
      "Dice",
      "Video Poker",
      "Fruits",
      "Books",
      "Bonus Buy",
    ],
  },
  {
    items: [favoritesImg, recentImg],
    names: ["Favorites", "Recent"],
  },
  {
    items: [svgRepoIconCarrierImg, supportImg, languageImg],
    names: ["Collections", "Support", "English"],
  },
];

export const menuIcon = menuImg;
