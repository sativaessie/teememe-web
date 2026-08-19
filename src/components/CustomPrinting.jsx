function CustomPrinting({ onNavigate }) {
  return (
    <section className="custom-printing" id="customize">
      <div className="custom-printing-inner">

        <div className="custom-printing-content">
          <p className="section-eyebrow">CUSTOM PRINTING</p>

          <h2>
            YOUR IDEA.
            <br />
            <span>YOUR TEE.</span>
          </h2>

          <p className="custom-printing-quote">
            “If you can imagine it, we can put it on a tee.”
          </p>

          <div className="custom-printing-options">

            <div className="custom-option">
              <span>01</span>
              <div>
                <h3>YOUR DESIGN</h3>
                <p>
                  Bring your artwork, illustration or graphic.
                </p>
              </div>
            </div>

            <div className="custom-option">
              <span>02</span>
              <div>
                <h3>YOUR WORDS</h3>
                <p>
                  Turn your phrase, quote or idea into something wearable.
                </p>
              </div>
            </div>

            <div className="custom-option">
              <span>03</span>
              <div>
                <h3>YOUR BRAND</h3>
                <p>
                  Printing for businesses, teams, events and groups.
                </p>
              </div>
            </div>

          </div>

          <button
  type="button"
  className="custom-printing-button"
  onClick={() => onNavigate("customize")}
>
  START YOUR CUSTOM ORDER
  <span>↗</span>
</button>
          <p className="custom-printing-signature">
            Made for one. Made for many. Made your way.
          </p>
        </div>

        <div className="custom-printing-image">
          <img
            src="/products/tshirt-2.jpg"
            alt="TeeMeme custom printed t-shirt"
          />

          <div className="custom-image-label">
            <span>MAKE IT</span>
            <strong>YOURS.</strong>
          </div>
        </div>

      </div>
    </section>
  );
}

export default CustomPrinting;