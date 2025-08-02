'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Send, Copy, Check, Eye, Sparkles, Settings, Type, CornerLeftUp, Download } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '@/components/theme-provider';
import { toast } from 'sonner';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const aiSuggestions = [
  'Create a professional dark theme for a SaaS dashboard',
  'Design a warm, welcoming theme for a healthcare app',
  'Generate a vibrant, energetic theme for a fitness platform',
  'Make a minimalist theme with subtle accent colors',
  'Create a luxurious theme with gold accents for premium apps',
  'Design a nature-inspired theme with earth tones',
];

const aiResponses = [
  {
    message: "I've created a professional dark theme perfect for SaaS dashboards. It features deep blues with bright accent colors for excellent readability and modern appeal.",
    suggestions: ['Make it lighter', 'Add more contrast', 'Try purple accents', 'Generate variations']
  },
  {
    message: "Here's a warm healthcare theme with soft greens and calming blues. The colors promote trust and comfort while maintaining professional standards.",
    suggestions: ['Softer colors', 'Add warmth', 'More accessibility', 'Try pastels']
  },
  {
    message: "I've designed an energetic fitness theme with vibrant oranges and dynamic gradients. Perfect for motivating users and creating excitement.",
    suggestions: ['More vibrant', 'Add neon touches', 'Try different sports colors', 'Make it bolder']
  }
];

export default function ThemesPage() {
  const { themes, currentTheme, setTheme, exportCSS, exportTailwind } = useTheme();
  const [aiInput, setAiInput] = useState('');
  const [aiMessages, setAiMessages] = useState<Array<{type: 'user' | 'ai', content: string, suggestions?: string[]}>>([]);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [themeHistory, setThemeHistory] = useState<any[]>([]);

  const handleAiSubmit = (input: string) => {
    if (!input.trim()) return;

    const newMessages = [...aiMessages, { type: 'user' as const, content: input }];

    setTimeout(() => {
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      setAiMessages([...newMessages, { 
        type: 'ai' as const, 
        content: randomResponse.message,
        suggestions: randomResponse.suggestions
      }]);

      const randomTheme = themes[Math.floor(Math.random() * themes.length)];
      setTheme(randomTheme);
      setThemeHistory([currentTheme, ...themeHistory].slice(0, 5));
    }, 1000);

    setAiMessages(newMessages);
    setAiInput('');
  };

  const handleExport = async () => {
    const css = exportCSS();
    await navigator.clipboard.writeText(css);
    setCopied(true);
    toast.success('CSS copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleThemeSelect = (theme: typeof themes[0]) => {
    setTheme(theme);
    toast.success(`Applied ${theme.name} theme`);
  };

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

  const handleDownloadTailwind = () => {
    const tailwindConfig = exportTailwind();
    const blob = new Blob([tailwindConfig], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tailwind.config.js';
    a.click();
    URL.revokeObjectURL(url);
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

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Curated Themes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {themes.map((theme) => (
              <Card 
                key={theme.id} 
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  currentTheme.id === theme.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => handleThemeSelect(theme)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{theme.name}</CardTitle>
                    {currentTheme.id === theme.id && (
                      <Badge variant="secondary">Active</Badge>
                    )}
                  </div>
                  <CardDescription className="text-sm h-10">
                    {theme.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-2">
                    <div 
                      className="w-full h-8 rounded-md border"
                      style={{ backgroundColor: `hsl(${theme.colors.primary})` }}
                    />
                    <div 
                      className="w-full h-8 rounded-md border"
                      style={{ backgroundColor: `hsl(${theme.colors.secondary})` }}
                    />
                    <div 
                      className="w-full h-8 rounded-md border"
                      style={{ backgroundColor: `hsl(${theme.colors.accent})` }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="ai-generator" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">AI Theme Generator</h2>
          <Card>
            <Tabs defaultValue="chat">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="chat">Chat</TabsTrigger>
                <TabsTrigger value="form">Form</TabsTrigger>
              </TabsList>
              <TabsContent value="chat">
                <CardHeader>
                  <CardTitle className="text-lg">Chat with AI</CardTitle>
                  <CardDescription>
                    Tell me what kind of theme you're looking for
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {aiMessages.length === 0 && (
                    <div className="space-y-3">
                      <p className="text-sm font-medium">Try these prompts:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {aiSuggestions.map((suggestion, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            className="justify-start text-left h-auto p-3"
                            onClick={() => handleAiSubmit(suggestion)}
                          >
                            {suggestion}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}

                  {aiMessages.length > 0 && (
                    <div className="space-y-4 max-h-64 overflow-y-auto">
                      {aiMessages.map((message, index) => (
                        <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-[80%] p-3 rounded-lg ${
                            message.type === 'user' 
                              ? 'bg-primary text-primary-foreground' 
                              : 'bg-muted'
                          }`}>
                            <p className="text-sm">{message.content}</p>
                            {message.suggestions && (
                              <div className="mt-3 space-y-2">
                                <p className="text-xs opacity-75">Try these refinements:</p>
                                <div className="grid grid-cols-2 gap-1">
                                  {message.suggestions.map((suggestion, idx) => (
                                    <Button
                                      key={idx}
                                      variant="outline"
                                      size="sm"
                                      className="text-xs h-7"
                                      onClick={() => handleAiSubmit(suggestion)}
                                    >
                                      {suggestion}
                                    </Button>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex space-x-2 pt-4">
                    <Input
                      placeholder="Describe your ideal theme..."
                      value={aiInput}
                      onChange={(e) => setAiInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleAiSubmit(aiInput)}
                    />
                    <Button onClick={() => handleAiSubmit(aiInput)} disabled={!aiInput.trim()}>
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </TabsContent>
              <TabsContent value="form">
                <CardHeader>
                  <CardTitle className="text-lg">Generate with Form</CardTitle>
                  <CardDescription>
                    Use this form to generate a new theme with your desired settings.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Primary Color</label>
                      <Input type="color" defaultValue="#000000" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Secondary Color</label>
                      <Input type="color" defaultValue="#f1f5f9" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Font</label>
                    <Select defaultValue="var(--font-inter)">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a font" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="var(--font-inter)">Inter</SelectItem>
                        <SelectItem value="var(--font-poppins)">Poppins</SelectItem>
                        <SelectItem value="var(--font-roboto)">Roboto</SelectItem>
                        <SelectItem value="var(--font-lato)">Lato</SelectItem>
                        <SelectItem value="var(--font-merriweather)">Merriweather</SelectItem>
                        <SelectItem value="var(--font-orbitron)">Orbitron</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full">Generate Theme</Button>
                </CardContent>
              </TabsContent>
            </Tabs>
          </Card>
        </section>

        <section>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:sticky lg:top-8">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold mb-6">Customize & Preview</h2>
              <Card>
                <CardContent className="p-6 space-y-6">
                  {/* Color Customization */}
                  <div>
                    <h4 className="font-medium mb-4">Colors</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(currentTheme.colors).map(([name, value]) => (
                        <div key={name} className="space-y-2">
                          <label className="text-sm capitalize">{name.replace(/([A-Z])/g, ' $1')}</label>
                          <div className="flex items-center space-x-2">
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  className="w-10 h-10 p-0 border"
                                  style={{ backgroundColor: `hsl(${value})` }}
                                />
                              </PopoverTrigger>
                              <PopoverContent>
                                <Input
                                  type="text"
                                  value={value}
                                  onChange={(e) => handleColorChange(name, e.target.value)}
                                />
                              </PopoverContent>
                            </Popover>
                            <Input
                              value={value}
                              onChange={(e) => handleColorChange(name, e.target.value)}
                              className="flex-1"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Font Customization */}
                  <div className="border-t pt-6">
                    <h4 className="font-medium mb-4 flex items-center">
                      <Type className="w-4 h-4 mr-2" />
                      Typography
                    </h4>
                    <Select onValueChange={handleFontChange} defaultValue={currentTheme.fonts.sans}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a font" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="var(--font-inter)">Inter</SelectItem>
                        <SelectItem value="var(--font-poppins)">Poppins</SelectItem>
                        <SelectItem value="var(--font-roboto)">Roboto</SelectItem>
                        <SelectItem value="var(--font-lato)">Lato</SelectItem>
                        <SelectItem value="var(--font-merriweather)">Merriweather</SelectItem>
                        <SelectItem value="var(--font-orbitron)">Orbitron</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Border Radius Customization */}
                  <div className="border-t pt-6">
                    <h4 className="font-medium mb-4 flex items-center">
                      <CornerLeftUp className="w-4 h-4 mr-2" />
                      Border Radius
                    </h4>
                    <Slider
                      defaultValue={[parseFloat(currentTheme.borderRadius.md)]}
                      max={2}
                      step={0.1}
                      onValueChange={handleBorderRadiusChange}
                    />
                  </div>

                  {/* Theme History */}
                  {themeHistory.length > 0 && (
                    <div className="border-t pt-6">
                      <h4 className="font-medium mb-4">History</h4>
                      <div className="flex flex-wrap gap-2">
                        {themeHistory.map((theme, index) => (
                          <Button key={index} variant="outline" size="sm" onClick={() => setTheme(theme)}>
                            {theme.name}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
              <Dialog open={isExportOpen} onOpenChange={setIsExportOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full mt-6">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Export {currentTheme.name} Theme</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <Tabs defaultValue="css">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="css">CSS</TabsTrigger>
                        <TabsTrigger value="tailwind">tailwind.config.js</TabsTrigger>
                      </TabsList>
                      <TabsContent value="css">
                        <p className="text-sm text-muted-foreground">
                          Copy this CSS and paste it into your <code className="bg-muted px-1 rounded">globals.css</code> file to apply the theme.
                        </p>
                        <div className="relative mt-4">
                          <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto max-h-96">
                            <code>{exportCSS()}</code>
                          </pre>
                          <Button
                            size="sm"
                            className="absolute top-2 right-2"
                            onClick={handleExport}
                          >
                            {copied ? (
                              <>
                                <Check className="w-4 h-4 mr-2" />
                                Copied!
                              </>
                            ) : (
                              <>
                                <Copy className="w-4 h-4 mr-2" />
                                Copy
                              </>
                            )}
                          </Button>
                        </div>
                      </TabsContent>
                      <TabsContent value="tailwind">
                        <p className="text-sm text-muted-foreground">
                          Download the complete <code className="bg-muted px-1 rounded">tailwind.config.js</code> file.
                        </p>
                        <div className="relative mt-4">
                          <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto max-h-96">
                            <code>{exportTailwind()}</code>
                          </pre>
                          <Button
                            size="sm"
                            className="absolute top-2 right-2"
                            onClick={handleDownloadTailwind}
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Live Preview</CardTitle>
                  <CardDescription>
                    Your theme applied to common UI patterns
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="font-medium">Buttons</h4>
                    <div className="flex flex-wrap gap-2">
                      <Button>Primary</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Cards</h4>
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base">Sample Card</CardTitle>
                        <CardDescription className="text-sm">
                          This is how cards look with your theme
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm text-muted-foreground">
                          Card content goes here with proper contrast ratios.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Form Elements</h4>
                    <Input placeholder="Sample input field" />
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Badges</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="outline">Outline</Badge>
                      <Badge variant="destructive">Destructive</Badge>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/preview/dashboard">
                        <Eye className="w-4 h-4 mr-2" />
                        View Full Preview Pages
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}