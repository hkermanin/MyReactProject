
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Navbar from "./pages/nav";
import Profile from "./pages/profile";
import { useState } from "react";
import { ProfileContext } from "./context/profilecontext";
import Cat from "./pages/cat";

import {QueryClient, QueryClientProvider} from 'react-query';
import Counter from "./pages/counter";

export default function App() {

  const [name, setName] = useState('Hossein');

  const client = new QueryClient({defaultOptions:{
    queries:{refetchOnWindowFocus:false}
  }});


  return (
    <QueryClientProvider client={client}>
    
    <ProfileContext.Provider value={{name, setName}}>
   <div className="app">
    <Router>
      <h1>React Router</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat" element={<Cat />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile/:name?" element={<Profile />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <div className="footer">
      
      <h1>This is Footer</h1>
      </div>
    </Router>
   </div>
    </ProfileContext.Provider>  
      </QueryClientProvider>
  );
}
