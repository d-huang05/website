import { Mail } from "lucide-react"

function Contact() {
  return (
    <section className="px-6 py-16 md:px-12 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative">
            <span className="relative z-10">GET IN TOUCH</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 blur-lg"></div>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
        </div>

        {/* Contact card */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 opacity-20 rounded-lg blur-sm"></div>

          <div className="relative bg-black bg-opacity-80 backdrop-blur-sm border border-blue-500 border-opacity-30 rounded-lg p-8 md:p-12">
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-300">
                I'm always open to discussing research opportunities, collaborations, or just connecting with fellow
                science enthusiasts.
              </p>

              {/* Email contact */}
              <div className="flex items-center justify-center gap-4 p-6 bg-gradient-to-r from-cyan-500 to-blue-500 bg-opacity-10 rounded-lg border border-cyan-500 border-opacity-20">
                <Mail className="w-6 h-6 text-cyan-400" />
                <a
                  href="mailto:deven.huang@nyu.edu"
                  className="text-xl md:text-2xl text-cyan-300 hover:text-cyan-100 transition-colors duration-300 font-mono"
                >
                  deven.huang@nyu.edu
                </a>
              </div>

              <p className="text-gray-400">Feel free to reach out - I'd love to hear from you!</p>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute top-4 left-4 w-3 h-3 border-l-2 border-t-2 border-blue-400"></div>
            <div className="absolute top-4 right-4 w-3 h-3 border-r-2 border-t-2 border-blue-400"></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 border-l-2 border-b-2 border-blue-400"></div>
            <div className="absolute bottom-4 right-4 w-3 h-3 border-r-2 border-b-2 border-blue-400"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
