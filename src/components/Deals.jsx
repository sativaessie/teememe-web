function Deals({ onNavigate }) {
  const comboProduct = {
    id: 6,
    name: "Tee + Cap Combo",
    category: "Moments",
    price: 1750,
    image: "/products/combo-1.jpg",
    badge: "DEAL",
  };

  return (
    <section className="deals-section" id="deals">
      <div className="deals-inner">

        <div className="deals-content">
          <p className="section-eyebrow">LIMITED COMBO</p>

          <h2>
            MORE TEE.
            <br />
            <span>MORE VIBE.</span>
          </h2>

          <p className="deals-description">
            Get your TeeMeme T-Shirt and Cap together
            for just KSh 1,750.
          </p>

          <div className="deals-price">
            <span>TEE + CAP</span>
            <strong>KSh 1,750</strong>
          </div>

          <button
            type="button"
            className="deal-button"
            onClick={() => onNavigate("shop", "Moments")}
          >
            SHOP THE COMBO
            <span>↗</span>
          </button>
        </div>

        <div className="deals-image">
          <img
            src={comboProduct.image}
            alt="TeeMeme T-Shirt and Cap Combo"
          />

          <div className="deal-stamp">
            <span>TEE</span>
            <strong>+</strong>
            <span>CAP</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Deals;