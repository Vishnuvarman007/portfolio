import { useEffect, useState } from 'react'

const AnimatedBackground = () => {
  const [currentGradient, setCurrentGradient] = useState(0)
  
  const gradients = [
    'linear-gradient(-45deg, #1e40af, #7c3aed, #0891b2, #ec4899)',
    'linear-gradient(-45deg, #7c3aed, #ec4899, #1e40af, #0891b2)',
    'linear-gradient(-45deg, #0891b2, #1e40af, #ec4899, #7c3aed)',
    'linear-gradient(-45deg, #ec4899, #0891b2, #7c3aed, #1e40af)'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGradient((prev) => (prev + 1) % gradients.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: gradients[currentGradient],
        backgroundSize: '400% 400%',
        animation: 'gradientShift 15s ease infinite',
        zIndex: -1,
        transition: 'background 2s ease-in-out'
      }}
    />
  )
}

export default AnimatedBackground