import { useEffect } from 'react'; 
import { Routes, Route, useLocation } from 'react-router-dom'; 
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import About from "./pages/about";
import ServicesPage from "./pages/servicespage";
import Privacy from "./pages/privacy"; 
import Terms from "./pages/terms";    

function App() {
  const { pathname } = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Navbar />
      <Routes>

        <Route path="/" element={<Hero />} />
        <Route path="/tentang" element={<About />} />
        <Route path="/layanan" element={<ServicesPage />} />
        <Route path="/privasi" element={<Privacy />} />
        <Route path="/syarat-ketentuan" element={<Terms />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;