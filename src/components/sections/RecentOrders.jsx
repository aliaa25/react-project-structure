import { useState } from 'react'
import Table from '../ui/Table/Table.jsx'
import Button from '../ui/Button/Button.jsx'
import initialOrders from '../../data/orders.js'
import './RecentOrders.css'

const statusLabels = {
  delivered: 'Delivered',
  processing: 'Processing',
  cancelled: 'Cancelled',
}

export default function RecentOrders() {
  const [orders, setOrders] = useState(initialOrders)
  const [selectedOrder, setSelectedOrder] = useState(null) // للـ View modal
  const [orderToDelete, setOrderToDelete] = useState(null) // للـ confirm قبل المسح

  const handleDeleteConfirm = () => {
    setOrders((prev) => prev.filter((o) => o.id !== orderToDelete.id))
    setOrderToDelete(null)
  }

  const columns = [
    {
      key: 'product',
      label: 'Product',
      render: (row) => (
        <div className="cell-product">
          <div className="thumb">
            {row.image ? (
              <img src={row.image} alt={row.product} />
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="1.5" />
                <circle cx="9" cy="9" r="2" />
                <path d="M21 15l-5.5-5.5a1 1 0 0 0-1.4 0L4 19" />
              </svg>
            )}
          </div>
          <div>
            <div className="pname">{row.product}</div>
            <div className="pid">#{row.id}</div>
          </div>
        </div>
      ),
    },
    { key: 'quantity', label: 'Quantity' },
    {
      key: 'price',
      label: 'Price',
      render: (row) => `$${row.price.toFixed(2)}`,
    },
    {
      key: 'status',
      label: 'Status',
      render: (row) => (
        <span className={`status ${row.status}`}>
          <span className="dot" />
          {statusLabels[row.status]}
        </span>
      ),
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (row) => (
        <div className="row-actions">
          <Button text="View" variant="secondary" size="sm" onClick={() => setSelectedOrder(row)} />
          <Button text="Delete" variant="danger" size="sm" onClick={() => setOrderToDelete(row)} />
        </div>
      ),
    },
  ]

  return (
    <section id="orders">
      <div className="wrap">
        <div className="section-head">
          <div>
            <h2>Recent Orders</h2>
            <p>Your last few orders and their current status.</p>
          </div>
          <a href="#" className="section-link">View all orders →</a>
        </div>

        <Table columns={columns} data={orders} striped />
      </div>

      {/* View Modal */}
      {selectedOrder && (
        <div className="modal-overlay" onClick={() => setSelectedOrder(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Order #{selectedOrder.id}</h3>
            <p><strong>Product:</strong> {selectedOrder.product}</p>
            <p><strong>Quantity:</strong> {selectedOrder.quantity}</p>
            <p><strong>Price:</strong> ${selectedOrder.price.toFixed(2)}</p>
            <p><strong>Status:</strong> {statusLabels[selectedOrder.status]}</p>
            <Button text="Close" variant="secondary" onClick={() => setSelectedOrder(null)} />
          </div>
        </div>
      )}

      {/* Delete Confirm */}
      {orderToDelete && (
        <div className="modal-overlay" onClick={() => setOrderToDelete(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Delete order #{orderToDelete.id}?</h3>
            <p>This action can't be undone.</p>
            <div className="row-actions">
              <Button text="Cancel" variant="secondary" onClick={() => setOrderToDelete(null)} />
              <Button text="Delete" variant="danger" onClick={handleDeleteConfirm} />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}