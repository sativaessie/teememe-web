import { FiHeart, FiShoppingBag } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import "./ProductCard.css";

function ProductCard({ product, onNavigate }) {
  const { addToCart } = useCart();

  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const savedFavourites =
      JSON.parse(localStorage.getItem("teememe-favourites")) || [];

    setIsFavourite(
      savedFavourites.some((item) => item.id === product.id)
    );
  }, [product.id]);

  const handleFavourite = (e) => {
    e.stopPropagation();

    const savedFavourites =
      JSON.parse(localStorage.getItem("teememe-favourites")) || [];

    if (isFavourite) {
      const updatedFavourites = savedFavourites.filter(
        (item) => item.id !== product.id
      );

      localStorage.setItem(
        "teememe-favourites",
        JSON.stringify(updatedFavourites)
      );

      setIsFavourite(false);
    } else {
      const updatedFavourites = [...savedFavourites, product];

      localStorage.setItem(
        "teememe-favourites",
        JSON.stringify(updatedFavourites)
      );

      setIsFavourite(true);
    }
  };

  return (
    <article className="product-card">

      {/* PRODUCT IMAGE */}

      <div className="product-card-image">

        {product.badge && (
          <span className="product-card-badge">
            {product.badge}
          </span>
        )}

        <button
          type="button"
          className={`product-card-wishlist ${
            isFavourite ? "is-favourite" : ""
          }`}
          aria-label={
            isFavourite
              ? `Remove ${product.name} from wishlist`
              : `Add ${product.name} to wishlist`
          }
          onClick={handleFavourite}
        >
          <FiHeart
            size={17}
            fill={isFavourite ? "currentColor" : "none"}
          />
        </button>

        <button
          type="button"
          className="product-card-image-button"
          onClick={() =>
            onNavigate("product", product.category, product)
          }
        >
          <img
            src={product.image}
            alt={product.name}
            onError={(e) => {
              console.log(
                "BROKEN IMAGE:",
                product.id,
                product.image
              );
            }}
          />
        </button>

        <button
          type="button"
          className="product-card-cart"
          onClick={() => addToCart(product)}
        >
          <FiShoppingBag size={16} />
          <span>ADD TO BAG</span>
          <span className="product-card-cart-arrow">↗</span>
        </button>

      </div>

      {/* PRODUCT INFORMATION */}

      <div className="product-card-info">

        <div className="product-card-details">

          <p className="product-card-category">
            {product.category}
          </p>

          <h3 className="product-card-name">
            {product.name}
          </h3>

        </div>

        {product.quoteOnly ? (
  <button
    type="button"
    className="product-card-price product-card-quote"
    onClick={() => onNavigate("corporate")}
  >
    REQUEST A QUOTE
  </button>
) : (
  <p className="product-card-price">
    KSh {product.price.toLocaleString()}
  </p>
)}
      </div>

    </article>
  );
}

export default ProductCard;