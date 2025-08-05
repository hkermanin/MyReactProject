
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Navbar from "./pages/nav";
import Profile from "./pages/profile";

export default function App() {


  return (
   <div className="app">
    <Router>
      <h1>React Router</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile/:name?" element={<Profile />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <h1>This is Footer</h1>
    </Router>
   </div>
  );
}
