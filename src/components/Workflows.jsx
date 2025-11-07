import React from 'react'

const Tab = ({title, active}) => (
  <button className={`px-5 py-3 rounded-full text-sm font-medium ${active ? 'bg-gradient-to-r from-primary to-primary2 text-white shadow' : 'bg-white border border-slate-300 text-slate-700'}`}>
    {title}
  </button>
)

export default function Workflows(){
  return (
    <section id="workflows" className="relative bg-gradient-to-b from-white to-sky-50/40">
      <div className="container-max py-16">

        {/* TOP MAIN TITLE */}
        <h2 className="text-center text-3xl md:text-4xl font-extrabold">
          <span className="text-sky-600">Workflows</span> <span className="text-slate-900">that work for you</span>
        </h2>
        <p className="mt-3 text-center max-w-3xl mx-auto text-slate-600">
          Automate repetitive tasks, empower AI-driven decision-making, and build a secure, scalable digital backbone so your business runs faster.
        </p>

        {/* Tabs */}
        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          <Tab title="Workflow Automation" active />
          <Tab title="AI Agents" />
          <Tab title="Data & System Architecture" />
        </div>

        {/* SECTION 1 — Workflows That Run Themselves
        <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">
          {/* <div>
            <div className="badge mb-3">Smart Automation</div>
            <h3 className="text-2xl font-bold text-slate-900">Workflows That Run Themselves</h3>
            <p className="mt-3 text-slate-600">
              Automation replaces manual, repetitive work with smart, AI-driven workflows that run effortlessly.
            </p>
          </div> */}
          {/* SECTION 1 — Workflows That Run Themselves (FULL IMAGE) */}
{/* FULL WIDTH SECTION */}
<div className="mt-16 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex justify-center">
  <img
    src="/assets/full-workflow.png"
    alt="Workflows That Run Themselves"
    className="w-full"
  />
</div>



          {/* your full image */}
          {/* <div>
            <img src="/assets/full-workflow.png" alt="Workflows Full" className="rounded-xl shadow-md w-full" />
          </div>
        </div>  */}
        <div className="mt-16 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex justify-center">
  <img
    src="/assets/trigger.png"
    alt="Workflows That Run Themselves"
    className="w-full"
  />
</div>
        {/* <div className="mt-10 flex justify-center">
          <img src="/assets/trigger.png" alt="Trigger Automate" className="rounded-xl shadow-md w-full max-w-5xl" />
        </div> */}

      </div>
    </section>
  )
}
