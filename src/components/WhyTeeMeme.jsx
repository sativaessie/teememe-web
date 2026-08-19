const reasons = [
  {
    number: "01",
    title: "MADE TO STAND OUT",
    text: "Pieces with personality, attitude and a little edge.",
  },
  {
    number: "02",
    title: "QUALITY FIRST",
    text: "Every piece is made to look good and feel good.",
  },
  {
    number: "03",
    title: "YOUR IDEAS, PRINTED",
    text: "From one personal tee to a full branded order.",
  },
  {
    number: "04",
    title: "MADE FOR YOU",
    text: "For yourself, your crew, your event or your brand.",
  },
];

function WhyTeeMeme() {
  return (
    <section className="why-section" id="why-teememe">
      <div className="why-inner">

        <div className="why-heading">
          <p className="section-eyebrow">WHY TEEMEME</p>

          <h2>
            NOT JUST
            <br />
            <span>ANOTHER TEE.</span>
          </h2>

          <p className="why-intro">
            Wear the joke. Wear the statement.
            Wear the mood.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((reason) => (
            <article className="why-card" key={reason.number}>
              <span className="why-number">
                {reason.number}
              </span>

              <h3>{reason.title}</h3>

              <p>{reason.text}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyTeeMeme;