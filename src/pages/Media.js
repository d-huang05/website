import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import Navigation from "../components/Navigation"
import MediaCarousel from "../components/MediaCarousel"

// Reduced to 15 items for My Musts
const myMusts = [
  {
    title: "Spirited Away",
    type: "Movie",
    wikipedia: "https://en.wikipedia.org/wiki/Spirited_Away",
    image: "/images/media/spirited-away.jpg",
  },
  {
    title: "Hollow Knight",
    type: "Video Game",
    wikipedia: "https://en.wikipedia.org/wiki/Hollow_Knight",
    image: "/images/media/hollow-knight.jpg",
  },
  {
    title: "The Three-Body Problem",
    type: "Book",
    wikipedia: "https://en.wikipedia.org/wiki/The_Three-Body_Problem_(novel)",
    image: "/images/media/three-body.jpg",
  },
  {
    title: "Tuesdays with Morrie",
    type: "Book",
    wikipedia: "https://en.wikipedia.org/wiki/Tuesdays_with_Morrie",
    image: "/images/media/tuesdays-with-morrie.jpg",
  },
  {
    title: "The Iron Giant",
    type: "Movie",
    wikipedia: "https://en.wikipedia.org/wiki/The_Iron_Giant",
    image: "/images/media/the-iron-giant.jpg",
  },
  {
    title: "The Egg - A Short Story",
    type: "YouTube Video",
    wikipedia: "https://www.youtube.com/watch?v=h6fcK_fRYaI",
    image: "/images/media/the-egg.jpg",
  },
  {
    title: "Undertale",
    type: "Video Games",
    wikipedia: "https://en.wikipedia.org/wiki/Undertale",
    image: "/images/media/undertale.jpg",
  },
  {
    title: "Avatar: The Last Airbender",
    type: "TV Series",
    wikipedia: "https://en.wikipedia.org/wiki/Avatar:_The_Last_Airbender",
    image: "/images/media/atla.jpg",
  },
  {
    title: "Steven Universe",
    type: "TV Series",
    wikipedia: "https://en.wikipedia.org/wiki/Steven_Universe",
    image: "/images/media/steven-universe.jpg",
  },
  {
    title: "Gravity Falls",
    type: "TV Series",
    wikipedia: "https://en.wikipedia.org/wiki/Gravity_Falls",
    image: "/images/media/gravity-falls.jpg",
  },
  {
    title: "The (Second) Deadliest Virus",
    type: "YouTube Video",
    wikipedia: "https://www.youtube.com/watch?v=Kr57ax0OWMk&t=1s",
    image: "/images/media/variola.jpg",
  },
  {
    title: "The Beauty of Games With Dead Worlds",
    type: "Video Games",
    wikipedia: "https://www.youtube.com/watch?v=58lztpgwxuk",
    image: "/images/media/the-beauty-of-games.jpg",
  },
  {
    title: "When Breath Becomes Air",
    type: "Book",
    wikipedia: "https://en.wikipedia.org/wiki/When_Breath_Becomes_Air",
    image: "/images/media/when-breath-becomes-air.jpg",
  },
  {
    title: "How to Train Your Dragon",
    type: "Movie",
    wikipedia: "https://en.wikipedia.org/wiki/How_to_Train_Your_Dragon_(2010_film)",
    image: "/images/media/httyd.jpg",
  },
  {
    title: "Minecraft",
    type: "Minecraft",
    wikipedia: "https://en.wikipedia.org/wiki/Minecraft",
    image: "/images/media/minecraft.jpg",
  },
]

const books = [
  {
    title: "Tuesdays with Morrie",
    author: "Mitch Albom",
    wikipedia: "https://en.wikipedia.org/wiki/Tuesdays_with_Morrie",
    image: "/images/media/tuesdays-with-morrie.jpg",
  },
  {
    title: "When Breath Becomes Air",
    author: "Paul Kalanithi",
    wikipedia: "https://en.wikipedia.org/wiki/When_Breath_Becomes_Air",
    image: "/images/media/when-breath-becomes-air.jpg",
  },
  {
    title: "The Three-Body Problem",
    author: "Liu Cixin",
    wikipedia: "https://en.wikipedia.org/wiki/The_Three-Body_Problem_(novel)",
    image: "/images/media/three-body.jpg",
  }
]

const movies = [
  {
    title: "Spirited Away",
    director: "Hayao Miyazaki",
    wikipedia: "https://en.wikipedia.org/wiki/Spirited_Away",
    image: "/images/media/spirited-away.jpg",
  },
  {
    title: "The Iron Giant",
    director: "Brad Bird",
    wikipedia: "https://en.wikipedia.org/wiki/The_Iron_Giant",
    image: "/images/media/the-iron-giant.jpg",
  },
  {
    title: "How to Train Your Dragon",
    director: "Dean DeBlois, Chris Sanders",
    wikipedia: "https://en.wikipedia.org/wiki/How_to_Train_Your_Dragon_(2010_film)",
    image: "/images/media/httyd.jpg",
  },
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    wikipedia: "https://en.wikipedia.org/wiki/The_Shawshank_Redemption",
    image: "/images/media/shawshank-redemption.jpg",
  },
]

const videoGames = [
  {
    title: "Hollow Knight",
    developer: "Team Cherry",
    wikipedia: "https://en.wikipedia.org/wiki/Hollow_Knight",
    image: "/images/media/hollow-knight.jpg",
  },
  {
    title: "Undertale",
    developer: "Toby Fox",
    wikipedia: "https://en.wikipedia.org/wiki/Undertale",
    image: "/images/media/undertale.jpg",
  },
  {
    title: "Minecraft",
    developer: "Mojang Studios",
    wikipedia: "https://en.wikipedia.org/wiki/Minecraft",
    image: "/images/media/minecraft.jpg",
  },
]

const tvSeries = [
  {
    title: "Avatar: The Last Airbender",
    creator: "Michael Dante DiMartino, Bryan Konietzko",
    wikipedia: "https://en.wikipedia.org/wiki/Avatar:_The_Last_Airbender",
    image: "/images/media/atla.jpg",
  },
  {
    title: "Gravity Falls",
    creator: "Alex Hirsch",
    wikipedia: "https://en.wikipedia.org/wiki/Gravity_Falls",
    image: "/images/media/gravity-falls.jpg",
  },
  {
    title: "Steven Universe",
    creator: "Rebecca Sugar",
    wikipedia: "https://en.wikipedia.org/wiki/Steven_Universe",
    image: "/images/media/steven-universe.jpg",
  },
]

const youtubeVideos = [
  {
    title: "The Egg - A Short Story",
    creator: "Kurzgesagt",
    wikipedia: "https://www.youtube.com/watch?v=h6fcK_fRYaI",
    image: "/images/media/the-egg.jpg",
  },
  {
    title: "The (Second) Deadliest Virus",
    creator: "Kurzgesagt",
    wikipedia: "https://www.youtube.com/watch?v=Kr57ax0OWMk&t=1s",
    image: "/images/media/variola.jpg",
  },
  {
    title: "The Beauty of Games With Dead Worlds",
    creator: "Curious Archive",
    wikipedia: "https://www.youtube.com/watch?v=58lztpgwxuk",
    image: "/images/media/the-beauty-of-games.jpg",
  },
  {
    title: "nothing, except everything.",
    creator: "Wesley Wang",
    wikipedia: "https://www.youtube.com/watch?v=hif5eI5pBxo",
    image: "/images/media/nothing-except-everything.jpg",
  },
  {
    title: "Games that Make You Part of the Ecosystem",
    creator: "Curious Archive",
    wikipedia: "https://www.youtube.com/watch?v=ZFBUFFr4GmQ",
    image: "/images/media/games-ecosystem.jpg",
  },
  {
    title: "our conception of love is messed up.",
    creator: "oliSUNvia",
    wikipedia: "https://www.youtube.com/watch?v=jcbEiZQ9B7o",
    image: "/images/media/conception-love.jpg",
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
                  15 pieces of media that I recommend that everyone experiences atleast once, across all
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
            <MediaCarousel title="YOUTUBE VIDEOS" items={youtubeVideos} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Media
