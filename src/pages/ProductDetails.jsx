import { useState } from "react";
import { FiArrowLeft, FiHeart, FiMinus, FiPlus, FiShoppingBag } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import "./ProductDetails.css";

function ProductDetails({ product, onNavigate }) {
  const { addToCart } = useCart();
  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <main className="product-details-empty">
        <h2>PRODUCT NOT FOUND</h2>

        <button onClick={() => onNavigate("shop")}>
          BACK TO SHOP
        </button>
      </main>
    );
  }

  const handleAddToBag = () => {
    addToCart({
      ...product,
      selectedSize: size,
      quantity,
    });

    onNavigate("cart");
  };

  return (
    <main className="product-details-page">

      <button
        type="button"
        className="product-details-back"
        onClick={() => onNavigate("shop", product.category)}
      >
        <FiArrowLeft />
        BACK TO SHOP
      </button>

      <section className="product-details">

        <div className="product-details-image">
          {product.badge && (
            <span className="product-details-badge">
              {product.badge}
            </span>
          )}

          <button
            type="button"
            className="product-details-wishlist"
            aria-label="Add to wishlist"
          >
            <FiHeart />
          </button>

          <img
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className="product-details-info">

          <p className="product-details-category">
            {product.category}
          </p>

          <h1>{product.name}</h1>

          <p className="product-details-price">
            {product.quoteOnly
              ? "REQUEST A QUOTE"
              : `KSh ${product.price.toLocaleString()}`}
          </p>

          <div className="product-details-divider" />

          {!product.quoteOnly && (
            <>
              <div className="product-details-option">
                <div className="product-details-option-header">
                  <span>SELECT SIZE</span>
                  <span>SIZE GUIDE</span>
                </div>

                <div className="product-details-sizes">
                  {["XS", "S", "M", "L", "XL", "XXL"].map(
                    (itemSize) => (
                      <button
                        key={itemSize}
                        type="button"
                        className={
                          size === itemSize ? "selected" : ""
                        }
                        onClick={() => setSize(itemSize)}
                      >
                        {itemSize}
                      </button>
                    )
                  )}
                </div>
              </div>

              <div className="product-details-option">
                <span>QUANTITY</span>

                <div className="product-details-quantity">
                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((current) =>
                        Math.max(1, current - 1)
                      )
                    }
                  >
                    <FiMinus />
                  </button>

                  <span>{quantity}</span>

                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((current) => current + 1)
                    }
                  >
                    <FiPlus />
                  </button>
                </div>
              </div>

              <button
                type="button"
                className="product-details-add"
                onClick={handleAddToBag}
              >
                <FiShoppingBag />
                ADD TO BAG
                <span>↗</span>
              </button>
            </>
          )}

          {product.quoteOnly && (
            <button
              type="button"
              className="product-details-add"
              onClick={() => onNavigate("corporate")}
            >
              REQUEST A CORPORATE QUOTE
              <span>↗</span>
            </button>
          )}

          <div className="product-details-note">
            <strong>TEE MEME QUALITY</strong>
            <p>
              Made to be worn, remembered and talked about.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default ProductDetails;