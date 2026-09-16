export const APP_NAME = "React Project Structure";

export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? "https://api.example.com";

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
} as const;
