
import {  Routes, Route,BrowserRouter } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import HeadTail from "./pages/HeadTail";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/head-tail" element={<HeadTail/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
