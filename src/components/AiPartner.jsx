import React from "react";

export default function AiPartner() {
  return (
    <section className="container-max py-10">
      <div className="rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/60 shadow-sm p-10 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>
          <div className="badge mb-4">Why PragetX.ai</div>

          <h2 className="text-[32px] md:text-[36px] font-semibold leading-snug">
            An <span className="text-sky-600 font-bold">AI innovation</span> partner <br/>
            trusted by organizations worldwide!
          </h2>

          <p className="mt-4 text-slate-600 max-w-md">
            Join hands with our skilled team to turn bold ideas into practical, scalable AI solutions.
          </p>

          <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium shadow">
            Let’s build the future together with AI →
          </button>
        </div>

        {/* RIGHT SIDE FIXED COLORS */}
<div className="rounded-3xl p-8 bg-gradient-to-br from-[#FBD6E3] via-[#E5DFFC] to-[#CDE4FF] flex flex-col justify-center gap-6">

  <div className="grid grid-cols-2 gap-6">

    <div className="rounded-2xl border border-white/50 bg-white/40 backdrop-blur-md text-center py-6">
      <div className="text-[26px] font-bold text-slate-900">80%</div>
      <div className="text-sm text-slate-600">Tasks Automated</div>
    </div>

    <div className="rounded-2xl border border-white/50 bg-white/40 backdrop-blur-md text-center py-6">
      <div className="text-[26px] font-bold text-slate-900">22%</div>
      <div className="text-sm text-slate-600">Cost Savings</div>
    </div>

    <div className="rounded-2xl border border-white/50 bg-white/40 backdrop-blur-md text-center py-6">
      <div className="text-[26px] font-bold text-slate-900">3x</div>
      <div className="text-sm text-slate-600">Faster Scaling</div>
    </div>

    <div className="rounded-2xl border border-white/50 bg-white/40 backdrop-blur-md text-center py-6">
      <div className="text-[26px] font-bold text-slate-900">500+</div>
      <div className="text-sm text-slate-600">Clients</div>
    </div>

  </div>

</div>

      </div>
    </section>
  );
}
