import arcLampImg from '../assets/images/aurora-durban-natural-cylinder-shade-table-lamp-natural.jpg'
import carafeImg from '../assets/images/Ribbed Glass Carafe.jpg'
import trayImg from '../assets/images/Stone Desk Tray.jpg'
  const products = [
  {
    id: 'p1',
    name: 'Arc Table Lamp',
    description: 'Warm dimmable glow with a hand-turned oak base. Ships assembled.',
    price: 89,
    compareAtPrice: null,
    image: arcLampImg,
    tag: 'New',
    inStock: true,
  },
  {
    id: 'p2',
    name: 'Ribbed Glass Carafe',
    description: 'Mouth-blown borosilicate glass, holds 1L. Dishwasher safe.',
    price: 34,
    compareAtPrice: 42,
    image: carafeImg,
    tag: null,
    inStock: true,
  },
  {
    id: 'p3',
    name: 'Stone Desk Tray',
    description: 'Honed travertine, sized for keys, a phone and a mug ring.',
    price: 58,
    compareAtPrice: null,
    image: trayImg,
    tag: 'Low stock',
    inStock: false,
  },
]

export default products
