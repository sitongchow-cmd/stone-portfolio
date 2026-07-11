import { useCallback, useEffect, useRef } from 'react'

function ClickSpark({
  sparkColor = '#b792c8',
  sparkSize = 10,
  sparkRadius = 16,
  sparkCount = 8,
  duration = 420,
  easing = 'ease-out',
  extraScale = 1,
  children,
}) {
  const canvasRef = useRef(null)
  const sparksRef = useRef([])
  const animationRef = useRef(0)
  const startAnimationRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let resizeTimeout

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      const nextWidth = Math.max(1, Math.round(window.innerWidth * dpr))
      const nextHeight = Math.max(1, Math.round(window.innerHeight * dpr))

      if (canvas.width !== nextWidth || canvas.height !== nextHeight) {
        canvas.width = nextWidth
        canvas.height = nextHeight
      }
    }

    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(resizeCanvas, 100)
    }

    window.addEventListener('resize', handleResize)
    resizeCanvas()

    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimeout)
    }
  }, [])

  const easeFunc = useCallback(
    (t) => {
      switch (easing) {
        case 'linear':
          return t
        case 'ease-in':
          return t * t
        case 'ease-in-out':
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
        default:
          return t * (2 - t)
      }
    },
    [easing],
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const ctx = canvas.getContext('2d')

    const draw = (timestamp) => {
      const dpr = window.devicePixelRatio || 1
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      sparksRef.current = sparksRef.current.filter((spark) => {
        const elapsed = timestamp - spark.startTime
        if (elapsed >= duration) return false

        const progress = elapsed / duration
        const eased = easeFunc(progress)
        const distance = eased * sparkRadius * extraScale
        const lineLength = sparkSize * (1 - eased)

        const x1 = (spark.x + distance * Math.cos(spark.angle)) * dpr
        const y1 = (spark.y + distance * Math.sin(spark.angle)) * dpr
        const x2 = (spark.x + (distance + lineLength) * Math.cos(spark.angle)) * dpr
        const y2 = (spark.y + (distance + lineLength) * Math.sin(spark.angle)) * dpr

        ctx.strokeStyle = sparkColor
        ctx.lineWidth = 2 * dpr
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()

        return true
      })

      if (sparksRef.current.length > 0) {
        animationRef.current = requestAnimationFrame(draw)
      } else {
        animationRef.current = 0
      }
    }

    startAnimationRef.current = () => {
      if (!animationRef.current) {
        animationRef.current = requestAnimationFrame(draw)
      }
    }

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      animationRef.current = 0
      startAnimationRef.current = null
    }
  }, [duration, easeFunc, extraScale, sparkColor, sparkRadius, sparkSize])

  const handleClick = (event) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const now = performance.now()

    const newSparks = Array.from({ length: sparkCount }, (_, index) => ({
      x,
      y,
      angle: (2 * Math.PI * index) / sparkCount,
      startTime: now,
    }))

    sparksRef.current.push(...newSparks)
    startAnimationRef.current?.()
  }

  return (
    <div className="clickSpark" onClick={handleClick}>
      <canvas ref={canvasRef} className="clickSparkCanvas" aria-hidden="true" />
      {children}
    </div>
  )
}

export default ClickSpark
