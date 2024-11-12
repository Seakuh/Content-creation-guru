// src/components/PlatformForm/PlatformForm.tsx
import React, { useState } from 'react';
import PlatformSelection from './PlatformSelection/PlatformSelection';
import DescriptionInput from './DescriptionInput/DescriptionInput';
import StyleSelection from './StyleSelection/StyleSelection';
import './PlatformForm.css';
import { platforms } from '../../data';

const PlatformForm: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [description, setDescription] = useState<string>('');
  const [selectedStyle, setSelectedStyle] = useState<string>('inspirational'); // Standard-Stil

  const handlePlatformSelect = (platformId: string) => {
    setSelectedPlatform(platformId);
    setDescription(''); // Reset Beschreibung bei neuer Auswahl
  };

  const selectedPlatformData = selectedPlatform
    ? platforms.find((platform) => platform.id === selectedPlatform)
    : null;

  // Funktion zur Generierung des Contents mit Stil und Zeichenlimit
  const generateContent = () => {
    if (selectedPlatformData) {
      const charLimit = selectedPlatformData.descriptionLimit;
      console.log(`Generieren mit Limit ${charLimit} Zeichen und Stil ${selectedStyle}`);
    }
  };

  return (
    <div className="platform-form">
      <h1>Wähle eine Plattform aus:</h1>
      <PlatformSelection onSelectPlatform={handlePlatformSelect} />
          <StyleSelection selectedStyle={selectedStyle} onSelectStyle={setSelectedStyle} />
          <DescriptionInput
            description={description}
            onChangeDescription={setDescription}
          />
      <button onClick={generateContent} className="generate-button">
        Content generieren
      </button>
    </div>
  );
};

export default PlatformForm;
