import { Routes, Route } from "react-router-dom";

import Home from "./Page/Home";
import Login from "./Page/Login"
function App() {
  return (
    
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
  );
}

export default App;
