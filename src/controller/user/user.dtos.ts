export interface CreateUserAccountRequest {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface CreateAccountResponse {
  message: string;
  user?: {
    email: string;
    firstName: string;
    lastName: string;
  };
  error?: string;
}
