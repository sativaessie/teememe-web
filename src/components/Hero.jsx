function Hero({ onNavigate }) {
  return (
    <section className="hero" id="home">

      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero.jpg"
        preload="metadata"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <p className="hero-eyebrow">
          WEAR YOUR STATEMENT
        </p>

        <h1>
          HOTTER TAKES.
          <br />
          <span>HOTTER TEES.</span>
        </h1>

        <p className="hero-description">
          Bold designs. Custom prints. Everyday pieces
          made for people who don't want to blend in.
        </p>

        <div className="hero-buttons">

          <a
            href="#"
            className="button button-primary"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("shop", "ALL");
            }}
          >
            SHOP THE DROP
          </a>

          <a
            href="#"
            className="button button-secondary"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("custom");
            }}
          >
            CREATE YOUR OWN
          </a>

        </div>

      </div>

      <div className="hero-meta">
        <span>TEEMEME</span>
      </div>

      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <span className="hero-scroll-line"></span>
      </div>

    </section>
  );
}

export default Hero;