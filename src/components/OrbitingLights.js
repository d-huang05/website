"use client"

import { useEffect, useState } from "react"

function OrbitingLights() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Main orbiting container - centered for initial view */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {/* Blue light (Lapse Blue) */}
        <div
          className="absolute w-80 h-80"
          style={{
            animation: "orbitBlue 12s linear infinite",
            transformOrigin: "0 0",
            left: "-160px", // Center the 320px wide element
            top: "-160px", // Center the 320px tall element
          }}
        >
          <div className="relative w-full h-full">
            {/* Main blue light layers */}
            <div className="absolute inset-0 bg-blue-500 opacity-8 rounded-full blur-3xl"></div>
            <div className="absolute inset-4 bg-blue-400 opacity-10 rounded-full blur-2xl"></div>
            <div className="absolute inset-8 bg-blue-300 opacity-12 rounded-full blur-xl"></div>
            <div className="absolute inset-12 bg-blue-200 opacity-15 rounded-full blur-lg"></div>
            {/* Core */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-400 opacity-20 rounded-full blur-sm"></div>
          </div>
        </div>

        {/* Red light (Reversal Red) */}
        <div
          className="absolute w-80 h-80"
          style={{
            animation: "orbitRed 12s linear infinite",
            transformOrigin: "0 0",
            left: "-160px", // Center the 320px wide element
            top: "-160px", // Center the 320px tall element
          }}
        >
          <div className="relative w-full h-full">
            {/* Main red light layers */}
            <div className="absolute inset-0 bg-red-500 opacity-8 rounded-full blur-3xl"></div>
            <div className="absolute inset-4 bg-red-400 opacity-10 rounded-full blur-2xl"></div>
            <div className="absolute inset-8 bg-red-300 opacity-12 rounded-full blur-xl"></div>
            <div className="absolute inset-12 bg-red-200 opacity-15 rounded-full blur-lg"></div>
            {/* Core */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-red-400 opacity-20 rounded-full blur-sm"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes orbitBlue {
          0% {
            transform: rotate(0deg) translateX(200px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(200px) rotate(-360deg);
          }
        }

        @keyframes orbitRed {
          0% {
            transform: rotate(180deg) translateX(200px) rotate(-180deg);
          }
          100% {
            transform: rotate(540deg) translateX(200px) rotate(-540deg);
          }
        }
      `}</style>
    </>
  )
}

export default OrbitingLights
