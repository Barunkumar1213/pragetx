import React from 'react'




export default function LessBusyMoreGrowth(){

return (
<section className="container-max py-20">
  {/* badge */}
  {/* badge */}
<div className="flex justify-center mb-3">
  <div className="badge">Faster Growth</div>
</div>


  {/* heading */}
  <h2 className="text-center text-[32px] md:text-[38px] font-bold">
    Less Busywork. More <span className="text-sky-600">Growth.</span>
  </h2>

  {/* 2 columns content */}
  <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">
    
    {/* left side list */}
    <div className="space-y-4">
      <div className="flex gap-4 items-center bg-white border border-sky-300/40 rounded-full py-3 px-4 shadow-sm">
        <div className="w-7 h-7 flex items-center justify-center rounded-full border border-sky-400/40">1</div>
        <span className="text-sky-600 font-medium">Reduce repetitive admin tasks by up to 80%.</span>
      </div>

      <div className="flex gap-4 items-center bg-slate-50 border border-slate-200 rounded-full py-3 px-4">
        <div className="w-7 h-7 flex items-center justify-center rounded-full border border-slate-300">2</div>
        <span className="text-slate-500">Average 22% reduction in operating costs.</span>
      </div>

      <div className="flex gap-4 items-center bg-slate-50 border border-slate-200 rounded-full py-3 px-4">
        <div className="w-7 h-7 flex items-center justify-center rounded-full border border-slate-300">3</div>
        <span className="text-slate-500">Teams scale without adding headcount.</span>
      </div>
    </div>

    {/* right side visual */}
    <div className="rounded-2xl bg-slate-200 w-full h-[260px] md:h-[300px]">
      {/* Replace this <div> with image */}
      <img src="/assets/black.png" className="w-full h-full rounded-2xl object-cover" />
    </div>

  </div>
</section>

)
}


