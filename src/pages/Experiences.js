"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronUp, ChevronDown, ArrowLeft, Eye, TrendingUp, Microscope, Users, Shield, Briefcase } from "lucide-react"
import { Link } from "react-router-dom"
import Navigation from "../components/Navigation"
import TronLines from "../components/TronLines"

const experiencesData = [
  {
    id: 1,
    title: "Machine Learning Analyst",
    company: "Stern Business Analytics Club",
    location: "New York, NY",
    period: "October 2025 - Present",
    type: "Current Position",
    icon: TrendingUp,
    description:
      "Learning the fundamental concepts of machine learning and its applications in business analytics through hands-on projects and collaboration with peers.",
    skills: ["Machine Learning", "Programing", "Data Set Processing", "Neural Net Training"],
  },
  {
    id: 2,
    title: "Ophthalmic Technician",
    company: "Union Square Eye Care",
    location: "New York, NY",
    period: "January 2025 - Present",
    type: "Current Position",
    icon: Eye,
    description:
      "Providing comprehensive ophthalmic technical support including patient care, diagnostic testing, and clinical assistance in a busy eye care practice.",
    skills: ["Ophthalmic Testing", "Patient Care", "Clinical Support", "Diagnostic Equipment", "Medical Documentation"],
  },
  {
    id: 3,
    title: "Quantitative Finance Team Member",
    company: "Stern Business Analytics Club",
    location: "New York, NY",
    period: "February 2025 - September 2025",
    type: "Quant Trading",
    icon: TrendingUp,
    description:
      "Member of the quantitative finance team, applying analytical skills to financial modeling and data analysis.",
    skills: ["Quantitative Analysis", "Financial Modeling", "Data Analysis"],
  },
  {
    id: 4,
    title: "Research Assistant",
    company: "Marcus Weck Lab at New York University",
    location: "New York, NY",
    period: "February 2025 - Present",
    type: "Research",
    icon: Microscope,
    description:
      "Conducting cutting-edge research in biochemistry and molecular biology under Dr. Marcus Weck's supervision.",
    skills: ["Biochemistry", "Molecular Biology", "Research Methods"],
  },
  {
    id: 5,
    title: "College Leader",
    company: "NYU College of Arts and Science",
    location: "New York, NY",
    period: "May 2024 – Present",
    type: "Leadership",
    icon: Users,
    description:
      "Serve as role model and mentor for incoming first-years. Collaborated with CAS professional advisor to facilitate weekly courses and mentored a cohort of 35 first-year students.",
    skills: ["Mentorship", "Leadership", "Community Building", "Academic Support"],
    achievements: [
      "Mentored 35 first-year students",
      "Hosted 6 Cohort Events",
      "Educated students on Academic Success, Personal Development, and Leadership",
    ],
  },
  {
    id: 6,
    title: "Lifeguard and Swim Instructor",
    company: "Jewish Community Center of Greater New Haven",
    location: "Woodbridge, CT",
    period: "June 2024 – August 2024",
    type: "Summer Position",
    icon: Shield,
    description: "Ensured water safety and provided swimming instruction to community members of all ages.",
    skills: ["Water Safety", "CPR/AED", "Instruction", "Emergency Response"],
  },
  {
    id: 7,
    title: "Project Manager Intern",
    company: "SenseTime SmartLife Solutions",
    location: "Abu Dhabi, UAE",
    period: "June 2023",
    type: "Internship",
    icon: Briefcase,
    description:
      "Managed AI-powered imaging services for 4 amusement parks and Qasr Al Watan. Coordinated team of 10 members and produced 5 Standard Operating Procedures.",
    skills: ["Project Management", "AI Technology", "Team Leadership", "Process Documentation"],
    achievements: [
      "Managed dozens of tasks daily for team of 10",
      "Produced 5 Standard Operating Procedures",
      "Provided hands-on AI product testing and troubleshooting",
    ],
  },
  {
    id: 8,
    title: "Research Assistant",
    company: "Brian Hafler Lab at Yale School of Medicine",
    location: "New Haven, CT",
    period: "June 2021 – August 2024",
    type: "Research",
    icon: Microscope,
    description:
      "Performed biochemical and molecular biology procedures investigating high-impact ocular diseases. Specialized in Age-Related Macular Degeneration research and COVID-19 retinal effects.",
    skills: [
      "Immunofluorescent Staining",
      "ELISA Assays",
      "Confocal Microscopy",
      "Single-nucleus Isolation",
      "Retinal Analysis",
    ],
    achievements: [
      "Investigated angiogenic effects of IGFBP2 in AMD retinas",
      "Spearheaded COVID-19 retinal microvasculature project",
      "Visualized amyloid-beta plaques through whole globe clearing",
      "Confirmed presence of senescence-associated secretory proteins",
    ],
  },
  {
    id: 9,
    title: "Ophthalmic Photographer",
    company: "New England Retina Associates",
    location: "Hamden, CT",
    period: "June 2020 – August 2021",
    type: "Clinical",
    icon: Eye,
    description:
      "Served over 50 patients daily, performed 100+ OCT scans daily using high-tech imaging machines for retinal diagnosis and treatment assistance.",
    skills: [
      "OCT Imaging",
      "Digital Fundus Photography",
      "Fluorescein Angiography",
      "Medical Scribing",
      "Patient Care",
    ],
    achievements: [
      "Served >50 patients per day",
      "Performed >100 OCT scans daily",
      "Trained other ophthalmic photographers and technicians",
      "Assisted with intravitreal injection preparation",
    ],
  },
]

function Experiences() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const timelineRefs = useRef([])
  const containerRef = useRef(null)

  // Initialize refs array
  useEffect(() => {
    timelineRefs.current = timelineRefs.current.slice(0, experiencesData.length)
  }, [])

  // Calculate which item should be focused based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return

      const container = containerRef.current
      if (!container) return

      const centerY = window.innerHeight / 2

      let closestIndex = 0
      let closestDistance = Number.POSITIVE_INFINITY

      timelineRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect()
          const itemCenterY = rect.top + rect.height / 2
          const distance = Math.abs(itemCenterY - centerY)

          if (distance < closestDistance) {
            closestDistance = distance
            closestIndex = index
          }
        }
      })

      setCurrentIndex(closestIndex)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [isScrolling])

  const scrollToIndex = (index) => {
    if (index < 0 || index >= experiencesData.length) return

    setIsScrolling(true)
    const targetRef = timelineRefs.current[index]

    if (targetRef) {
      const rect = targetRef.getBoundingClientRect()
      const offsetTop = window.pageYOffset + rect.top
      const centerOffset = window.innerHeight / 2 - rect.height / 2

      window.scrollTo({
        top: offsetTop - centerOffset,
        behavior: "smooth",
      })

      // Reduced timeout for faster response
      setTimeout(() => {
        setIsScrolling(false)
      }, 300)
    }
  }

  const handleArrowClick = (direction) => {
    if (direction === "up" && currentIndex > 0) {
      scrollToIndex(currentIndex - 1)
    } else if (direction === "down" && currentIndex < experiencesData.length - 1) {
      scrollToIndex(currentIndex + 1)
    }
  }

  const getItemOpacity = (index) => {
    const distance = Math.abs(index - currentIndex)
    if (distance === 0) return 1
    if (distance === 1) return 0.7
    if (distance === 2) return 0.4
    return 0.2
  }

  const getItemScale = (index) => {
    const distance = Math.abs(index - currentIndex)
    if (distance === 0) return 1
    if (distance === 1) return 0.95
    return 0.9
  }

  const getItemBlur = (index) => {
    const distance = Math.abs(index - currentIndex)
    if (distance === 0) return 0
    if (distance === 1) return 0.5
    return 1
  }

  return (
    <div className="min-h-screen bg-black relative">
      {/* Grid background pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <TronLines />
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
                <span className="relative z-10">EXPERIENCES</span>
                <span className="absolute inset-0 text-cyan-400 blur-sm animate-pulse">EXPERIENCES</span>
              </h1>
              <div className="w-32 h-px bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
            </div>
          </div>
        </header>

        {/* Timeline Container */}
        <div className="relative px-6 md:px-12 pb-32" ref={containerRef}>
          {/* Navigation Arrows */}
          <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20 flex flex-col gap-4">
            <button
              onClick={() => handleArrowClick("up")}
              disabled={currentIndex === 0}
              className="p-3 bg-black bg-opacity-80 border border-cyan-500 border-opacity-30 rounded-lg text-cyan-400 hover:text-cyan-300 hover:border-cyan-400 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed backdrop-blur-sm"
            >
              <ChevronUp className="w-6 h-6" />
            </button>
            <button
              onClick={() => handleArrowClick("down")}
              disabled={currentIndex === experiencesData.length - 1}
              className="p-3 bg-black bg-opacity-80 border border-cyan-500 border-opacity-30 rounded-lg text-cyan-400 hover:text-cyan-300 hover:border-cyan-400 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed backdrop-blur-sm"
            >
              <ChevronDown className="w-6 h-6" />
            </button>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto relative">
            {/* Central timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent h-full opacity-60"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {experiencesData.map((experience, index) => {
                const IconComponent = experience.icon
                return (
                  <div
                    key={experience.id}
                    ref={(el) => (timelineRefs.current[index] = el)}
                    className="relative transition-all duration-500 ease-out min-h-96 flex items-center py-8"
                    style={{
                      opacity: getItemOpacity(index),
                      transform: `scale(${getItemScale(index)})`,
                      filter: `blur(${getItemBlur(index)}px)`,
                    }}
                  >
                    {/* Content card */}
                    <div className={`relative w-full ${index % 2 === 0 ? "pr-1/2 mr-8" : "pl-1/2 ml-8"}`}>
                      <div className="relative">
                        {/* Card glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 opacity-20 rounded-lg blur-sm"></div>

                        <div className="relative bg-black bg-opacity-90 backdrop-blur-sm border border-cyan-500 border-opacity-30 rounded-lg p-6 md:p-8">
                          {/* Header section with icon */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              {/* Type badge */}
                              <div className="inline-block px-3 py-1 bg-cyan-500 bg-opacity-20 border border-cyan-400 border-opacity-50 rounded-full text-cyan-300 text-sm font-mono mb-4">
                                {experience.type}
                              </div>

                              {/* Title and company */}
                              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{experience.title}</h3>
                              <h4 className="text-lg text-cyan-300 mb-2">{experience.company}</h4>

                              {/* Location and period */}
                              <div className="flex flex-col md:flex-row md:items-center gap-2 text-blue-200">
                                <span>{experience.location}</span>
                                <span className="hidden md:block">•</span>
                                <span className="font-mono">{experience.period}</span>
                              </div>
                            </div>

                            {/* Role Icon */}
                            <div className="ml-6 flex-shrink-0">
                              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 bg-opacity-20 rounded-lg border border-cyan-400 border-opacity-30 flex items-center justify-center">
                                <IconComponent className="w-8 h-8 text-cyan-400" />
                              </div>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-gray-300 leading-relaxed mb-4">{experience.description}</p>

                          {/* Achievements */}
                          {experience.achievements && (
                            <div className="mb-4">
                              <h5 className="text-cyan-400 font-semibold mb-2">Key Achievements:</h5>
                              <ul className="list-disc list-inside text-gray-300 space-y-1">
                                {experience.achievements.map((achievement, i) => (
                                  <li key={i} className="text-sm">
                                    {achievement}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Skills */}
                          <div className="flex flex-wrap gap-2">
                            {experience.skills.map((skill, i) => (
                              <span
                                key={i}
                                className="px-2 py-1 bg-blue-500 bg-opacity-20 border border-blue-400 border-opacity-30 rounded text-blue-300 text-xs"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>

                          {/* Decorative corners */}
                          <div className="absolute top-4 left-4 w-3 h-3 border-l-2 border-t-2 border-cyan-400"></div>
                          <div className="absolute top-4 right-4 w-3 h-3 border-r-2 border-t-2 border-cyan-400"></div>
                          <div className="absolute bottom-4 left-4 w-3 h-3 border-l-2 border-b-2 border-cyan-400"></div>
                          <div className="absolute bottom-4 right-4 w-3 h-3 border-r-2 border-b-2 border-cyan-400"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Progress indicator */}
          <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-20">
            <div className="flex flex-col gap-2">
              {experiencesData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50"
                      : "bg-transparent border-cyan-500 border-opacity-50 hover:border-cyan-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experiences