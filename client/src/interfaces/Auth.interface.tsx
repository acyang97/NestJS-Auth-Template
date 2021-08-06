export interface AuthState {
  token: string | null;
  isAuthenticated: boolean | null;
  isLoading: boolean;
  user: {
    username: string;
    email: string;
  } | null;
}
