import { User, UserRole } from '../types/user';

export const isAuthenticated = (): boolean => {
  return localStorage.getItem('auth_token') !== null;
};

export const getCurrentUser = (): User | null => {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
};

export const hasRole = (requiredRole: UserRole): boolean => {
  const user = getCurrentUser();
  return user?.role === requiredRole;
};

export const logout = (): void => {
  localStorage.removeItem('auth_token');
  localStorage.removeItem('user');
  window.location.href = '/login';
};

export const login = (token: string, user: User): void => {
  localStorage.setItem('auth_token', token);
  localStorage.setItem('user', JSON.stringify(user));
};