import Home from "./Components/Home";
import About from "./Components/About";
import { Routes, Route } from "react-router-dom";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
import Privacy from "./Components/Privacy"
import Faqs from "./Components/Faqs"
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
    return (
        <>
        <Navbar/>   
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/About" element={<About />} /> */}
                {/* <Route path="/Gallery" element={<Gallery/>} /> */}
                {/* <Route path="/Contact" element={<Contact/>} /> */}
                {/* <Route path="/Blog" element={<Blog/>} /> */}
                {/* <Route path="/PrivacyPolicy" element={<Privacy/>} /> */}
                {/* <Route path="/FAQs" element={<Faqs/>} /> */}
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
