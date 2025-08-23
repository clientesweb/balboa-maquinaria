"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X, ChevronDown, Users, Package, Newspaper, Phone, Facebook, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen)
  }

  const menuItems = [
    { name: "Nosotros", href: "#nosotros", icon: Users, hasSubmenu: false },
    { name: "Productos", href: "#productos", icon: Package, hasSubmenu: true },
    { name: "Novedades", href: "#novedades", icon: Newspaper, hasSubmenu: false },
    { name: "Contacto", href: "#contacto", icon: Phone, hasSubmenu: false },
  ]

  const leftMenuItems = menuItems.slice(0, 2) // Nosotros, Productos
  const rightMenuItems = menuItems.slice(2) // Novedades, Contacto

  const productBrands = [
    {
      name: "Industrias David",
      description: "España - exclusividad nacional",
      href: "#industrias-david",
    },
    {
      name: "Orsis y VBC",
      description: "",
      href: "#orsis-vbc",
    },
    {
      name: "Lovol",
      description: "Tractores y maquinaria vial de China",
      href: "#lovol",
    },
    {
      name: "Lavrale",
      description: "Brasil",
      href: "#lavrale",
    },
    {
      name: "Metalmor",
      description: "Córdoba - sembradoras de ajo",
      href: "#metalmor",
    },
    {
      name: "Grass Cutter",
      description: "Santa Fe - desmalezadoras",
      href: "#grass-cutter",
    },
    {
      name: "Rocha",
      description: "Portugal - atomizadoras y fumigadoras",
      href: "#rocha",
    },
    {
      name: "Maquinaria única",
      description: "Control de malezas con electricidad",
      href: "#maquinaria-unica",
    },
  ]

  return (
    <header className="relative z-50">
      <div className="bg-black text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 lg:px-6 xl:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-semibold tracking-wide font-sans">ENVIOS NACIONALES</span>
            </div>
            <div className="flex items-center space-x-3">
              <a
                href="https://www.facebook.com/balboagromaquinas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#ffdd02] transition-colors duration-200"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/balboagromaquinas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#ffdd02] transition-colors duration-200"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#ffdd02] transition-colors duration-200"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#ffdd02] shadow-md">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6 xl:px-8">
          <div className="flex items-center justify-between h-18 sm:h-20 lg:h-24 xl:h-28">
            <nav className="hidden xl:flex space-x-4 2xl:space-x-8 flex-1 justify-end pr-4 2xl:pr-8">
              {leftMenuItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasSubmenu ? (
                    <div className="relative">
                      <button
                        onClick={toggleProducts}
                        className="font-display font-bold text-sm xl:text-base text-black hover:text-[#D2691E] transition-colors duration-200 flex items-center gap-1"
                      >
                        {item.name}
                        <ChevronDown className="h-3 xl:h-4 w-3 xl:w-4" />
                      </button>

                      {isProductsOpen && (
                        <div className="absolute top-full left-0 mt-2 w-72 xl:w-80 bg-white rounded-lg shadow-lg border py-2 z-50">
                          {productBrands.map((brand) => (
                            <a
                              key={brand.name}
                              href={brand.href}
                              className="block px-3 xl:px-4 py-2 xl:py-3 hover:bg-gray-50 transition-colors duration-200"
                              onClick={() => setIsProductsOpen(false)}
                            >
                              <div className="font-semibold text-black text-sm xl:text-base font-sans">
                                {brand.name}
                              </div>
                              {brand.description && (
                                <div className="text-xs xl:text-sm text-gray-600 mt-1 font-sans">
                                  {brand.description}
                                </div>
                              )}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="font-display font-bold text-sm xl:text-base text-black hover:text-[#D2691E] transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex-shrink-0">
              <a href="#" className="block">
                <Image
                  src="/images/balboa-logo-transparent.webp"
                  alt="Balbo Agro Maquinarias"
                  width={280}
                  height={84}
                  className="h-12 sm:h-16 lg:h-20 xl:h-24 2xl:h-28 w-auto"
                  priority
                />
              </a>
            </div>

            <nav className="hidden xl:flex space-x-4 2xl:space-x-8 flex-1 pl-4 2xl:pl-8">
              {rightMenuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-display font-bold text-sm xl:text-base text-black hover:text-[#D2691E] transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="xl:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                className="text-black hover:bg-black/10 h-8 w-8 sm:h-10 sm:w-10"
              >
                {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <>
              {/* Backdrop overlay */}
              <div
                className="xl:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-in fade-in duration-200"
                onClick={() => setIsMenuOpen(false)}
              />

              <div className="xl:hidden fixed top-18 sm:top-20 lg:top-24 xl:top-28 left-0 right-0 bg-gradient-to-br from-white via-white to-gray-50 shadow-2xl border-t border-gray-200 z-50 animate-in slide-in-from-top duration-300 max-h-[calc(100vh-4rem)] overflow-y-auto">
                <nav className="px-4 sm:px-6 py-4 sm:py-6 space-y-1 sm:space-y-2">
                  {menuItems.map((item, index) => {
                    const IconComponent = item.icon
                    return (
                      <div
                        key={item.name}
                        className="animate-in slide-in-from-left duration-300"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {item.hasSubmenu ? (
                          <div>
                            <button
                              onClick={toggleProducts}
                              className="flex items-center justify-between w-full font-display font-bold text-black hover:text-[#D2691E] transition-all duration-300 py-3 sm:py-4 px-3 sm:px-4 rounded-xl hover:bg-[#ffdd02]/20 group"
                            >
                              <div className="flex items-center gap-2 sm:gap-3">
                                <IconComponent className="h-4 sm:h-5 w-4 sm:w-5 text-[#D2691E] group-hover:scale-110 transition-transform duration-200" />
                                <span className="text-base sm:text-lg">{item.name}</span>
                              </div>
                              <ChevronDown
                                className={`h-4 sm:h-5 w-4 sm:w-5 transition-transform duration-200 ${isProductsOpen ? "rotate-180" : ""}`}
                              />
                            </button>

                            {isProductsOpen && (
                              <div className="ml-6 sm:ml-8 mt-2 space-y-1 animate-in slide-in-from-top duration-200">
                                {productBrands.map((brand, brandIndex) => (
                                  <a
                                    key={brand.name}
                                    href={brand.href}
                                    className="block py-2 sm:py-3 px-3 sm:px-4 rounded-lg hover:bg-[#ffdd02]/10 transition-all duration-200 animate-in slide-in-from-left"
                                    style={{ animationDelay: `${brandIndex * 50}ms` }}
                                    onClick={() => {
                                      setIsMenuOpen(false)
                                      setIsProductsOpen(false)
                                    }}
                                  >
                                    <div className="font-medium text-black text-sm sm:text-base font-sans">
                                      {brand.name}
                                    </div>
                                    {brand.description && (
                                      <div className="text-xs sm:text-sm text-gray-600 mt-1 font-sans">
                                        {brand.description}
                                      </div>
                                    )}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <a
                            href={item.href}
                            className="flex items-center gap-2 sm:gap-3 font-display font-bold text-black hover:text-[#D2691E] transition-all duration-300 py-3 sm:py-4 px-3 sm:px-4 rounded-xl hover:bg-[#ffdd02]/20 group"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <IconComponent className="h-4 sm:h-5 w-4 sm:w-5 text-[#D2691E] group-hover:scale-110 transition-transform duration-200" />
                            <span className="text-base sm:text-lg">{item.name}</span>
                          </a>
                        )}
                      </div>
                    )
                  })}
                </nav>

                <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-gray-200 bg-gray-50/50">
                  <div className="flex items-center justify-between">
                    <p className="text-xs sm:text-sm text-gray-600 font-sans">ENVIOS NACIONALES</p>
                    <div className="flex items-center space-x-3">
                      <a
                        href="https://www.facebook.com/balboagromaquinas/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#D2691E] transition-colors duration-200"
                      >
                        <Facebook className="h-4 w-4" />
                      </a>
                      <a
                        href="https://www.instagram.com/balboagromaquinas/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#D2691E] transition-colors duration-200"
                      >
                        <Instagram className="h-4 w-4" />
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#D2691E] transition-colors duration-200"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
