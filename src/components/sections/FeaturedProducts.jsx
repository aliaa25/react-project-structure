import { useState } from 'react'
import Card from '../ui/Card/Card.jsx'
import Button from '../ui/Button/Button.jsx'
import Modal from '../ui/Modal/Modal.jsx'
import products from '../../data/products.js'
import './FeaturedProducts.css'

export default function FeaturedProducts({ onAddToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <section id="products">
      <div className="wrap">
        <div className="section-head">
          <div>
            <h2>Featured Products</h2>
            <p>A short seasonal edit — new pieces from the LUMI workshop, restocked weekly.</p>
          </div>
          <a href="#" className="section-link">View all products →</a>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <Card
              key={product.id}
              title={product.name}
              description={product.description}
              image={product.image}
              tag={product.tag}
            >
              <div className="card-price-row">
                <span className="card-price">
                  ${product.price}
                  {product.compareAtPrice && (
                    <span className="was">${product.compareAtPrice}</span>
                  )}
                </span>
              </div>

              <div className="card-actions">
                <Button
                  text={product.inStock ? 'Add to Cart' : 'Sold Out'}
                  variant="primary"
                  size="sm"
                  disabled={!product.inStock}
                  onClick={() => onAddToCart?.(product)}
                />
                <Button
                  text="View Details"
                  variant="secondary"
                  size="sm"
                  onClick={() => setSelectedProduct(product)}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Modal open={!!selectedProduct} onClose={() => setSelectedProduct(null)}>
        {selectedProduct && (
          <>
            {selectedProduct.image && (
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="modal-product-img"
              />
            )}
            <h3>{selectedProduct.name}</h3>
            <p className="modal-product-desc">{selectedProduct.description}</p>
            <div className="card-price-row">
              <span className="card-price">
                ${selectedProduct.price}
                {selectedProduct.compareAtPrice && (
                  <span className="was">${selectedProduct.compareAtPrice}</span>
                )}
              </span>
            </div>
            <div className="card-actions">
              <Button
                text={selectedProduct.inStock ? 'Add to Cart' : 'Sold Out'}
                variant="primary"
                size="sm"
                disabled={!selectedProduct.inStock}
                onClick={() => {
                  onAddToCart?.(selectedProduct)
                  setSelectedProduct(null)
                }}
              />
              <Button
                text="Close"
                variant="secondary"
                size="sm"
                onClick={() => setSelectedProduct(null)}
              />
            </div>
          </>
        )}
      </Modal>
    </section>
  )
}