import { Role } from './roles.type';

export interface UserResponse {
  username?: string;
  role?: Role;
}

export interface UserWithToken extends UserResponse {
  token: string;
}
