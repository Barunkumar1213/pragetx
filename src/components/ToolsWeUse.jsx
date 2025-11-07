import React from "react";

export default function ToolsWeUse() {
  return (
    <section className="container-max py-24">

      {/* Heading */}
      <h2 className="text-center text-[28px] md:text-[34px] font-semibold text-slate-900">
        Here are the <span className="text-sky-600 font-bold underline decoration-sky-600/40 underline-offset-4">Tools</span> & Software We Use
      </h2>

      {/* Center icons grid */}
      <div className="mt-14 flex justify-center">

        <div className="grid grid-cols-5 gap-6">

          {/* Empty faded blocks */}
          <div className="opacity-20 w-[68px] h-[68px] bg-slate-200 rounded-2xl"></div>
          <div className="opacity-20 w-[68px] h-[68px] bg-slate-200 rounded-2xl"></div>
          <div className="w-[68px] h-[68px] bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center">
            <img src="/assets/slack.png" className="w-20 h-20" />
          </div>
          <div className="opacity-20 w-[68px] h-[68px] bg-slate-200 rounded-2xl"></div>
          <div className="opacity-20 w-[68px] h-[68px] bg-slate-200 rounded-2xl"></div>

          {/* Row 2 */}
          <div className="opacity-20 w-[68px] h-[68px] bg-slate-200 rounded-2xl"></div>
          <div className="w-[68px] h-[68px] bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center">
            <img src="/assets/gmail.png" className="w-20 h-20" />
          </div>
          <div className="w-[68px] h-[68px] bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center">
            <img src="/assets/hubspot.png" className="w-20 h-20" />
          </div>
          <div className="w-[68px] h-[68px] bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center">
            <img src="/assets/gmail.png" className="w-20 h-20" />
          </div>
          <div className="opacity-20 w-[68px] h-[68px] bg-slate-200 rounded-2xl"></div>

          {/* Row 3 */}
          <div className="opacity-20 w-[68px] h-[68px] bg-slate-200 rounded-2xl"></div>
          <div className="opacity-20 w-[68px] h-[68px] bg-slate-200 rounded-2xl"></div>
          <div className="w-[68px] h-[68px] bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center">
            <img src="/assets/salesforce.png" className="w-20 h-20" />
          </div>
          <div className="w-[68px] h-[68px] bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center">
            <img src="/assets/salesforce.png" className="w-20 h-20" />
          </div>
          <div className="opacity-20 w-[68px] h-[68px] bg-slate-200 rounded-2xl"></div>

        </div>

      </div>

    </section>
  );
}
