import { useState } from "react";
import "./CorporatePage.css";

function CorporatePage() {
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

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(
      `Corporate request received for ${totalQuantity} item${
        totalQuantity === 1 ? "" : "s"
      }.`
    );
  };

  return (
    <main className="corporate-page">

      {/* HERO */}

      <section className="corporate-page-hero">

        <div>
          <p className="corporate-page-eyebrow">
            CORPORATE & BULK
          </p>

          <h1>
            PUT YOUR
            <br />
            <span>BRAND ON IT.</span>
          </h1>

          <p>
            From staff uniforms to event merch,
            team tees and branded caps — we make
            it easy to put your people in your brand.
          </p>
        </div>

        <div className="corporate-page-hero-image">
          <img
            src="/products/corporate-cap.jpg"
            alt="TeeMeme corporate branded apparel"
          />
        </div>

      </section>


      {/* WHAT WE DO */}

      <section className="corporate-services">

        <p className="corporate-page-eyebrow">
          WHAT WE DO
        </p>

        <h2>
          MADE FOR
          <br />
          <span>YOUR PEOPLE.</span>
        </h2>

        <div className="corporate-services-grid">

          <div>
            <span>01</span>
            <h3>BRANDED TEES</h3>
            <p>
              Staff wear, campaigns, events and
              everyday brand visibility.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>CAPS & HOODIES</h3>
            <p>
              Give your team something they'll
              actually want to wear.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>BULK ORDERS</h3>
            <p>
              Bigger groups, bigger orders,
              sorted without the headache.
            </p>
          </div>

        </div>

      </section>


      {/* REQUEST FORM */}

      <section className="corporate-request">

        <div className="corporate-request-heading">

          <p className="corporate-page-eyebrow">
            LET'S TALK
          </p>

          <h2>
            TELL US
            <br />
            <span>WHAT YOU NEED.</span>
          </h2>

          <p>
            Give us the basics and we'll get back
            to you with the details and a quote.
          </p>

        </div>


        <form
          className="corporate-form"
          onSubmit={handleSubmit}
        >

          <div className="corporate-form-group">

            <label>COMPANY / ORGANISATION</label>

            <input
              type="text"
              placeholder="Your company or organisation"
              required
            />

          </div>


          <div className="corporate-form-group">

            <label>WHAT ARE YOU ORDERING?</label>

            <select defaultValue="" required>

              <option value="" disabled>
                Select an option
              </option>

              <option>T-Shirts</option>
              <option>Hoodies</option>
              <option>Caps</option>
              <option>T-Shirts + Caps</option>
              <option>Mixed Apparel</option>

            </select>

          </div>


          <div className="corporate-form-group">

            <label>GARMENT COLOUR</label>

            <select defaultValue="" required>

              <option value="" disabled>
                Select a colour
              </option>

              <option>Black</option>
              <option>White</option>
              <option>Grey</option>
              <option>Green</option>
              <option>Orange</option>
              <option>Other</option>

            </select>

          </div>


          <div className="corporate-form-group">

            <label>UPLOAD YOUR LOGO / DESIGN</label>

            <input
              type="file"
              accept="image/*,.pdf"
            />

          </div>


          {/* SIZES */}

          <div className="corporate-form-group">

            <label>
              SIZE BREAKDOWN
            </label>

            <p className="corporate-size-note">
              Enter the number of pieces needed for
              each size.
            </p>

            <div className="corporate-size-list">

              {Object.keys(sizes).map((size) => (

                <div
                  className="corporate-size-row"
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

            <div className="corporate-total">

              <span>TOTAL PIECES</span>

              <strong>
                {totalQuantity}
              </strong>

            </div>

          </div>


          {/* DEADLINE */}

          <div className="corporate-form-group">

            <label>
              WHEN DO YOU NEED THEM?
            </label>

            <input
              type="date"
              required
            />

          </div>


          {/* NOTES */}

          <div className="corporate-form-group">

            <label>
              TELL US MORE
            </label>

            <textarea
              rows="6"
              placeholder="Tell us about the event, branding, quantity, deadline or anything else we should know..."
            />

          </div>


          {/* CONTACT */}

          <div className="corporate-contact-grid">

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
              required
            />

          </div>


          <button
            type="submit"
            className="corporate-submit"
          >
            REQUEST A QUOTE
            <span>↗</span>
          </button>

        </form>

      </section>

    </main>
  );
}

export default CorporatePage;