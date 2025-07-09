"use client"

import { useEffect, useState } from "react"

function TronLines() {
  const [lines, setLines] = useState([])
  const [screenWidth, setScreenWidth] = useState(0)
  const [screenHeight, setScreenHeight] = useState(0)

  useEffect(() => {
    // Set initial screen dimensions
    setScreenWidth(window.innerWidth)
    setScreenHeight(window.innerHeight)

    const generateLines = () => {
      const newLines = []
      // Responsive line count: 7 on desktop, 4 on mobile
      const numLines = window.innerWidth >= 768 ? 7 : 4
      const minSpacing = window.innerWidth / (numLines + 1)

      for (let i = 0; i < numLines; i++) {
        const startX = (i + 1) * minSpacing + (Math.random() - 0.5) * 80
        const path = generatePath(startX, window.innerHeight)
        const color = Math.random() > 0.5 ? "cyan" : "blue"
        const opacity = 0.4 + Math.random() * 0.3
        const speed = 0.8 + Math.random() * 0.4
        // Ensure some lines start immediately, others staggered naturally
        const animationDelay = i * 1.5 // Reduced delay, more predictable staggering

        newLines.push({
          id: `line-${i}-${Date.now()}`,
          path,
          color,
          opacity,
          speed,
          animationDelay,
          lineLength: 200,
        })
      }
      setLines(newLines)
    }

    const generatePath = (startX, screenHeight) => {
      let currentX = startX
      let currentY = -300
      let path = `M ${currentX} ${currentY}`

      const totalDistance = screenHeight + 600
      let distanceCovered = 0
      const segmentLength = 60

      while (distanceCovered < totalDistance) {
        const shouldTurn = Math.random() < 0.15 && distanceCovered > 100

        if (shouldTurn) {
          const turnSegments = Math.random() > 0.5 ? 1 : 2
          const direction = Math.random() > 0.5 ? 1 : -1

          for (let i = 0; i < turnSegments; i++) {
            const deltaX = direction * segmentLength * 0.7071
            const deltaY = segmentLength * 0.7071

            currentX += deltaX
            currentY += deltaY
            distanceCovered += segmentLength

            if (currentX < -100) {
              currentX = -100
            } else if (currentX > window.innerWidth + 100) {
              currentX = window.innerWidth + 100
            }

            path += ` L ${currentX} ${currentY}`

            if (distanceCovered >= totalDistance) break
          }
        } else {
          currentY += segmentLength
          distanceCovered += segmentLength
          path += ` L ${currentX} ${currentY}`
        }
      }

      return path
    }

    generateLines()

    const handleResize = () => {
      setScreenWidth(window.innerWidth)
      setScreenHeight(window.innerHeight)
      generateLines()
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="cyanLineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(6, 182, 212, 0)" />
            <stop offset="10%" stopColor="rgba(6, 182, 212, 1)" />
            <stop offset="90%" stopColor="rgba(6, 182, 212, 1)" />
            <stop offset="100%" stopColor="rgba(6, 182, 212, 0)" />
          </linearGradient>
          <linearGradient id="blueLineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
            <stop offset="10%" stopColor="rgba(59, 130, 246, 1)" />
            <stop offset="90%" stopColor="rgba(59, 130, 246, 1)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </linearGradient>

          <filter id="lineGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {lines.map((line) => (
            <mask key={`mask-${line.id}`} id={`lineMask-${line.id}`}>
              <rect
                width="100%"
                height={line.lineLength}
                fill="white"
                style={{
                  // Start the mask off-screen initially to prevent visible lines at top
                  animation: `moveDown ${13.3 / line.speed}s linear infinite`,
                  animationDelay: `${line.animationDelay}s`,
                  transform: "translateY(-400px)", // Start further off-screen
                }}
              />
            </mask>
          ))}
        </defs>

        {lines.map((line) => (
          <g key={line.id}>
            <path
              d={line.path}
              stroke={line.color === "cyan" ? "url(#cyanLineGradient)" : "url(#blueLineGradient)"}
              strokeWidth="2"
              fill="none"
              opacity={line.opacity}
              filter="url(#lineGlow)"
              mask={`url(#lineMask-${line.id})`}
            />

            <path
              d={line.path}
              stroke={line.color === "cyan" ? "#06b6d4" : "#3b82f6"}
              strokeWidth="1"
              fill="none"
              opacity={line.opacity * 0.3}
              mask={`url(#lineMask-${line.id})`}
              style={{
                filter: "blur(1px)",
              }}
            />
          </g>
        ))}
      </svg>

      <style jsx>{`
        @keyframes moveDown {
          0% {
            transform: translateY(-400px);
          }
          100% {
            transform: translateY(calc(100vh + 400px));
          }
        }
      `}</style>
    </div>
  )
}

export default TronLines
