'use client'

import { useState, useEffect } from 'react'

export default function Footer() {
  const [isHoursExpanded, setIsHoursExpanded] = useState(false)
  const [todayHours, setTodayHours] = useState(null)

  useEffect(() => {
    // Set default business hours
    const businessHours = {
      0: { day: 'Sunday', hours: '11:00 AM - 8:00 PM', open: true },
      1: { day: 'Monday', hours: 'Closed', open: false },
      2: { day: 'Tuesday', hours: '11:00 AM - 8:00 PM', open: true },
      3: { day: 'Wednesday', hours: '11:00 AM - 8:00 PM', open: true },
      4: { day: 'Thursday', hours: '11:00 AM - 8:00 PM', open: true },
      5: { day: 'Friday', hours: '11:00 AM - 9:00 PM', open: true },
      6: { day: 'Saturday', hours: '11:00 AM - 9:00 PM', open: true }
    }

    const today = new Date()
    const todayDay = today.getDay()
    const todayInfo = businessHours[todayDay]
    
    setTodayHours(todayInfo)
  }, [])

  const toggleHours = () => {
    setIsHoursExpanded(!isHoursExpanded)
  }

  const businessHours = {
    0: { day: 'Sunday', hours: '11:00 AM - 8:00 PM', open: true },
    1: { day: 'Monday', hours: 'Closed', open: false },
    2: { day: 'Tuesday', hours: '11:00 AM - 8:00 PM', open: true },
    3: { day: 'Wednesday', hours: '11:00 AM - 8:00 PM', open: true },
    4: { day: 'Thursday', hours: '11:00 AM - 8:00 PM', open: true },
    5: { day: 'Friday', hours: '11:00 AM - 9:00 PM', open: true },
    6: { day: 'Saturday', hours: '11:00 AM - 9:00 PM', open: true }
  }

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <a href="/" className="inline-block hover:opacity-90 transition-opacity duration-300 mb-4">
              <img src="/Logo/TA_LOGO_Final_white.png" alt="That's Amore Logo" className="h-16 w-auto" />
            </a>
            <p className="text-gray-300">Serving authentic pizza in Metairie since 2012</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="https://thatsamorepizzaonline.com" className="text-gray-300 hover:text-accent transition-colors duration-300">Main Website</a></li>
              <li><a href="https://thatsamorepizzaonline.com/menu" className="text-gray-300 hover:text-accent transition-colors duration-300">Menu</a></li>
              <li><a href="https://thatsamorepizzaonline.com/catering" className="text-gray-300 hover:text-accent transition-colors duration-300">Catering</a></li>
              <li><a href="https://thatsamorepizzaonline.com/franchise" className="text-gray-300 hover:text-accent transition-colors duration-300">Franchise</a></li>
              <li><a href="https://thatsamorepizzaonline.com/contact" className="text-gray-300 hover:text-accent transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
            
            {/* Today's Hours Section */}
            <div className="mb-4 p-3 bg-primary/20 rounded-lg border border-primary/30">
              <h5 className="text-sm font-semibold text-accent mb-2">Today's Hours</h5>
              <div className="text-sm text-white font-medium">
                {todayHours && (
                  <>
                    <div className={todayHours.open ? 'text-green-400' : 'text-red-400'}>
                      {todayHours.day}: {todayHours.hours}
                    </div>
                    <div className="text-xs text-gray-300 mt-1">
                      {todayHours.open ? 'We\'re open today!' : 'We\'re closed today'}
                    </div>
                  </>
                )}
              </div>
            </div>
            
            {/* Full Week Schedule Dropdown */}
            <div className="border-t border-gray-600 pt-3">
              <button 
                onClick={toggleHours}
                className="w-full text-left text-sm text-gray-300 hover:text-accent transition-colors duration-300 flex items-center justify-between"
              >
                <span>View Full Week Schedule</span>
                <svg className={`w-4 h-4 transform transition-transform duration-300 ${isHoursExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              <div className={`mt-3 space-y-1 text-sm text-gray-300 ${isHoursExpanded ? '' : 'hidden'}`}>
                {days.map((day, index) => {
                  const dayIndex = (index + 1) % 7 // Convert to 0-6 index (Sunday = 0)
                  const dayData = businessHours[dayIndex] || { day, hours: 'Closed', open: false }
                  return (
                    <div key={day} className="flex justify-between">
                      <span>{day}:</span>
                      <span className={dayData.open ? 'text-white' : 'text-red-400'}>{dayData.hours}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-300">4441 West Metairie Ave</p>
            <p className="text-gray-300">Metairie, LA</p>
            <p className="text-gray-300">(504) 463-5384</p>
            <p className="text-gray-300">kennedyda24@att.net</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8">
          <p className="text-gray-400">© 2024 That's Amore Pizzeria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
