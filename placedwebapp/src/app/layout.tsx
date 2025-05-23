import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { AuthProvider } from '@/context/AuthContext';
import { ReactQueryProvider } from '@/context/ReactQueryProvider';

export const metadata: Metadata = {
  title: 'Placed',
  description: 'Place candidates. Close deals. Fast.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background antialiased">
        <ReactQueryProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
