// src/components/ContentResult.tsx
import React from 'react';
import './ContentResult.css';

interface ContentResultProps {
  result: {
    data: {
      contentText: string;
      hashtags: string[];
      callToAction: string;
      keywords: string[];
      styleDescription: string;
      recommendedPostTime: string;
    };
  } | null;
}

const ContentResult: React.FC<ContentResultProps> = ({ result }) => {
  if (!result) return null;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Text kopiert!');
  };

  return (
    <div className="content-result">
      <h2>Generierter Inhalt</h2>

      <div className="result-item">
        <strong>Text:</strong> {result.data.contentText}
        <span className="copy-icon" onClick={() => handleCopy(result.data.contentText)}>📝</span>
      </div>

      <div className="result-item">
        <strong>Hashtags:</strong> {result.data.hashtags.join(', ')}
        <span className="copy-icon" onClick={() => handleCopy(result.data.hashtags.join(', '))}>📝</span>
      </div>

      <div className="result-item">
        <strong>Call-to-Action:</strong> {result.data.callToAction}
        <span className="copy-icon" onClick={() => handleCopy(result.data.callToAction)}>📝</span>
      </div>

      <div className="result-item">
        <strong>Empfohlene Postzeit:</strong> {result.data.recommendedPostTime}
        <span className="copy-icon" onClick={() => handleCopy(result.data.recommendedPostTime)}>📝</span>
      </div>
    </div>
  );
};

export default ContentResult;
