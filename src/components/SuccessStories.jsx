import React from "react";

export default function SuccessStories() {
  return (
    <section className="w-full py-24 bg-gradient-to-r from-[#F8FBFF] via-[#F7F8FF] to-[#F3FAFF]">

      <div className="container-max">

        {/* Title row */}
        <div className="flex items-center justify-between">
          <h2 className="text-[32px] md:text-[38px] font-bold">
            <span className="text-sky-600">Success</span> Stories That Matter
          </h2>

          <button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-full text-sm shadow-sm transition">
            Read All Case Study →
          </button>
        </div>

        <p className="mt-3 text-slate-600 max-w-2xl">
          See how companies are cutting costs and boosting efficiency with our AI-powered solutions.
        </p>

        {/* Main content */}
        <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT TEXT AREA */}
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs text-slate-700 bg-blue-50 mb-4">
              Logistics & Supply Chain
            </div>

            <div className="flex items-start gap-3">
              {/* small logo icon */}
              <img src="/assets/logo-sm.png" alt="" className="h-15 w-15 rounded-md" />

              <h3 className="text-[28px] font-bold leading-tight">
                SwiftLogix Smart <br />
                Logistics <span className="text-sky-600">Automation</span>
              </h3>
            </div>

            <p className="mt-4 text-slate-600 text-sm max-w-md">
              SwiftLogix partnered with us to automate shipment tracking and customer support.
              By deploying AI agents, they reduced manual data entry by 75%, cut response times
              from hours to seconds, and improved overall delivery efficiency.
            </p>

            {/* tags */}
            <div className="flex flex-wrap gap-2 mt-5">
              <span className="px-3 py-1 text-xs bg-slate-100 rounded-full">AI Agents</span>
              <span className="px-3 py-1 text-xs bg-slate-100 rounded-full">Predictive Analytics</span>
              <span className="px-3 py-1 text-xs bg-slate-100 rounded-full">NLP Chatbot</span>
            </div>

            <button className="text-sky-600 font-medium mt-5 flex items-center gap-1 text-sm">
              Read Case Study →
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src="/assets/swiftlogix.png"
              className="rounded-3xl w-full h-[440px] object-cover shadow-md"
              alt="Case Study"
            />

            {/* country flag */}
            {/* <div className="absolute top-4 left-4 bg-white rounded-full shadow px-3 py-1 text-sm">
              🇮🇳
            </div> */}
          </div>
        </div>

        {/* arrows */}
        <div className="flex justify-center gap-4 mt-10">
          <button className="w-10 h-10 border border-slate-300 rounded-full flex items-center justify-center hover:bg-slate-50">
            ←
          </button>
          <button className="w-10 h-10 border border-slate-300 rounded-full flex items-center justify-center hover:bg-slate-50">
            →
          </button>
        </div>

      </div>
      
    </section>
  );
}
