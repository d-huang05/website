"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Download } from "lucide-react"

const publicationsData = [
  {
    id: 1,
    title: "Management of severe intraocular lens tilt using transsulcus retention sutures",
    authors: "Huang, D., Cervantes, L.",
    journal: "JCRS Online Case Reports",
    year: "2025",
    volume: "13",
    pages: "e00167",
    doi: "10.1097/j.jcro.0000000000000167",
    type: "Case Report",
    description:
      "Novel surgical technique for correcting severe scleral-fixated intraocular lens tilt using transsulcus retention sutures.",
    pdfFile: "/pdfs/huang_cervantes_2025_iol_tilt.pdf",
    filename: "huang_cervantes_2025_iol_tilt.pdf",
    preview:
      "This study presents a novel surgical technique using transsulcus retention sutures to treat severe intraocular lens tilt in patients lacking capsular support...",
    websiteUrl: "https://journals.lww.com/jcro/fulltext/2025/01000/management_of_severe_intraocular_lens_tilt_using.26.aspx",
  },
  {
    id: 2,
    title:
      "Racial and Socioeconomic Differences Correlate with Healthcare Disparities in Patients with Diabetic Retinopathy",
    authors: "Huang, D., Channamsetty, S., Verter, E., Huang, J.",
    journal: "International Journal of Ophthalmology & Visual Science",
    year: "2024",
    volume: "9(3)",
    pages: "30-39",
    doi: "10.11648/j.ijovs.20240903.11",
    type: "Research Article",
    description:
      "Analysis of healthcare disparities in diabetic retinopathy patients across racial and socioeconomic lines.",
    pdfFile: "/pdfs/huang_et_al_2024_diabetic_retinopathy_disparities.pdf",
    filename: "huang_et_al_2024_diabetic_retinopathy_disparities.pdf",
    preview:
      "This research demonstrates significant healthcare disparities in diabetic retinopathy presentation and outcomes across racial and socioeconomic groups...",
    websiteUrl: "https://www.sciencepublishinggroup.com/article/10.11648/j.ijovs.20240903.11",
  },
  {
    id: 3,
    title: "Severe Healthcare Disparities Arise in Patients with Diabetic Retinopathy",
    authors: "Huang, D., Channamsetty, S., Huang, J.",
    journal: "EC Ophthalmology",
    year: "2023",
    volume: "14(4)",
    pages: "3-7",
    doi: "10.1097/j.jcro.0000000000000167",
    type: "Research Article",
    description:
      "Retrospective analysis of 511 patients examining ethnic and socioeconomic disparities in diabetic retinopathy severity.",
    pdfFile: "/pdfs/huang_channamsetty_huang_2023_ec_ophthalmology.pdf",
    filename: "huang_channamsetty_huang_2023_ec_ophthalmology.pdf",
    preview:
      "A comprehensive study of 511 patients revealing that Black/African American and Hispanic patients present with more severe diabetic retinopathy...",
    websiteUrl: "https://ecronicon.net/ecop/severe-healthcare-disparities-arise-in-patients-with-diabetic-retinopathy",
  },
  {
    id: 4,
    title: "Innate immune biology in age-related macular degeneration",
    authors: "Ascunce, K., Dhodapkar, R. M., Huang, D., Hafler, B. P.",
    journal: "Frontiers in Cell and Developmental Biology",
    year: "2023",
    volume: "11",
    pages: "1118524",
    doi: "10.3389/fcell.2023.1118524",
    type: "Review Article",
    description:
      "Comprehensive review of innate immune system involvement in age-related macular degeneration pathophysiology.",
    pdfFile: "/pdfs/ascunce_et_al_2023_amd_innate_immunity.pdf",
    filename: "ascunce_et_al_2023_amd_innate_immunity.pdf",
    preview:
      "This review discusses the role of the innate immune system in AMD, exploring complement activation, microglial involvement, and therapeutic targets...",
    websiteUrl: "https://www.frontiersin.org/journals/cell-and-developmental-biology/articles/10.3389/fcell.2023.1118524/full",
  },
  {
    id: 5,
    title: "Effects of COVID-19 on Retina Practices and Patients",
    authors: "Verter, E., Coady, P., Huang, D., Huang, J.",
    journal: "Retina Today",
    year: "2020",
    volume: "15(5)",
    pages: "62-64",
    doi: "",
    type: "Survey Study",
    description: "Survey analysis of COVID-19's impact on retina practices and patient care delays.",
    pdfFile: "/pdfs/verter_et_al_2020_covid_retina_practices.pdf",
    filename: "verter_et_al_2020_covid_retina_practices.pdf",
    preview:
      "Survey of retina specialists revealing significant impacts of COVID-19 on practice volumes and patient outcomes due to delayed treatments...",
    websiteUrl: "https://retinatoday.com/articles/2020-july-aug/effects-of-covid-19-on-retina-practices-and-patients",
  },
]

function Publications() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPublication = (index) => {
    setCurrentIndex(index)
  }

  const downloadPDF = (publication) => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement("a")
    link.href = publication.pdfFile
    link.download = publication.filename
    link.target = "_blank"
    link.rel = "noopener noreferrer"

    // Append to body, click, and remove
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const navigateToWebsite = (url) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const getItemPosition = (index) => {
    const diff = index - currentIndex
    if (diff === 0) return { transform: "translateX(0) scale(1)", zIndex: 30, opacity: 1 }
    if (diff === 1 || diff === -(publicationsData.length - 1))
      return { transform: "translateX(60%) scale(0.8)", zIndex: 20, opacity: 0.6 }
    if (diff === -1 || diff === publicationsData.length - 1)
      return { transform: "translateX(-60%) scale(0.8)", zIndex: 20, opacity: 0.6 }
    return { transform: "translateX(0) scale(0.6)", zIndex: 10, opacity: 0.3 }
  }

  return (
    <section className="px-6 py-16 md:px-12 md:py-24">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative">
            <span className="relative z-10">PUBLICATIONS</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 blur-lg"></div>
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
        </div>

        {/* Publications carousel */}
        <div className="relative h-96 md:h-80">
          {/* Navigation arrows */}
          <button
            onClick={() => goToPublication((currentIndex - 1 + publicationsData.length) % publicationsData.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-40 p-3 bg-black bg-opacity-80 border border-cyan-500 border-opacity-30 rounded-lg text-cyan-400 hover:text-cyan-300 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => goToPublication((currentIndex + 1) % publicationsData.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-40 p-3 bg-black bg-opacity-80 border border-cyan-500 border-opacity-30 rounded-lg text-cyan-400 hover:text-cyan-300 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Publication cards */}
          <div className="relative w-full h-full flex items-center justify-center">
            {publicationsData.map((publication, index) => {
              const position = getItemPosition(index)
              return (
                <div
                  key={publication.id}
                  className="absolute w-80 md:w-96 transition-all duration-500 ease-in-out cursor-pointer"
                  style={position}
                  onClick={() => navigateToWebsite(publication.websiteUrl)}
                >
                  {/* Card glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 opacity-20 rounded-lg blur-sm"></div>

                  <div className="relative bg-black bg-opacity-90 backdrop-blur-sm border border-cyan-500 border-opacity-30 rounded-lg p-6 h-full">
                    {/* Type badge */}
                    <div className="inline-block px-3 py-1 bg-cyan-500 bg-opacity-20 border border-cyan-400 border-opacity-50 rounded-full text-cyan-300 text-xs font-mono mb-3">
                      {publication.type}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{publication.title}</h3>

                    {/* Authors */}
                    <p className="text-cyan-300 text-sm mb-2">{publication.authors}</p>

                    {/* Journal info */}
                    <div className="text-blue-200 text-sm mb-3">
                      <span className="font-semibold">{publication.journal}</span>
                      <span className="mx-1">•</span>
                      <span>{publication.year}</span>
                      {publication.volume && (
                        <>
                          <span className="mx-1">•</span>
                          <span>{publication.volume}</span>
                        </>
                      )}
                    </div>

                    {/* Preview */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">{publication.preview}</p>

                    {/* DOI and PDF download */}
                    <div className="flex items-center justify-between">
                      {publication.doi && (
                        <span className="text-xs text-gray-400 font-mono">DOI: {publication.doi}</span>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          downloadPDF(publication)
                        }}
                        className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm bg-cyan-500 bg-opacity-10 hover:bg-opacity-20 px-2 py-1 rounded border border-cyan-500 border-opacity-30 hover:border-opacity-50"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download PDF</span>
                      </button>
                    </div>

                    {/* Decorative corners */}
                    <div className="absolute top-4 left-4 w-3 h-3 border-l-2 border-t-2 border-cyan-400"></div>
                    <div className="absolute top-4 right-4 w-3 h-3 border-r-2 border-t-2 border-cyan-400"></div>
                    <div className="absolute bottom-4 left-4 w-3 h-3 border-l-2 border-b-2 border-cyan-400"></div>
                    <div className="absolute bottom-4 right-4 w-3 h-3 border-r-2 border-b-2 border-cyan-400"></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Publication indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {publicationsData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToPublication(index)}
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                index === currentIndex
                  ? "bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50"
                  : "bg-transparent border-cyan-500 border-opacity-50 hover:border-cyan-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Publications
