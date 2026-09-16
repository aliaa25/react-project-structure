// Site-wide footer, shared across pages.

export function Footer() {
  return (
    <footer
      style={{
        padding: "1.5rem 2rem",
        borderTop: "1px solid #e5e7eb",
        color: "#6b7280",
        textAlign: "center",
      }}
    >
      <p>&copy; {new Date().getFullYear()} React Project Structure. All rights reserved.</p>
    </footer>
  );
}
