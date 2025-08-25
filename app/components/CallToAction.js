export default function CallToAction() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-heading font-bold mb-6">Ready to Plan Your Event?</h2>
        <p className="text-xl mb-8">Let us make your next gathering unforgettable with our delicious catering</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#catering-form" className="bg-white text-primary px-8 py-4 rounded-full text-xl font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            Get Quote Now
          </a>
          <a href="tel:504-463-5384" className="bg-accent text-dark px-8 py-4 rounded-full text-xl font-medium hover:bg-accent/90 transition-all duration-300">
            Call (504) 463-5384
          </a>
        </div>
      </div>
    </section>
  )
}
