// src/types.ts
export type PlatformType = {
    id: string;
    name: string;
    logoUrl: string;  // Pfad zum Logo der Plattform
    descriptionLimit: number;  // Zeichenlimit für Beschreibungen
    idealHashtagCount: number;  // Empfohlene Anzahl von Hashtags
    videoDurationLimit: number;  // Maximale Videolänge in Sekunden
  };
  
