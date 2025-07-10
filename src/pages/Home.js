import Header from "../components/Header"
import About from "../components/About"
import Publications from "../components/Publications"
import Contact from "../components/Contact"
import SocialLinks from "../components/SocialLinks"
import ResumeDownloads from "../components/ResumeDownloads"
import Navigation from "../components/Navigation"
import TronLines from "../components/TronLines"
import "../styles/animations.css"

function Home() {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Fixed Tron Header Section - Only covers header area */}
      <div className="fixed top-0 left-0 right-0 z-0 h-96">
        {/* Header background with diagonal bottom */}
        <div className="relative h-full bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
          {/* Enhanced grid pattern for header */}
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                  linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
                `,
                backgroundSize: "50px 50px, 50px 50px, 10px 10px, 10px 10px",
              }}
            />
          </div>

          {/* Animated Tron lines for header - constrained to header area */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div style={{ height: "384px" }}>
              <TronLines />
            </div>
          </div>

          {/* Glowing circuit-like elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Horizontal glowing lines */}
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 animate-pulse"></div>
            <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-40 animate-pulse animation-delay-1000"></div>

            {/* Vertical glowing lines */}
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-30 animate-pulse animation-delay-500"></div>
            <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-30 animate-pulse animation-delay-1500"></div>
          </div>

          {/* Corner accent elements */}
          <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-cyan-400 opacity-60"></div>
          <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-cyan-400 opacity-60"></div>

          {/* Floating geometric shapes - scaled down */}
          <div className="absolute top-1/3 left-1/6 w-3 h-3 bg-cyan-400 opacity-20 rotate-45 animate-pulse"></div>
          <div className="absolute top-2/3 right-1/6 w-4 h-4 border border-blue-400 opacity-30 rotate-12 animate-pulse animation-delay-700"></div>
          <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-blue-400 opacity-25 animate-pulse animation-delay-1200"></div>

          {/* Enhanced glowing orbs - scaled down */}
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-cyan-500 opacity-15 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500 opacity-15 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500 opacity-10 rounded-full blur-xl animate-pulse animation-delay-2000"></div>

          {/* Header content - positioned normally within the header area */}
          <div className="relative z-10 h-full flex flex-col">
            {/* Navigation space */}
            <div className="h-20"></div>
            {/* Header content */}
            <div className="flex-1">
              <Header />
            </div>
          </div>

          {/* Diagonal bottom edge */}
          <div
            className="absolute bottom-0 left-0 w-full h-16 bg-black"
            style={{
              clipPath: "polygon(0 100%, 100% 0%, 100% 100%)",
            }}
          ></div>

          {/* Glowing diagonal edge */}
          <div
            className="absolute bottom-0 left-0 w-full h-1"
            style={{
              background:
                "linear-gradient(30deg, rgba(6, 182, 212, 0.8) 0%, rgba(59, 130, 246, 0.6) 50%, rgba(6, 182, 212, 0.8) 100%)",
              transform: "skewY(-30deg)",
              transformOrigin: "bottom left",
              boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)",
            }}
          ></div>
        </div>
      </div>

      {/* Always visible Navigation - highest z-index */}
      <Navigation />

      {/* Scrollable Main Content */}
      <div className="relative z-20">
        {/* Spacer to push content down past the header */}
        <div className="h-96"></div>

        {/* Main content area with diagonal top edge that matches header */}
        <div className="relative bg-black min-h-screen">
          {/* Diagonal top edge to match header's bottom - no visible line, just shape */}
          <div
            className="absolute top-0 left-0 w-full h-16 bg-black"
            style={{
              clipPath: "polygon(0 0%, 100% 100%, 0% 100%)",
            }}
          ></div>

          {/* Subtle grid background for main content */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

          {/* Subtle animated background elements for main content */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 left-1/5 w-64 h-64 bg-cyan-500 opacity-5 rounded-full blur-3xl animate-pulse animation-delay-3000"></div>
            <div className="absolute bottom-1/3 right-1/5 w-64 h-64 bg-blue-500 opacity-5 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
          </div>

          {/* Content sections with proper spacing */}
          <div className="relative z-10 space-y-24 pb-24">
            {/* Extra spacing at the top to account for diagonal edge */}
            <div className="pt-24">
              <About />
            </div>
            <Publications />
            <Contact />
            <SocialLinks />
            <ResumeDownloads />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
