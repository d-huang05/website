"use client"

import { Download, FileText, GraduationCap } from "lucide-react"

function ResumeDownloads() {
  const handleResumeDownload = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement("a")
    link.href = "/resume.pdf" // You'll need to place your resume.pdf in the public folder
    link.download = "Deven_Huang_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleCVDownload = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement("a")
    link.href = "/cv.pdf" // You'll need to place your cv.pdf in the public folder
    link.download = "Deven_Huang_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="px-6 py-16 md:px-12 md:py-24">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative">
            <span className="relative z-10">DOCUMENTS</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 blur-lg"></div>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Download my professional documents for opportunities and collaborations.
          </p>
        </div>

        {/* Download buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Resume Download */}
          <button onClick={handleResumeDownload} className="group relative">
            {/* Card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 opacity-20 rounded-lg blur-sm group-hover:opacity-30 transition-opacity duration-300"></div>

            <div className="relative bg-black bg-opacity-80 backdrop-blur-sm border border-blue-500 border-opacity-30 rounded-lg p-6 md:p-8 group-hover:border-cyan-400 group-hover:border-opacity-50 transition-all duration-300 group-hover:scale-105">
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <FileText className="w-12 h-12 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors duration-300">
                Resume
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-center mb-4 leading-relaxed">
                Concise overview of my professional experience, education, and key achievements.
              </p>

              {/* Download indicator */}
              <div className="flex items-center justify-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                <Download className="w-5 h-5" />
                <span className="font-mono text-sm">Download PDF</span>
              </div>

              {/* Decorative corners */}
              <div className="absolute top-4 left-4 w-3 h-3 border-l-2 border-t-2 border-blue-400"></div>
              <div className="absolute top-4 right-4 w-3 h-3 border-r-2 border-t-2 border-blue-400"></div>
              <div className="absolute bottom-4 left-4 w-3 h-3 border-l-2 border-b-2 border-blue-400"></div>
              <div className="absolute bottom-4 right-4 w-3 h-3 border-r-2 border-b-2 border-blue-400"></div>
            </div>
          </button>

          {/* CV Download */}
          <button onClick={handleCVDownload} className="group relative">
            {/* Card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 opacity-20 rounded-lg blur-sm group-hover:opacity-30 transition-opacity duration-300"></div>

            <div className="relative bg-black bg-opacity-80 backdrop-blur-sm border border-cyan-500 border-opacity-30 rounded-lg p-6 md:p-8 group-hover:border-cyan-400 group-hover:border-opacity-50 transition-all duration-300 group-hover:scale-105">
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <GraduationCap className="w-12 h-12 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors duration-300">
                Full CV
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-center mb-4 leading-relaxed">
                Comprehensive curriculum vitae with detailed academic and research background.
              </p>

              {/* Download indicator */}
              <div className="flex items-center justify-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                <Download className="w-5 h-5" />
                <span className="font-mono text-sm">Download PDF</span>
              </div>

              {/* Decorative corners */}
              <div className="absolute top-4 left-4 w-3 h-3 border-l-2 border-t-2 border-cyan-400"></div>
              <div className="absolute top-4 right-4 w-3 h-3 border-r-2 border-t-2 border-cyan-400"></div>
              <div className="absolute bottom-4 left-4 w-3 h-3 border-l-2 border-b-2 border-cyan-400"></div>
              <div className="absolute bottom-4 right-4 w-3 h-3 border-r-2 border-b-2 border-cyan-400"></div>
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ResumeDownloads
