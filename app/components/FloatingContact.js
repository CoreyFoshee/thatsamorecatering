export default function FloatingContact() {
  return (
    <div id="floating-contact" className="fixed bottom-8 right-8 z-[9999] opacity-100 pointer-events-auto transition-all duration-300 transform translate-y-0">
      <a href="tel:504-463-5384" className="bg-primary text-white px-6 py-3 rounded-full shadow-2xl hover:bg-primary/90 transition-all duration-300 transform hover:scale-110 flex items-center justify-center">
        <span className="text-sm font-medium">Call Now</span>
      </a>
    </div>
  )
}
