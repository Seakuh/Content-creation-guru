// src/components/PlatformForm/PlatformSelection/PlatformSelection.tsx
import React, { useState } from 'react';
import './PlatformSelection.css';
import { platforms } from '../../../data';
import { PlatformType } from '../../../types';

type PlatformSelectionProps = {
  onSelectPlatform: (platformId: string) => void;
};

const PlatformSelection: React.FC<PlatformSelectionProps> = ({ onSelectPlatform }) => {
  const [selectedPlatformId, setSelectedPlatformId] = useState<string | null>(null);

  const handlePlatformClick = (platformId: string) => {
    setSelectedPlatformId(platformId);
    onSelectPlatform(platformId);
  };

  return (
    <div className="platform-selection">
      {platforms.map((platform: PlatformType) => (
        <button
          key={platform.id}
          className={`platform-button ${selectedPlatformId === platform.id ? 'selected' : ''}`}
          onClick={() => handlePlatformClick(platform.id)}
        >
          <img src={platform.logoUrl} alt={`${platform.name} logo`} className="platform-logo" />
        </button>
      ))}
    </div>
  );
};

export default PlatformSelection;
