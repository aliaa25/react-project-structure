import './Navbar.css'

export default function Navbar({ cartCount = 0 }) {
  return (
    <header className="nav">
      <div className="wrap nav-row">
        <a href="#" className="logo">LU<span>MI</span></a>

        <ul className="nav-links">
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#orders">Orders</a></li>
        </ul>

        <div className="nav-right">
          <a href="#" className="cart">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M3 3h2l2.4 12.4a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L21 8H6" />
              <circle cx="9" cy="20" r="1.4" />
              <circle cx="17" cy="20" r="1.4" />
            </svg>
            Cart <span className="cart-badge">{cartCount}</span>
          </a>
          <button className="nav-toggle" aria-label="Menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
