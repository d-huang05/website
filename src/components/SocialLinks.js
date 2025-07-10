import { ExternalLink } from "lucide-react"

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/d.huang05/",
    description: "Personal photos and updates",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/deven-huang",
    description: "Professional network",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Letterboxd",
    url: "https://letterboxd.com/Hades3405/",
    description: "Film reviews and ratings",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.224 12c0 1.81-1.47 3.28-3.28 3.28S1.664 13.81 1.664 12s1.47-3.28 3.28-3.28S8.224 10.19 8.224 12zm6.72 0c0 1.81-1.47 3.28-3.28 3.28s-3.28-1.47-3.28-3.28 1.47-3.28 3.28-3.28 3.28 1.47 3.28 3.28zm6.72 0c0 1.81-1.47 3.28-3.28 3.28s-3.28-1.47-3.28-3.28 1.47-3.28 3.28-3.28 3.28 1.47 3.28 3.28z" />
      </svg>
    ),
  },
  {
    name: "Goodreads",
    url: "https://www.goodreads.com/user/show/165965477-deven-huang",
    description: "Book reviews and reading",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.5 4.5c0-.83.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5v15c0 .83-.67 1.5-1.5 1.5H9c-.83 0-1.5-.67-1.5-1.5v-15zm1.5 0v15h6v-15H9zm-1.5 3c0-.28.22-.5.5-.5h8c.28 0 .5.22.5.5s-.22.5-.5.5h-8c-.28 0-.5-.22-.5-.5zm0 2c0-.28.22-.5.5-.5h8c.28 0 .5.22.5.5s-.22.5-.5.5h-8c-.28 0-.5-.22-.5-.5zm0 2c0-.28.22-.5.5-.5h8c.28 0 .5.22.5.5s-.22.5-.5.5h-8c-.28 0-.5-.22-.5-.5zm0 2c0-.28.22-.5.5-.5h8c.28 0 .5.22.5.5s-.22.5-.5.5h-8c-.28 0-.5-.22-.5-.5z" />
      </svg>
    ),
  },
  {
    name: "Beli",
    url: "https://beliapp.co/app/dhuang05",
    description: "Restaurant recommendations",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
  },
  {
    name: "Strava",
    url: "https://www.strava.com/athletes/48192428",
    description: "Running and fitness tracking",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.599h4.172L10.463 0l-7 13.828h4.172" />
      </svg>
    ),
  },
  {
    name: "Substack",
    url: "https://dhuang05.substack.com/",
    description: "Personal thoughts and writing",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
      </svg>
    ),
  },
  {
    name: "ORCID",
    url: "https://orcid.org/0009-0004-4482-8448",
    description: "Academic research profile",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947 0 .525-.422.947-.947.947-.525 0-.946-.422-.946-.947 0-.525.421-.947.946-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 3.588-1.303 3.588-3.722 0-2.2-1.303-3.722-3.588-3.722h-2.297z" />
      </svg>
    ),
  },
]

function SocialLinks() {
  return (
    <section className="px-6 py-16 md:px-12 md:py-24">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative">
            <span className="relative z-10">OTHER SOCIALS</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 blur-lg"></div>
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Connect with me across different platforms to see what I'm up to, from academic research to personal
            interests.
          </p>
        </div>

        {/* Social links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {socialLinks.map((social, index) => (
            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="group relative">
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 opacity-20 rounded-lg blur-sm group-hover:opacity-30 transition-opacity duration-300"></div>

              <div className="relative bg-black bg-opacity-80 backdrop-blur-sm border border-blue-500 border-opacity-30 rounded-lg p-4 md:p-6 h-full group-hover:border-cyan-400 group-hover:border-opacity-50 transition-all duration-300">
                {/* Icon */}
                <div className="flex justify-center mb-3 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                  {social.icon}
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-white mb-2 text-center group-hover:text-cyan-300 transition-colors duration-300">
                  {social.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 text-center mb-3 leading-relaxed">{social.description}</p>

                {/* External link indicator */}
                <div className="flex justify-center">
                  <ExternalLink className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                </div>

                {/* Decorative corners */}
                <div className="absolute top-2 left-2 w-2 h-2 border-l border-t border-blue-400 opacity-50"></div>
                <div className="absolute top-2 right-2 w-2 h-2 border-r border-t border-blue-400 opacity-50"></div>
                <div className="absolute bottom-2 left-2 w-2 h-2 border-l border-b border-blue-400 opacity-50"></div>
                <div className="absolute bottom-2 right-2 w-2 h-2 border-r border-b border-blue-400 opacity-50"></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialLinks
