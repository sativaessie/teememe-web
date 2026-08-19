import { useState } from "react";
import { useCart } from "../context/CartContext";
function Navbar({ onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();

  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* LOGO */}
        <a href="/" className="navbar-logo" onClick={closeMenu}>
  <img
    src="/images/teememe-logo.jpg"
    alt="TeeMeme"
  />
</a>

        {/* DESKTOP NAVIGATION */}
        <nav className={`navbar-links ${menuOpen ? "is-open" : ""}`}>
  <a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    onNavigate("shop");
    closeMenu();
  }}
>
  Shop
</a>

  <a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    onNavigate("customize");
    closeMenu();
  }}
>
  Custom
</a>

 <a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    onNavigate("corporate");
    closeMenu();
  }}
>
  Corporate
</a> 

  <a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    closeMenu();
    onNavigate("about");
  }}
>
  About
</a>
</nav>

       {/* RIGHT SIDE */}
<div className="navbar-actions">

  {/* CART */}
  <a
  href="#"
  className="navbar-cart"
  aria-label="Shopping cart"
  onClick={(e) => {
    e.preventDefault();
    onNavigate("cart");
    closeMenu();
  }}
>
  🛒
  <span className="cart-count">{cartCount}</span>
</a>

  {/* SHOP NOW */}
  <a
  href="#"
  className="navbar-shop"
  onClick={(e) => {
    e.preventDefault();
    onNavigate("shop");
    closeMenu();
  }}
>
  SHOP NOW
</a>

          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;