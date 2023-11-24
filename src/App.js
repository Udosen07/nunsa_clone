import { Routes, Route } from "react-router-dom";

import Home from "./Page/Home";
import Login from "./Page/Login"
import About from "./Page/About";
import Blog from "./Page/Blog";
import Executives from "./Page/Executives";
function App() {
  return (
    
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Excecutives" element={<Executives />} />
        </Routes>
  );
}

export default App;
