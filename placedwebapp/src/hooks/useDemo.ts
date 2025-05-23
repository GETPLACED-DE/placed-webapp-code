'use client';

import { useState } from 'react';
import axios from 'axios';

interface DemoSignupData {
  company: string;
  email: string;
}

export function useDemo() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const signupForDemo = async (data: DemoSignupData) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // This would normally call an API endpoint
      // For now, just simulate a delay and success
      // const response = await axios.post('/api/demo-signup', data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      console.log('Demo signup data:', data);
      setSuccess(true);
      return { success: true };
    } catch (err) {
      console.error('Demo signup error:', err);
      setError('An error occurred while signing up. Please try again.');
      return { success: false, error: 'Signup failed' };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    success,
    signupForDemo,
  };
} 