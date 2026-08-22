import { useState } from "react";

import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Featured from "./components/Featured";
import Deals from "./components/Deals";
import CustomPrinting from "./components/CustomPrinting";
import OurCreations from "./components/OurCreations";
import Corporate from "./components/Corporate";
import WhyTeeMeme from "./components/WhyTeeMeme";
import BehindBrand from "./components/BehindBrand";
import About from "./components/About";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Customize from "./pages/Customize";
import CorporatePage from "./pages/CorporatePage";
import AboutPage from "./pages/AboutPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentCategory, setCurrentCategory] = useState("ALL");

  const goToPage = (page, category = "ALL") => {
    setCurrentPage(page);
    setCurrentCategory(category);
    window.scrollTo(0, 0);
  };

  return (
    <div className="site">

      <AnnouncementBar />

      <Navbar onNavigate={goToPage} />

      {currentPage === "home" && (
  <>
    <main>
      <Hero onNavigate={goToPage} />
     <Categories onNavigate={goToPage} />
       <Featured onNavigate={goToPage} />
   <Deals onNavigate={goToPage} />
    <CustomPrinting onNavigate={goToPage} />
      <OurCreations />
      <Corporate onNavigate={goToPage} />
      <WhyTeeMeme />
      <BehindBrand />
      <About />
    </main>

    <Footer />
  </>
)}

{currentPage === "shop" && (
  <>
    <Shop
      initialCategory={currentCategory}
      onNavigate={goToPage}
    />
    <Footer />
  </>
)}

{currentPage === "cart" && (
  <>
    <Cart />
    <Footer />
  </>
)}

{currentPage === "custom" && (
  <>
    <Customize />
    <Footer />
  </>
)}

{currentPage === "customize" && (
  <>
    <Customize />
    <Footer />
  </>
)}

{currentPage === "corporate" && (
  <>
    <CorporatePage />
    <Footer />
  </>
)}

{currentPage === "about" && (
  <>
    <AboutPage />
    <Footer />
  </>
)}

    </div>
  );
}

export default App;