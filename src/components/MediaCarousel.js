"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

function MediaCarousel({ title, items }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }

  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  const goToItem = (index) => {
    setCurrentIndex(index)
  }

  const getItemPosition = (index) => {
    const diff = index - currentIndex
    if (diff === 0) return { transform: "translateX(0) scale(1)", zIndex: 30, opacity: 1 }
    if (diff === 1 || diff === -(items.length - 1))
      return { transform: "translateX(60%) scale(0.8)", zIndex: 20, opacity: 0.6 }
    if (diff === -1 || diff === items.length - 1)
      return { transform: "translateX(-60%) scale(0.8)", zIndex: 20, opacity: 0.6 }
    return { transform: "translateX(0) scale(0.6)", zIndex: 10, opacity: 0.3 }
  }

  const creator = (item) => item.author || item.director || item.developer || item.creator || ""

  return (
    <section className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 relative">
          <span className="relative z-10">{title}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 blur-lg"></div>
        </h2>
        <div className="w-24 h-px bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
      </div>

      {/* Media carousel */}
      <div className="relative h-96 md:h-80">
        {/* Navigation arrows */}
        <button
          onClick={prevItem}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-40 p-3 bg-black bg-opacity-80 border border-cyan-500 border-opacity-30 rounded-lg text-cyan-400 hover:text-cyan-300 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextItem}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-40 p-3 bg-black bg-opacity-80 border border-cyan-500 border-opacity-30 rounded-lg text-cyan-400 hover:text-cyan-300 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Media cards */}
        <div className="relative w-full h-full flex items-center justify-center">
          {items.map((item, index) => {
            const position = getItemPosition(index)
            return (
              <div
                key={index}
                className="absolute w-80 md:w-96 transition-all duration-500 ease-in-out cursor-pointer"
                style={position}
                onClick={() => goToItem(index)}
              >
                <a href={item.wikipedia} target="_blank" rel="noopener noreferrer" className="block">
                  {/* Card glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 opacity-20 rounded-lg blur-sm"></div>

                  <div className="relative bg-black bg-opacity-90 backdrop-blur-sm border border-cyan-500 border-opacity-30 rounded-lg p-6 h-full">
                    {/* Image */}
                    <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-lg border border-cyan-500 border-opacity-30 mx-auto max-w-48">
                      <img
                        src={item.image || "/placeholder.svg?height=300&width=200"}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "/placeholder.svg?height=300&width=200&text=" + encodeURIComponent(item.title)
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 text-center">{item.title}</h3>

                    {/* Creator */}
                    {creator(item) && <p className="text-cyan-300 text-sm mb-2 text-center">{creator(item)}</p>}

                    {/* Decorative corners */}
                    <div className="absolute top-4 left-4 w-3 h-3 border-l-2 border-t-2 border-cyan-400"></div>
                    <div className="absolute top-4 right-4 w-3 h-3 border-r-2 border-t-2 border-cyan-400"></div>
                    <div className="absolute bottom-4 left-4 w-3 h-3 border-l-2 border-b-2 border-cyan-400"></div>
                    <div className="absolute bottom-4 right-4 w-3 h-3 border-r-2 border-b-2 border-cyan-400"></div>
                  </div>
                </a>
              </div>
            )
          })}
        </div>
      </div>

      {/* Media indicators */}
      <div className="flex justify-center mt-8 gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToItem(index)}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              index === currentIndex
                ? "bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50"
                : "bg-transparent border-cyan-500 border-opacity-50 hover:border-cyan-400"
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default MediaCarousel
