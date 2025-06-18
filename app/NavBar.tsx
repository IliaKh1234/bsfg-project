'use client'
import React, { useState } from 'react';
import Image from 'next/image';

import menuImg from './images/menu_image.png';
import promotionImg from './images/promotions_image.png';
import vipClubImg from './images/vip_club_image.png'
import tournamentImg from './images/tournaments_image.png'
import slotsImg from './images/slots_image.png'
import blackjackImg from './images/blackjack_image.png'
import rouletteImg from './images/roulette_image.png'
import baccaratImg from './images/sidebar_baccarat_image.png'
import languageImg from './images/language_image.png';
import supportImg from './images/support_image.png';
import svgRepoIconCarrierImg from './images/SVGRepo_iconCarrier.png';
import recentImg from './images/recent_image.png';
import favoritesImg from './images/favorites_image.png';
import videoPokerImg from './images/video_poker.png';
import diceImg from './images/dice_image.png';
import crashImg from './images/crash_image.png';
import liveDealersImg from './images/live_dealers_image.png';

const navGroups = [
  {
    items: [promotionImg, vipClubImg, tournamentImg],
    names: ['Promotions', 'VIP Club', 'Tournaments'],
  },
  {
    items: [slotsImg, blackjackImg, rouletteImg, baccaratImg, liveDealersImg, crashImg, diceImg, videoPokerImg],
    names: ['Slots', 'Blackjack', 'Roulette', 'Baccarat', 'Live Dealer', 'Crash', 'Dice', 'Video Poker'],
  },
  {
    items: [favoritesImg, recentImg],
    names: ['Favorites', 'Recent'],
  },
  {
    items: [svgRepoIconCarrierImg, supportImg, languageImg],
    names: ['Collections', 'Support', 'English'],
  },
];

const NavBar = () => {
  const [showNames, setShowNames] = useState<boolean>(false);

  return (
    <>
      <nav className={`transition-all duration-300 transform ${showNames ? 'w-[240px]' : 'w-[75px]'} bg-[#162231] border- h-screen overflow-y-auto pl-6 overflow-x-hidden hidden md:block`}>
        <Image
          className='cursor-pointer mg-5 ml-[-5] mt-9'
          src={menuImg}
          alt='menu-bar'
          width={35}
          height={35}
          onClick={() => setShowNames(!showNames)}
        />
        {showNames ? (
          <div className="flex flex-col mt-4 gap-3">
            {navGroups.map((group, groupIdx) => (
              <ul key={groupIdx} className="bg-[#1C2E3D] rounded-lg p-2 flex flex-col mr-5 ml-[-5]">
                {group.items.map((img, idx) => (
                  <li className='cursor-pointer flex items-center mb-4' key={idx}>
                    <Image src={img} alt={`nav-item-${groupIdx}-${idx}`} width={22} height={22} />
                    <span
                      className={`ml-2 text-white transition-opacity duration-200 ${showNames ? 'opacity-100 delay-200' : 'opacity-0 delay-0'}`}
                      style={{ width: showNames ? 'auto' : 0, overflow: 'hidden', whiteSpace: 'nowrap' }}
                    >
                      {group.names[idx]}
                    </span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        ) : (
          <ul className="list-none flex flex-col mt-4 ">
            {navGroups.flatMap(group => group.items).map((img, key) => (
              <li className='cursor-pointer flex items-center mb-4' key={key}>
                <Image src={img} alt={`nav-item-${key}`} width={22} height={22} />
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* Mobile Bottom Bar - Horizontal Scrollable */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#162231] flex items-center h-16 md:hidden z-50 overflow-x-auto">
        <div className="flex flex-nowrap w-full">
          {navGroups.flatMap((group, groupIdx) => group.items.map((img, idx) => (
            <div key={`${groupIdx}-${idx}`} className="flex flex-col items-center min-w-[64px] mx-2">
              <Image src={img} alt={`nav-item-mobile-${groupIdx}-${idx}`} width={24} height={24} />
              <span className="text-xs text-white">{navGroups[groupIdx].names[idx]}</span>
            </div>
          )))}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
