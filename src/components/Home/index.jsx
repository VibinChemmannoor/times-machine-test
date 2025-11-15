import React, { useEffect, useState } from "react";
import ImageSlider from "../ImageSlider";
import CountryCard from "../CountryCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountyData } from "../../store/countySlice";

const sliderImages = [
  "https://images.unsplash.com/photo-1502920917128-1aa500764b84?w=1200",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200",
];

export default function CountryListPage() {
  const [activeRegion, setActiveRegion] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const dispatch = useDispatch();
  const {list , loading , error} = useSelector((state) => state.country);


    useEffect(()=>{
    dispatch(fetchCountyData())
    },[dispatch])
    
    const regions = list.reduce((acc, curr)=>{
        acc.push(curr.region)
        return [...new Set(acc)];
    },[])
    
  const allRegions = ["All", ...regions];

  const filtered =
    activeRegion === "All"
      ? list
      : list.filter((c) => c.region === activeRegion);

  const handleLoadMore = () => setVisibleCount((p) => p + 6);

  if(loading) return <p className="text-center py-10">Loading countries...</p>
  if(error) return <p className="text-center py-10">{error}</p>

  return (
    <div className="w-full min-h-screen px-4 md:px-20 py-10 bg-gray-50">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.slice(0, visibleCount).map((c) => (
            <React.Fragment key={c.name}>
                <CountryCard country={c}/>
            </React.Fragment>
        ))}
      </div>

      {visibleCount < filtered.length && (
        <div className="flex justify-center mt-10">
          <button className="px-6 py-2 bg-black text-white text-sm rounded" onClick={handleLoadMore}>Load more</button>
        </div>
      )}
      <div className="flex justify-center space-x-4 mt-20">
        <button className="border border-gray-400 p-2 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100">f</button>
        <button className="border border-gray-400 p-2 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100">g</button>
        <button className="border border-gray-400 p-2 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100">in</button>
      </div>
      <div className="flex justify-center space-x-4 mt-10">
        <p>Example@email.com</p>
      </div>
       <div className="flex justify-center space-x-4 mt-2">
        <p>{`Copyright © 2020 Name. All rights reserved.`}</p>
      </div>
    </div>
  );
}