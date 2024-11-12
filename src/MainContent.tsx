// src/components/MainContent.tsx
import React, { useState } from 'react';
import { generateContent } from './service';
import Loading from './components/Loading/Loading';
import ContentResult from './components/ContentResult/ContentResult';
import PlatformForm from './components/PlatformForm/PlatformForm';

const MainContent: React.FC = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerateContent = async (formData: { platform: string; style: string; targetAudience: string; description: string }) => {
    setLoading(true);
    setResult(null);
    try {
      const data = await generateContent(formData);
      setResult(data);
    } catch (error) {
      console.error('Fehler beim Generieren des Contents:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PlatformForm onGenerateContent={handleGenerateContent} />
      {loading && <Loading />}
      {result && <ContentResult result={result} />}
    </div>
  );
};

export default MainContent;
