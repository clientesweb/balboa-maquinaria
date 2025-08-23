"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function WhatsAppFloat() {
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 3000)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {showNotification && (
        <div className="absolute bottom-full right-0 mb-2 bg-black text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap animate-in slide-in-from-bottom duration-300">
          ¡Contáctanos!
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
        </div>
      )}

      <Button
        size="lg"
        className="bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-full w-14 h-14 sm:w-16 sm:h-16 p-0 group border-4 border-white"
        onClick={() => window.open("https://wa.me/5491234567890", "_blank")}
        aria-label="Contactar por WhatsApp"
      >
        <Image
          src="/images/whatsapp-icon.webp"
          alt="WhatsApp"
          width={32}
          height={32}
          className="w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform duration-200"
        />
      </Button>
    </div>
  )
}
