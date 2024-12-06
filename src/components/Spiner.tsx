import { useState, useEffect } from 'react'

export default function PulseLoader() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((current) => (current + 1) % 3)
    }, 300)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex space-x-2 justify-center items-center">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full ${
            active === index ? 'bg-blue-300 scale-125' : 'bg-blue-200'
          } transition-all duration-300 ease-in-out`}
        ></div>
      ))}
    </div>
  )
}