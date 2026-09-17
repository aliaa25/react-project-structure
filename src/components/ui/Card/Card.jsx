import './Card.css'
export default function Card({ title, description, image, tag, children }) {
  return (
    <article className="card">
      <div className="card-media">
        {tag && <span className="card-tag">{tag}</span>}
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="card-placeholder">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <rect x="3" y="3" width="18" height="18" rx="1.5" />
              <circle cx="9" cy="9" r="2" />
              <path d="M21 15l-5.5-5.5a1 1 0 0 0-1.4 0L4 19" />
            </svg>
            <span>Product image</span>
          </div>
        )}
      </div>

      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        {description && <p className="card-desc">{description}</p>}

        {/* children prop lets any caller drop custom content (price, buttons, badges) here */}
        {children}
      </div>
    </article>
  )
}
