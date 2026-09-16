import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "2rem" }}>
        <h1>About</h1>
        <p>React folder structure.</p>
      </main>
      <Footer />
    </>
  );
}
