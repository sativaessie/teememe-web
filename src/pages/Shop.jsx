import "./Shop.css";
import { useEffect, useState } from "react";
import shopCatalogue from "../data/shopCatalogue";
import ProductCard from "../components/ProductCard";



function Shop({ initialCategory = "ALL", onNavigate }) {
  const [activeCategory, setActiveCategory] = useState(
  (initialCategory || "ALL").toUpperCase()
);
  const categories = [
    "ALL",
    "STATEMENT TEES",
    "KENYAN VIBES",
    "WOMEN",
    "MEN",
    "MOMENTS",
    "FUNNY & RELATABLE",
    "CORPORATE & BULK",
  ];

 useEffect(() => {
  setActiveCategory((initialCategory || "ALL").toUpperCase());
}, [initialCategory]);
  const filteredProducts =
  activeCategory === "ALL"
    ? shopCatalogue
    : shopCatalogue.filter(
        (product) =>
         
          product.category?.trim().toUpperCase() === activeCategory.trim()
);

        console.log(
  "KENYAN VIBES PRODUCTS:",
  filteredProducts
    .filter((product) => product.category === "Kenyan Vibes")
    .map((product) => ({
      id: product.id,
      name: product.name,
      image: product.image,
    }))
);

  const handleCategoryChange = (category) => {
  setActiveCategory(category.toUpperCase());

    document
      .getElementById("shop-products")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <main className="shop-page">

      {/* =====================================================
          SHOP HERO
      ===================================================== */}

     <section className="shop-hero">

  {/* FULL HERO BACKGROUND */}
  <div className="shop-hero-background">
    <img
      src="/images/shop-hero-new-1.webp"
      alt="TeeMeme collection"
    />
    <div className="shop-hero-overlay"></div>
  </div>

  {/* HERO CONTENT */}
  <div className="shop-hero-content">

    <p className="shop-eyebrow">
      THE TEEMEME COLLECTION
    </p>

    <h1>
      FIND YOUR
      <br />
      NEXT <span>STATEMENT.</span>
    </h1>

    <p className="shop-intro">
      Not everything you wear needs an explanation.
      Some pieces just say it for you. Explore
      statement tees, Kenyan energy, everyday pieces
      and more.
    </p>

    <div className="shop-hero-meta">
      <span>TEES</span>
      <span>HOODIES</span>
      <span>CAPS</span>
      <span>CUSTOM</span>
    </div>

    <button
      type="button"
      className="shop-hero-button"
      onClick={() =>
        document
          .getElementById("shop-products")
          ?.scrollIntoView({
            behavior: "smooth",
          })
      }
    >
      EXPLORE THE COLLECTION
      <span>↘</span>
    </button>

  </div>

  {/* FLOATING CAMPAIGN IMAGES */}
  <div className="shop-hero-images">

    <div className="shop-hero-image shop-hero-image-two">
      <img
        src="/images/shop-hero-new-2.webp"
        alt="TeeMeme apparel"
      />
    </div>

    <div className="shop-hero-image shop-hero-image-three">
      <img
        src="/images/shop-hero-new-3.webp"
        alt="TeeMeme apparel"
      />
    </div>

    <div className="shop-hero-image shop-hero-image-four">
      <img
        src="/images/shop-hero-new-4.webp"
        alt="TeeMeme collection"
      />
    </div>

  </div>

</section> 


      {/* =====================================================
          CATEGORY NAVIGATION
      ===================================================== */}

      <section className="shop-category-section">

        <div className="shop-category-top">

          <div>
            <p className="shop-eyebrow">
              PICK YOUR MOOD
            </p>

            <h2>
              SHOP BY <span>VIBE.</span>
            </h2>
          </div>

          <p className="shop-category-note">
            One collection. Different personalities.
          </p>

        </div>


        <div className="shop-category-bar">

          {categories.map((category) => (

            <button
              key={category}
              type="button"
              className={`shop-category ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() =>
                handleCategoryChange(category)
              }
            >
              {category}
            </button>

          ))}

        </div>

      </section>


      {/* =====================================================
          PRODUCTS
      ===================================================== */}

      <section
        id="shop-products"
        className="shop-products"
      >

        <div className="shop-products-heading">

          <div>

            <p className="shop-eyebrow">
              THE COLLECTION
            </p>

            <h2>
              FIND YOUR <span>TEE.</span>
            </h2>

          </div>

          <div className="shop-results">

            <span className="shop-active-category">
              {activeCategory}
            </span>

            <span className="shop-product-count">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1
                ? "PRODUCT"
                : "PRODUCTS"}
            </span>

          </div>

        </div>


        {filteredProducts.length > 0 ? (

          <div className="shop-product-grid">

           {filteredProducts.map((product) => 
           (
  <ProductCard
    key={product.id}
    product={product}
    onNavigate={onNavigate}
  />
))}

          </div>

        ) : (

          <div className="shop-empty">

            <span>00</span>

            <h3>
              NOTHING HERE
              <br />
              <span>YET.</span>
            </h3>

            <p>
              We're adding more TeeMeme pieces.
              Try another collection.
            </p>

            <button
              type="button"
              onClick={() => setActiveCategory("ALL")}
            >
              VIEW EVERYTHING ↗
            </button>

          </div>

        )}

      </section>


      {/* =====================================================
          HOW TO ORDER
      ===================================================== */}

      <section className="shop-how-to">

        <div className="shop-how-heading">

          <p className="shop-eyebrow">
            SIMPLE AS THAT
          </p>

          <h2>
            HOW TO
            <br />
            <span>ORDER.</span>
          </h2>

          <p>
            Found something you like? Here's how to
            get it from your screen to your wardrobe.
          </p>

        </div>


        <div className="shop-how-steps">

          <article className="shop-how-step">

            <span>01</span>

            <div>
              <h3>PICK YOUR PIECE</h3>
              <p>
                Find the tee, hoodie, cap or other piece
                you want from the collection.
              </p>
            </div>

          </article>


          <article className="shop-how-step">

            <span>02</span>

            <div>
              <h3>CHOOSE YOUR SIZE</h3>
              <p>
                Select the size and quantity that works
                for you before adding it to your bag.
              </p>
            </div>

          </article>


          <article className="shop-how-step">

            <span>03</span>

            <div>
              <h3>ADD TO YOUR BAG</h3>
              <p>
                Review what you're buying and make sure
                everything looks right.
              </p>
            </div>

          </article>


          <article className="shop-how-step">

            <span>04</span>

            <div>
              <h3>CHECK OUT</h3>
              <p>
                Enter your details, confirm your order
                and we'll take it from there.
              </p>
            </div>

          </article>

        </div>

      </section>


      {/* =====================================================
          CUSTOM CTA
      ===================================================== */}

      <section className="shop-custom-cta">

        <div>

          <p className="shop-eyebrow">
            CAN'T FIND IT?
          </p>

          <h2>
            MAKE IT
            <br />
            <span>YOUR OWN.</span>
          </h2>

          <p>
            Got a phrase, artwork, inside joke or idea
            living rent-free in your head? Put it on a tee.
          </p>

        </div>

       <button
  type="button"
  className="shop-custom-button"
  onClick={() => onNavigate("customize")}
>
  CREATE YOUR OWN
  <span>↗</span>
</button>

      </section>

    </main>
  );
}

export default Shop;