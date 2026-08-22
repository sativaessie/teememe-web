function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="footer-inner">

        {/* BRAND */}
        <div className="footer-brand">
          <h2>
            TEEMEME<span>®</span>
          </h2>

          <p>
            Wear what you mean.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-links">

          {/* EXPLORE */}
          <div className="footer-column">
            <p className="footer-title">EXPLORE</p>

            <button
              type="button"
              onClick={() => onNavigate?.("shop")}
            >
              SHOP
            </button>

            <button
              type="button"
              onClick={() => onNavigate?.("home")}
            >
              LOOKBOOK
            </button>

            <button
              type="button"
              onClick={() => onNavigate?.("about")}
            >
              ABOUT
            </button>
          </div>


          {/* SERVICES */}
          <div className="footer-column">
            <p className="footer-title">SERVICES</p>

            <button
              type="button"
              onClick={() => onNavigate?.("customize")}
            >
              CUSTOM PRINTING
            </button>

            <button
              type="button"
              onClick={() => onNavigate?.("corporate")}
            >
              CORPORATE & BULK
            </button>
          </div>


          {/* CUSTOMER */}
          <div className="footer-column">
            <p className="footer-title">CUSTOMER</p>

            <button
              type="button"
              onClick={() => onNavigate?.("terms")}
            >
              TERMS & CONDITIONS
            </button>

            <button
              type="button"
              onClick={() => onNavigate?.("shop")}
            >
              SIZE GUIDE
            </button>
          </div>


          {/* CONTACT */}
          <div className="footer-column">
            <p className="footer-title">CONTACT</p>

            <a href="tel:+254704547072">
              0704 547 072
            </a>

            <a
              href="https://wa.me/254704547072"
              target="_blank"
              rel="noreferrer"
            >
              WHATSAPP
            </a>

            <a
              href="https://www.instagram.com/tee_meme254/"
              target="_blank"
              rel="noreferrer"
            >
              INSTAGRAM
            </a>

            <a
              href="https://www.tiktok.com/@tee.meme254"
              target="_blank"
              rel="noreferrer"
            >
              TIKTOK
            </a>
          </div>

        </div>
      </div>


      {/* LOCATION */}
      <div className="footer-location">

        <div>
          <span>VISIT US</span>

          <p>
            Bihi Towers, Floor & Suite 3
            <br />
            Moi Avenue, Nairobi Central Business District
          </p>
        </div>

        <a
          href="https://www.google.com/maps/search/?api=1&query=Bihi+Towers+Moi+Avenue+Nairobi"
          target="_blank"
          rel="noreferrer"
          className="footer-map-link"
        >
          GET DIRECTIONS ↗
        </a>

      </div>


      {/* TERMS / TRUST STRIP */}
      <div className="footer-trust">

        <div>
          <span>🚚</span>
          <strong>SAME DAY DELIVERY</strong>
          <small>Orders before 10AM</small>
        </div>

        <div>
          <span>🛡️</span>
          <strong>SECURE PAYMENT</strong>
          <small>Pay or deposit to confirm</small>
        </div>

        <div>
          <span>📏</span>
          <strong>USE THE SIZE GUIDE</strong>
          <small>Get the right fit</small>
        </div>

        <div>
          <span>📷</span>
          <strong>ARTWORK PREVIEW</strong>
          <small>Ask about available colours</small>
        </div>

      </div>


      {/* BOTTOM */}
      <div className="footer-bottom">

        <p>
          © 2026 TeeMeme. All rights reserved.
        </p>

        <button
          type="button"
          onClick={() => onNavigate?.("terms")}
        >
          TERMS & CONDITIONS
        </button>

        <p>
          NAIROBI, KENYA.
        </p>

      </div>

    </footer>
  );
}

export default Footer;