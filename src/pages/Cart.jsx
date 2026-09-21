import { useState } from "react";
import "./Cart.css";
import {
  FiMinus,
  FiPlus,
  FiTrash2,
  FiArrowLeft,
  FiX,
  FiCopy,
  FiCheck,
  FiArrowUpRight,
} from "react-icons/fi";
import { useCart } from "../context/CartContext";

function Cart({ onNavigate }) {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    cartTotal,
  } = useCart();

  const [showCheckout, setShowCheckout] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [copiedField, setCopiedField] = useState("");
  const [paymentCode, setPaymentCode] = useState("");

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    location: "",
    note: "",
  });

  const PAYBILL = "880100";
  const ACCOUNT_NUMBER = "547072";

  const handleCustomerChange = (event) => {
    const { name, value } = event.target;

    setCustomer((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const copyToClipboard = async (value, field) => {
    try {
      await navigator.clipboard.writeText(value);

      setCopiedField(field);

      setTimeout(() => {
        setCopiedField("");
      }, 1800);
    } catch (error) {
      console.error("Could not copy:", error);
    }
  };

  const handleContinueToPayment = (event) => {
    event.preventDefault();

    if (!acceptedTerms) {
      alert(
        "Please agree to TeeMeme's Terms & Conditions before continuing."
      );
      return;
    }

    setCheckoutStep(2);
  };

  const handlePaymentConfirmation = (event) => {
    event.preventDefault();

    if (!paymentCode.trim()) {
      alert("Please enter your M-PESA confirmation code.");
      return;
    }

    setCheckoutStep(3);
  };

  const handleWhatsAppCheckout = () => {
    let message = `TEEMEME ORDER 🧡

Hi TeeMeme! I'd like to place an order.

ORDER DETAILS
`;

    cartItems.forEach((item) => {
  const itemTotal = item.price * item.quantity;

  let productReference = item.id;

  if (item.id.startsWith("women-tee-")) {
    productReference = `WM-${item.id
      .replace("women-tee-", "")
      .padStart(2, "0")}`;
  } else if (item.id.startsWith("women-combo-")) {
    productReference = `WM-C${item.id.replace(
      "women-combo-",
      ""
    )}`;
  } else if (item.id.startsWith("kenyan-vibes-")) {
    const number = item.id.replace("kenyan-vibes-", "");

    productReference =
      number === "combo"
        ? "KV-C1"
        : `KV-${number.padStart(2, "0")}`;
  } else if (item.id.startsWith("statement-tee-")) {
    productReference = `ST-${item.id
      .replace("statement-tee-", "")
      .padStart(2, "0")}`;
  } else if (item.id.startsWith("men-tee-")) {
    productReference = `MN-${item.id
      .replace("men-tee-", "")
      .padStart(2, "0")}`;
  } else if (item.id === "men-cap-1") {
    productReference = "MN-C1";
  } else if (item.id === "men-cap-2") {
    productReference = "MN-C2";
  } else if (item.id === "men-hoodie-1") {
    productReference = "MN-H1";
  } else if (item.id === "men-hoodie-2") {
    productReference = "MN-H2";
  } else if (item.id.startsWith("moments-")) {
    const number = item.id.replace("moments-", "");

    productReference =
      number === "combo"
        ? "MO-C1"
        : `MO-${number.padStart(2, "0")}`;
  } else if (item.id.startsWith("funny-")) {
    const number = item.id.replace("funny-", "");

    productReference =
      number === "combo"
        ? "FR-C1"
        : `FR-${number.padStart(2, "0")}`;
  } else if (item.id.startsWith("corporate-tee-")) {
    productReference = `CB-${item.id
      .replace("corporate-tee-", "")
      .padStart(2, "0")}`;
  } else if (item.id === "corporate-cap") {
    productReference = "CB-C1";
  } else if (item.id.startsWith("corporate-hoodie-")) {
    productReference = `CB-H${item.id.replace(
      "corporate-hoodie-",
      ""
    )}`;
  }

  message += `• ${item.name}
  REF: ${productReference}
  Quantity: ${item.quantity}
  Price: KSh ${itemTotal.toLocaleString()}

`;
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
Method: M-PESA
PayBill: ${PAYBILL}
Account Number: ${ACCOUNT_NUMBER}
Confirmation Code: ${paymentCode}

Thank you!`;

    const whatsappNumber = "254704547072";

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  const closeCheckout = () => {
    setShowCheckout(false);
    setCheckoutStep(1);
    setPaymentCode("");
    setCopiedField("");
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
              onClick={() => {
                setCheckoutStep(1);
                setShowCheckout(true);
              }}
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
          onClick={closeCheckout}
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
              onClick={closeCheckout}
              aria-label="Close checkout"
            >
              <FiX />
            </button>

            {/* STEP INDICATOR */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "28px",
              }}
            >
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  style={{
                    height: "3px",
                    flex: 1,
                    background:
                      checkoutStep >= step
                        ? "#ff5a00"
                        : "rgba(10,10,10,0.12)",
                    transition: "background 0.25s ease",
                  }}
                />
              ))}
            </div>

            {/* STEP 1 — CUSTOMER DETAILS */}

            {checkoutStep === 1 && (
              <>
                <p className="checkout-eyebrow">
                  STEP 01 / YOUR DETAILS
                </p>

                <h2>
                  WHERE SHOULD
                  <br />
                  <span>WE SEND IT?</span>
                </h2>

                <form
                  className="checkout-form"
                  onSubmit={handleContinueToPayment}
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

                  <label className="checkout-terms">

                    <input
                      type="checkbox"
                      checked={acceptedTerms}
                      onChange={(event) =>
                        setAcceptedTerms(
                          event.target.checked
                        )
                      }
                    />

                    <span>
                      I agree to TeeMeme's{" "}
                      <button
                        type="button"
                        onClick={() => onNavigate("terms")}
                      >
                        Terms & Conditions
                      </button>
                      .
                    </span>

                  </label>

                  <button
                    type="submit"
                    className="whatsapp-checkout-button"
                  >
                    CONTINUE TO PAYMENT
                    <span>
                      <FiArrowUpRight />
                    </span>
                  </button>

                  <p className="checkout-note">
                    You'll review your M-PESA payment
                    details on the next step.
                  </p>

                </form>
              </>
            )}

            {/* STEP 2 — M-PESA */}

            {checkoutStep === 2 && (
              <>
                <p className="checkout-eyebrow">
                  STEP 02 / PAYMENT
                </p>

                <h2>
                  PAY WITH
                  <br />
                  <span>M-PESA.</span>
                </h2>

                <div
                  style={{
                    padding: "22px",
                    background: "#0a0a0a",
                    color: "#ffffff",
                    marginBottom: "24px",
                  }}
                >
                  <p
                    style={{
                      margin: "0 0 8px",
                      color: "#ff5a00",
                      fontSize: "9px",
                      fontWeight: 900,
                      letterSpacing: "1.5px",
                    }}
                  >
                    AMOUNT TO PAY
                  </p>

                  <strong
                    style={{
                      display: "block",
                      fontSize: "34px",
                      lineHeight: 1,
                      fontWeight: 900,
                    }}
                  >
                    KSh {cartTotal.toLocaleString()}
                  </strong>
                </div>

                {/* PAYMENT DETAILS */}

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "10px",
                    marginBottom: "25px",
                  }}
                >

                  <div
                    style={{
                      border: "1px solid rgba(10,10,10,0.15)",
                      padding: "18px",
                      background: "rgba(255,255,255,0.5)",
                    }}
                  >
                    <p
                      style={{
                        margin: "0 0 7px",
                        color: "#777",
                        fontSize: "8px",
                        fontWeight: 900,
                        letterSpacing: "1px",
                      }}
                    >
                      PAYBILL
                    </p>

                    <strong
                      style={{
                        fontSize: "21px",
                        fontWeight: 900,
                      }}
                    >
                      {PAYBILL}
                    </strong>

                    <button
                      type="button"
                      onClick={() =>
                        copyToClipboard(
                          PAYBILL,
                          "paybill"
                        )
                      }
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        marginTop: "10px",
                        padding: 0,
                        border: 0,
                        background: "none",
                        color: "#ff5a00",
                        fontSize: "8px",
                        fontWeight: 900,
                        letterSpacing: "1px",
                        cursor: "pointer",
                      }}
                    >
                      {copiedField === "paybill" ? (
                        <>
                          <FiCheck />
                          COPIED
                        </>
                      ) : (
                        <>
                          <FiCopy />
                          COPY
                        </>
                      )}
                    </button>
                  </div>

                  <div
                    style={{
                      border: "1px solid rgba(10,10,10,0.15)",
                      padding: "18px",
                      background: "rgba(255,255,255,0.5)",
                    }}
                  >
                    <p
                      style={{
                        margin: "0 0 7px",
                        color: "#777",
                        fontSize: "8px",
                        fontWeight: 900,
                        letterSpacing: "1px",
                      }}
                    >
                      ACCOUNT
                    </p>

                    <strong
                      style={{
                        fontSize: "21px",
                        fontWeight: 900,
                      }}
                    >
                      {ACCOUNT_NUMBER}
                    </strong>

                    <button
                      type="button"
                      onClick={() =>
                        copyToClipboard(
                          ACCOUNT_NUMBER,
                          "account"
                        )
                      }
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        marginTop: "10px",
                        padding: 0,
                        border: 0,
                        background: "none",
                        color: "#ff5a00",
                        fontSize: "8px",
                        fontWeight: 900,
                        letterSpacing: "1px",
                        cursor: "pointer",
                      }}
                    >
                      {copiedField === "account" ? (
                        <>
                          <FiCheck />
                          COPIED
                        </>
                      ) : (
                        <>
                          <FiCopy />
                          COPY
                        </>
                      )}
                    </button>
                  </div>

                </div>

                {/* INSTRUCTIONS */}

                <div
                  style={{
                    borderTop:
                      "1px solid rgba(10,10,10,0.15)",
                    borderBottom:
                      "1px solid rgba(10,10,10,0.15)",
                    padding: "20px 0",
                    marginBottom: "22px",
                  }}
                >

                  <p
                    style={{
                      margin: "0 0 15px",
                      fontSize: "9px",
                      fontWeight: 900,
                      letterSpacing: "1.3px",
                    }}
                  >
                    HOW TO PAY
                  </p>

                  <div
                    style={{
                      display: "grid",
                      gap: "12px",
                    }}
                  >

                    <div
                      style={{
                        display: "flex",
                        gap: "13px",
                        alignItems: "flex-start",
                      }}
                    >
                      <strong
                        style={{
                          color: "#ff5a00",
                          fontSize: "10px",
                        }}
                      >
                        01
                      </strong>

                      <span
                        style={{
                          color: "#555",
                          fontSize: "10px",
                          lineHeight: 1.5,
                        }}
                      >
                        Open M-PESA and select
                        <strong> Lipa na M-PESA → PayBill</strong>.
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        gap: "13px",
                        alignItems: "flex-start",
                      }}
                    >
                      <strong
                        style={{
                          color: "#ff5a00",
                          fontSize: "10px",
                        }}
                      >
                        02
                      </strong>

                      <span
                        style={{
                          color: "#555",
                          fontSize: "10px",
                          lineHeight: 1.5,
                        }}
                      >
                        Enter PayBill{" "}
                        <strong>{PAYBILL}</strong> and
                        Account{" "}
                        <strong>{ACCOUNT_NUMBER}</strong>.
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        gap: "13px",
                        alignItems: "flex-start",
                      }}
                    >
                      <strong
                        style={{
                          color: "#ff5a00",
                          fontSize: "10px",
                        }}
                      >
                        03
                      </strong>

                      <span
                        style={{
                          color: "#555",
                          fontSize: "10px",
                          lineHeight: 1.5,
                        }}
                      >
                        Enter{" "}
                        <strong>
                          KSh {cartTotal.toLocaleString()}
                        </strong>{" "}
                        and complete the payment.
                      </span>
                    </div>

                  </div>

                </div>

                {/* CONFIRMATION CODE */}

                <form
                  className="checkout-form"
                  onSubmit={handlePaymentConfirmation}
                >

                  <label>
                    M-PESA CONFIRMATION CODE

                    <input
                      type="text"
                      value={paymentCode}
                      onChange={(event) =>
                        setPaymentCode(
                          event.target.value.toUpperCase()
                        )
                      }
                      placeholder="e.g. QGH7X2ABC1"
                      required
                    />
                  </label>

                  <button
                    type="submit"
                    className="whatsapp-checkout-button"
                  >
                    CONFIRM PAYMENT
                    <span>
                      <FiCheck />
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCheckoutStep(1)}
                    style={{
                      border: 0,
                      background: "transparent",
                      color: "#777",
                      fontFamily: "inherit",
                      fontSize: "8px",
                      fontWeight: 900,
                      letterSpacing: "1px",
                      cursor: "pointer",
                    }}
                  >
                    ← BACK TO DETAILS
                  </button>

                </form>
              </>
            )}

            {/* STEP 3 — ORDER READY */}

            {checkoutStep === 3 && (
              <>
                <p className="checkout-eyebrow">
                  STEP 03 / ORDER READY
                </p>

                <h2>
                  YOU'RE
                  <br />
                  <span>ALL SET.</span>
                </h2>

                <div
                  style={{
                    background: "#0a0a0a",
                    color: "#ffffff",
                    padding: "24px",
                    marginBottom: "24px",
                  }}
                >

                  <p
                    style={{
                      margin: "0 0 18px",
                      color: "#ff5a00",
                      fontSize: "9px",
                      fontWeight: 900,
                      letterSpacing: "1.5px",
                    }}
                  >
                PAYMENT DETAILS SAVED
                  </p>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "20px",
                      paddingBottom: "14px",
                      borderBottom:
                        "1px solid rgba(255,255,255,0.15)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "9px",
                        color: "#aaa",
                      }}
                    >
                      M-PESA CODE
                    </span>

                    <strong
                      style={{
                        fontSize: "11px",
                      }}
                    >
                      {paymentCode}
                    </strong>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "20px",
                      paddingTop: "16px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "9px",
                        color: "#aaa",
                      }}
                    >
                      TOTAL
                    </span>

                    <strong
                      style={{
                        color: "#ff5a00",
                        fontSize: "18px",
                      }}
                    >
                      KSh {cartTotal.toLocaleString()}
                    </strong>
                  </div>

                </div>

                <div
                  style={{
                    marginBottom: "24px",
                  }}
                >
                  <p
                    style={{
                      margin: "0 0 12px",
                      fontSize: "9px",
                      fontWeight: 900,
                      letterSpacing: "1.2px",
                    }}
                  >
                    ORDER FOR
                  </p>

                  <p
                    style={{
                      margin: "0 0 5px",
                      fontSize: "14px",
                      fontWeight: 900,
                    }}
                  >
                    {customer.name}
                  </p>

                  <p
                    style={{
                      margin: 0,
                      color: "#777",
                      fontSize: "10px",
                      lineHeight: 1.6,
                    }}
                  >
                    {customer.phone}
                    <br />
                    {customer.location}
                  </p>
                </div>

                <div
  style={{
    padding: "18px 0",
    marginBottom: "24px",
    borderTop: "1px solid rgba(10,10,10,0.12)",
    borderBottom: "1px solid rgba(10,10,10,0.12)",
  }}
>
  <p
    style={{
      margin: "0 0 7px",
      fontSize: "9px",
      fontWeight: 900,
      letterSpacing: "1.2px",
    }}
  >
    📸 QUICK DESIGN CHECK
  </p>

  <p
    style={{
      margin: 0,
      color: "#666",
      fontSize: "10px",
      lineHeight: 1.6,
    }}
  >
    Feel free to send us a screenshot of your chosen
    design on WhatsApp for a smooth order confirmation.
  </p>
</div>

                <button
                  type="button"
                  className="whatsapp-checkout-button"
                  onClick={handleWhatsAppCheckout}
                >
                  SEND ORDER VIA WHATSAPP
                  <span>↗</span>
                </button>

                <p className="checkout-note">
                  Your order details and M-PESA confirmation
                  code will be prepared automatically.
                </p>

              </>
            )}

          </div>

        </div>
      )}

    </main>
  );
}

export default Cart;