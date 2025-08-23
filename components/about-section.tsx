import Image from "next/image"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Content */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-display font-bold text-gray-900 leading-tight">
              Impulsamos el agro con <span className="text-[#D2691E]">innovación</span> y{" "}
              <span className="text-[#D2691E]">confianza</span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed lg:leading-relaxed xl:leading-relaxed font-sans">
              En Balbo Agromaquinas acompañamos a productores y empresas del campo con maquinarias, implementos e
              insumos agrícolas de calidad, junto al respaldo técnico que necesitás para potenciar tu producción.
            </p>

            <Link
              href="/nosotros"
              className="inline-flex items-center px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 lg:py-4 bg-[#ffdd02] text-black font-display font-bold rounded-lg hover:bg-[#D2691E] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base lg:text-lg"
            >
              Conocé más
              <svg
                className="ml-2 w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3]">
              <Image
                src="/images/sobre-nosotros-balbo.webp"
                alt="Equipo de Balbo Agromaquinas en exposición agrícola"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-[#ffdd02] rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 bg-[#D2691E] rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
