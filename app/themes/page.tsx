"use client"
import { useState } from 'react';
import { useTheme } from '@/components/theme-provider';
import CuratedThemes from './components/curated-themes';
import AiThemeGenerator from './components/ai-theme-generator';

export default function ThemesPage() {
  const { setTheme, currentTheme } = useTheme();
  const [themeHistory, setThemeHistory] = useState<any[]>([]);

  const handleColorChange = (colorName: string, value: string) => {
    const newTheme = { ...currentTheme };
    (newTheme.colors as any)[colorName] = value;
    setTheme(newTheme);
  };

  const handleFontChange = (font: string) => {
    const newTheme = { ...currentTheme, fonts: { sans: font } };
    setTheme(newTheme);
  };

  const handleBorderRadiusChange = (radius: number[]) => {
    const newTheme = { 
      ...currentTheme, 
      borderRadius: { 
        ...currentTheme.borderRadius, 
        md: `${radius[0]}rem` 
      }
    };
    setTheme(newTheme);
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Theme Customizer</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select a pre-made theme, or use our AI to generate a new one from scratch.
          </p>
        </section>

        <CuratedThemes />
        <AiThemeGenerator />

      </main>
    </div>
  );
}