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

  // AUTOMATIC PRODUCT REFERENCE
  const getProductReference = () => {
    const id = product.id || "";

    if (id.startsWith("women-tee-")) {
      return `WM-${id.replace("women-tee-", "").padStart(2, "0")}`;
    }

    if (id.startsWith("women-combo-")) {
      return `WM-C${id.replace("women-combo-", "")}`;
    }

    if (id.startsWith("kenyan-vibes-")) {
      const number = id.replace("kenyan-vibes-", "");

      if (number === "combo") {
        return "KV-C1";
      }

      return `KV-${number.padStart(2, "0")}`;
    }

    if (id.startsWith("statement-tee-")) {
      return `ST-${id
        .replace("statement-tee-", "")
        .padStart(2, "0")}`;
    }

    if (id.startsWith("men-tee-")) {
      return `MN-${id
        .replace("men-tee-", "")
        .padStart(2, "0")}`;
    }

    if (id === "men-cap-1") return "MN-C1";
    if (id === "men-cap-2") return "MN-C2";

    if (id === "men-hoodie-1") return "MN-H1";
    if (id === "men-hoodie-2") return "MN-H2";

    if (id.startsWith("moments-")) {
      const number = id.replace("moments-", "");

      if (number === "combo") {
        return "MO-C1";
      }

      return `MO-${number.padStart(2, "0")}`;
    }

    if (id.startsWith("funny-")) {
      const number = id.replace("funny-", "");

      if (number === "combo") {
        return "FR-C1";
      }

      return `FR-${number.padStart(2, "0")}`;
    }

    if (id.startsWith("corporate-tee-")) {
      return `CB-${id
        .replace("corporate-tee-", "")
        .padStart(2, "0")}`;
    }

    if (id === "corporate-cap") {
      return "CB-C1";
    }

    if (id.startsWith("corporate-hoodie-")) {
      return `CB-H${id.replace("corporate-hoodie-", "")}`;
    }

    return null;
  };

  const productReference = getProductReference();

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

          {productReference && (
            <span className="product-card-reference">
             {productReference}
            </span>
          )}

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