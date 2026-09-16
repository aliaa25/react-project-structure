import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/Button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { APP_NAME } from "@/constants/config";

export function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <main style={{ padding: "2rem" }}>
        <h1>{APP_NAME}</h1>
        <p>{t("welcome")}</p>
        <Button onClick={() => alert("Hello!")}>Click me</Button>
      </main>
      <Footer />
    </>
  );
}
