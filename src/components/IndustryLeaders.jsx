import React from "react";

export default function IndustryLeaders() {
  return (
    <section className="container-max py-24">

      {/* Heading */}
      <h2 className="text-center text-[34px] font-bold text-slate-900">
        Trusted by Industry <span className="text-sky-600">Leaders</span>
      </h2>
      <p className="text-center text-slate-600 mt-2">
        See what our clients say about scaling smarter with AI agents.
      </p>

      {/* TOP 3 IMAGE CARDS */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* card 1 */}
        <div className="rounded-3xl bg-white border border-slate-200/60 shadow-sm overflow-hidden">
          <img src="/assets/p1.png" className="w-full h-[210px] object-cover" />
          <div className="p-4 flex items-center gap-3">
            <img src="/assets/p1.png" className="w-9 h-9 rounded-full object-cover" />
            <div>
              <div className="font-semibold text-sm">Priyanka Sharma</div>
              <div className="text-xs text-slate-500">CTO, ShopNow</div>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className="rounded-3xl bg-white border border-slate-200/60 shadow-sm overflow-hidden">
          <img src="/assets/p2.png" className="w-full h-[210px] object-cover" />
          <div className="p-4 flex items-center gap-3">
            <img src="/assets/p2.png" className="w-9 h-9 rounded-full object-cover" />
            <div>
              <div className="font-semibold text-sm">Alex Sharma</div>
              <div className="text-xs text-slate-500">CTO, ShopNow</div>
            </div>
          </div>
        </div>

        {/* card 3 */}
        <div className="rounded-3xl bg-white border border-slate-200/60 shadow-sm overflow-hidden">
          <img src="/assets/p3.png" className="w-full h-[210px] object-cover" />
          <div className="p-4 flex items-center gap-3">
            <img src="/assets/p3.png" className="w-9 h-9 rounded-full object-cover" />
            <div>
              <div className="font-semibold text-sm">Michale Sharma</div>
              <div className="text-xs text-slate-500">CTO, ShopNow</div>
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM 3 QUOTE CARDS */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">

        {Array(3).fill(0).map((_, i) => (
          <div key={i} className="rounded-3xl bg-white border border-slate-200/60 shadow-sm p-6 relative">

            {/* quote icon */}
            <div className="text-blue-500 text-3xl font-bold mb-3">“</div>

            <p className="text-slate-600 text-sm leading-relaxed pr-4">
              PragetX.ai made our processes faster and smarter.
              Their AI solutions helped us cut down manual work by more than half.
              A truly reliable partner for business growth.
            </p>

            {/* profile */}
            <div className="mt-6 flex items-center gap-3">
              <img src="/assets/p1.png" className="w-8 h-8 rounded-full object-cover" />
              <div>
                <div className="text-sm font-semibold text-slate-800">Priyanka Sharma</div>
                <div className="text-xs text-slate-500">CTO, ShopNow</div>
              </div>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}
