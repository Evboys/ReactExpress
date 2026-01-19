// src/api/mocks/auth.mock.ts
import type { User } from "../../types/User";

export const mockUser: User = {
  id: "u1",
  username: "admin",
  email: "admin@test.com",
  role: "admin",
  favorites: [],
  createdAt: "2026-01-01",
};

export const mockAdminUser = mockUser;

export const mockToken = "mock-token";
