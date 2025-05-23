import React from 'react';
import { EmailCaptureForm } from '@/features/demo/EmailCaptureForm';
import { getDictionary } from '../dictionaries';

type PageProps = {
  params: Promise<{ lang: 'en' | 'de' }>
};

export default async function DemoPage({ params }: PageProps) {
  const awaitedParams = await params;
  const dict = await getDictionary(awaitedParams.lang);

  return (
    <div className="flex min-h-screen bg-[#f0f2f5]">
      <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
        <EmailCaptureForm dict={dict.demo} />
      </div>
    </div>
  );
} 