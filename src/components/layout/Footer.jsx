import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo">LU<span>MI</span></a>
            <p>Small-batch lighting and desk objects, made to be used every day.</p>
          </div>

          <div className="footer-col">
            <h4>Shop</h4>
            <ul>
              <li><a href="#">All products</a></li>
              <li><a href="#">New arrivals</a></li>
              <li><a href="#">Gift cards</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Track order</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Stay in the loop</h4>
            <div className="newsletter">
              <input type="email" placeholder="Email address" />
              <button>Join</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 LUMI Studio. All rights reserved.</span>
          <span>Made with care, in small batches.</span>
        </div>
      </div>
    </footer>
  )
}
