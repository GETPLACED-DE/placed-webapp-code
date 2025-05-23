'use client';

import { useAuth as useAuthContext } from '@/context/AuthContext';

export function useAuth() {
  const context = useAuthContext();

  // This would normally use Supabase auth functions
  // For now, we'll just provide placeholder functions
  const login = async (email: string, password: string) => {
    // Placeholder for authentication logic
    console.log('Login with:', email, password);
    return { success: true };
  };

  const logout = async () => {
    // Placeholder for logout logic
    console.log('Logging out');
    return { success: true };
  };

  const resetPassword = async (email: string) => {
    // Placeholder for password reset logic
    console.log('Reset password for:', email);
    return { success: true };
  };

  return {
    user: context.user,
    isAuthenticated: context.isAuthenticated,
    loading: context.loading,
    login,
    logout,
    resetPassword,
  };
} 