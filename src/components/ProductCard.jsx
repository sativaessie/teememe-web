import { FiHeart, FiShoppingBag } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import "./ProductCard.css";

function ProductCard({ product, onNavigate }) {
  const { addToCart } = useCart();

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
          className="product-card-wishlist"
          aria-label={`Add ${product.name} to wishlist`}
        >
          <FiHeart size={17} />
        </button>

        <button
  type="button"
  className="product-card-image-button"
  onClick={() => onNavigate("product", product.category, product)}
>
  <img
    src={product.image}
    alt={product.name}
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
         <p className="product-card-price">
  {product.quoteOnly
    ? "REQUEST A QUOTE"
    : `KSh ${product.price.toLocaleString()}`}
</p>

      </div>

    </article>
  );
}

export default ProductCard;