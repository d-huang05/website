import Header from "../components/Header"
import About from "../components/About"
import Publications from "../components/Publications"
import Contact from "../components/Contact"
import SocialLinks from "../components/SocialLinks"
import ResumeDownloads from "../components/ResumeDownloads"
import Navigation from "../components/Navigation"

function Home() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Grid background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="relative z-10">
        <Navigation />
        <Header />
        <About />
        <Publications />
        <Contact />
        <SocialLinks />
        <ResumeDownloads />
      </div>
    </div>
  )
}

export default Home
