import { useState } from "react";
import "./Customize.css";

function Customize() {
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [garment, setGarment] = useState("T-Shirt");
  const [printType, setPrintType] = useState("Front");
  const [fileName, setFileName] = useState("");

  const [sizes, setSizes] = useState({
    "6–8 UK": 0,
    "10–12 UK": 0,
    "14 UK": 0,
    "16 UK": 0,
    "18–20 UK": 0,
  });

  const updateSize = (size, value) => {
    setSizes((current) => ({
      ...current,
      [size]: Math.max(0, Number(value)),
    }));
  };

  const totalQuantity = Object.values(sizes).reduce(
    (total, quantity) => total + quantity,
    0
  );

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(
      `Custom request received! ${totalQuantity} item${
        totalQuantity === 1 ? "" : "s"
      } requested.`
    );
  };

  return (
    <main className="custom-page">

      {/* HERO */}

      <section className="custom-page-hero">

        <div>
          <p className="custom-eyebrow">
            CUSTOM PRINTING
          </p>

          <h1>
            MAKE IT.
            <br />
            <span>YOURS.</span>
          </h1>

          <p>
            Got an idea? A birthday coming up?
            Matching tees with your people?
            Tell us what you're thinking and
            we'll bring it to life.
          </p>
        </div>

      </section>


      {/* FORM */}

      <section className="custom-order-section">

        <form
          className="custom-order-form"
          onSubmit={handleSubmit}
        >

          {/* 01 — GARMENT */}

          <div className="custom-form-section">

            <div className="custom-form-number">
              01
            </div>

            <div className="custom-form-content">

              <p className="custom-form-eyebrow">
                START HERE
              </p>

              <h2>
                WHAT ARE WE
                <br />
                <span>PRINTING?</span>
              </h2>

              <div className="custom-choice-grid">

                {["T-Shirt", "Hoodie", "Cap", "Other"].map(
                  (item) => (
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
                  )
                )}

              </div>

            </div>

          </div>


          {/* 02 — DESIGN */}

          <div className="custom-form-section">

            <div className="custom-form-number">
              02
            </div>

            <div className="custom-form-content">

              <p className="custom-form-eyebrow">
                YOUR IDEA
              </p>

              <h2>
                SHOW US
                <br />
                <span>THE VISION.</span>
              </h2>

              <label className="custom-upload">

                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                />

                <span className="upload-title">
                  {fileName
                    ? fileName
                    : "UPLOAD YOUR DESIGN"}
                </span>

                <span className="upload-subtitle">
                  PNG, JPG or PDF
                </span>

              </label>

              <textarea
                className="custom-textarea"
                placeholder="Or tell us what you have in mind..."
                rows="5"
              />

            </div>

          </div>


          {/* 03 — COLOUR + PRINT */}

          <div className="custom-form-section">

            <div className="custom-form-number">
              03
            </div>

            <div className="custom-form-content">

              <p className="custom-form-eyebrow">
                THE DETAILS
              </p>

              <h2>
                MAKE IT
                <br />
                <span>EXACTLY RIGHT.</span>
              </h2>

              <label className="custom-label">
                GARMENT COLOUR

                <select defaultValue="">
                  <option value="" disabled>
                    Select a colour
                  </option>
                  <option>Black</option>
                  <option>White</option>
                  <option>Green</option>
                  <option>Orange</option>
                  <option>Grey</option>
                  <option>Other</option>
                </select>
              </label>


              <div className="custom-label">
                PRINT PLACEMENT

                <div className="custom-choice-grid">

                  {[
                    "Front",
                    "Back",
                    "Front + Back",
                    "Sleeve",
                  ].map((item) => (
                    <button
                      type="button"
                      key={item}
                      className={
                        printType === item
                          ? "custom-choice active"
                          : "custom-choice"
                      }
                      onClick={() =>
                        setPrintType(item)
                      }
                    >
                      {item}
                    </button>
                  ))}

                </div>
              </div>

            </div>

          </div>


          {/* 04 — SIZES */}

          <div className="custom-form-section">

            <div className="custom-form-number">
              04
            </div>

            <div className="custom-form-content">

              <p className="custom-form-eyebrow">
                FIT & QUANTITY
              </p>

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
                  <div
                    className="custom-size-row"
                    key={size}
                  >
                    <span>{size}</span>

                    <input
                      type="number"
                      min="0"
                      value={sizes[size]}
                      onChange={(event) =>
                        updateSize(
                          size,
                          event.target.value
                        )
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

            <div className="custom-form-number">
              05
            </div>

            <div className="custom-form-content">

              <p className="custom-form-eyebrow">
                ANYTHING ELSE?
              </p>

              <h2>
                TELL US
                <br />
                <span>THE REST.</span>
              </h2>

              <textarea
                className="custom-textarea"
                placeholder="Colours, names, dates, special instructions, deadlines..."
                rows="6"
              />

            </div>

          </div>


          {/* 06 — CONTACT */}

          <div className="custom-form-section">

            <div className="custom-form-number">
              06
            </div>

            <div className="custom-form-content">

              <p className="custom-form-eyebrow">
                LAST THING
              </p>

              <h2>
                HOW DO WE
                <br />
                <span>REACH YOU?</span>
              </h2>

              <div className="custom-contact-grid">

                <input
                  type="text"
                  placeholder="Your name"
                  required
                />

                <input
                  type="tel"
                  placeholder="Phone number"
                  required
                />

                <input
                  type="email"
                  placeholder="Email address"
                />

                <input
                  type="text"
                  placeholder="Location"
                  required
                />

              </div>

            </div>

          </div>


          {/* SUBMIT */}

          <div className="custom-submit-area">

            <p>
              No pressure. No complicated process.
              <br />
              Just tell us what you're thinking.
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
            onClick={(event) =>
              event.stopPropagation()
            }
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

    </main>
  );
}

export default Customize;