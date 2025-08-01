import { ExternalLink, ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import Navigation from "../components/Navigation"
import OrbitingLights from "../components/OrbitingLights"

const friendsData = [
  {
    id: 1,
    name: "David Garsten",
    description:
      "Computer Science and Linguistics student at Yale.",
    website: "https://dudugan.github.io",
    image: "/images/friends/david.jpg",
    skills: ["Linguistics", "Composing", "Python", "Research"],
  },
  {
    id: 2,
    name: "Sidharth Rao",
    description:
      "CS/ECE student at Cornell University. Interested in localization algorithms, control theory, and decentralized robotics.",
    website: "https://iamsrao.com/",
    image: "/images/friends/sid.jpg",
    skills: ["Robotics", "Engineering", "Coding", "3D-Printing"],
  },
  {
    id: 3,
    name: "Jewon Im",
    description:
      "Computer Science student at Yale University.",
    website: "https://jewonim.com/",
    image: "/images/friends/jewon.jpg",
    skills: ["Coding", "Writing", "Wood Carving", "Writing"],
  },
  {
    id: 4,
    name: "Ryan Yang",
    description:
      "Distributed Learning student at MIT.",
    website: "https://ryanyunruiyang.github.io/",
    image: "/images/friends/ryan.jpg",
    skills: ["Computer Systems", "Optimization Theory", "Distributed Systems", "Machine Learning"],
  },
  {
    id: 5,
    name: "Michael Korvyakov",
    description:
      "Business and Global Affairs & Computer Science student at Georgetown.",
    website: "https://michaelkorvyakov.com",
    image: "/images/friends/michael.jpg",
    skills: ["Entrepeneurship", "Business", "Politics", "Media"],
  },
  {
    id: 6,
    name: "Joseph Cheng",
    description: "Mathematics and Computer Science student at NYU Courant.",
    website: "https://www.josephxcheng.com/",
    image: "/images/friends/joe.jpg",
    skills: ["Mathematics", "Computer Science", "Academic Research", "Problem Solving"],
  },
]

function Friends() {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Grid background pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      {/* Animated background elements - Orbiting Lights */}
      <div className="absolute inset-0 overflow-hidden">
        <OrbitingLights />
      </div>

      <div className="relative z-10">
        <Navigation />

        {/* Header */}
        <header className="relative px-6 py-8 md:px-12 md:py-16 pt-24">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <Link
                to="/"
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-mono">Back to Home</span>
              </Link>
            </div>

            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white relative mb-4">
                <span className="relative z-10">FRIENDS</span>
                <span className="absolute inset-0 text-cyan-400 blur-sm animate-pulse">FRIENDS</span>
              </h1>
              <div className="w-24 h-px bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6"></div>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Check out the amazing work and projects from my talented friends and colleagues.
              </p>
            </div>
          </div>
        </header>

        {/* Friends grid */}
        <div className="px-6 md:px-12 pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {friendsData.map((friend) => (
                <a
                  key={friend.id}
                  href={friend.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  {/* Card glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 opacity-20 rounded-lg blur-sm group-hover:opacity-30 transition-opacity duration-300"></div>

                  <div className="relative bg-black bg-opacity-90 backdrop-blur-sm border border-cyan-500 border-opacity-30 rounded-lg p-6 h-full group-hover:border-cyan-400 group-hover:border-opacity-50 transition-all duration-300 group-hover:scale-105">
                    {/* Profile image */}
                    <div className="relative mb-6">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-cyan-500 border-opacity-50 group-hover:border-cyan-400 transition-colors duration-300">
                        <img
                          src={friend.image || "/placeholder.svg"}
                          alt={friend.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Glow effect around image */}
                      <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-cyan-400 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></div>
                    </div>

                    {/* Name */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors duration-300">
                      {friend.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-4 text-center">{friend.description}</p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      {friend.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-500 bg-opacity-20 border border-blue-400 border-opacity-30 rounded text-blue-300 text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Visit website indicator */}
                    <div className="flex items-center justify-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                      <span className="text-sm font-mono">Visit Website</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>

                    {/* Decorative corners */}
                    <div className="absolute top-4 left-4 w-3 h-3 border-l-2 border-t-2 border-cyan-400"></div>
                    <div className="absolute top-4 right-4 w-3 h-3 border-r-2 border-t-2 border-cyan-400"></div>
                    <div className="absolute bottom-4 left-4 w-3 h-3 border-l-2 border-b-2 border-cyan-400"></div>
                    <div className="absolute bottom-4 right-4 w-3 h-3 border-r-2 border-b-2 border-cyan-400"></div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Friends
