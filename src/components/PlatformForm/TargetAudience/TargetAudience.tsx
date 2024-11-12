// src/components/PlatformForm/TargetAudience/TargetAudience.tsx
import React from 'react';
import './TargetAudience.css';

type TargetOption = {
  id: string;
  label: string;
  emoji: string;
};

const targetOptions: TargetOption[] = [
  { id: 'general', label: 'Allgemein', emoji: '🌍' },
  { id: 'youth', label: 'Jugendlich', emoji: '🧑‍🎤' },
  { id: 'professional', label: 'Professionell', emoji: '💼' },
  { id: 'technical', label: 'Technisch', emoji: '🛠️' },
  { id: 'casual', label: 'Locker', emoji: '😎' },
];

type TargetAudienceProps = {
  selectedAudience: string;
  onAudienceChange: (audience: string) => void;
};

const TargetAudience: React.FC<TargetAudienceProps> = ({ selectedAudience, onAudienceChange }) => {
  return (
    <div className="target-audience">
      <div className="audience-options">
        {targetOptions.map((option) => (
          <label
            key={option.id}
            className={`audience-option ${selectedAudience === option.id ? 'selected' : ''}`}
          >
            <input
              type="radio"
              name="audience"
              value={option.id}
              checked={selectedAudience === option.id}
              onChange={() => onAudienceChange(option.id)}
            />
            <span className="audience-emoji">{option.emoji}</span> {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default TargetAudience;
