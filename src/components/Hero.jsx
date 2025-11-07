import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-dot bg-dot"></div>
      <div className="relative container-max pt-10 pb-20 text-center">
        <div className="badge mx-auto">Trusted by businesses in finance, healthcare, logistics, retail, and beyond.</div>

        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold">
          <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
            Automate,<br className="sm:hidden"/> Accelerate &amp; Scale
          </span>
        </h1>

        <p className="mt-5 max-w-2xl mx-auto text-slate-600">
          Unlock the future of work with AI Agents, Workflow Automation, and Smart Data Architecture.
          From startups to enterprises, we help businesses cut costs, save time, and grow faster without the tech headaches.
        </p>

        <div className="mt-7 flex justify-center gap-4">
          <a className="btn-primary" href="#get-started">Get Started</a>
          <a className="btn-ghost" href="#how-it-works">See How It Works</a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mt-14"
        >
          <img src="/assets/workflow-hero.png" alt="Workflow connections" className="mx-auto max-w-full h-auto" />
        </motion.div>
      </div>
    </section>
  )
}
