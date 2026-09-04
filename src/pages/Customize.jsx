import { useEffect, useState } from "react";
import "./Customize.css";

const WHATSAPP_NUMBER = "254704547072";

function Customize() {
  const [showSizeGuide, setShowSizeGuide] = useState(false);
   const [showWhatsAppNotice, setShowWhatsAppNotice] = useState(false);


  const [garment, setGarment] = useState("T-Shirt");
  const [printType, setPrintType] = useState("Front");


  const [garmentColor, setGarmentColor] = useState("");
  const [designDescription, setDesignDescription] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");

  const [sizes, setSizes] = useState({
    "6–8 UK": 0,
    "10–12 UK": 0,
    "14 UK": 0,
    "16 UK": 0,
    "18–20 UK": 0,
  });

  
  const updateSize = (size, value) => {
    const quantity = Number(value);

    setSizes((current) => ({
      ...current,
      [size]: Number.isNaN(quantity) ? 0 : Math.max(0, quantity),
    }));
  };

  const totalQuantity = Object.values(sizes).reduce(
    (total, quantity) => total + quantity,
    0
  );

    const handleSubmit = (event) => {
  event.preventDefault();

  if (!garment) {
    alert("Please select a garment type.");
    return;
  }

  if (!garmentColor) {
    alert("Please select a garment colour.");
    return;
  }

  if (totalQuantity === 0) {
    alert("Please enter at least one item quantity.");
    return;
  }

 if (!designDescription.trim()) {
  alert("Please describe what you would like.");
  return;
}

  if (!customerName.trim()) {
    alert("Please enter your name.");
    return;
  }

  if (!phone.trim()) {
    alert("Please enter your phone number.");
    return;
  }

  if (!location.trim()) {
    alert("Please enter your location.");
    return;
  }

  setShowWhatsAppNotice(true);
};

  const sizeDetails = Object.entries(sizes)
  .filter(([, quantity]) => quantity > 0)
  .map(([size, quantity]) => `${size}: ${quantity}`)
  .join("\n");

    const continueToWhatsApp = () => {
  const sizeDetails = Object.entries(sizes)
    .filter(([, quantity]) => quantity > 0)
    .map(([size, quantity]) => `${size}: ${quantity}`)
    .join("\n");

  const message = `Hi TeeMeme!

I'd like to make a custom order.

--------------------
CUSTOM ORDER
--------------------

Garment: ${garment}
Garment Colour: ${garmentColor}
Print Placement: ${printType}

QUANTITY
${sizeDetails}

TOTAL ITEMS: ${totalQuantity}

--------------------
DESIGN
--------------------

 Design description:
${designDescription.trim()}

--------------------
ADDITIONAL NOTES
--------------------

${additionalNotes.trim() || "None"}

--------------------
CUSTOMER DETAILS
--------------------

Name: ${customerName}
Phone: ${phone}
Email: ${email || "Not provided"}
Location: ${location}
  Thank you!
`;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");

  setShowWhatsAppNotice(false);
};

  return (
    <main className="custom-page">
      {/* HERO */}
      <section className="custom-page-hero">
        <div>
          <p className="custom-eyebrow">CUSTOM PRINTING</p>

          <h1>
            MAKE IT.
            <br />
            <span>YOURS.</span>
          </h1>

          <p>
            Got an idea? A birthday coming up? Matching tees with your people?
            Tell us what you're thinking and we'll bring it to life.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="custom-order-section">
        <form className="custom-order-form" onSubmit={handleSubmit}>
          {/* 01 — GARMENT */}
          <div className="custom-form-section">
            <div className="custom-form-number">01</div>

            <div className="custom-form-content">
              <p className="custom-form-eyebrow">START HERE</p>

              <h2>
                WHAT ARE WE
                <br />
                <span>PRINTING?</span>
              </h2>

              <div className="custom-choice-grid">
                {["T-Shirt", "Hoodie", "Cap", "Other"].map((item) => (
                  <button
                    type="button"
                    key={item}
                    className={
                      garment === item
                        ? "custom-choice active"
                        : "custom-choice"
                    }
                    onClick={() => setGarment(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 02 — DESIGN */}
          <div className="custom-form-section">
            <div className="custom-form-number">02</div>

            <div className="custom-form-content">
             
             <p className="custom-form-eyebrow">YOUR IDEA</p>

<h2>
  TELL US
  <br />
  <span>THE IDEA.</span>
</h2>

              
              <textarea
                className="custom-textarea"
placeholder="Tell us what you'd like us to create..."
                rows="5"
                value={designDescription}
                onChange={(event) =>
                  setDesignDescription(event.target.value)
                }
              />
            </div>
          </div>

          {/* 03 — COLOUR + PRINT */}
          <div className="custom-form-section">
            <div className="custom-form-number">03</div>

            <div className="custom-form-content">
              <p className="custom-form-eyebrow">THE DETAILS</p>

              <h2>
                MAKE IT
                <br />
                <span>EXACTLY RIGHT.</span>
              </h2>

              <label className="custom-label">
                GARMENT COLOUR

                <select
                  value={garmentColor}
                  onChange={(event) =>
                    setGarmentColor(event.target.value)
                  }
                  required
                >
                  <option value="" disabled>
                    Select a colour
                  </option>

                 <option value="Black">Black</option>
<option value="White">White</option>
<option value="Green">Green</option>
<option value="Orange">Orange</option>
<option value="Grey">Grey</option>
<option value="Hot Pink">Hot Pink</option>
<option value="Baby Pink">Baby Pink</option>
<option value="Maroon">Maroon</option>
<option value="Yellow">Yellow</option>
<option value="Mustard">Mustard</option>
<option value="Sky Blue">Sky Blue</option>
<option value="Navy">Navy</option>
<option value="Ash Grey">Ash Grey</option>
<option value="Charcoal Grey">Charcoal Grey</option>
<option value="Light Grey">Light Grey</option>
<option value="Other">Other</option>
                </select>
              </label>

              <div className="custom-label">
                PRINT PLACEMENT

                <div className="custom-choice-grid">
                  {["Front", "Back", "Front + Back", "Sleeve"].map(
                    (item) => (
                      <button
                        type="button"
                        key={item}
                        className={
                          printType === item
                            ? "custom-choice active"
                            : "custom-choice"
                        }
                        onClick={() => setPrintType(item)}
                      >
                        {item}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* 04 — SIZES */}
          <div className="custom-form-section">
            <div className="custom-form-number">04</div>

            <div className="custom-form-content">
              <p className="custom-form-eyebrow">FIT & QUANTITY</p>

              <h2>
                GET THE
                <br />
                <span>RIGHT FIT.</span>
              </h2>

              <button
                type="button"
                className="size-guide-button"
                onClick={() => setShowSizeGuide(true)}
              >
                VIEW TEE-MEME SIZE GUIDE ↗
              </button>

              <div className="custom-size-list">
                {Object.keys(sizes).map((size) => (
                  <div className="custom-size-row" key={size}>
                    <span>{size}</span>

                    <input
                      type="number"
                      min="0"
                      step="1"
                      value={sizes[size]}
                      onChange={(event) =>
                        updateSize(size, event.target.value)
                      }
                    />
                  </div>
                ))}
              </div>

              <div className="custom-total">
                <span>TOTAL ITEMS</span>
                <strong>{totalQuantity}</strong>
              </div>
            </div>
          </div>

          {/* 05 — NOTES */}
          <div className="custom-form-section">
            <div className="custom-form-number">05</div>

            <div className="custom-form-content">
              <p className="custom-form-eyebrow">ANYTHING ELSE?</p>

              <h2>
                TELL US
                <br />
                <span>THE REST.</span>
              </h2>

              <textarea
                className="custom-textarea"
                placeholder="Colours, names, dates, special instructions, deadlines..."
                rows="6"
                value={additionalNotes}
                onChange={(event) =>
                  setAdditionalNotes(event.target.value)
                }
              />
            </div>
          </div>

          {/* 06 — CONTACT */}
          <div className="custom-form-section">
            <div className="custom-form-number">06</div>

            <div className="custom-form-content">
              <p className="custom-form-eyebrow">LAST THING</p>

              <h2>
                HOW DO WE
                <br />
                <span>REACH YOU?</span>
              </h2>

              <div className="custom-contact-grid">
                <input
                  type="text"
                  placeholder="Your name"
                  value={customerName}
                  onChange={(event) =>
                    setCustomerName(event.target.value)
                  }
                  required
                />

                <input
                  type="tel"
                  placeholder="Phone number"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  required
                />

                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />

                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(event) =>
                    setLocation(event.target.value)
                  }
                  required
                />
              </div>
            </div>
          </div>

          {/* SUBMIT */}
          <div className="custom-submit-area">
            <p>
  Your request goes straight to TeeMeme on WhatsApp.
  <br />
  Please attach your design in WhatsApp when you send your request.
</p>

            <button
              type="submit"
              className="custom-submit-button"
            >
              SEND CUSTOM REQUEST
              <span>↗</span>
            </button>
          </div>
        </form>
      </section>

      {/* SIZE GUIDE MODAL */}
      {showSizeGuide && (
        <div
          className="size-guide-overlay"
          onClick={() => setShowSizeGuide(false)}
        >
          <div
            className="size-guide-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="size-guide-close"
              onClick={() => setShowSizeGuide(false)}
            >
              ×
            </button>

            <img
              src="/images/teememe-size-guide.jpg"
              alt="TeeMeme size guide"
            />
          </div>
        </div>
      )}

      {showWhatsAppNotice && (
  <div
    className="whatsapp-notice-overlay"
    onClick={() => setShowWhatsAppNotice(false)}
  >
    <div
      className="whatsapp-notice-modal"
      onClick={(event) => event.stopPropagation()}
    >
      <button
        type="button"
        className="whatsapp-notice-close"
        onClick={() => setShowWhatsAppNotice(false)}
      >
        ×
      </button>

      <p className="whatsapp-notice-eyebrow">
        ONE LAST STEP
      </p>

      <h2>
        YOUR REQUEST
        <br />
        <span>IS READY.</span>
      </h2>

      <p className="whatsapp-notice-text">
        We've got all your custom order details.
      </p>


      <div className="whatsapp-instruction">
        <strong>Before you send:</strong>

       <p>
  When WhatsApp opens, please attach your design
  to the chat before sending your request.
</p>
      </div>

      <button
        type="button"
        className="whatsapp-continue-button"
        onClick={continueToWhatsApp}
      >
        CONTINUE TO WHATSAPP
        <span>↗</span>
      </button>

      <button
        type="button"
        className="whatsapp-back-button"
        onClick={() => setShowWhatsAppNotice(false)}
      >
        GO BACK & EDIT
      </button>
    </div>
  </div>
)}
    </main>
  );
}

export default Customize;