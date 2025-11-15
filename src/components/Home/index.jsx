import { useState } from "react";
import { motion } from "framer-motion";
import ImageSlider from "../ImageSlider";

const regions = ["Asia", "Europe", "Africa", "Americas", "Oceania"];

const countries = [
  { name: "India", flag: "https://flagcdn.com/in.svg" },
  { name: "Japan", flag: "https://flagcdn.com/jp.svg" },
  { name: "France", flag: "https://flagcdn.com/fr.svg" },
  { name: "Germany", flag: "https://flagcdn.com/de.svg" },
  { name: "Brazil", flag: "https://flagcdn.com/br.svg" },
  { name: "Australia", flag: "https://flagcdn.com/au.svg" },
];
const sliderImages = [
  "https://images.unsplash.com/photo-1502920917128-1aa500764b84?w=1200",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200",
];

export default function CountryListPage() {
  const [activeRegion, setActiveRegion] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const allRegions = ["All", "Asia", "Europe"];

  const filtered =
    activeRegion === "All"
      ? countries
      : countries.filter((c) => c.region === activeRegion);

  const handleLoadMore = () => setVisibleCount((p) => p + 6);

  return (
    <div className="w-full min-h-screen px-4 md:px-20 py-10 bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-lg font-semibold tracking-wide">Countries</h1>
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          {allRegions.map((r) => (
            <button
              key={r}
              onClick={() => setActiveRegion(r)}
              className={`${
                activeRegion === r ? "font-bold text-gray-900" : "text-gray-500"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
        <div className="md:hidden text-xl cursor-pointer">☰</div>
      </div>

      {/* Title Line */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-px bg-gray-300"></div>
        <h2 className="text-2xl font-semibold tracking-wide">WELCOME</h2>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="md:col-span-2 border rounded-xl h-64 flex items-center justify-center bg-white">
          <ImageSlider images={sliderImages}/>
        </div>
        <div className="border rounded-xl h-64 flex items-center justify-center bg-white">
          <div className="text-gray-400">Image Frame</div>
        </div>
      </div>

      {/* Country List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.slice(0, visibleCount).map((c) => (
          <div
            key={c.name}
            className="border rounded-xl bg-white p-4 flex gap-4 items-center"
          >
            <div className="w-14 h-10 bg-gray-200 rounded"></div>
            <div>
              <p className="text-sm font-medium text-gray-700">{c.name}</p>
              <p className="text-xs text-gray-500">{c.region}</p>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < filtered.length && (
        <div className="flex justify-center mt-10">
          <button className="px-6 py-2 bg-black text-white text-sm rounded">Load more</button>
        </div>
      )}
    </div>
  );
}