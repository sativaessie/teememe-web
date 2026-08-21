import products from "../data/products";

function Featured({ onNavigate }) {
 const featuredProducts = products.filter((product) =>
  [1, 2, 3, 5].includes(product.id)
);

  return (
    <section className="featured-section" id="featured">

      {/* HEADER */}
      <div className="featured-header">

        <div>
          <p className="featured-eyebrow">
            WHAT'S NEW
          </p>

          <h2>
            FEATURED
            <br />
            <span>PIECES.</span>
          </h2>
        </div>

        <button
          type="button"
          className="featured-view-all"
          onClick={() => onNavigate("shop", "ALL")}
        >
          SHOP ALL
          <span>↗</span>
        </button>

      </div>


      {/* PRODUCTS */}
      <div className="featured-grid">

        {featuredProducts.map((product) => (

          <article
            className="featured-card"
            key={product.id}
          >

            {/* IMAGE */}
            <button
              type="button"
              className="featured-image-wrap"
              onClick={() => onNavigate("shop", product.category)}
            >

              {product.badge && (
                <span className="featured-tag">
                  {product.badge}
                </span>
              )}

              <img
                src={product.image}
                alt={product.name}
                className="featured-image"
              />

              <span className="featured-arrow">
                ↗
              </span>

            </button>


            {/* DETAILS */}
            <div className="featured-details">

              <div>
                <h3>
                  {product.name}
                </h3>

               <p>
  {product.category.toUpperCase()}
</p>
              </div>

              <strong>
                KSh {product.price.toLocaleString()}
              </strong>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Featured;