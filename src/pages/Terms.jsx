import "./Terms.css";

function Terms() {
  return (
    <main className="terms-page">

      {/* HERO */}
      <section className="terms-hero">
        <div className="terms-hero-inner">

          <p className="terms-eyebrow">
            TEE MEME — CUSTOMER CARE
          </p>

          <h1>
            TERMS
            <br />
            <span>& CONDITIONS.</span>
          </h1>

          <p className="terms-intro">
            Everything you need to know before placing
            an order with TeeMeme.
          </p>

        </div>

        <div className="terms-hero-mark">
          TERMS
        </div>
      </section>


      {/* CONTENT */}
      <section className="terms-content">

        <div className="terms-content-header">

          <p className="terms-section-label">
            FOR YOUR EASE 😅
          </p>

          <h2>
            KNOW BEFORE
            <br />
            <span>YOU ORDER.</span>
          </h2>

          <p>
            We want ordering from TeeMeme to be simple,
            clear and stress-free. Here's what you need
            to know about delivery, payment, sizing and
            customized orders.
          </p>

        </div>


        {/* 01 */}
        <article className="terms-item">

          <div className="terms-number">
            01
          </div>

          <div className="terms-item-content">

            <p className="terms-item-eyebrow">
              DELIVERY
            </p>

            <h3>
              SAME-DAY
              <br />
              <span>DELIVERY.</span>
            </h3>

            <p>
              We offer same-day delivery for orders
              confirmed before <strong>10:00 AM</strong>,
              subject to location, stock availability
              and production capacity.
            </p>

          </div>

        </article>


        {/* 02 */}
        <article className="terms-item">

          <div className="terms-number">
            02
          </div>

          <div className="terms-item-content">

            <p className="terms-item-eyebrow">
              PAYMENT
            </p>

            <h3>
              SECURE YOUR
              <br />
              <span>ORDER.</span>
            </h3>

            <p>
              An order is considered confirmed once it
              has been paid for or a minimum
              <strong> 50% deposit</strong> has been made.
            </p>

            <div className="terms-note">
              <strong>PLEASE NOTE</strong>

              <p>
                Orders being delivered outside the
                Nairobi region require <strong>full payment
                upfront</strong> before production or dispatch.
              </p>
            </div>

          </div>

        </article>


        {/* 03 */}
        <article className="terms-item">

          <div className="terms-number">
            03
          </div>

          <div className="terms-item-content">

            <p className="terms-item-eyebrow">
              SIZING & RETURNS
            </p>

            <h3>
              GET THE
              <br />
              <span>RIGHT FIT.</span>
            </h3>

            <p>
              Please use our TeeMeme size guide before
              placing your order. If you're unsure about
              your size, contact us and we'll be happy
              to advise you.
            </p>

            <div className="terms-warning">
              <span>IMPORTANT</span>

              <p>
                Once an item has been branded or
                customized, it cannot be returned or
                exchanged due to sizing or design changes.
              </p>
            </div>

            <button
              type="button"
              className="terms-size-button"
              onClick={() => {
                window.dispatchEvent(
                  new Event("open-size-guide")
                );
              }}
            >
              SIZE GUIDE ↗
            </button>

          </div>

        </article>


        {/* 04 */}
        <article className="terms-item">

          <div className="terms-number">
            04
          </div>

          <div className="terms-item-content">

            <p className="terms-item-eyebrow">
              DELIVERY FEES
            </p>

            <h3>
              DELIVERY
              <br />
              <span>DEPENDS ON YOU.</span>
            </h3>

            <p>
              Delivery charges are calculated according
              to your location. We'll confirm the delivery
              fee with you before your order is dispatched.
            </p>

          </div>

        </article>


        {/* 05 */}
        <article className="terms-item">

          <div className="terms-number">
            05
          </div>

          <div className="terms-item-content">

            <p className="terms-item-eyebrow">
              PRODUCT & ARTWORK
            </p>

            <h3>
              WHAT YOU SEE
              <br />
              <span>IS THE ARTWORK.</span>
            </h3>

            <p>
              Photos displayed on our platforms may be
              used to showcase artwork and designs.
              Garment colours and availability may vary.
            </p>

            <p>
              Please contact us to confirm the available
              T-shirt, hoodie or cap colours before placing
              your order.
            </p>

          </div>

        </article>


        {/* HIGHLIGHTS */}
        <section className="terms-highlights">

          <div>
            <span>🚚</span>
            <strong>SAME-DAY DELIVERY</strong>
            <p>
              Orders confirmed before 10 AM.
            </p>
          </div>

          <div>
            <span>🛡️</span>
            <strong>SECURE PAYMENT</strong>
            <p>
              Confirm your order with payment.
            </p>
          </div>

          <div>
            <span>📏</span>
            <strong>USE THE SIZE GUIDE</strong>
            <p>
              Get your fit right before ordering.
            </p>
          </div>

          <div>
            <span>📷</span>
            <strong>ARTWORK PREVIEW</strong>
            <p>
              Confirm garment colours with us.
            </p>
          </div>

        </section>


        {/* CTA */}
        <section className="terms-cta">

          <p className="terms-section-label">
            STILL HAVE A QUESTION?
          </p>

          <h2>
            LET'S TALK
            <br />
            <span>BEFORE YOU ORDER.</span>
          </h2>

          <p>
            If you're unsure about sizing, colours,
            delivery, payment or anything else,
            just reach out to us.
          </p>

          <a
            href="https://wa.me/254704547072"
            target="_blank"
            rel="noreferrer"
            className="terms-whatsapp-button"
          >
            CHAT WITH TEE MEME ON WHATSAPP
            <span>↗</span>
          </a>

        </section>

      </section>

    </main>
  );
}

export default Terms;