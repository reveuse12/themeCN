import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Palette, Code, Zap, Star, Download, Copy, Bot, Wand2, Paintbrush, Rss } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

const features = [
  {
    icon: Bot,
    title: 'AI-Powered Generation',
    description: 'Describe your desired aesthetic, and let our AI generate a unique theme palette that captures your vision perfectly.',
  },
  {
    icon: Code,
    title: 'Instant CSS Export',
    description: "Get production-ready CSS variables. Just copy, paste into your globals.css, and you're ready to go.",
  },
  {
    icon: Zap,
    title: 'Live Component Preview',
    description: 'Instantly visualize your theme across a comprehensive set of shadcn/ui components before exporting.',
  },
];

const featuredThemes = [
  {
    name: 'Midnight Dusk',
    description: 'A sleek, dark theme with deep blues and purples for a modern, professional look.',
    colors: ['#0D1117', '#21262D', '#8B949E', '#C9D1D9'],
    previewComponent: <Button variant="default">Primary Button</Button>
  },
  {
    name: 'Sakura Dream',
    description: 'A light and airy theme with soft pinks and whites, perfect for a fresh, elegant feel.',
    colors: ['#FFFFFF', '#FFF5F7', '#FFB6C1', '#DB7093'],
    previewComponent: <Badge variant="secondary">New Feature</Badge>
  },
  {
    name: 'Forest Whisper',
    description: 'Earthy greens and browns create a calm, natural, and trustworthy vibe for your application.',
    colors: ['#F0FFF4', '#C6EBC5', '#A4D4AE', '#3C6255'],
    previewComponent: <Card className="w-full"><CardHeader><CardTitle>Card Title</CardTitle></CardHeader></Card>
  }
]

const testimonials = [
  {
    name: 'Elena Petrova',
    role: 'Lead Frontend Engineer',
    content: 'themeCN has become an indispensable part of my workflow. The AI suggestions are surprisingly creative and save me hours.',
    rating: 5,
  },
  {
    name: 'Kenji Tanaka',
    role: 'UX/UI Designer',
    content: "This is the tool I've been dreaming of. It bridges the gap between design vision and developer implementation flawlessly.",
    rating: 5,
  },
  {
    name: 'Amir Khan',
    role: 'Indie Hacker',
    content: 'As a solo founder, speed is everything. themeCN allowed me to create a professional-looking UI in an afternoon. Game-changer!',
    rating: 5,
  },
];

const faqs = [
    {
        question: "What is themeCN?",
        answer: "themeCN is an AI-powered theme generator specifically for applications built with Next.js and shadcn/ui. It helps you create beautiful, consistent, and production-ready themes in minutes."
    },
    {
        question: "How does the AI generation work?",
        answer: "You provide a text prompt describing the look and feel you want (e.g., 'a minimalist theme with earthy tones' or 'a vibrant, futuristic theme for a gaming site'). Our AI interprets your prompt and generates a full set of CSS color variables that you can use instantly."
    },
    {
        question: "Is it compatible with my existing shadcn/ui project?",
        answer: "Absolutely. themeCN generates standard CSS variables that follow the shadcn/ui naming convention. You just need to copy the generated code and paste it into your `globals.css` file to apply the theme."
    },
    {
        question: "Can I customize the generated themes?",
        answer: "Yes. After the AI generates a theme, you can fine-tune every color. You have full control to adjust the palette until it perfectly matches your vision before exporting the final CSS."
    }
]

const blogPosts = [
    {
        title: "The Future of Web Development",
        description: "Discover the latest trends and technologies shaping the future of web development.",
        date: "1 day ago",
        link: "/preview/blog"
    },
    {
        title: "How to Build a Design System",
        description: "A step-by-step guide to creating a consistent and scalable design system.",
        date: "3 days ago",
        link: "/preview/blog"
    },
    {
        title: "Optimizing Performance",
        description: "Learn how to improve your application's performance and user experience.",
        date: "1 week ago",
        link: "/preview/blog"
    }
]

export default function HomePage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative text-center py-24 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent z-0"></div>
        <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(45,152,255,0.15)_0%,_rgba(45,152,255,0)_50%)] z-[-1]"></div>
        <div className="container mx-auto px-4 relative z-10">
            <Badge variant="outline" className="mb-6 border-primary/20">
            ✨ AI-Powered Theme Generation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4">
            Build Beautiful Apps, Faster
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Generate stunning, accessible, and fully customizable themes for your shadcn/ui projects. From a simple prompt to production-ready CSS in seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/themes">
                Explore Themes <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
                <Link href="/themes#ai-generator">
                Generate with AI <Wand2 className="w-5 h-5 ml-2" />
                </Link>
            </Button>
            </div>
        </div>
      </section>

      {/* Featured Themes Section */}
      <section id="featured-themes" className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Curated Themes to Get You Started</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Explore a collection of pre-built themes, ready to be used or customized to fit your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredThemes.map((theme, index) => (
              <Card key={index} className="overflow-hidden group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold">{theme.name}</h3>
                      <p className="text-muted-foreground text-sm mt-1">{theme.description}</p>
                    </div>
                    <div className="flex -space-x-2">
                      {theme.colors.map(color => (
                        <div key={color} className="w-8 h-8 rounded-full border-2 border-background" style={{ backgroundColor: color }} />
                      ))}
                    </div>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg h-24 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      {theme.previewComponent}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">From Idea to UI in 3 Simple Steps</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Our process is designed to be intuitive, fast, and flexible.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-4">
                <Wand2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Describe</h3>
              <p className="text-muted-foreground">
                Use natural language to tell our AI the theme you envision.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-4">
                <Paintbrush className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Customize</h3>
              <p className="text-muted-foreground">
                Fine-tune the generated colors and preview them live on components.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-4">
                <Copy className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Export</h3>
              <p className="text-muted-foreground">
                Copy the final CSS variables with a single click and apply to your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Powerful Features for Modern Development</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Everything you need to create stunning and consistent user interfaces.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-primary-foreground mb-4">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
            <div className="text-center mt-12">
                <Button asChild variant="outline">
                    <Link href="/preview/features">
                        See All Features <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </Button>
            </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Loved by Developers and Designers</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what people are saying about themeCN.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
        <section id="blog" className="py-16 md:py-24 bg-secondary/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">From the Blog</h2>
                    <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                        Latest news, updates, and best practices from our team.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle>{post.title}</CardTitle>
                                <CardDescription>{post.date}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">{post.description}</p>
                                <Button asChild variant="link" className="p-0">
                                    <Link href={post.link}>
                                        Read More <ArrowRight className="w-4 h-4 ml-2" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
            <p className="text-muted-foreground mt-2">
              Find answers to common questions about themeCN.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-lg font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your UI?</h2>
            <p className="text-primary-foreground/80 mt-2 max-w-2xl mx-auto mb-6">
              Start creating your perfect theme today. No credit card required.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link href="/themes">
                Start Generating for Free <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="font-semibold mb-4">Product</h3>
                    <ul className="space-y-2">
                        <li><Link href="/themes" className="text-sm text-muted-foreground hover:text-foreground">Themes</Link></li>
                        <li><Link href="/preview/features" className="text-sm text-muted-foreground hover:text-foreground">Features</Link></li>
                        <li><Link href="/preview/pricing" className="text-sm text-muted-foreground hover:text-foreground">Pricing</Link></li>
                        <li><Link href="#faq" className="text-sm text-muted-foreground hover:text-foreground">FAQ</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-4">Company</h3>
                    <ul className="space-y-2">
                        <li><Link href="/preview/team" className="text-sm text-muted-foreground hover:text-foreground">Team</Link></li>
                        <li><Link href="/preview/blog" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link></li>
                        <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-4">Legal</h3>
                    <ul className="space-y-2">
                        <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
                        <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-4">Connect</h3>
                    <ul className="space-y-2">
                        <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Twitter</Link></li>
                        <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">GitHub</Link></li>
                    </ul>
                </div>
            </div>
            <div className="border-t mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                    <Palette className="w-6 h-6" />
                    <span className="text-xl font-bold">themeCN</span>
                </div>
                <p className="text-muted-foreground text-sm">
                    &copy; {new Date().getFullYear()} themeCN. All rights reserved.
                </p>
            </div>
        </div>
      </footer>
    </div>
  );
}
