function Footer() {
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

          <div className="footer-column">
            <p className="footer-title">EXPLORE</p>

            <a href="#shop">SHOP</a>
            <a href="#creations">LOOKBOOK</a>
            <a href="#about">ABOUT</a>
          </div>

          <div className="footer-column">
            <p className="footer-title">SERVICES</p>

            <a href="#customize">
              CUSTOM PRINTING
            </a>

            <a href="#corporate">
              CORPORATE & BULK
            </a>
          </div>

          <div className="footer-column">
            <p className="footer-title">CONTACT</p>

            <a href="tel:+254745848537">
              0745 848 537
            </a>

            <a
              href="https://wa.me/254745848537"
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

      {/* BOTTOM */}
      <div className="footer-bottom">

        <p>
          © 2026 TeeMeme. All rights reserved.
        </p>

        <p>
          NAIROBI, KENYA.
        </p>

      </div>
    </footer>
  );
}

export default Footer;