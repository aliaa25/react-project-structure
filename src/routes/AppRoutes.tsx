import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "@/pages/Home";
import { AboutPage } from "@/pages/About";
import { ProductsPage } from "@/pages/Products";
import { ProductDetailsPage } from "@/pages/ProductDetails";
import { ROUTES } from "@/constants/config";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
         <Route path={ROUTES.PRODUCTS} element={<ProductsPage />} />
        <Route path={ROUTES.PRODUCT_DETAILS} element={<ProductDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
