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
      <section className="container mx-auto px-4 py-16 md:py-24 text-center bg-black">
      <div className="max-w-4xl mx-auto">
        <span className="inline-block mb-4 px-4 py-2 bg-blue-500/10 text-white text-sm font-medium rounded-full">
          ✨ AI-Powered Theme Generation
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">
          Beautiful{' '}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Shadcn/UI Themes
          </span>{' '}
          in Minutes
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
          Generate stunning, customizable themes for your Next.js projects. From concept to code in seconds with our AI-powered theme generator.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/themes"
            className="inline-flex items-center text-lg px-8 py-3 bg-gradient-to-r from-blue-400 to-cyan-300 text-white rounded-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            Explore Themes <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
          <Link
            href="/themes#ai-generator"
            className="inline-flex items-center text-lg px-8 py-3 border-2 border-blue-400/30 bg-black/50 backdrop-blur-md hover:bg-blue-400/10 hover:shadow-lg hover:-translate-y-1 text-white rounded-md transition-all duration-300"
          >
            Generate with AI <Zap className="w-5 h-5 ml-2" />
          </Link>
        </div>
        
        {/* Theme Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-16">
          <div className="relative group bg-black/80 backdrop-blur-md rounded-2xl p-6 border border-blue-500/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />
            <div className="relative">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Ocean Breeze</h3>
              <p className="text-base text-gray-300 mb-4">Calming blues and teals</p>
              <div className="flex space-x-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-blue-500" />
                <div className="w-6 h-6 rounded-full bg-cyan-400" />
                <div className="w-6 h-6 rounded-full bg-blue-100" />
              </div>
              <Link
                href="#"
                className="inline-flex items-center text-sm px-4 py-2 border border-blue-400/30 bg-black/50 backdrop-blur-md hover:bg-blue-400/10 text-white rounded-md w-full justify-center transition-all duration-300"
              >
                Preview Theme
              </Link>
            </div>
          </div>

          <div className="relative group bg-black/80 backdrop-blur-md rounded-2xl p-6 border border-blue-500/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-pink-500/10" />
            <div className="relative">
              <h3 className="text-xl font-semibold text-orange-400 mb-2">Sunset Vibes</h3>
              <p className="text-base text-gray-300 mb-4">Warm oranges and pinks</p>
              <div className="flex space-x-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-orange-500" />
                <div className="w-6 h-6 rounded-full bg-pink-400" />
                <div className="w-6 h-6 rounded-full bg-orange-100" />
              </div>
              <Link
                href="#"
                className="inline-flex items-center text-sm px-4 py-2 border border-blue-400/30 bg-black/50 backdrop-blur-md hover:bg-blue-400/10 text-white rounded-md w-full justify-center transition-all duration-300"
              >
                Preview Theme
              </Link>
            </div>
          </div>

          <div className="relative group bg-black/80 backdrop-blur-md rounded-2xl p-6 border border-blue-500/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10" />
            <div className="relative">
              <h3 className="text-xl font-semibold text-green-400 mb-2">Forest Green</h3>
              <p className="text-base text-gray-300 mb-4">Natural and organic</p>
              <div className="flex space-x-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-green-500" />
                <div className="w-6 h-6 rounded-full bg-emerald-400" />
                <div className="w-6 h-6 rounded-full bg-green-100" />
              </div>
              <Link
                href="#"
                className="inline-flex items-center text-sm px-4 py-2 border border-blue-400/30 bg-black/50 backdrop-blur-md hover:bg-blue-400/10 text-white rounded-md w-full justify-center transition-all duration-300"
              >
                Preview Theme
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

          {/* Features Section */}
          <section className="container mx-auto px-4 py-16 md:py-24 bg-black">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Everything you need to theme your app
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Powerful features designed for modern developers to create stunning UIs effortlessly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group bg-black/80 backdrop-blur-md rounded-2xl p-6 border border-blue-500/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-blue-400 group-hover:text-blue-300" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-base text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-gradient-to-r from-black to-gray-900/90 rounded-3xl mx-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">
            From idea to implementation
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Simple 3-step process to craft your perfect theme with ease.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {[
            {
              step: 1,
              title: "Describe Your Vision",
              description: "Tell our AI what kind of theme you want - professional, playful, modern, or anything else.",
            },
            {
              step: 2,
              title: "Preview & Customize",
              description: "See your theme applied to real components and make adjustments until it's perfect.",
            },
            {
              step: 3,
              title: "Export & Apply",
              description: "Copy the generated CSS and paste it into your globals.css file. That's it!",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-black/80 backdrop-blur-md hover:bg-black/90 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-md transition-shadow duration-300">
                <span className="text-2xl font-bold text-white">{item.step}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white">{item.title}</h3>
              <p className="text-base text-gray-300 max-w-xs mx-auto">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-black">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Loved by developers worldwide
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            See what others are saying about themeCN's game-changing features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-black/80 backdrop-blur-md rounded-2xl p-6 border border-blue-500/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-base italic text-gray-300 mb-4">"{testimonial.content}"</p>
              <div>
                <div className="font-semibold text-lg text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-300">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center bg-gradient-to-b from-black to-gray-900/90">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white">
            Ready to transform your UI?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Join thousands of developers who've already upgraded their themes with themeCN.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/themes"
              className="inline-flex items-center text-lg px-8 py-3 bg-gradient-to-r from-blue-400 to-cyan-300 text-white rounded-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              Start Creating <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/preview/dashboard"
              className="inline-flex items-center text-lg px-8 py-3 border-2 border-blue-400/30 bg-black/50 backdrop-blur-md hover:bg-blue-400/10 hover:shadow-lg hover:-translate-y-1 text-white rounded-md transition-all duration-300"
            >
              See Live Demo <Download className="w-5 h-5 ml-2" />
            </Link>
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
