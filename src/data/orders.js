import arcLampImg from '../assets/images/aurora-durban-natural-cylinder-shade-table-lamp-natural.jpg'
import carafeImg from '../assets/images/Ribbed Glass Carafe.jpg'
import trayImg from '../assets/images/Stone Desk Tray.jpg'
const orders = [
  {
    id: 'LUM-0234',
    product: 'Arc Table Lamp',
    image: arcLampImg,
    quantity: 1,
    price: 89.0,
    status: 'delivered',
  },
  {
    id: 'LUM-0198',
    product: 'Ribbed Glass Carafe',
    image: carafeImg,
    quantity: 2,
    price: 68.0,
    status: 'processing',
  },
  {
    id: 'LUM-0177',
    product: 'Stone Desk Tray',
    image: trayImg,
    quantity: 1,
    price: 58.0,
    status: 'cancelled',
  },
]

export default orders
