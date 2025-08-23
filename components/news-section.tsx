import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

export default function NewsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-oswald font-bold text-black mb-4">
            <span className="text-[#ffdd02]">ÚLTIMAS</span> NOVEDADES
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-inter">
            Mantente al día con las últimas noticias y eventos de Balbo Agromaquinas
          </p>
        </div>

        {/* Featured Article */}
        <div className="max-w-4xl mx-auto">
          <article className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 md:h-full overflow-hidden">
                <Image
                  src="/images/expo-agro-balboa.webp"
                  alt="Balbo Agromaquinas en EXPO AGRO - 1ra Jornada Provincial de Mecanización"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/20" />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-[#D2691E] mb-4">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">Evento Destacado</span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-oswald font-bold text-black mb-4 leading-tight">
                  EXPO AGRO: 1ra Jornada Provincial de Mecanización en{" "}
                  <span className="text-[#ffdd02]">VITICULTURA Y HORTICULTURA</span>
                </h3>

                <p className="text-gray-600 mb-6 font-inter leading-relaxed">
                  Participamos activamente en la primera jornada provincial de mecanización especializada en viticultura
                  y horticultura, presentando nuestras últimas innovaciones en maquinaria agrícola especializada.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    className="bg-[#ffdd02] hover:bg-[#ffd700] text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 group/btn"
                  >
                    <Link href="/novedades" className="flex items-center gap-2">
                      Ver más novedades
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
