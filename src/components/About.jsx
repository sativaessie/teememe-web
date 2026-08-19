function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-inner">

        <div className="about-heading">
          <p className="section-eyebrow">
            ABOUT TEEMEME
          </p>

          <h2>
            WE MAKE
            <br />
            <span>TEES THAT TALK.</span>
          </h2>
        </div>

        <div className="about-content">

          <p className="about-description">
            TeeMeme is a Kenyan clothing and custom-printing
            brand built around self-expression, personality
            and pieces that have something to say.
          </p>

          <div className="about-points">

            <div className="about-point">
              <span>01</span>

              <div>
                <h3>BASED IN KENYA</h3>
                <p>
                  Designed with personality and made to stand out.
                </p>
              </div>
            </div>

            <div className="about-point">
              <span>02</span>

              <div>
                <h3>FOR EVERYONE</h3>
                <p>
                  T-Shirts, hoodies, caps and more.
                </p>
              </div>
            </div>

            <div className="about-point">
              <span>03</span>

              <div>
                <h3>CUSTOM TOO</h3>
                <p>
                  Your idea. Your design. Your way.
                </p>
              </div>
            </div>

          </div>

          <p className="about-signature">
            Wear the conversation.
          </p>

        </div>

      </div>
    </section>
  );
}

export default About;