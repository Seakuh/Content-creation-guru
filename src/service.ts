// src/service.ts
const BASE_URL = 'http://localhost:5000/api/content';

interface GenerateContentData {
  platform: string;
  style: string;
  targetAudience: string;
  description: string;
}

export async function generateContent(formData: GenerateContentData) {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`Fehler: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Fehler beim Aufruf des Backends:', error);
    throw error;
  }
}
