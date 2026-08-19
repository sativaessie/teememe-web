function Corporate({ onNavigate }) {
  return (
    <section className="corporate-section" id="corporate">
      <div className="corporate-inner">

        <div className="corporate-image">
          <img
            src="/products/corporate-cap.jpg"
            alt="TeeMeme corporate branded cap"
          />

          <div className="corporate-image-label">
            <span>TEE MEME</span>
            <strong>FOR BUSINESS.</strong>
          </div>
        </div>

        <div className="corporate-content">
          <p className="section-eyebrow">
            CORPORATE & BULK
          </p>

          <h2>
            PUT YOUR
            <br />
            <span>BRAND ON IT.</span>
          </h2>

          <p className="corporate-description">
            Branded apparel that gets your team,
            business or event noticed.
          </p>

          <div className="corporate-options">

            <div className="corporate-option">
              <span>01</span>

              <div>
                <h3>BRANDED TEES</h3>
                <p>
                  For teams, staff, campaigns and events.
                </p>
              </div>
            </div>

            <div className="corporate-option">
              <span>02</span>

              <div>
                <h3>CORPORATE CAPS</h3>
                <p>
                  Professional branded caps for your
                  team or business.
                </p>
              </div>
            </div>

            <div className="corporate-option">
              <span>03</span>

              <div>
                <h3>BULK ORDERS</h3>
                <p>
                  Made for groups, organizations and
                  large events.
                </p>
              </div>
            </div>

          </div>

          <button
  type="button"
  className="corporate-button"
  onClick={() => onNavigate("corporate")}
>
  TALK TO US
  <span>↗</span>
</button>
        </div>

      </div>
    </section>
  );
}

export default Corporate;