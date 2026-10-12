import type { User } from "./types";

export type ApiErrorCode = "EMAIL_TAKEN" | "INVALID_CREDENTIALS";

export class ApiError extends Error {
  code: ApiErrorCode;

  constructor(code: ApiErrorCode, message: string) {
    super(message);
    this.name = "ApiError";
    this.code = code;
  }
}

type StoredUser = User & { passwordHash: string; salt: string };

const USERS_KEY = "rl_users";
const SESSION_KEY = "rl_session";

function readUsers(): StoredUser[] {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? (JSON.parse(raw) as StoredUser[]) : [];
  } catch {
    return [];
  }
}

function writeUsers(users: StoredUser[]): void {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function toUser(stored: StoredUser): User {
  return { id: stored.id, name: stored.name, email: stored.email };
}

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}