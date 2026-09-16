import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "@/pages/Home";
import { AboutPage } from "@/pages/About";
import { ROUTES } from "@/constants/config";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}
