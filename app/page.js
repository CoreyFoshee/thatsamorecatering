'use client'

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CateringServices from './components/CateringServices'
import CateringMenu from './components/CateringMenu'
import CateringForm from './components/CateringForm'
import CallToAction from './components/CallToAction'
import FloatingContact from './components/FloatingContact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <CateringServices />
        <CateringMenu />
        <CateringForm />
        <CallToAction />
        <FloatingContact />
      </main>
      <Footer />
    </>
  )
}
