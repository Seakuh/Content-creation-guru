// src/components/ContentResult.tsx
import React, { useState } from 'react';
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
  const [copied, setCopied] = useState(false);

  if (!result) return null;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Blendet das Copy-Label nach 2 Sekunden aus
  };

  return (
    <div className="content-result">
      <h2>Generierter Inhalt</h2>

      <div className="result-item" onClick={() => handleCopy(result.data.contentText)}>
        <strong>Text:</strong> {result.data.contentText}
        <span className="copy-icon">📝</span>
      </div>

      <div className="result-item" onClick={() => handleCopy(result.data.hashtags.join(', '))}>
        <strong>Hashtags:</strong> {result.data.hashtags.join(', ')}
        <span className="copy-icon">📝</span>
      </div>

      <div className="result-item" onClick={() => handleCopy(result.data.callToAction)}>
        <strong>Call-to-Action:</strong> {result.data.callToAction}
        <span className="copy-icon">📝</span>
      </div>

      <div className="result-item" onClick={() => handleCopy(result.data.recommendedPostTime)}>
        <strong>Empfohlene Postzeit:</strong> {result.data.recommendedPostTime}
      </div>

      <button className="add-to-plugin-button">Add to Plugin</button>

      {copied && <div className="copied-notification">Copied!</div>}
    </div>
  );
};

export default ContentResult;
