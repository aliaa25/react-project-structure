import Button from '../ui/Button/Button.jsx'
import heroImage from '../../assets/images/hero.jpg'
import './Hero.css'

export default function Hero() {
  const handleShopNow = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow"><span className="dot" />New arrivals, every Friday</span>
          <h1 className="headline">Everyday objects, <em>thoughtfully</em> lit.</h1>
          <p className="hero-sub">
            LUMI is a small studio making lamps, glassware and desk objects meant to be
            used daily — not just displayed. Considered materials, fair prices, no clutter.
          </p>
          <div className="hero-actions">
            {/* Button #1: accent variant */}
            <Button text="Shop Now" variant="accent" onClick={handleShopNow} />
          </div>
        </div>

        <div className="hero-visual">
          <img src={heroImage} alt="LUMI lamp and desk objects" className="hero-img" />
        </div>
      </div>
    </section>
  )
}