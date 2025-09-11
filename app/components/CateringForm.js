'use client'

import { useEffect, useState } from 'react'

export default function CateringForm() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section id="catering-form" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-dark mb-4">
            Request Your <span className="text-primary">Catering Quote</span>
          </h2>
          <p className="text-xl text-gray-600">Tell us about your event and we'll provide a custom quote</p>
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-4 sm:p-8 border-2 border-primary/20">
          <div className="w-full rounded-lg overflow-hidden">
            {isClient && (
              <iframe
                src="https://app.thatsamorepizzaonline.com/widget/form/6IcTD4HxTn0E8TZKPsMI"
                className="w-full h-[1262px] border-0 rounded-sm scrollbar-hide"
                id="inline-6IcTD4HxTn0E8TZKPsMI" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Catering Request Form"
                data-height="1262"
                data-layout-iframe-id="inline-6IcTD4HxTn0E8TZKPsMI"
                data-form-id="6IcTD4HxTn0E8TZKPsMI"
                title="Catering Request Form"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
