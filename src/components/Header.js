function Header() {
  return (
    <header className="relative px-6 py-8 md:px-12 md:py-16 pt-20">
      {/* Glowing border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-20 h-px top-0"></div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          {/* Name with glow effect */}
          <h1 className="text-5xl md:text-7xl font-bold text-white relative">
            <span className="relative z-10">DEVEN HUANG</span>
            <span className="absolute inset-0 text-cyan-400 blur-sm animate-pulse">DEVEN HUANG</span>
          </h1>

          {/* Subtitle with typing animation effect */}
          <div className="text-xl md:text-2xl text-cyan-300 font-mono">
            <span className="animate-pulse">NYU Biochemistry Student</span>
          </div>

          <div className="text-xl md:text-2xl text-cyan-300 font-mono">
            <span className="animate-pulse">Incoming QT Intern at IMC</span>
          </div>

          {/* Academic details */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-blue-200 text-lg">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span>Major: Biochemistry</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-cyan-500 opacity-50"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-300"></div>
              <span>Minors: Mathematics & Business Studies</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20 h-px bottom-0"></div>
    </header>
  )
}

export default Header
