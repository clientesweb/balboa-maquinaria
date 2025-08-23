"use client"

import Image from "next/image"

const brands = [
  { name: "Lovol", logo: "/images/brands/lovol-logo.png" },
  { name: "Industrias David", logo: "/images/brands/david-logo.webp" },
  { name: "Orsi", logo: "/images/brands/orsi-logo.webp" },
  { name: "Lavrale", logo: "/images/brands/lavrale-logo.webp" },
  { name: "Grass Cutter", logo: "/images/brands/grass-cutter-logo.png" },
  { name: "Rocha", logo: "/images/brands/rocha-logo.png" },
]

export default function BrandsCarousel() {
  const duplicatedBrands = [...brands, ...brands]

  return (
    <section className="py-8 bg-gray-50 overflow-hidden">
      <div className="relative">
        <div className="flex w-fit animate-[scroll_8s_linear_infinite]">
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex-shrink-0 w-40 h-20 md:w-48 md:h-24 mx-6 md:mx-8 flex items-center justify-center bg-white rounded-lg shadow-sm"
            >
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={`Logo ${brand.name}`}
                width={160}
                height={80}
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}
