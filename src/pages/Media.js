import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import Navigation from "../components/Navigation"
import MediaCarousel from "../components/MediaCarousel"

// Reduced to 15 items for My Musts
const myMusts = [
  {
    title: "The Godfather",
    type: "Movie",
    wikipedia: "https://en.wikipedia.org/wiki/The_Godfather",
    image: "/images/media/the-godfather.jpg",
  },
  {
    title: "Breaking Bad",
    type: "TV Series",
    wikipedia: "https://en.wikipedia.org/wiki/Breaking_Bad",
    image: "/images/media/breaking-bad.jpg",
  },
  {
    title: "1984",
    type: "Book",
    wikipedia: "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four",
    image: "/images/media/1984.jpg",
  },
  {
    title: "The Last of Us",
    type: "Video Game",
    wikipedia: "https://en.wikipedia.org/wiki/The_Last_of_Us",
    image: "/images/media/the-last-of-us.jpg",
  },
  {
    title: "Kurzgesagt",
    type: "YouTube",
    wikipedia: "https://en.wikipedia.org/wiki/Kurzgesagt",
    image: "/images/media/kurzgesagt.jpg",
  },
  {
    title: "Pulp Fiction",
    type: "Movie",
    wikipedia: "https://en.wikipedia.org/wiki/Pulp_Fiction",
    image: "/images/media/pulp-fiction.jpg",
  },
  {
    title: "The Wire",
    type: "TV Series",
    wikipedia: "https://en.wikipedia.org/wiki/The_Wire",
    image: "/images/media/the-wire.jpg",
  },
  {
    title: "To Kill a Mockingbird",
    type: "Book",
    wikipedia: "https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird",
    image: "/images/media/to-kill-a-mockingbird.jpg",
  },
  {
    title: "Red Dead Redemption 2",
    type: "Video Game",
    wikipedia: "https://en.wikipedia.org/wiki/Red_Dead_Redemption_2",
    image: "/images/media/red-dead-redemption-2.jpg",
  },
  {
    title: "Veritasium",
    type: "YouTube",
    wikipedia: "https://en.wikipedia.org/wiki/Veritasium",
    image: "/images/media/veritasium.jpg",
  },
  {
    title: "The Shawshank Redemption",
    type: "Movie",
    wikipedia: "https://en.wikipedia.org/wiki/The_Shawshank_Redemption",
    image: "/images/media/shawshank-redemption.jpg",
  },
  {
    title: "True Detective",
    type: "TV Series",
    wikipedia: "https://en.wikipedia.org/wiki/True_Detective",
    image: "/images/media/true-detective.jpg",
  },
  {
    title: "Sapiens",
    type: "Book",
    wikipedia: "https://en.wikipedia.org/wiki/Sapiens:_A_Brief_History_of_Humankind",
    image: "/images/media/sapiens.jpg",
  },
  {
    title: "God of War",
    type: "Video Game",
    wikipedia: "https://en.wikipedia.org/wiki/God_of_War_(2018_video_game)",
    image: "/images/media/god-of-war.jpg",
  },
  {
    title: "3Blue1Brown",
    type: "YouTube",
    wikipedia: "https://en.wikipedia.org/wiki/3Blue1Brown",
    image: "/images/media/3blue1brown.jpg",
  },
]

const books = [
  {
    title: "1984",
    author: "George Orwell",
    wikipedia: "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four",
    image: "/images/media/books/1984.jpg",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    wikipedia: "https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird",
    image: "/images/media/books/to-kill-a-mockingbird.jpg",
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    wikipedia: "https://en.wikipedia.org/wiki/Sapiens:_A_Brief_History_of_Humankind",
    image: "/images/media/books/sapiens.jpg",
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    wikipedia: "https://en.wikipedia.org/wiki/Dune_(novel)",
    image: "/images/media/books/dune.jpg",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    wikipedia: "https://en.wikipedia.org/wiki/The_Great_Gatsby",
    image: "/images/media/books/great-gatsby.jpg",
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    wikipedia: "https://en.wikipedia.org/wiki/Brave_New_World",
    image: "/images/media/books/brave-new-world.jpg",
  },
]

const movies = [
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    wikipedia: "https://en.wikipedia.org/wiki/The_Godfather",
    image: "/images/media/movies/the-godfather.jpg",
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    wikipedia: "https://en.wikipedia.org/wiki/Pulp_Fiction",
    image: "/images/media/movies/pulp-fiction.jpg",
  },
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    wikipedia: "https://en.wikipedia.org/wiki/The_Shawshank_Redemption",
    image: "/images/media/movies/shawshank-redemption.jpg",
  },
  {
    title: "Goodfellas",
    director: "Martin Scorsese",
    wikipedia: "https://en.wikipedia.org/wiki/Goodfellas",
    image: "/images/media/movies/goodfellas.jpg",
  },
  {
    title: "Citizen Kane",
    director: "Orson Welles",
    wikipedia: "https://en.wikipedia.org/wiki/Citizen_Kane",
    image: "/images/media/movies/citizen-kane.jpg",
  },
  {
    title: "Casablanca",
    director: "Michael Curtiz",
    wikipedia: "https://en.wikipedia.org/wiki/Casablanca_(film)",
    image: "/images/media/movies/casablanca.jpg",
  },
]

const videoGames = [
  {
    title: "The Last of Us",
    developer: "Naughty Dog",
    wikipedia: "https://en.wikipedia.org/wiki/The_Last_of_Us",
    image: "/images/media/games/the-last-of-us.jpg",
  },
  {
    title: "Red Dead Redemption 2",
    developer: "Rockstar Games",
    wikipedia: "https://en.wikipedia.org/wiki/Red_Dead_Redemption_2",
    image: "/images/media/games/red-dead-redemption-2.jpg",
  },
  {
    title: "God of War",
    developer: "Santa Monica Studio",
    wikipedia: "https://en.wikipedia.org/wiki/God_of_War_(2018_video_game)",
    image: "/images/media/games/god-of-war.jpg",
  },
  {
    title: "The Witcher 3",
    developer: "CD Projekt Red",
    wikipedia: "https://en.wikipedia.org/wiki/The_Witcher_3:_Wild_Hunt",
    image: "/images/media/games/witcher-3.jpg",
  },
  {
    title: "Hades",
    developer: "Supergiant Games",
    wikipedia: "https://en.wikipedia.org/wiki/Hades_(video_game)",
    image: "/images/media/games/hades.jpg",
  },
  {
    title: "Celeste",
    developer: "Maddy Makes Games",
    wikipedia: "https://en.wikipedia.org/wiki/Celeste_(video_game)",
    image: "/images/media/games/celeste.jpg",
  },
]

const tvSeries = [
  {
    title: "Breaking Bad",
    creator: "Vince Gilligan",
    wikipedia: "https://en.wikipedia.org/wiki/Breaking_Bad",
    image: "/images/media/tv/breaking-bad.jpg",
  },
  {
    title: "The Wire",
    creator: "David Simon",
    wikipedia: "https://en.wikipedia.org/wiki/The_Wire",
    image: "/images/media/tv/the-wire.jpg",
  },
  {
    title: "True Detective",
    creator: "Nic Pizzolatto",
    wikipedia: "https://en.wikipedia.org/wiki/True_Detective",
    image: "/images/media/tv/true-detective.jpg",
  },
  {
    title: "The Sopranos",
    creator: "David Chase",
    wikipedia: "https://en.wikipedia.org/wiki/The_Sopranos",
    image: "/images/media/tv/the-sopranos.jpg",
  },
  {
    title: "Mad Men",
    creator: "Matthew Weiner",
    wikipedia: "https://en.wikipedia.org/wiki/Mad_Men",
    image: "/images/media/tv/mad-men.jpg",
  },
  {
    title: "Fargo",
    creator: "Noah Hawley",
    wikipedia: "https://en.wikipedia.org/wiki/Fargo_(TV_series)",
    image: "/images/media/tv/fargo.jpg",
  },
]

const youtubeChannels = [
  {
    title: "Kurzgesagt",
    creator: "Kurzgesagt Team",
    wikipedia: "https://en.wikipedia.org/wiki/Kurzgesagt",
    image: "/images/media/youtube/kurzgesagt.jpg",
  },
  {
    title: "Veritasium",
    creator: "Derek Muller",
    wikipedia: "https://en.wikipedia.org/wiki/Veritasium",
    image: "/images/media/youtube/veritasium.jpg",
  },
  {
    title: "3Blue1Brown",
    creator: "Grant Sanderson",
    wikipedia: "https://en.wikipedia.org/wiki/3Blue1Brown",
    image: "/images/media/youtube/3blue1brown.jpg",
  },
  {
    title: "CGP Grey",
    creator: "CGP Grey",
    wikipedia: "https://en.wikipedia.org/wiki/CGP_Grey",
    image: "/images/media/youtube/cgp-grey.jpg",
  },
  {
    title: "TED-Ed",
    creator: "TED",
    wikipedia: "https://en.wikipedia.org/wiki/TED-Ed",
    image: "/images/media/youtube/ted-ed.jpg",
  },
  {
    title: "Crash Course",
    creator: "Hank & John Green",
    wikipedia: "https://en.wikipedia.org/wiki/Crash_Course_(YouTube)",
    image: "/images/media/youtube/crash-course.jpg",
  },
]

function MediaCard({ item, showCreator = true }) {
  const creator = item.author || item.director || item.developer || item.creator || ""

  return (
    <a href={item.wikipedia} target="_blank" rel="noopener noreferrer" className="group relative block">
      {/* Card glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 opacity-20 rounded-lg blur-sm group-hover:opacity-30 transition-opacity duration-300"></div>

      <div className="relative bg-black bg-opacity-90 backdrop-blur-sm border border-cyan-500 border-opacity-30 rounded-lg p-4 h-full group-hover:border-cyan-400 group-hover:border-opacity-50 transition-all duration-300 group-hover:scale-105">
        {/* Image */}
        <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-lg border border-cyan-500 border-opacity-30">
          <img
            src={item.image || "/placeholder.svg?height=300&width=200"}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              e.target.src = "/placeholder.svg?height=300&width=200&text=" + encodeURIComponent(item.title)
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-300 line-clamp-2">
          {item.title}
        </h3>

        {/* Creator/Author */}
        {showCreator && creator && <p className="text-sm text-cyan-300 mb-2 line-clamp-1">{creator}</p>}

        {/* Type badge */}
        {item.type && (
          <div className="inline-block px-2 py-1 bg-blue-500 bg-opacity-20 border border-blue-400 border-opacity-30 rounded text-blue-300 text-xs">
            {item.type}
          </div>
        )}

        {/* Decorative corners */}
        <div className="absolute top-2 left-2 w-2 h-2 border-l border-t border-cyan-400 opacity-50"></div>
        <div className="absolute top-2 right-2 w-2 h-2 border-r border-t border-cyan-400 opacity-50"></div>
        <div className="absolute bottom-2 left-2 w-2 h-2 border-l border-b border-cyan-400 opacity-50"></div>
        <div className="absolute bottom-2 right-2 w-2 h-2 border-r border-b border-cyan-400 opacity-50"></div>
      </div>
    </a>
  )
}

function Media() {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Grid background pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-cyan-500 opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-blue-500 opacity-5 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
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
                <span className="relative z-10">MEDIA</span>
                <span className="absolute inset-0 text-cyan-400 blur-sm animate-pulse">MEDIA</span>
              </h1>
              <div className="w-24 h-px bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6"></div>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                A curated collection of my favorite books, movies, games, shows, and content that have shaped my
                perspective and interests.
              </p>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="px-6 md:px-12 pb-24">
          <div className="max-w-7xl mx-auto">
            {/* My Musts Section */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative">
                  <span className="relative z-10">MY MUSTS: THE BESTS OF THE BEST</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 blur-lg"></div>
                </h2>
                <div className="w-32 h-px bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6"></div>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  The absolute cream of the crop - 15 pieces of media that I consider essential experiences across all
                  categories.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {myMusts.map((item, index) => (
                  <MediaCard key={index} item={item} showCreator={false} />
                ))}
              </div>
            </section>

            {/* Individual Categories with Carousels */}
            <MediaCarousel title="BOOKS" items={books} />
            <MediaCarousel title="MOVIES" items={movies} />
            <MediaCarousel title="VIDEO GAMES" items={videoGames} />
            <MediaCarousel title="TV SERIES" items={tvSeries} />
            <MediaCarousel title="YOUTUBE CHANNELS" items={youtubeChannels} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Media
