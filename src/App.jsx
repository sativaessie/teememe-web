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
import About from "./components/About";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Customize from "./pages/Customize";
import CorporatePage from "./pages/CorporatePage";
import AboutPage from "./pages/AboutPage";
import Terms from "./pages/Terms";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
const [currentCategory, setCurrentCategory] = useState("ALL");
const [selectedProduct, setSelectedProduct] = useState(null);

     const goToPage = (page, category = "ALL", product = null) => {
  setCurrentPage(page);
  setCurrentCategory(category);
  setSelectedProduct(product);
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
      <About />
    </main>

        <Footer onNavigate={goToPage} />
  </>
)}

{currentPage === "shop" && (
  <>
    <Shop
      initialCategory={currentCategory}
      onNavigate={goToPage}
    />
  <Footer onNavigate={goToPage} />
  </>
)}

{currentPage === "product" && (
  <>
    <ProductDetails
      product={selectedProduct}
      onNavigate={goToPage}
    />
    <Footer onNavigate={goToPage} />
  </>
)}

{currentPage === "cart" && (
  <>
    <Cart />
  <Footer onNavigate={goToPage} />
  </>
)}

{currentPage === "custom" && (
  <>
    <Customize />
    <Footer onNavigate={goToPage} />
  </>
)}

{currentPage === "customize" && (
  <>
    <Customize />
    <Footer onNavigate={goToPage} />
  </>
)}

{currentPage === "corporate" && (
  <>
    <CorporatePage />
   <Footer onNavigate={goToPage} />
  </>
)}

{currentPage === "about" && (
  <>
    <AboutPage />
    <Footer onNavigate={goToPage} />
  </>
)}

{currentPage === "terms" && (
  <>
    <Terms />
    <Footer onNavigate={goToPage} />
  </>
)}

    </div>
  );
}

export default App;