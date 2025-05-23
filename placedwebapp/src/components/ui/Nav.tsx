'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import Logo from '@/components/ui/Logo';
import { Menu, X } from 'lucide-react';

interface NavProps {
  dict: {
    about: string;
    pricing: string;
    faq: string;
    tryForFree: string;
    login: {
      logIn: string;
    };
  };
}

const Nav: React.FC<NavProps> = ({ dict }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const params = useParams();
  const lang = params?.lang || 'en';

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="w-full">
      {/* Desktop Navigation */}
      <div className="w-full hidden md:flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Logo />
        </div>
        
        {/* Center: Nav links */}
        <div className="flex items-center justify-center gap-8">
          <Link href={`/${lang}#about`} className="text-base font-medium text-foreground hover:underline">{dict.about}</Link>
          <Link href={`/${lang}#pricing`} className="text-base font-medium text-foreground hover:underline">{dict.pricing}</Link>
          <Link href={`/${lang}#faq`} className="text-base font-medium text-foreground hover:underline">{dict.faq}</Link>
        </div>
        
        {/* Right: Auth CTAs */}
        <div className="flex items-center gap-4">
          <Link href={`/${lang}/login`} className="text-base font-medium text-foreground hover:underline">{dict.login.logIn}</Link>
          <Link href={`/${lang}/demo`}>
            <Button className="bg-lime-200 text-black font-semibold hover:bg-lime-300 rounded-full">{dict.tryForFree}</Button>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="p-2 rounded-md focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white z-50 shadow-md py-4 px-6 border-t border-gray-100">
          <div className="flex flex-col space-y-4">
            <Link 
              href={`/${lang}#about`}
              className="text-base font-medium text-foreground hover:underline"
              onClick={() => setMobileMenuOpen(false)}
            >
              {dict.about}
            </Link>
            <Link 
              href={`/${lang}#pricing`}
              className="text-base font-medium text-foreground hover:underline"
              onClick={() => setMobileMenuOpen(false)}
            >
              {dict.pricing}
            </Link>
            <Link 
              href={`/${lang}#faq`}
              className="text-base font-medium text-foreground hover:underline"
              onClick={() => setMobileMenuOpen(false)}
            >
              {dict.faq}
            </Link>
            <hr className="border-gray-200" />
            <Link 
              href={`/${lang}/login`}
              className="text-base font-medium text-foreground hover:underline"
              onClick={() => setMobileMenuOpen(false)}
            >
              {dict.login.logIn}
            </Link>
            <Link 
              href={`/${lang}/demo`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button 
                className="bg-lime-200 text-black font-semibold hover:bg-lime-300 rounded-full w-full"
              >
                {dict.tryForFree}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav; 