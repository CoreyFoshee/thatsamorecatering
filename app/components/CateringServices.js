export default function CateringServices() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-dark mb-4">
            Our <span className="text-primary">Catering Services</span>
          </h2>
          <p className="text-xl text-gray-600">From intimate gatherings to large corporate events</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Corporate Catering */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200">
            <div className="text-center mb-6">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-2xl font-heading font-bold text-blue-800 mb-2">Corporate Events</h3>
              <p className="text-blue-700">Professional catering for offices and businesses</p>
            </div>
            <ul className="space-y-3 text-blue-800">
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✓</span>
                Lunch meetings and conferences
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✓</span>
                Team building events
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✓</span>
                Client appreciation
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✓</span>
                Holiday parties
              </li>
            </ul>
          </div>

          {/* Private Parties */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-200">
            <div className="text-center mb-6">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-heading font-bold text-green-800 mb-2">Private Parties</h3>
              <p className="text-green-700">Celebrate special moments with family and friends</p>
            </div>
            <ul className="space-y-3 text-green-800">
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Birthday celebrations
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Anniversary parties
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Family reunions
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Graduation parties
              </li>
            </ul>
          </div>

          {/* Special Events */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border-2 border-purple-200">
            <div className="text-center mb-6">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-2xl font-heading font-bold text-purple-800 mb-2">Special Events</h3>
              <p className="text-purple-700">Make your event unforgettable</p>
            </div>
            <ul className="space-y-3 text-purple-800">
              <li className="flex items-center">
                <span className="text-purple-600 mr-2">✓</span>
                Weddings and receptions
              </li>
              <li className="flex items-center">
                <span className="text-purple-600 mr-2">✓</span>
                Fundraisers
              </li>
              <li className="flex items-center">
                <span className="text-purple-600 mr-2">✓</span>
                Community events
              </li>
              <li className="flex items-center">
                <span className="text-purple-600 mr-2">✓</span>
                Holiday celebrations
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
