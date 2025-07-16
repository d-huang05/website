function About() {
  return (
    <section className="px-6 py-16 md:px-12 md:py-24">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative">
            <span className="relative z-10">ABOUT ME</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 blur-lg"></div>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
        </div>

        {/* Content card */}
        <div className="relative">
          {/* Card border glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 opacity-20 rounded-lg blur-sm"></div>

          <div className="relative bg-black bg-opacity-80 backdrop-blur-sm border border-cyan-500 border-opacity-30 rounded-lg p-8 md:p-12">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg md:text-xl">
                Welcome to my little corner of the internet. I’m a premed student at New 
                York University, majoring in Biochemistry with minors in Mathematics and 
                Business Studies. In the medical field, I currently have the most experience 
                with ophthalmology, specifically retina, but I’m also open to exploring 
                other specialties as well.
              </p>

              <p className="text-lg md:text-xl">
                Outside of the classroom, I keep in shape by running, playing basketball 
                (and other sports occasionally) and lifting weights. I’m also interested 
                in illuminating the various ways that disparities arise in our healthcare 
                system, understanding the vast and varied applications of AI, and fully 
                realizing how different mediums can used to tell compelling stories. 
                Feel free to poke around this digital representation of my brain.
              </p>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-3 h-3 border-l-2 border-t-2 border-cyan-400"></div>
            <div className="absolute top-4 right-4 w-3 h-3 border-r-2 border-t-2 border-cyan-400"></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 border-l-2 border-b-2 border-cyan-400"></div>
            <div className="absolute bottom-4 right-4 w-3 h-3 border-r-2 border-b-2 border-cyan-400"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
