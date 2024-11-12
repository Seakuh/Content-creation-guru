// src/components/PlatformForm/PlatformForm.tsx
import React, { useState, useEffect } from 'react';
import PlatformSelection from './PlatformSelection/PlatformSelection';
import DescriptionInput from './DescriptionInput/DescriptionInput';
import StyleSelection from './StyleSelection/StyleSelection';
import TargetAudience from './TargetAudience/TargetAudience';
import './PlatformForm.css';
import { platforms } from '../../data';

interface PlatformFormProps {
  onGenerateContent: (formData: { platform: string; style: string; targetAudience: string; description: string }) => void;
}

// Helper function to save to Local Storage
const saveToLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

// Helper function to load from Local Storage
const loadFromLocalStorage = (key: string, defaultValue: string) => {
  return localStorage.getItem(key) || defaultValue;
};

const PlatformForm: React.FC<PlatformFormProps> = ({ onGenerateContent }) => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>(
    loadFromLocalStorage('selectedPlatform', 'instagram')
  );
  const [description, setDescription] = useState<string>(
    loadFromLocalStorage('description', '')
  );
  const [selectedStyle, setSelectedStyle] = useState<string>(
    loadFromLocalStorage('selectedStyle', 'inspirational')
  );
  const [targetAudience, setTargetAudience] = useState<string>(
    loadFromLocalStorage('targetAudience', 'general')
  );

  const selectedPlatformData = selectedPlatform
    ? platforms.find((platform) => platform.id === selectedPlatform)
    : null;

  useEffect(() => {
    if (selectedPlatform) saveToLocalStorage('selectedPlatform', selectedPlatform);
    if (description) saveToLocalStorage('description', description);
    if (selectedStyle) saveToLocalStorage('selectedStyle', selectedStyle);
    if (targetAudience) saveToLocalStorage('targetAudience', targetAudience);
  }, [selectedPlatform, description, selectedStyle, targetAudience]);

  const handlePlatformSelect = (platformId: string) => {
    setSelectedPlatform(platformId);
    setDescription('');
  };

  const handleSubmit = () => {
    onGenerateContent({
      platform: selectedPlatform,
      style: selectedStyle,
      targetAudience,
      description,
    });
  };

  return (
    <div className="platform-form">

      {/* Platform selection component */}
      <PlatformSelection onSelectPlatform={handlePlatformSelect} />

      {/* Style selection component */}
      <StyleSelection selectedStyle={selectedStyle} onSelectStyle={setSelectedStyle} />

      {/* Target audience selection component */}
      <TargetAudience selectedAudience={targetAudience} onAudienceChange={setTargetAudience} />

      {/* Description input component */}
      <DescriptionInput description={description} onChangeDescription={setDescription} />

      {/* Generate content button */}
      <button onClick={handleSubmit} className="generate-button">
        Content generieren
      </button>
    </div>
  );
};

export default PlatformForm;
