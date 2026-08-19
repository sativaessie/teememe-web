import "./AboutPage.css";

function AboutPage() {
  return (
    <main className="about-page">

      <section className="about-page-hero">
        <div className="about-page-hero-content">
          <p className="about-page-eyebrow">ABOUT TEEMEME</p>

          <h1>
            MADE HERE.
            <br />
            <span>WORN EVERYWHERE.</span>
          </h1>

          <p className="about-page-intro">
            TeeMeme is a Kenyan clothing and custom-printing
            brand made for people who want what they wear
            to feel like them.
          </p>
        </div>

        <div className="about-page-hero-mark">
          <span>KE</span>
          <strong>2026</strong>
        </div>
      </section>


      <section className="about-page-story">

        <div className="about-page-label">
          <span>01</span>
          <p>THE BRAND</p>
        </div>

        <div className="about-page-story-content">
          <h2>
            BORN IN KENYA.
            <br />
            BUILT AROUND
            <br />
            <span>EXPRESSION.</span>
          </h2>

          <p>
            We're from a place where a T-shirt can be a joke,
            a mood, an inside story, a little Sheng — sometimes
            all four.
          </p>

          <p>
            TeeMeme turns that energy into clothing. From
            statement pieces and everyday designs to completely
            custom ideas, we make pieces that give people
            something to say without saying a word.
          </p>
        </div>

      </section>


      <section className="about-page-offer">

        <div className="about-page-offer-heading">
          <p className="about-page-eyebrow">WHAT WE DO</p>

          <h2>
            MORE THAN
            <br />
            <span>A T-SHIRT.</span>
          </h2>
        </div>

        <div className="about-page-offer-grid">

          <article>
            <span>01</span>
            <h3>READY TO WEAR</h3>
            <p>
              Statement pieces, graphics, Kenyan energy
              and everyday designs made to be worn your way.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>MAKE YOUR OWN</h3>
            <p>
              Got a phrase, artwork, inside joke or wild idea?
              Bring it to life on a piece of your own.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>FOR YOUR PEOPLE</h3>
            <p>
              Branded apparel and bulk orders for businesses,
              teams, events, organisations and groups.
            </p>
          </article>

        </div>

      </section>


      <section className="about-page-statement">

        <p className="about-page-eyebrow">
          THE TEEMEME MINDSET
        </p>

        <h2>
          YOU DON'T HAVE TO
          <br />
          <span>BLEND IN.</span>
        </h2>

        <p>
          Wear the joke. Wear the mood. Wear the statement.
        </p>

      </section>


      <section className="about-page-ending">

        <p className="about-page-eyebrow">TEE MEME</p>

        <h2>
          WEAR THE
          <br />
          <span>CONVERSATION.</span>
        </h2>

        <p>
          Made in Kenya. Made for expression.
        </p>

      </section>

    </main>
  );
}

export default AboutPage;