import "./Cart.css";
import { FiMinus, FiPlus, FiTrash2, FiArrowLeft } from "react-icons/fi";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    cartTotal,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <main className="cart-page">
        <section className="cart-empty">
          <p className="cart-eyebrow">YOUR BAG</p>

          <h1>
            YOUR CART IS
            <br />
            <span>EMPTY.</span>
          </h1>

          <p>
            Nothing here yet. Find something that feels like you.
          </p>

          <a href="/shop" className="cart-shop-button">
            SHOP THE COLLECTION
          </a>
        </section>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <section className="cart-content">

        <div className="cart-heading">
          <div>
            <p className="cart-eyebrow">YOUR BAG</p>
            <h1>
              WHAT'S IN
              <br />
              <span>YOUR CART?</span>
            </h1>
          </div>

          <p className="cart-item-count">
            {cartItems.length} {cartItems.length === 1 ? "ITEM" : "ITEMS"}
          </p>
        </div>

        <div className="cart-layout">

          <div className="cart-items">
            {cartItems.map((item) => (
              <article className="cart-item" key={item.id}>

                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />

                <div className="cart-item-info">
                  <p>{item.category}</p>

                  <h2>{item.name}</h2>

                  <strong>
                    KSh {item.price.toLocaleString()}
                  </strong>

                  <div className="cart-item-controls">

                    <div className="quantity-control">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        <FiMinus />
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <FiPlus />
                      </button>
                    </div>

                    <button
                      type="button"
                      className="remove-item"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <FiTrash2 />
                      REMOVE
                    </button>

                  </div>
                </div>

                <div className="cart-item-total">
                  KSh{" "}
                  {(item.price * item.quantity).toLocaleString()}
                </div>

              </article>
            ))}
          </div>

          <aside className="cart-summary">

            <p>ORDER SUMMARY</p>

            <div className="cart-summary-row">
              <span>SUBTOTAL</span>
              <strong>
                KSh {cartTotal.toLocaleString()}
              </strong>
            </div>

            <div className="cart-summary-row">
              <span>DELIVERY</span>
              <span>CALCULATED AT CHECKOUT</span>
            </div>

            <div className="cart-summary-total">
              <span>TOTAL</span>
              <strong>
                KSh {cartTotal.toLocaleString()}
              </strong>
            </div>

            <button className="checkout-button">
              PROCEED TO CHECKOUT
            </button>

            <a href="/shop" className="continue-shopping">
              <FiArrowLeft />
              CONTINUE SHOPPING
            </a>

          </aside>

        </div>

      </section>
    </main>
  );
}

export default Cart;