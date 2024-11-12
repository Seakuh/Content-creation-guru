import { PlatformType } from "./types";
import facebook from "./assets/facebook.jpg"
import xing from "./assets/xing.png"
import pinterest from "./assets/pinterest.jpeg"
import instagram from "./assets/instagram.webp"
import x from "./assets/X.jpg"
import linkedin from "./assets/linkedin.webp"
import tiktok from "./assets/tiktok.webp"
import reddit from "./assets/reddit.png"
import quora from "./assets/quora.png"



export const platforms: PlatformType[] = [
    {
      id: 'instagram',
      name: 'Instagram',
      logoUrl: instagram,
      descriptionLimit: 2200,
      idealHashtagCount: 5,
      videoDurationLimit: 60,
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      logoUrl: tiktok,
      descriptionLimit: 150,
      idealHashtagCount: 3,
      videoDurationLimit: 180,
    },
    {
      id: 'twitter',
      name: 'Twitter',
      logoUrl: x,
      descriptionLimit: 280,
      idealHashtagCount: 2,
      videoDurationLimit: 140,
    },
    {
      id: 'facebook',
      name: 'Facebook',
      logoUrl: facebook,
      descriptionLimit: 63206,
      idealHashtagCount: 3,
      videoDurationLimit: 240,
    },
    // Neue Plattformen
    {
      id: 'linkedin',
      name: 'LinkedIn',
      logoUrl: linkedin,
      descriptionLimit: 3000,
      idealHashtagCount: 5,
      videoDurationLimit: 600, // 10 Minuten
    },
    {
      id: 'xing',
      name: 'Xing',
      logoUrl: xing,
      descriptionLimit: 1000,
      idealHashtagCount: 5,
      videoDurationLimit: 600, // 10 Minuten
    },
    {
      id: 'pinterest',
      name: 'Pinterest',
      logoUrl: pinterest,
      descriptionLimit: 500,
      idealHashtagCount: 20,
      videoDurationLimit: 15, // 15 Sekunden
    },
    // Optional weitere Plattformen
    {
      id: 'reddit',
      name: 'Reddit',
      logoUrl: reddit,
      descriptionLimit: 40000,
      idealHashtagCount: 5,
      videoDurationLimit: 900, // 15 Minuten
    },
    {
      id: 'quora',
      name: 'Quora',
      logoUrl: quora,
      descriptionLimit: 100000,
      idealHashtagCount: 5,
      videoDurationLimit: 900, // 15 Minuten
    },
  ];
  