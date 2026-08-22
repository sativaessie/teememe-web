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

  const [company, setCompany] = useState("");
  const [orderType, setOrderType] = useState("");
  const [colour, setColour] = useState("");
  const [deadline, setDeadline] = useState("");
  const [notes, setNotes] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

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

    const sizeBreakdown = Object.entries(sizes)
      .filter(([, quantity]) => quantity > 0)
      .map(([size, quantity]) => `${size}: ${quantity}`)
      .join("\n");

    const message = `TEE-MEME CORPORATE / BULK REQUEST

COMPANY
Company / Organisation: ${company}

ORDER DETAILS
Order: ${orderType}
Garment Colour: ${colour}
Total Pieces: ${totalQuantity}

SIZE BREAKDOWN
${sizeBreakdown || "No quantities entered yet."}

DEADLINE
${deadline || "Not specified"}

ADDITIONAL DETAILS
${notes || "None"}

CONTACT PERSON
Name: ${name}
Phone: ${phone}
Email: ${email}

I'd like to discuss this corporate/bulk order with TeeMeme.`;

    const whatsappNumber = "254704547072";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="corporate-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="corporate-page-hero">

        <div className="corporate-hero-copy">

          <p className="corporate-page-eyebrow">
            CORPORATE & BULK
          </p>

          <h1>
            PUT YOUR
            <br />
            <span>BRAND ON IT.</span>
          </h1>

          <p className="corporate-hero-description">
            From staff uniforms to event merch,
            team tees and branded caps — we make
            it easy to put your people in your brand.
          </p>

          <div className="corporate-hero-meta">
            <span>STAFF WEAR</span>
            <span>EVENT MERCH</span>
            <span>BULK ORDERS</span>
          </div>

        </div>

        <div className="corporate-page-hero-image">
          <img
            src="/corporate/branded-polos.jpg"
            alt="TeeMeme branded corporate polos"
          />
        </div>

      </section>


      {/* =====================================================
          WHAT WE DO
      ===================================================== */}

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


      {/* =====================================================
          CORPORATE LOOKBOOK
      ===================================================== */}

      <section className="corporate-lookbook">

        <div className="corporate-lookbook-heading">

          <div>
            <p className="corporate-page-eyebrow">
              WHAT WE CAN MAKE
            </p>

            <h2>
              YOUR BRAND.
              <br />
              <span>YOUR WAY.</span>
            </h2>
          </div>

          <p>
            Whether it's everyday staff wear, a company
            event or a major campaign, we can help bring
            your brand into the real world.
          </p>

        </div>


        <div className="corporate-lookbook-grid">

          <article className="corporate-image-card corporate-image-large">
            <img
              src="/corporate/staff-uniforms.jpg"
              alt="TeeMeme staff uniforms"
            />

            <div className="corporate-image-label">
              <span>01</span>
              <strong>STAFF UNIFORMS</strong>
            </div>
          </article>


          <article className="corporate-image-card corporate-image-small">
            <img
              src="/corporate/company-shirts.jpg"
              alt="TeeMeme company shirts"
            />

            <div className="corporate-image-label">
              <span>02</span>
              <strong>COMPANY SHIRTS</strong>
            </div>
          </article>


          <article className="corporate-image-card corporate-image-small">
            <img
              src="/corporate/corporate-hoodies.jpg"
              alt="TeeMeme corporate hoodies"
            />

            <div className="corporate-image-label">
              <span>03</span>
              <strong>CORPORATE HOODIES</strong>
            </div>
          </article>


          <article className="corporate-image-card corporate-image-wide">
            <img
              src="/corporate/conference-shirts.jpg"
              alt="TeeMeme conference shirts"
            />

            <div className="corporate-image-label">
              <span>04</span>
              <strong>CONFERENCE SHIRTS</strong>
            </div>
          </article>


          <article className="corporate-image-card corporate-image-feature">
            <img
              src="/corporate/branded-polos.jpg"
              alt="TeeMeme branded polos"
            />

            <div className="corporate-image-label">
              <span>05</span>
              <strong>BRANDED POLOS</strong>
            </div>
          </article>

        </div>

      </section>


      {/* =====================================================
          REQUEST FORM
      ===================================================== */}

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

          <div className="corporate-request-note">
            <span>01</span>
            <p>
              Fill in your order details.
            </p>

            <span>02</span>
            <p>
              Send your request directly to us.
            </p>

            <span>03</span>
            <p>
              We'll discuss your order and quote.
            </p>
          </div>

        </div>


        <form
          className="corporate-form"
          onSubmit={handleSubmit}
        >

          {/* COMPANY */}

          <div className="corporate-form-group">

            <label>COMPANY / ORGANISATION</label>

            <input
              type="text"
              placeholder="Your company or organisation"
              value={company}
              onChange={(event) =>
                setCompany(event.target.value)
              }
              required
            />

          </div>


          {/* ORDER TYPE */}

          <div className="corporate-form-group">

            <label>WHAT ARE YOU ORDERING?</label>

            <select
              value={orderType}
              onChange={(event) =>
                setOrderType(event.target.value)
              }
              required
            >

              <option value="" disabled>
                Select an option
              </option>

              <option>T-Shirts</option>
              <option>Hoodies</option>
              <option>Caps</option>
              <option>Polos</option>
              <option>T-Shirts + Caps</option>
              <option>Mixed Apparel</option>

            </select>

          </div>


          {/* COLOUR */}

          <div className="corporate-form-group">

            <label>GARMENT COLOUR</label>

            <select
              value={colour}
              onChange={(event) =>
                setColour(event.target.value)
              }
              required
            >

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


          {/* LOGO */}

          <div className="corporate-form-group">

            <label>UPLOAD YOUR LOGO / DESIGN</label>

            <input
              type="file"
              accept="image/*,.pdf"
            />

            <p className="corporate-file-note">
              PNG, JPG or PDF. You can attach the file
              directly in WhatsApp after sending your request.
            </p>

          </div>


          {/* SIZE BREAKDOWN */}

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
              value={deadline}
              onChange={(event) =>
                setDeadline(event.target.value)
              }
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
              value={notes}
              onChange={(event) =>
                setNotes(event.target.value)
              }
            />

          </div>


          {/* CONTACT */}

          <div className="corporate-form-group">

            <label>
              YOUR CONTACT DETAILS
            </label>

            <div className="corporate-contact-grid">

              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(event) =>
                  setName(event.target.value)
                }
                required
              />

              <input
                type="tel"
                placeholder="Phone number"
                value={phone}
                onChange={(event) =>
                  setPhone(event.target.value)
                }
                required
              />

              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                required
              />

            </div>

          </div>


          {/* SUBMIT */}

          <button
            type="submit"
            className="corporate-submit"
          >
            REQUEST A QUOTE
            <span>↗</span>
          </button>

          <p className="corporate-submit-note">
            Your request will open in WhatsApp so we can
            discuss your order directly.
          </p>

        </form>

      </section>

    </main>
  );
}

export default CorporatePage;