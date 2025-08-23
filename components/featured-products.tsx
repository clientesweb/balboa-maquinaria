import Image from "next/image"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "KING FORREST 200",
    brand: "ORSI",
    image: "/images/products/intercepta-orsi-new.webp",
    description: "De 70 en 140 HP - Máquina intercepta de alta precisión",
  },
  {
    id: 2,
    name: "Cultivadores combinados con intercepas COMBI",
    brand: "Industrias David",
    image: "/images/products/combi-david-new.webp",
    description: "Sistema combinado multifunción de alta tecnología",
  },
  {
    id: 3,
    name: "Tractor M104",
    brand: "LOVOL",
    image: "/images/products/tractor-lovol.jpeg",
    description: "Tractor de alta potencia y eficiencia",
  },
  {
    id: 4,
    name: "Chipeadora",
    brand: "Grass Cutter",
    image: "/images/products/chipeadora-new.webp",
    description: "Procesamiento eficiente de material vegetal",
  },
  {
    id: 5,
    name: "Segadora ST 170",
    brand: "LAVRALE",
    image: "/images/products/segadora-lavrale-new.webp",
    description: "Segadora de tambor de alta performance",
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-gray-900 mb-4">
            Productos <span className="text-[#ffdd02]">Destacados</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4 font-sans">
            Descubrí nuestra selección de maquinaria agrícola de las mejores marcas internacionales
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                  <span className="bg-[#D2691E] text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium font-sans">
                    {product.brand}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-display font-bold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2 font-sans">{product.description}</p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <Link
                    href="/productos"
                    className="inline-flex items-center text-[#D2691E] hover:text-[#B8541A] font-medium transition-colors text-sm sm:text-base font-sans"
                  >
                    Ver detalles
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>

                  <button className="bg-[#ffdd02] hover:bg-[#D2691E] hover:text-white text-black px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base w-full sm:w-auto font-sans">
                    Consultar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Link
            href="/productos"
            className="inline-flex items-center bg-[#D2691E] hover:bg-[#B8541A] text-white px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors text-sm sm:text-base font-display"
          >
            Ver todos los productos
            <svg className="ml-2 w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
