import React from "react";

export default function AiIndustry() {
  return (
    <section className="container-max py-20">

      {/* TOP NAV ICONS */}
      <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 mb-8">

        <button className="hover:text-slate-800 flex items-center gap-2">
          <span>🏭</span> Manufacturing & Innovation
        </button>

        <button className="hover:text-slate-800 flex items-center gap-2">
          <span>🏛️</span> Government & Public Sector
        </button>

        <button className="text-sky-600 font-semibold flex items-center gap-2">
          <span>🤖</span> Artificial Intelligence
        </button>

        <button className="hover:text-slate-800 flex items-center gap-2">
          <span>🎓</span> Education
        </button>

        <button className="hover:text-slate-800 flex items-center gap-2">
          <span>📺</span> Media & Entertainment
        </button>

      </div>

      {/* MAIN MEDIA BLOCK */}
      <div className="rounded-[28px] overflow-hidden bg-slate-100 relative shadow-lg">
        
        {/* background image */}
        <img 
          src="/assets/ai-robots.png"
          className="w-full h-[380px] object-cover"
          alt="AI Industry"
        />

        {/* overlay top-left text */}
        <div className="absolute top-4 left-6 text-white font-medium text-sm md:text-base">
          AI that learns, adapts, and powers innovation across industries.
        </div>

        {/* Read More button */}
        <button className="absolute top-4 right-6 bg-white text-sky-600 font-medium px-4 py-1.5 rounded-full shadow hover:bg-slate-100 transition text-sm">
          Read More →
        </button>

        {/* Play button (center) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow cursor-pointer hover:scale-105 transition">
            <svg width="26" height="26" fill="black" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

      </div>

    </section>
  );
}
