import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Experiences from "./pages/Experiences"
import Friends from "./pages/Friends"
import Media from "./pages/Media"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </Router>
  )
}

export default App
