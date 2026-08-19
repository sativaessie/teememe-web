import "./categories.css";
const categories = [
  {
    title: "KENYAN VIBES",
    category: "Kenyan Vibes",
    subtitle: "Sheng. Culture. Pure Kenyan energy.",
    image: "/categories/kenyan-vibes.jpg",
    featured: true,
  },
  {
    title: "MOMENTS",
    category: "Moments",
    subtitle: "For birthdays, besties, celebrations and everything worth remembering.",
    image: "/categories/birthday.jpg",
  },
  {
    title: "FUNNY & RELATABLE",
    category: "Funny & Relatable",
    subtitle: "Say it without saying it.",
    image: "/categories/funny.jpg",
  },
  {
    title: "STATEMENT TEES",
    category: "Statement Tees",
    subtitle: "Wear what you mean.",
    image: "/categories/statement.jpg",
  },
  {
    title: "WOMEN",
    category: "Women",
    subtitle: "Pieces made to feel like you.",
    image: "/categories/women.jpg",
  },
  {
    title: "MEN",
    category: "Men",
    subtitle: "Keep it simple. Keep it yours.",
    image: "/categories/men.jpg",
  },
  {
    title: "CORPORATE & BULK",
    category: "Corporate & Bulk",
    subtitle: "Your brand. Your people. Your way.",
    image: "/categories/corporate.jpg",
  },
];

function Categories({ onNavigate }) {
  return (
    <section className="categories-section" id="categories">

      <div className="categories-header">

        <div className="categories-title">
          <p>PICK YOUR MOOD </p>

          <h2>
            FIND YOUR
            <br />
            <span>VIBE.</span>
          </h2>
        </div>

        <div className="categories-intro">
          <p>
            From Kenyan classics to birthday chaos,
            find something that feels like you.
          </p>

         <a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    onNavigate("shop", "ALL");
  }}
>
  VIEW ALL COLLECTIONS <span>↗</span>
</a>
        </div>

      </div>

      <div className="categories-grid">

        {categories.map((category, index) => (
          <a
  href="#"
  className={`category-card ${
    category.featured ? "category-featured" : ""
  }`}
  key={index}
  onClick={(e) => {
    e.preventDefault();
    onNavigate("shop", category.category);
  }}
>
            <img
              src={category.image}
              alt={category.title}
            />

            <div className="category-overlay" />

            <div className="category-content">
              <div>
                <h3>{category.title}</h3>
                <p>{category.subtitle}</p>
              </div>

              <span className="category-arrow">
                ↗
              </span>
            </div>

          </a>
        ))}

      </div>

    </section>
  );
}

export default Categories;