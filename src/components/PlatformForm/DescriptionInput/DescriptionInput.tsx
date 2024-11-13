// src/components/PlatformForm/DescriptionInput/DescriptionInput.tsx
import React from 'react';
import './DescriptionInput.css';

type DescriptionInputProps = {
  description: string;
  onChangeDescription: (text: string) => void;
};

const DescriptionInput: React.FC<DescriptionInputProps> = ({ description, onChangeDescription, charLimit }) => {
  return (
    <div className="description-input">
      <textarea
        value={description}
        onChange={(e) => onChangeDescription(e.target.value)}
        maxLength={charLimit}
        placeholder="Deine Beschreibung hier..."
        className="description-textarea"
      />
      <div className="char-count">{description.length} Zeichen</div>
    </div>
  );
};

export default DescriptionInput;
