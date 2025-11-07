import React from "react";

export default function ReadyCTA() {
  return (
    <section className="container-max py-14">

      <div className="rounded-[38px] p-16 text-center relative overflow-hidden 
          bg-gradient-to-r from-[#FF9CA9] via-[#D9B6EB] to-[#73C3FF]">

        {/* dotted pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[size:18px_18px]"></div>

        {/* left sparkle */}
        <div className="absolute left-6 bottom-6 text-white text-5xl select-none">
          ✦
        </div>

        {/* right sparkle */}
        <div className="absolute right-6 top-6 text-white text-5xl select-none">
          ✦
        </div>

        <div className="relative z-10">
          <p className="text-white/100 text-m mb-4">
            Our workflows, powered by AI simple, fast, reliable
          </p>

          <h2 className="text-white text-6xl md:text-[42px] font-bold leading-tight max-w-3xl mx-auto mb-8">
            Ready to Automate Your Business with AI  ?
          </h2>

          <button className="px-8 py-3 rounded-full bg-white text-sky-600 font-semibold shadow hover:bg-slate-50 transition">
            Get Started
          </button>
        </div>

      </div>

    </section>
  );
}
