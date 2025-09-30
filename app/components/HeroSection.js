export default function HeroSection() {
  return (
    <section id="home" className="min-h-[100vh] md:min-h-[90vh] relative overflow-hidden">
      {/* Hero Background Video */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
          poster="/images/catering-setup.jpg"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          <source src="/videos/hero-background.webm" type="video/webm" />
          {/* Fallback to image if video fails to load */}
          <img src="/images/catering-setup.jpg" alt="That's Amore Catering Setup" className="w-full h-full object-cover" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-maroon/30 via-primary/20 to-accent/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(218,165,32,0.15),transparent_50%)]"></div>
        {/* White overlay for better text readability */}
        <div className="absolute inset-0 bg-white/60"></div>
      </div>
      
      {/* Classic Italian Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(139, 0, 0, 0.1) 35px, rgba(139, 0, 0, 0.1) 70px)'}}></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[100vh] md:min-h-[90vh] px-6 sm:px-8 md:px-4">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-dark mb-4 md:mb-6 leading-tight w-full md:w-auto mx-auto px-2 sm:px-0">
            <span className="block">Professional</span>
            <span className="block text-primary">Catering Services</span>
          </h1>
          
          {/* Catering Subtitle */}
          <div className="text-base md:text-lg lg:text-xl xl:text-2xl font-body text-gray-700 mb-4 md:mb-8 px-4 md:px-4">
            <div className="typewriter-text mb-2">Corporate Events • Private Parties • Special Occasions</div>
          </div>
          
          {/* Catering Call to Action */}
          <div className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 mb-4 md:mb-8 max-w-3xl mx-auto px-4 sm:px-2">
            <p className="mb-2 md:mb-4">From intimate gatherings to large corporate events</p>
            <p className="font-semibold text-primary">Let us handle the food while you enjoy the celebration!</p>
          </div>
          
          {/* Catering CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-4 md:mb-8 px-2 sm:px-0">
            <a href="#catering-form" className="bg-gradient-to-r from-primary to-maroon text-white px-6 md:px-10 py-3 md:py-4 rounded-full text-lg md:text-xl font-medium hover:from-maroon hover:to-primary transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-accent/30 w-full sm:w-auto">
              Get Catering Quote
            </a>
            <a href="tel:504-463-5384" className="bg-gradient-to-r from-secondary to-cream text-primary border-2 border-primary px-6 md:px-10 py-3 md:py-4 rounded-full text-lg md:text-xl font-medium hover:from-primary hover:to-maroon hover:text-white transition-all duration-300 transform hover:scale-105 shadow-2xl w-full sm:w-auto">
              Call for Catering
            </a>
          </div>
          
          {/* Scroll to see catering options */}
          <div className="text-xs md:text-sm text-gray-500">
            Scroll down to explore our catering services...
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
