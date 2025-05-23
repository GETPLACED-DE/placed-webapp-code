import React from 'react';
import Nav from '@/components/ui/Nav';
import SearchBar from '@/components/ui/searchbar';
import { Switch } from '@/components/ui/switch';
import { getDictionary } from './dictionaries';

interface LandingPageProps {
  params: { lang: 'en' | 'de' };
}

export default async function LandingPage({ params }: LandingPageProps) {
  const awaitedParams = await params;
  const dict = await getDictionary(awaitedParams.lang);

  return (
    <main className="flex flex-col min-h-screen bg-[#fcfcfd]">
      {/* Header - responsive padding */}
      <header className="w-full border-b border-gray-200 py-4 md:py-6">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <Nav dict={dict}/>
        </div>
      </header>
      
      {/* Hero Section - responsive text and spacing */}
      <section className="flex flex-1 flex-col items-center justify-center text-center px-4 py-6 md:py-8 lg:py-12">
        <div className="w-full max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 md:mb-4 ">
            {dict.title}
          </h1>
          <p className="text-base md:text-lg text-gray-500 mb-6 md:mb-8 max-w-full md:max-w-2xl mx-auto">
            {dict.description}
          </p>
          
          {/* Search Bar with Drop Area - responsive width */}
          <div className="relative w-full mx-auto">
            <SearchBar dict={dict} />
          </div>
          
          {/* Toggles - responsive layout */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-6 mb-4">
            <div className="flex items-center gap-2">
              <Switch id="onlyPaid" />
              <label htmlFor="onlyPaid" className="text-sm text-gray-900 cursor-pointer">
                {dict.onlyPaid}
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Switch id="excludeHeadhunter" />
              <label htmlFor="excludeHeadhunter" className="text-sm text-gray-900 cursor-pointer">
                {dict.excludeHeadhunter}
              </label>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 