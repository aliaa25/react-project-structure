import axios from "axios";
import { API_BASE_URL } from "@/constants/config";
import type { User } from "@/types/user.types";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export const usersApi = {
  getAll: () => apiClient.get<User[]>("/users").then((res) => res.data),
  getById: (id: string) =>
    apiClient.get<User>(`/users/${id}`).then((res) => res.data),
  create: (payload: Omit<User, "id">) =>
    apiClient.post<User>("/users", payload).then((res) => res.data),
};
