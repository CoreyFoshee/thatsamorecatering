'use client'

import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CateringServices from './components/CateringServices'
import CateringMenu from './components/CateringMenu'
import CateringForm from './components/CateringForm'
import CallToAction from './components/CallToAction'
import FloatingContact from './components/FloatingContact'
import Footer from './components/Footer'

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventDate: '',
    eventTime: '',
    guestCount: '',
    eventType: 'Corporate Event',
    specialRequests: ''
  })

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can add email functionality or API call here
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <CateringServices />
        <CateringMenu />
        <CateringForm 
          formData={formData}
          onInputChange={handleInputChange}
          onSubmit={handleFormSubmit}
        />
        <CallToAction />
        <FloatingContact />
      </main>
      <Footer />
    </>
  )
}
