"use client";
import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import Select from "react-select";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";

import Dice from "../images/sidebar_dice.png";
import Icon from "../images/icon.png";
import secondIcon from "../images/ts.png";
import { navGroups } from "../data/NavBarItems";
import flat from "../images/Flat.png";
import { Game } from "../types/game";

const options = [
  { value: "Collections", label: "Collections", icon: Icon.src },
  { value: "All Collections", label: "All Collections", icon: Dice.src },
  { value: "Featured", label: "Featured", icon: Dice.src },
  { value: "Popular", label: "Popular", icon: Dice.src },
  { value: "Bonus Buy", label: "Bonus Buy", icon: Dice.src },
  { value: "Fruits", label: "Fruits", icon: Dice.src },
];

const secondOptions = [
  { value: "All Providers", label: "All Providers", icon: secondIcon.src },
  { value: "Providers", label: "Providers", icon: Dice.src },
  { value: "BGaming", label: "BGaming", icon: Dice.src },
  { value: "Pragmatic Play", label: "Pragmatic Play", icon: Dice.src },
  { value: "Big Time Gaming", label: "Big Time Gaming", icon: Dice.src },
  { value: "GameBeat", label: "GameBeat", icon: Dice.src },
];

const customSingleValue = ({ data }: any) => (
  <div className="flex items-center gap-2">
    <Image
      src={data.icon}
      alt={data.label}
      width={20}
      height={20}
      className="inline-block"
      unoptimized
    />
    <span>{data.label}</span>
  </div>
);

const customOption = (props: any) => {
  const { data, innerRef, innerProps } = props;
  return (
    <div
      ref={innerRef}
      {...innerProps}
      className="flex items-center gap-2 px-4 py-2 hover:bg-[#273344] cursor-pointer"
    >
      <Image
        src={data.icon}
        alt={data.label}
        width={20}
        height={20}
        className="inline-block"
        unoptimized
      />
      <span className="text-white">{data.label}</span>
    </div>
  );
};
interface GameTypesProps {
  initialGames: Game[];
}

const GameTypes: React.FC<GameTypesProps> = ({ initialGames }) => {
  const [hasMounted, setHasMounted] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const [games, setGames] = useState<Game[]>(initialGames);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("");
  const [selectedCategoryOption, setSelectedCategoryOption] = useState(
    options[0]
  );
  const [selectedProviderOption, setSelectedProviderOption] = useState(
    secondOptions[0]
  );

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const querySearch = searchParams.get("search") || "";
    const queryCategory = searchParams.get("category") || "";
    const queryProvider = searchParams.get("provider") || "";

    setSearch(querySearch);
    setActiveCategory(queryCategory);

    const categoryOption = options.find(
      (opt) => opt.value.toLowerCase() === queryCategory.toLowerCase()
    );
    setSelectedCategoryOption(categoryOption || options[0]);

    const providerOption = secondOptions.find(
      (opt) => opt.value.toLowerCase() === queryProvider.toLowerCase()
    );
    setSelectedProviderOption(providerOption || secondOptions[0]);
  }, [searchParams]);

  useEffect(() => {
    const fetchGames = async () => {
      const searchParam =
        search.length >= 3 ? `&search=${encodeURIComponent(search)}` : "";
      const categoryParam = activeCategory
        ? `&category=${encodeURIComponent(activeCategory)}`
        : "";
      const providerParam =
        selectedProviderOption?.value !== "All Providers"
          ? `&provider=${encodeURIComponent(selectedProviderOption.value)}`
          : "";

      const apiUrl = `https://api.remailer.eu/games/list.php?${searchParam}${categoryParam}${providerParam}`;

      try {
        const res = await fetch(apiUrl);
        const json = await res.json();
        setGames(json.data || []);
      } catch {
        setGames([]);
      }
    };

    fetchGames();
  }, [search, activeCategory, selectedProviderOption]);

  const updateURL = ({
    search,
    category,
    provider,
  }: {
    search?: string;
    category?: string;
    provider?: string;
  }) => {
    const params = new URLSearchParams(searchParams.toString());

    if (search !== undefined)
      search ? params.set("search", search) : params.delete("search");
    if (category !== undefined)
      category ? params.set("category", category) : params.delete("category");
    if (provider !== undefined)
      provider ? params.set("provider", provider) : params.delete("provider");

    router.push("?" + params.toString());
  };

  const allItems = navGroups.flatMap((group) =>
    group.items.map((img, idx) => ({ img, label: group.names[idx] }))
  );

  const selectedLabels = [
    "Slots",
    "Blackjack",
    "Roulette",
    "Live",
    "Baccarat",
    "Dice",
    "Crash",
    "Video Poker",
    "Fruits",
    "Books",
    "Bonus Buy",
  ];

  const categoriesToShow = [
    { key: "featured-games", label: "Featured Games" },
    { key: "new-releases", label: "New Releases" },
    { key: "hot-games", label: "Hot Games" },
    { key: "bonus-buy", label: "Bonus Buy" },
    { key: "live-games", label: "Live Games" },
  ];

  if (!hasMounted) return null;

  return (
    <>
      <div className="flex flex-col items-center mt-5 space-y-4 w-full">
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-[66%] mx-auto">
          <div className="flex items-center bg-[#1b2636] rounded-md px-3 py-2 border border-[#273344] flex-1">
            <BiSearchAlt className="text-[#B5BCD7] text-xl mr-2" />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => {
                const val = e.target.value;
                setSearch(val);
                if (val.length >= 3 || val.length === 0) {
                  updateURL({ search: val });
                }
              }}
              className="bg-transparent outline-none text-[#B5BCD7] placeholder-[#7ca2c8] w-full h-[60px]"
            />
          </div>

          <div className="hidden lg:block w-[200px]">
            <Select
              options={options}
              value={selectedCategoryOption}
              onChange={(option) => {
                if (option) {
                  setSelectedCategoryOption(option);
                  setActiveCategory(option.value);
                  updateURL({ category: option.value });
                }
              }}
              isSearchable={false}
              components={{
                SingleValue: customSingleValue,
                Option: customOption,
              }}
              styles={{
                control: (base) => ({
                  ...base,
                  backgroundColor: "#1b2636",
                  borderColor: "#273344",
                  color: "#fff",
                  boxShadow: "none",
                }),
                menu: (base) => ({ ...base, backgroundColor: "#1b2636" }),
                menuList: (base) => ({ ...base, backgroundColor: "#1b2636" }),
                option: (base, state) => ({
                  ...base,
                  backgroundColor: state.isFocused ? "#273344" : "#1b2636",
                  color: "white",
                }),
              }}
            />
          </div>

          <div className="hidden lg:block w-[200px]">
            <Select
              options={secondOptions}
              value={selectedProviderOption}
              onChange={(option) => {
                if (option) {
                  setSelectedProviderOption(option);
                  updateURL({ provider: option.value });
                }
              }}
              isSearchable={false}
              components={{
                SingleValue: customSingleValue,
                Option: customOption,
              }}
              styles={{
                control: (base) => ({
                  ...base,
                  backgroundColor: "#1b2636",
                  borderColor: "#273344",
                  color: "#fff",
                  boxShadow: "none",
                }),
                menu: (base) => ({ ...base, backgroundColor: "#1b2636" }),
                menuList: (base) => ({ ...base, backgroundColor: "#1b2636" }),
                option: (base, state) => ({
                  ...base,
                  backgroundColor: state.isFocused ? "#273344" : "#1b2636",
                  color: "white",
                }),
              }}
            />
          </div>
        </div>

        <div className="w-[700px] overflow-x-auto mt-8 lg:w-full">
          <div className="flex gap-4 px-4 py-2 items-center sm:justify-center sm:flex-wrap">
            {["Lobby", ...selectedLabels].map((label) => (
              <div
                key={label}
                onClick={() => {
                  if (label === "Lobby") {
                    setActiveCategory("");
                    setSearch("");
                    updateURL({ category: "", search: "" });
                  } else {
                    setActiveCategory(label);
                    updateURL({ category: label });
                  }
                }}
                className={`flex items-center cursor-pointer px-[15px] py-[10px] gap-1 ${
                  activeCategory === label
                    ? "bg-[#0F70DC] text-white"
                    : "bg-[#223444] text-[#B5BCD7]"
                } hover:text-white min-w-fit rounded`}
              >
                <Image
                  src={
                    label === "Lobby"
                      ? flat.src
                      : allItems.find((i) => i.label === label)?.img.src || ""
                  }
                  alt={label}
                  width={15}
                  height={15}
                  className="inline-block"
                  unoptimized
                />
                <span className="text-xs whitespace-nowrap">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-8 max-w-[67%] m-auto">
        {categoriesToShow.map(({ key, label }) => {
          const gamesInCategory = games?.filter((game) =>
            game.categories.includes(key)
          );
          if (!gamesInCategory?.length) return null;

          return (
            <div key={key}>
              <h1 className="text-2xl font-bold mb-4 text-white">{label}</h1>
              <div className="flex flex-wrap gap-4">
                {gamesInCategory.map((game) => (
                  <div
                    key={game.id}
                    className="w-40 relative group cursor-pointer"
                  >
                    <Image
                      src={game.image}
                      alt={game.name}
                      width={160}
                      height={90}
                      className="rounded"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-80 flex flex-col items-center justify-center rounded transition-opacity duration-300 px-2">
                      <p className="text-white text-center font-semibold">
                        {game.name}
                      </p>
                      <p className="text-gray-300 text-sm mt-1">
                        {game.provider}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GameTypes;
