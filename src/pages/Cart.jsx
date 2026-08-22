import { useState } from "react";
import "./Cart.css";
import {
  FiMinus,
  FiPlus,
  FiTrash2,
  FiArrowLeft,
  FiX,
} from "react-icons/fi";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    cartTotal,
  } = useCart();

  const [showCheckout, setShowCheckout] = useState(false);

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    location: "",
    note: "",
  });

  const handleCustomerChange = (event) => {
    const { name, value } = event.target;

    setCustomer((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleWhatsAppCheckout = (event) => {
    event.preventDefault();

    let message = `TEEMEME ORDER 🧡

Hi TeeMeme! I'd like to place an order.

ORDER DETAILS
`;

    cartItems.forEach((item) => {
      const itemTotal = item.price * item.quantity;

      message += `• ${item.name} × ${item.quantity} — KSh ${itemTotal.toLocaleString()}\n`;
    });

    message += `
TOTAL: KSh ${cartTotal.toLocaleString()}

CUSTOMER DETAILS
Name: ${customer.name}
Phone: ${customer.phone}
Location: ${customer.location}
`;

    if (customer.note.trim()) {
      message += `
ORDER NOTES
${customer.note}
`;
    }

    message += `
PAYMENT
I'd like to proceed with payment. Please send me the payment instructions.

Thank you!`;

    const whatsappNumber = "254704547072";

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

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

        {/* HEADING */}

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
            {cartItems.length}{" "}
            {cartItems.length === 1 ? "ITEM" : "ITEMS"}
          </p>
        </div>


        {/* CART */}

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
                          updateQuantity(
                            item.id,
                            item.quantity - 1
                          )
                        }
                      >
                        <FiMinus />
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.quantity + 1
                          )
                        }
                      >
                        <FiPlus />
                      </button>

                    </div>

                    <button
                      type="button"
                      className="remove-item"
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                    >
                      <FiTrash2 />
                      REMOVE
                    </button>

                  </div>

                </div>

                <div className="cart-item-total">
                  KSh{" "}
                  {(
                    item.price * item.quantity
                  ).toLocaleString()}
                </div>

              </article>
            ))}

          </div>


          {/* SUMMARY */}

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
                <button
  type="button"
  className="checkout-button"
  onClick={() => setShowCheckout(true)}
>
  PROCEED TO CHECKOUT
</button>
            <a
              href="/shop"
              className="continue-shopping"
            >
              <FiArrowLeft />
              CONTINUE SHOPPING
            </a>

          </aside>

        </div>

      </section>


      {/* CHECKOUT MODAL */}

      {showCheckout && (
        <div
          className="checkout-overlay"
          onClick={() => setShowCheckout(false)}
        >

          <div
            className="checkout-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              type="button"
              className="checkout-close"
              onClick={() =>
                setShowCheckout(false)
              }
              aria-label="Close checkout"
            >
              <FiX />
            </button>


            <p className="checkout-eyebrow">
              ALMOST THERE
            </p>

            <h2>
              WHERE SHOULD
              <br />
              <span>WE SEND IT?</span>
            </h2>


            <form
              className="checkout-form"
              onSubmit={handleWhatsAppCheckout}
            >

              <label>
                FULL NAME

                <input
                  type="text"
                  name="name"
                  value={customer.name}
                  onChange={handleCustomerChange}
                  placeholder="Your name"
                  required
                />
              </label>


              <label>
                PHONE NUMBER

                <input
                  type="tel"
                  name="phone"
                  value={customer.phone}
                  onChange={handleCustomerChange}
                  placeholder="07XX XXX XXX"
                  required
                />
              </label>


              <label>
                DELIVERY LOCATION

                <input
                  type="text"
                  name="location"
                  value={customer.location}
                  onChange={handleCustomerChange}
                  placeholder="e.g. Nairobi, Westlands"
                  required
                />
              </label>


              <label>
                ORDER NOTE
                <span className="optional">
                  OPTIONAL
                </span>

                <textarea
                  name="note"
                  value={customer.note}
                  onChange={handleCustomerChange}
                  placeholder="Anything we should know?"
                  rows="4"
                />
              </label>


              <div className="checkout-total">

                <span>ORDER TOTAL</span>

                <strong>
                  KSh {cartTotal.toLocaleString()}
                </strong>

              </div>


              <button
                type="submit"
                className="whatsapp-checkout-button"
              >
                PAY & ORDER VIA WHATSAPP
                <span>↗</span>
              </button>

              <p className="checkout-note">
                You'll be taken to WhatsApp with
                your order details already prepared.
              </p>

            </form>

          </div>

        </div>
      )}

    </main>
  );
}

export default Cart;