import { Link, useLocation } from "react-router-dom"

function Navigation() {
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm border-b border-cyan-500 border-opacity-20">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
            DEVEN HUANG
          </Link>

          <div className="flex gap-6">
            <Link
              to="/"
              className={`font-mono transition-colors duration-300 ${
                location.pathname === "/"
                  ? "text-cyan-400 border-b border-cyan-400"
                  : "text-gray-300 hover:text-cyan-300"
              }`}
            >
              Home
            </Link>
            <Link
              to="/experiences"
              className={`font-mono transition-colors duration-300 ${
                location.pathname === "/experiences"
                  ? "text-cyan-400 border-b border-cyan-400"
                  : "text-gray-300 hover:text-cyan-300"
              }`}
            >
              Experiences
            </Link>
            <Link
              to="/friends"
              className={`font-mono transition-colors duration-300 ${
                location.pathname === "/friends"
                  ? "text-cyan-400 border-b border-cyan-400"
                  : "text-gray-300 hover:text-cyan-300"
              }`}
            >
              Friends
            </Link>
            <Link
              to="/media"
              className={`font-mono transition-colors duration-300 ${
                location.pathname === "/media"
                  ? "text-cyan-400 border-b border-cyan-400"
                  : "text-gray-300 hover:text-cyan-300"
              }`}
            >
              Media
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
