import { useState } from "react";
import Navbar from "../../components/layout/Navbar.jsx";
import Footer from "../../components/layout/Footer.jsx";
import Hero from "../../components/sections/Hero.jsx";
import FeaturedProducts from "../../components/sections/FeaturedProducts.jsx";
import RecentOrders from "../../components/sections/RecentOrders.jsx";

interface Product {
  id: number | string
  name: string
  price: number
}

export function Home() {
  const [cartCount, setCartCount] = useState(0)

const handleAddToCart = (product: Product) => {
    setCartCount((count) => count + 1)
    console.log('Added to cart:', product.name)
  }

  return (
    <>
      <Navbar cartCount={cartCount} />
      <Hero />
      <FeaturedProducts onAddToCart={handleAddToCart} />
      <RecentOrders />
      <Footer />
    </>
  )
}
