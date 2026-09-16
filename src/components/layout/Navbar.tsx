// Top navigation bar, shared across pages.

import { Link } from "react-router-dom";
import { ROUTES } from "@/constants/config";

export function Navbar() {
  return (
    <header style={{ padding: "1rem 2rem", borderBottom: "1px solid #e5e7eb" }}>
      <nav style={{ display: "flex", gap: "1.5rem" }}>
        <Link to={ROUTES.HOME}>Home</Link>
        <Link to={ROUTES.ABOUT}>About</Link>
      </nav>
    </header>
  );
}
