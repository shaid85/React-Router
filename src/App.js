import { Routes,Route,Link } from "react-router-dom";
import './App.css'
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Error from "./components/Error";


const App = () => {
  return (
    <div>

<Navbar />
<div id="main">
    <Routes>
      <Route path="/React-Router" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Routes>
</div>    
<Footer />

    </div>
  );
}

export default App;
