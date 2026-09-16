import { apiClient } from "@/api/users.api";
import type { LoginSchema } from "@/schemas/user.schema";
import type { User } from "@/types/user.types";

const TOKEN_KEY = "auth_token";

export const authService = {
  async login(credentials: LoginSchema): Promise<User> {
    const { data } = await apiClient.post<{ user: User; token: string }>(
      "/auth/login",
      credentials
    );
    localStorage.setItem(TOKEN_KEY, data.token);
    return data.user;
  },

  logout(): void {
    localStorage.removeItem(TOKEN_KEY);
  },

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  },

  isAuthenticated(): boolean {
    return Boolean(this.getToken());
  },
};
