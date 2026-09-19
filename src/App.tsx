import { QueryClientProvider } from "@tanstack/react-query";
import AppProvider from "@/providers/AppProvider";
import AppRoutes from "@/routes/AppRoutes";
import { queryClient } from "@/lib/queryClient";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </QueryClientProvider>
  );
}