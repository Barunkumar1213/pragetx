import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Workflows from './components/Workflows'
import Footer from './components/Footer'
import LessBusyMoreGrowth from './components/LessBusyMoreGrowth'
import TheRightTime from './components/TheRightTime'
import AiPartner from './components/AiPartner'
import AiIndustry from './components/AiIndustry'
import ToolsWeUse from './components/ToolsWeUse'
import SuccessStories from './components/SuccessStories'
import IndustryLeaders from './components/IndustryLeaders'
import ReadyCTA from './components/ReadyCTA'

export default function App(){
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Workflows />
        <LessBusyMoreGrowth />
        <TheRightTime />
        <AiPartner />
        <AiIndustry />
        <ToolsWeUse />
        <SuccessStories />
        <IndustryLeaders />
        <ReadyCTA />
      </main>
      <Footer />
    </div>
  )
}
