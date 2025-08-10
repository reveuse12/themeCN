'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Theme = {
  id: string;
  name: string;
  description: string;
  colors: {
    background: string;
    foreground: string;
    card: string;
    cardForeground: string;
    popover: string;
    popoverForeground: string;
    primary: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    muted: string;
    mutedForeground: string;
    accent: string;
    accentForeground: string;
    destructive: string;
    destructiveForeground: string;
    border: string;
    input: string;
    ring: string;
  };
  darkColors?: {
    background: string;
    foreground: string;
    card: string;
    cardForeground: string;
    popover: string;
    popoverForeground: string;
    primary: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    muted: string;
    mutedForeground: string;
    accent: string;
    accentForeground: string;
    destructive: string;
    destructiveForeground: string;
    border: string;
    input: string;
    ring: string;
  };
  fonts: {
    sans: string;
    serif?: string;
    mono?: string;
    baseSize?: string;
    lineHeight?: string;
    letterSpacing?: string;
    headingWeight?: string;
    bodyWeight?: string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
  };
};

type ThemeContextType = {
  currentTheme: Theme;
  themes: Theme[];
  setTheme: (theme: Theme) => void;
  exportCSS: () => string;
  exportTailwind: () => string;
};

const defaultTheme: Theme = {
  id: 'default',
  name: 'Default',
  description: 'Clean and professional default theme',
  colors: {
    background: '0 0% 100%',
    foreground: '0 0% 3.9%',
    card: '0 0% 100%',
    cardForeground: '0 0% 3.9%',
    popover: '0 0% 100%',
    popoverForeground: '0 0% 3.9%',
    primary: '0 0% 9%',
    primaryForeground: '0 0% 98%',
    secondary: '0 0% 96.1%',
    secondaryForeground: '0 0% 9%',
    muted: '0 0% 96.1%',
    mutedForeground: '0 0% 45.1%',
    accent: '0 0% 96.1%',
    accentForeground: '0 0% 9%',
    destructive: '0 84.2% 60.2%',
    destructiveForeground: '0 0% 98%',
    border: '0 0% 89.8%',
    input: '0 0% 89.8%',
    ring: '0 0% 3.9%',
  },
  darkColors: {
    background: '0 0% 3.9%',
    foreground: '0 0% 98%',
    card: '0 0% 3.9%',
    cardForeground: '0 0% 98%',
    popover: '0 0% 3.9%',
    popoverForeground: '0 0% 98%',
    primary: '0 0% 98%',
    primaryForeground: '0 0% 9%',
    secondary: '0 0% 14.9%',
    secondaryForeground: '0 0% 98%',
    muted: '0 0% 14.9%',
    mutedForeground: '0 0% 63.9%',
    accent: '0 0% 14.9%',
    accentForeground: '0 0% 98%',
    destructive: '0 62.8% 30.6%',
    destructiveForeground: '0 0% 98%',
    border: '0 0% 14.9%',
    input: '0 0% 14.9%',
    ring: '0 0% 83.1%',
  },
  fonts: {
    sans: 'var(--font-inter)',
    serif: 'var(--font-serif-default)',
    mono: 'var(--font-mono-default)',
    baseSize: '16px',
    lineHeight: '1.5',
    letterSpacing: '0em',
    headingWeight: '700',
    bodyWeight: '400',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
  },
};

const predefinedThemes: Theme[] = [
  defaultTheme,
  {
    id: 'ocean',
    name: 'Ocean Breeze',
    description: 'Calming blues and teals inspired by ocean depths',
    colors: {
      background: '210 40% 98%',
      foreground: '210 40% 8%',
      card: '210 40% 100%',
      cardForeground: '210 40% 8%',
      popover: '210 40% 100%',
      popoverForeground: '210 40% 8%',
      primary: '200 98% 39%',
      primaryForeground: '0 0% 98%',
      secondary: '210 40% 96%',
      secondaryForeground: '210 40% 9%',
      muted: '210 40% 96%',
      mutedForeground: '210 40% 45%',
      accent: '180 100% 90%',
      accentForeground: '180 100% 9%',
      destructive: '0 84% 60%',
      destructiveForeground: '0 0% 98%',
      border: '210 40% 88%',
      input: '210 40% 88%',
      ring: '200 98% 39%',
    },
    darkColors: {
      background: '210 40% 3%',
      foreground: '210 40% 98%',
      card: '210 40% 5%',
      cardForeground: '210 40% 98%',
      popover: '210 40% 5%',
      popoverForeground: '210 40% 98%',
      primary: '200 98% 60%',
      primaryForeground: '210 40% 3%',
      secondary: '210 40% 12%',
      secondaryForeground: '210 40% 98%',
      muted: '210 40% 12%',
      mutedForeground: '210 40% 65%',
      accent: '180 100% 15%',
      accentForeground: '180 100% 98%',
      destructive: '0 84% 60%',
      destructiveForeground: '0 0% 98%',
      border: '210 40% 18%',
      input: '210 40% 18%',
      ring: '200 98% 60%',
    },
    fonts: {
      sans: 'var(--font-poppins)',
      serif: 'var(--font-serif-default)',
      mono: 'var(--font-mono-default)',
      baseSize: '16px',
      lineHeight: '1.5',
      letterSpacing: '0em',
      headingWeight: '700',
      bodyWeight: '400',
    },
    borderRadius: {
      sm: '0.25rem',
      md: '0.5rem',
      lg: '1rem',
    },
  },
  {
    id: 'sunset',
    name: 'Sunset Vibes',
    description: 'Warm oranges and pinks like a beautiful sunset',
    colors: {
      background: '30 40% 98%',
      foreground: '30 40% 8%',
      card: '30 40% 100%',
      cardForeground: '30 40% 8%',
      popover: '30 40% 100%',
      popoverForeground: '30 40% 8%',
      primary: '20 91% 48%',
      primaryForeground: '0 0% 98%',
      secondary: '30 40% 96%',
      secondaryForeground: '30 40% 9%',
      muted: '30 40% 96%',
      mutedForeground: '30 40% 45%',
      accent: '340 100% 95%',
      accentForeground: '340 100% 9%',
      destructive: '0 84% 60%',
      destructiveForeground: '0 0% 98%',
      border: '30 40% 88%',
      input: '30 40% 88%',
      ring: '20 91% 48%',
    },
    darkColors: {
      background: '20 14% 4%',
      foreground: '20 14% 98%',
      card: '20 14% 6%',
      cardForeground: '20 14% 98%',
      popover: '20 14% 6%',
      popoverForeground: '20 14% 98%',
      primary: '20 91% 60%',
      primaryForeground: '20 14% 4%',
      secondary: '20 14% 12%',
      secondaryForeground: '20 14% 98%',
      muted: '20 14% 12%',
      mutedForeground: '20 14% 65%',
      accent: '340 100% 15%',
      accentForeground: '340 100% 98%',
      destructive: '0 84% 60%',
      destructiveForeground: '0 0% 98%',
      border: '20 14% 18%',
      input: '20 14% 18%',
      ring: '20 91% 60%',
    },
    fonts: {
      sans: 'var(--font-roboto)',
      serif: 'var(--font-serif-default)',
      mono: 'var(--font-mono-default)',
      baseSize: '16px',
      lineHeight: '1.5',
      letterSpacing: '0em',
      headingWeight: '700',
      bodyWeight: '400',
    },
    borderRadius: {
      sm: '0.2rem',
      md: '0.4rem',
      lg: '0.6rem',
    },
  },
  {
    id: 'forest',
    name: 'Forest Green',
    description: 'Natural greens and earthy tones for organic feel',
    colors: {
      background: '120 40% 98%',
      foreground: '120 40% 8%',
      card: '120 40% 100%',
      cardForeground: '120 40% 8%',
      popover: '120 40% 100%',
      popoverForeground: '120 40% 8%',
      primary: '142 76% 36%',
      primaryForeground: '0 0% 98%',
      secondary: '120 40% 96%',
      secondaryForeground: '120 40% 9%',
      muted: '120 40% 96%',
      mutedForeground: '120 40% 45%',
      accent: '80 100% 95%',
      accentForeground: '80 100% 9%',
      destructive: '0 84% 60%',
      destructiveForeground: '0 0% 98%',
      border: '120 40% 88%',
      input: '120 40% 88%',
      ring: '142 76% 36%',
    },
    darkColors: {
      background: '120 40% 3%',
      foreground: '120 40% 98%',
      card: '120 40% 5%',
      cardForeground: '120 40% 98%',
      popover: '120 40% 5%',
      popoverForeground: '120 40% 98%',
      primary: '142 76% 45%',
      primaryForeground: '120 40% 3%',
      secondary: '120 40% 12%',
      secondaryForeground: '120 40% 98%',
      muted: '120 40% 12%',
      mutedForeground: '120 40% 65%',
      accent: '80 100% 15%',
      accentForeground: '80 100% 98%',
      destructive: '0 84% 60%',
      destructiveForeground: '0 0% 98%',
      border: '120 40% 18%',
      input: '120 40% 18%',
      ring: '142 76% 45%',
    },
    fonts: {
      sans: 'var(--font-lato)',
      serif: 'var(--font-serif-default)',
      mono: 'var(--font-mono-default)',
      baseSize: '16px',
      lineHeight: '1.5',
      letterSpacing: '0em',
      headingWeight: '700',
      bodyWeight: '400',
    },
    borderRadius: {
      sm: '0.3rem',
      md: '0.6rem',
      lg: '0.9rem',
    },
  },
  {
    id: 'royal',
    name: 'Royal Purple',
    description: 'Elegant purples and golds for premium applications',
    colors: {
      background: '270 40% 98%',
      foreground: '270 40% 8%',
      card: '270 40% 100%',
      cardForeground: '270 40% 8%',
      popover: '270 40% 100%',
      popoverForeground: '270 40% 8%',
      primary: '258 90% 66%',
      primaryForeground: '0 0% 98%',
      secondary: '270 40% 96%',
      secondaryForeground: '270 40% 9%',
      muted: '270 40% 96%',
      mutedForeground: '270 40% 45%',
      accent: '45 100% 95%',
      accentForeground: '45 100% 9%',
      destructive: '0 84% 60%',
      destructiveForeground: '0 0% 98%',
      border: '270 40% 88%',
      input: '270 40% 88%',
      ring: '258 90% 66%',
    },
    darkColors: {
      background: '270 40% 3%',
      foreground: '270 40% 98%',
      card: '270 40% 5%',
      cardForeground: '270 40% 98%',
      popover: '270 40% 5%',
      popoverForeground: '270 40% 98%',
      primary: '258 90% 75%',
      primaryForeground: '270 40% 3%',
      secondary: '270 40% 12%',
      secondaryForeground: '270 40% 98%',
      muted: '270 40% 12%',
      mutedForeground: '270 40% 65%',
      accent: '45 100% 15%',
      accentForeground: '45 100% 98%',
      destructive: '0 84% 60%',
      destructiveForeground: '0 0% 98%',
      border: '270 40% 18%',
      input: '270 40% 18%',
      ring: '258 90% 75%',
    },
    fonts: {
      sans: 'var(--font-montserrat)',
      serif: 'var(--font-serif-default)',
      mono: 'var(--font-mono-default)',
      baseSize: '16px',
      lineHeight: '1.5',
      letterSpacing: '0em',
      headingWeight: '700',
      bodyWeight: '400',
    },
    borderRadius: {
      sm: '0.4rem',
      md: '0.8rem',
      lg: '1.2rem',
    },
  },
  {
    id: 'neon',
    name: 'Neon Cyber',
    description: 'Cyberpunk-inspired with electric blues and magentas',
    colors: {
      background: '240 10% 98%',
      foreground: '240 10% 8%',
      card: '240 10% 100%',
      cardForeground: '240 10% 8%',
      popover: '240 10% 100%',
      popoverForeground: '240 10% 8%',
      primary: '195 100% 50%',
      primaryForeground: '0 0% 98%',
      secondary: '240 10% 96%',
      secondaryForeground: '240 10% 9%',
      muted: '240 10% 96%',
      mutedForeground: '240 10% 45%',
      accent: '315 100% 95%',
      accentForeground: '315 100% 9%',
      destructive: '348 83% 47%',
      destructiveForeground: '0 0% 98%',
      border: '240 10% 88%',
      input: '240 10% 88%',
      ring: '195 100% 50%',
    },
    darkColors: {
      background: '240 10% 4%',
      foreground: '240 10% 98%',
      card: '240 10% 6%',
      cardForeground: '240 10% 98%',
      popover: '240 10% 6%',
      popoverForeground: '240 10% 98%',
      primary: '195 100% 60%',
      primaryForeground: '240 10% 4%',
      secondary: '240 10% 12%',
      secondaryForeground: '240 10% 98%',
      muted: '240 10% 12%',
      mutedForeground: '240 10% 65%',
      accent: '315 100% 15%',
      accentForeground: '315 100% 98%',
      destructive: '348 83% 60%',
      destructiveForeground: '0 0% 98%',
      border: '240 10% 18%',
      input: '240 10% 18%',
      ring: '195 100% 60%',
    },
    fonts: {
      sans: 'var(--font-nunito)',
      serif: 'var(--font-serif-default)',
      mono: 'var(--font-mono-default)',
      baseSize: '16px',
      lineHeight: '1.5',
      letterSpacing: '0em',
      headingWeight: '700',
      bodyWeight: '400',
    },
    borderRadius: {
      sm: '0.1rem',
      md: '0.2rem',
      lg: '0.3rem',
    },
  },
  {
    id: 'retro-groove',
    name: 'Retro Groove',
    description: 'A groovy 70s inspired theme with earthy tones',
    colors: {
      background: '35 63% 94%',
      foreground: '35 63% 24%',
      card: '35 63% 90%',
      cardForeground: '35 63% 24%',
      popover: '35 63% 90%',
      popoverForeground: '35 63% 24%',
      primary: '25 95% 53%',
      primaryForeground: '35 63% 94%',
      secondary: '35 63% 80%',
      secondaryForeground: '35 63% 24%',
      muted: '35 63% 85%',
      mutedForeground: '35 63% 44%',
      accent: '15 95% 63%',
      accentForeground: '35 63% 24%',
      destructive: '0 84% 60%',
      destructiveForeground: '0 0% 98%',
      border: '35 63% 80%',
      input: '35 63% 80%',
      ring: '25 95% 53%',
    },
    fonts: {
      sans: 'var(--font-montserrat)',
      serif: 'var(--font-serif-default)',
      mono: 'var(--font-mono-default)',
      baseSize: '16px',
      lineHeight: '1.5',
      letterSpacing: '0em',
      headingWeight: '700',
      bodyWeight: '400',
    },
    borderRadius: {
      sm: '0.2rem',
      md: '0.4rem',
      lg: '0.6rem',
    },
  },
  {
    id: 'pop-art',
    name: 'Pop Art Explosion',
    description: 'A vibrant and playful theme with a comic book feel',
    colors: {
      background: '0 0% 100%',
      foreground: '0 0% 0%',
      card: '0 0% 100%',
      cardForeground: '0 0% 0%',
      popover: '0 0% 100%',
      popoverForeground: '0 0% 0%',
      primary: '340 100% 50%',
      primaryForeground: '0 0% 100%',
      secondary: '45 100% 50%',
      secondaryForeground: '0 0% 0%',
      muted: '210 100% 95%',
      mutedForeground: '0 0% 45%',
      accent: '190 100% 50%',
      accentForeground: '0 0% 100%',
      destructive: '0 100% 50%',
      destructiveForeground: '0 0% 100%',
      border: '0 0% 0%',
      input: '0 0% 0%',
      ring: '340 100% 50%',
    },
    fonts: {
      sans: 'var(--font-poppins)',
      serif: 'var(--font-serif-default)',
      mono: 'var(--font-mono-default)',
      baseSize: '16px',
      lineHeight: '1.5',
      letterSpacing: '0em',
      headingWeight: '700',
      bodyWeight: '400',
    },
    borderRadius: {
      sm: '0rem',
      md: '0rem',
      lg: '0rem',
    },
  },
  {
    id: '8-bit-arcade',
    name: '8-Bit Arcade',
    description: 'A retro theme inspired by classic arcade games',
    colors: {
      background: '240 10% 4%',
      foreground: '0 0% 98%',
      card: '240 10% 8%',
      cardForeground: '0 0% 98%',
      popover: '240 10% 8%',
      popoverForeground: '0 0% 98%',
      primary: '195 100% 60%',
      primaryForeground: '240 10% 4%',
      secondary: '315 100% 60%',
      secondaryForeground: '240 10% 4%',
      muted: '240 10% 12%',
      mutedForeground: '240 10% 65%',
      accent: '45 100% 60%',
      accentForeground: '240 10% 4%',
      destructive: '0 100% 60%',
      destructiveForeground: '240 10% 4%',
      border: '240 10% 18%',
      input: '240 10% 18%',
      ring: '195 100% 60%',
    },
    fonts: {
      sans: 'var(--font-source-sans-pro)',
      serif: 'var(--font-serif-default)',
      mono: 'var(--font-mono-default)',
      baseSize: '16px',
      lineHeight: '1.5',
      letterSpacing: '0em',
      headingWeight: '700',
      bodyWeight: '400',
    },
    borderRadius: {
      sm: '0.1rem',
      md: '0.2rem',
      lg: '0.3rem',
    },
  },
];

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialize theme from localStorage or defaultTheme
  const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedThemeId = localStorage.getItem('selectedTheme');
      return savedThemeId
        ? predefinedThemes.find((theme) => theme.id === savedThemeId) || defaultTheme
        : defaultTheme;
    }
    return defaultTheme;
  });
  const [isDark, setIsDark] = useState(false);

  // Detect system dark mode preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Apply theme CSS variables
  useEffect(() => {
    const root = document.documentElement;
    const colors = isDark && currentTheme.darkColors ? currentTheme.darkColors : currentTheme.colors;

    Object.entries(colors).forEach(([key, value]) => {
      const cssVar = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      root.style.setProperty(`--${cssVar}`, value);
    });

    Object.entries(currentTheme.borderRadius).forEach(([key, value]) => {
      root.style.setProperty(`--radius-${key}`, value);
    });

    root.style.setProperty('--font-sans', currentTheme.fonts.sans);
    if (currentTheme.fonts.serif) {
      root.style.setProperty('--font-serif', currentTheme.fonts.serif);
    }
    if (currentTheme.fonts.mono) {
      root.style.setProperty('--font-mono', currentTheme.fonts.mono);
    }
  }, [currentTheme, isDark]);

  // Persist theme selection to localStorage
  const setTheme = (theme: Theme) => {
    setCurrentTheme(theme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedTheme', theme.id);
    }
  };

  // Export global CSS with theme variables
  const exportCSS = () => {
    const lightColors = Object.entries(currentTheme.colors)
      .map(([key, value]) => {
        const cssVar = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        return `    --${cssVar}: ${value}`;
      })
      .join('\n');

    const darkColors = currentTheme.darkColors
      ? Object.entries(currentTheme.darkColors)
          .map(([key, value]) => {
            const cssVar = key.replace(/([A-Z])/g, '-$1').toLowerCase();
            return `    --${cssVar}: ${value}`;
          })
          .join('\n')
      : '';

    const borderRadius = Object.entries(currentTheme.borderRadius)
      .map(([key, value]) => `    --radius-${key}: ${value}`)
      .join('\n');

    const fontStyles = [
      `    --font-sans: ${currentTheme.fonts.sans}`,
      currentTheme.fonts.serif ? `    --font-serif: ${currentTheme.fonts.serif}` : '',
      currentTheme.fonts.mono ? `    --font-mono: ${currentTheme.fonts.mono}` : '',
      currentTheme.fonts.baseSize ? `    --font-size-base: ${currentTheme.fonts.baseSize}` : '',
      currentTheme.fonts.lineHeight ? `    --line-height: ${currentTheme.fonts.lineHeight}` : '',
      currentTheme.fonts.letterSpacing ? `    --letter-spacing: ${currentTheme.fonts.letterSpacing}` : '',
      currentTheme.fonts.headingWeight ? `    --font-weight-heading: ${currentTheme.fonts.headingWeight}` : '',
      currentTheme.fonts.bodyWeight ? `    --font-weight-body: ${currentTheme.fonts.bodyWeight}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    return `@layer base {
  :root {
${lightColors}
${borderRadius}
${fontStyles}
  }
  .dark {
${darkColors}
  }
}`;
  };

  // Export Tailwind config
  const exportTailwind = () => {
    const fontFamilySans = currentTheme.fonts.sans
      ? `sans: ["${currentTheme.fonts.sans.replace('var(--font-', '').replace(')', '')}", ...fontFamily.sans]`
      : 'sans: [...fontFamily.sans]';
    const fontFamilySerif = currentTheme.fonts.serif
      ? `serif: ["${currentTheme.fonts.serif.replace('var(--font-', '').replace(')', '')}", ...fontFamily.serif]`
      : '';
    const fontFamilyMono = currentTheme.fonts.mono
      ? `mono: ["${currentTheme.fonts.mono.replace('var(--font-', '').replace(')', '')}", ...fontFamily.mono]`
      : '';
    const fontSizeBase = currentTheme.fonts.baseSize ? `base: "${currentTheme.fonts.baseSize}"` : '';
    const lineHeight = currentTheme.fonts.lineHeight ? `normal: "${currentTheme.fonts.lineHeight}"` : '';
    const letterSpacing = currentTheme.fonts.letterSpacing ? `normal: "${currentTheme.fonts.letterSpacing}"` : '';
    const fontWeightHeading = currentTheme.fonts.headingWeight ? `heading: "${currentTheme.fonts.headingWeight}"` : '';
    const fontWeightBody = currentTheme.fonts.bodyWeight ? `body: "${currentTheme.fonts.bodyWeight}"` : '';

    return `/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
      },
      fontFamily: {
        ${fontFamilySans}${fontFamilySerif ? `,\n        ${fontFamilySerif}` : ''}${fontFamilyMono ? `,\n        ${fontFamilyMono}` : ''}
      },
      fontSize: {
        ${fontSizeBase ? `${fontSizeBase},` : ''}
      },
      lineHeight: {
        ${lineHeight ? `${lineHeight},` : ''}
      },
      letterSpacing: {
        ${letterSpacing ? `${letterSpacing},` : ''}
      },
      fontWeight: {
        ${fontWeightHeading ? `${fontWeightHeading},` : ''}${fontWeightBody ? `\n        ${fontWeightBody},` : ''}
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}`;
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, themes: predefinedThemes, setTheme, exportCSS, exportTailwind }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}