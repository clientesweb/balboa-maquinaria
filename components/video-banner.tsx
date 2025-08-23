"use client"

import { useEffect, useRef } from "react"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function VideoBanner() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error)
      })
    }
  }, [])

  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-screen overflow-hidden">
      <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted loop playsInline>
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video-banner-principal-balbo-0161sJYKjW2AhjulPJYl6jEQFEbylP.mp4" type="video/mp4" />
        Su navegador no soporta el elemento de video.
      </video>

      {/* Subtle gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

      <div className="absolute top-4 sm:top-6 lg:top-8 left-4 sm:left-6 lg:left-8 z-10 animate-in slide-in-from-left duration-1000 delay-500">
        <div className="bg-gradient-to-r from-[#ffdd02] to-[#ffd700] backdrop-blur-sm px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-xl shadow-2xl border-2 border-[#D2691E]/20 max-w-[280px] sm:max-w-[350px] lg:max-w-[450px] transform hover:scale-105 transition-all duration-300">
          <p className="text-xs sm:text-sm lg:text-base xl:text-lg font-display font-bold text-black leading-tight tracking-wide text-center">
            <span className="text-[#D2691E]">INNOVACIÓN</span> Y{" "}
            <span className="text-[#D2691E]">TECNOLOGÍA AGRÍCOLA</span>
            <br />
            <span className="text-xs sm:text-xs lg:text-sm font-sans font-medium">al alcance de tu campo</span>
          </p>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 right-4 sm:right-6 lg:right-8 z-10 animate-in slide-in-from-right duration-1000 delay-1000">
        <Button
          className="bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center gap-2 group text-sm sm:text-base font-sans font-medium"
          onClick={() => window.open("https://wa.me/5491234567890", "_blank")}
        >
          <MessageCircle className="h-4 sm:h-5 w-4 sm:w-5 group-hover:scale-110 transition-transform duration-200" />
          <span className="hidden sm:inline">Consultar por WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
        </Button>
      </div>
    </section>
  )
}
