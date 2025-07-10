"use client"

import { useEffect, useRef, useState, useCallback } from "react"

function TronLines() {
  const [lines, setLines] = useState([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const animationRef = useRef()
  const linesRef = useRef([])
  const lastTimeRef = useRef(0)

  // Generate a single line path
  const generatePath = useCallback((startX, screenHeight) => {
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

          // Keep lines within reasonable bounds
          currentX = Math.max(-100, Math.min(window.innerWidth + 100, currentX))

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
  }, [])

  // Generate all lines
  const generateLines = useCallback(() => {
    const width = window.innerWidth
    const height = window.innerHeight

    setDimensions({ width, height })

    const newLines = []
    const numLines = width >= 768 ? 7 : 4
    const minSpacing = width / (numLines + 1)

    for (let i = 0; i < numLines; i++) {
      const startX = (i + 1) * minSpacing + (Math.random() - 0.5) * 80
      const path = generatePath(startX, height)
      const color = Math.random() > 0.5 ? "cyan" : "blue"
      const opacity = 0.4 + Math.random() * 0.3
      const speed = 0.8 + Math.random() * 0.4
      const position = -200 - i * 100 // Stagger initial positions

      newLines.push({
        id: `line-${i}-${Date.now()}`,
        path,
        color,
        opacity,
        speed,
        position,
        lineLength: 200,
      })
    }

    linesRef.current = newLines
    setLines(newLines)
  }, [generatePath])

  // Animation loop using requestAnimationFrame
  const animate = useCallback(
    (currentTime) => {
      if (lastTimeRef.current === 0) {
        lastTimeRef.current = currentTime
      }

      const deltaTime = currentTime - lastTimeRef.current
      lastTimeRef.current = currentTime

      // Update line positions
      const updatedLines = linesRef.current.map((line) => {
        let newPosition = line.position + line.speed * deltaTime * 0.1

        // Reset line when it goes off screen
        if (newPosition > dimensions.height + 400) {
          newPosition = -400 - Math.random() * 200
        }

        return {
          ...line,
          position: newPosition,
        }
      })

      linesRef.current = updatedLines
      setLines([...updatedLines])

      animationRef.current = requestAnimationFrame(animate)
    },
    [dimensions.height],
  )

  // Initialize and handle resize
  useEffect(() => {
    const handleResize = () => {
      generateLines()
    }

    // Initial setup
    if (typeof window !== "undefined") {
      generateLines()
      animationRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [generateLines, animate])

  // Cleanup animation on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ willChange: "transform" }}
      >
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
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {lines.map((line) => (
            <clipPath key={`clip-${line.id}`} id={`lineClip-${line.id}`}>
              <rect x="0" y={line.position} width="100%" height={line.lineLength} />
            </clipPath>
          ))}
        </defs>

        {lines.map((line) => (
          <g key={line.id}>
            {/* Main line with glow */}
            <path
              d={line.path}
              stroke={line.color === "cyan" ? "url(#cyanLineGradient)" : "url(#blueLineGradient)"}
              strokeWidth="2"
              fill="none"
              opacity={line.opacity}
              filter="url(#lineGlow)"
              clipPath={`url(#lineClip-${line.id})`}
              style={{ willChange: "transform" }}
            />

            {/* Secondary glow effect */}
            <path
              d={line.path}
              stroke={line.color === "cyan" ? "#06b6d4" : "#3b82f6"}
              strokeWidth="1"
              fill="none"
              opacity={line.opacity * 0.3}
              clipPath={`url(#lineClip-${line.id})`}
              style={{
                filter: "blur(1px)",
                willChange: "transform",
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  )
}

export default TronLines
