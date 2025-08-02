import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Palette, Code, Zap, Star, Download, Copy } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: Palette,
    title: 'AI-Powered Generation',
    description: 'Describe your vision and let AI create the perfect theme for your project.',
  },
  {
    icon: Code,
    title: 'Instant CSS Export',
    description: 'Copy-paste ready CSS that works seamlessly with Shadcn/UI components.',
  },
  {
    icon: Zap,
    title: 'Live Preview',
    description: 'See your themes applied across real UI components and layouts instantly.',
  },
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Frontend Developer',
    content: 'themeCN saved me hours of tweaking CSS variables. The AI suggestions are spot-on!',
    rating: 5,
  },
  {
    name: 'Mike Rodriguez',
    role: 'Product Designer',
    content: 'Finally, a tool that bridges the gap between design and development perfectly.',
    rating: 5,
  },
  {
    name: 'Alex Kumar',
    role: 'Startup Founder',
    content: 'Our entire dashboard got a professional makeover in minutes. Incredible!',
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            ✨ AI-Powered Theme Generation
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Beautiful{' '}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Shadcn/UI Themes
            </span>{' '}
            in Minutes
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Generate stunning, customizable themes for your Next.js projects. 
            From concept to code in seconds with our AI-powered theme generator.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild className="text-lg px-8">
              <Link href="/themes">
                Explore Themes <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8">
              <Link href="/themes#ai-generator">
                Generate with AI <Zap className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
          
          {/* Theme Preview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />
              <CardHeader>
                <CardTitle className="text-blue-600">Ocean Breeze</CardTitle>
                <CardDescription>Calming blues and teals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-2 mb-4">
                  <div className="w-6 h-6 rounded-full bg-blue-500" />
                  <div className="w-6 h-6 rounded-full bg-cyan-400" />
                  <div className="w-6 h-6 rounded-full bg-blue-100" />
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Preview Theme
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-pink-500/10" />
              <CardHeader>
                <CardTitle className="text-orange-600">Sunset Vibes</CardTitle>
                <CardDescription>Warm oranges and pinks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-2 mb-4">
                  <div className="w-6 h-6 rounded-full bg-orange-500" />
                  <div className="w-6 h-6 rounded-full bg-pink-400" />
                  <div className="w-6 h-6 rounded-full bg-orange-100" />
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Preview Theme
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10" />
              <CardHeader>
                <CardTitle className="text-green-600">Forest Green</CardTitle>
                <CardDescription>Natural and organic</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-2 mb-4">
                  <div className="w-6 h-6 rounded-full bg-green-500" />
                  <div className="w-6 h-6 rounded-full bg-emerald-400" />
                  <div className="w-6 h-6 rounded-full bg-green-100" />
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Preview Theme
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to theme your app
          </h2>
          <p className="text-xl text-muted-foreground">
            Powerful features designed for modern developers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="container mx-auto px-4 py-24 bg-muted/30 rounded-3xl mx-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            From idea to implementation
          </h2>
          <p className="text-xl text-muted-foreground">
            Simple 3-step process to get your perfect theme
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-primary-foreground">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Describe Your Vision</h3>
            <p className="text-muted-foreground">
              Tell our AI what kind of theme you want - professional, playful, modern, or anything else.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-primary-foreground">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Preview & Customize</h3>
            <p className="text-muted-foreground">
              See your theme applied to real components and make adjustments until it's perfect.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-primary-foreground">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Export & Apply</h3>
            <p className="text-muted-foreground">
              Copy the generated CSS and paste it into your globals.css file. That's it!
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by developers worldwide
          </h2>
          <p className="text-xl text-muted-foreground">
            See what others are saying about themeCN
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-base italic">
                  "{testimonial.content}"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to transform your UI?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of developers who've already upgraded their themes with themeCN.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8">
              <Link href="/themes">
                Start Creating <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8">
              <Link href="/preview/dashboard">
                See Live Demo <Download className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Palette className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">themeCN</span>
          </div>
          <p className="text-muted-foreground">
            Beautiful themes for beautiful applications.
          </p>
        </div>
      </footer>
    </div>
  );
}
