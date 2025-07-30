"use client"

const GlowingLinesBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Container for the animated lines */}
      <div className="absolute inset-0">
        {/* Line 1: Blue to Green */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/50 via-green-500/50 to-transparent animate-line-move-1 opacity-70"></div>
        {/* Line 2: Pink to Blue */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-pink-500/50 via-blue-500/50 to-transparent animate-line-move-2 opacity-70"></div>
        {/* Line 3: Green to Cyan */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-400/50 via-cyan-400/50 to-transparent animate-line-move-3 opacity-70"></div>
        {/* Line 4: Purple to Magenta */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-purple-500/50 via-magenta-500/50 to-transparent animate-line-move-4 opacity-70"></div>
      </div>
    </div>
  )
}

export default GlowingLinesBackground
