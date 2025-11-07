import React from "react";

export default function TheRightTime() {
  return (
    <section className="container-max py-20">

      {/* Badge */}
      <div className="flex justify-center mb-3">
        <div className="badge">Always On</div>
      </div>

      {/* Title */}
      <h2 className="text-center text-[32px] md:text-[38px] font-bold">
        The Right <span className="text-sky-600">Time</span> is Now
      </h2>

      {/* 4 Cards Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* CARD 1 - BIG */}
        <div className="rounded-2xl bg-white/90 backdrop-blur-lg border border-slate-200/50 shadow-sm p-5">
          <h3 className="text-[18px] font-semibold text-[#6C63FF]">
            Drowning in Repetition
          </h3>

          <p className="text-sm text-slate-600 mb-3">
            Let automation handle routine tasks for you.
          </p>

          <div className="w-full h-[290px] rounded-2xl overflow-hidden bg-slate-50">
            <img src="/assets/drown.png" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* CARD 2 - BIG */}
        <div className="rounded-2xl bg-white/90 backdrop-blur-lg border border-slate-200/50 shadow-sm p-5">
          <h3 className="text-[18px] font-semibold text-[#6C63FF]">
            When Accuracy Matters
          </h3>

          <p className="text-sm text-slate-600 mb-3">
            AI ensures error-free, instant execution.
          </p>

          <div className="w-full h-[290px] rounded-2xl overflow-hidden bg-slate-50">
            <img src="/assets/accuracy.png" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* CARD 3 - SMALL */}
        <div className="rounded-2xl bg-white/90 backdrop-blur-lg border border-slate-200/50 shadow-sm p-4">
          <h3 className="text-[18px] font-semibold text-[#6C63FF]">
            Scaling Too Fast
          </h3>

          <p className="text-sm text-slate-600 mb-3">
            Grow without overwhelming your team.
          </p>

          <div className="w-full h-[230px] rounded-2xl overflow-hidden bg-slate-50">
            <img src="/assets/scaling.png" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* CARD 4 - SMALL */}
        <div className="rounded-2xl bg-white/90 backdrop-blur-lg border border-slate-200/50 shadow-sm p-4">
          <h3 className="text-[18px] font-semibold text-[#6C63FF]">
            Always On
          </h3>

          <p className="text-sm text-slate-600 mb-3">
            Automation never sleeps, unlike humans.
          </p>

          <div className="w-full h-[230px] rounded-2xl overflow-hidden bg-slate-50">
            <img src="/assets/always.png" className="w-full h-full object-cover" />
          </div>
        </div>

      </div>
      
    </section>
  );
}
