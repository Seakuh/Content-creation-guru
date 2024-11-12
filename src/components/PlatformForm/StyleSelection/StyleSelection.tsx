// src/components/PlatformForm/StyleSelection/StyleSelection.tsx
import React from 'react';
import './StyleSelection.css';

type StyleOption = {
  id: string;
  label: string;
  emoji: string;
};

const styleOptions: StyleOption[] = [
  { id: 'inspirational', label: 'Inspirierend', emoji: '✨' },
  { id: 'humorous', label: 'Humorvoll', emoji: '😂' },
  { id: 'formal', label: 'Sachlich', emoji: '📄' },
  { id: 'friendly', label: 'Freundlich', emoji: '😊' },
];

type StyleSelectionProps = {
  selectedStyle: string;
  onSelectStyle: (styleId: string) => void;
};

const StyleSelection: React.FC<StyleSelectionProps> = ({ selectedStyle, onSelectStyle }) => {
  return (
    <div className="style-selection">
      <h2>Wähle einen Stil:</h2>
      <div className="style-options">
        {styleOptions.map((style) => (
          <label key={style.id} className="style-option">
            <input
              type="radio"
              name="style"
              value={style.id}
              checked={selectedStyle === style.id}
              onChange={() => onSelectStyle(style.id)}
            />
            <span className="style-emoji">{style.emoji}</span> {style.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default StyleSelection;
