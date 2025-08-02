'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Palette, BarChart3, Users, MessageSquare, Settings, Home, Send, Menu, Bell, Search, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '@/components/theme-provider';

// Define the possible pages and their titles
const pages = {
  dashboard: 'Dashboard',
  chat: 'AI Chat Interface',
  settings: 'User Settings',
  landing: 'Landing Page',
  contact: 'Contact Page'
};

interface PreviewPageProps {
  params: { slug: string[] };
}

export default function PreviewPage({ params }: PreviewPageProps) {
  const { slug } = params;
  const { currentTheme } = useTheme();

  const [activeTab, setActiveTab] = useState('dashboard');
  const currentPage = slug?.[0] || 'dashboard';

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Sarah</p>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            <Bell className="w-4 h-4 mr-2" />
            Notifications
          </Button>
          <Avatar>
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,350</div>
            <p className="text-xs text-muted-foreground">+180.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,234</div>
            <p className="text-xs text-muted-foreground">+19% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2%</div>
            <p className="text-xs text-muted-foreground">+0.5% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar className="w-8 h-8">
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium">John Doe completed a task</p>
                <p className="text-xs text-muted-foreground">2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Avatar className="w-8 h-8">
                <AvatarFallback>MJ</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium">Mary Johnson joined the team</p>
                <p className="text-xs text-muted-foreground">1 hour ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Avatar className="w-8 h-8">
                <AvatarFallback>RW</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium">Robert Wilson updated project</p>
                <p className="text-xs text-muted-foreground">3 hours ago</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Project Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Website Redesign</p>
                <p className="text-sm text-muted-foreground">75%</p>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Mobile App</p>
                <p className="text-sm text-muted-foreground">45%</p>
              </div>
              <Progress value={45} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">API Integration</p>
                <p className="text-sm text-muted-foreground">90%</p>
              </div>
              <Progress value={90} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderChat = () => (
    <div className="h-[600px] flex flex-col">
      <Card className="flex-1 flex flex-col">
        <CardHeader className="border-b">
          <CardTitle className="flex items-center">
            <MessageSquare className="w-5 h-5 mr-2" />
            AI Assistant
          </CardTitle>
          <CardDescription>Your intelligent coding companion</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col p-0">
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            <div className="flex items-start space-x-3">
              <Avatar className="w-8 h-8">
                <div className="w-full h-full bg-primary rounded-full flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-primary-foreground" />
                </div>
              </Avatar>
              <div className="bg-muted p-3 rounded-lg max-w-[70%]">
                <p className="text-sm">Hello! I'm your AI assistant. How can I help you with your project today?</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 justify-end">
              <div className="bg-primary p-3 rounded-lg max-w-[70%] text-primary-foreground">
                <p className="text-sm">Can you help me optimize my React components?</p>
              </div>
              <Avatar className="w-8 h-8">
                <AvatarFallback>You</AvatarFallback>
              </Avatar>
            </div>

            <div className="flex items-start space-x-3">
              <Avatar className="w-8 h-8">
                <div className="w-full h-full bg-primary rounded-full flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-primary-foreground" />
                </div>
              </Avatar>
              <div className="bg-muted p-3 rounded-lg max-w-[70%]">
                <p className="text-sm">Absolutely! Here are some key strategies for optimizing React components:</p>
                <ul className="text-sm mt-2 space-y-1 list-disc list-inside">
                  <li>Use React.memo for preventing unnecessary re-renders</li>
                  <li>Implement useCallback and useMemo hooks</li>
                  <li>Split components for better code organization</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t p-4">
            <div className="flex space-x-2">
              <Input placeholder="Type your message..." className="flex-1" />
              <Button>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input placeholder="Sarah" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input placeholder="Chen" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input placeholder="sarah@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Bio</label>
                <Input placeholder="Tell us about yourself..." />
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Two-factor authentication</p>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                </div>
                <Button variant="outline">Enable</Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email notifications</p>
                  <p className="text-sm text-muted-foreground">Receive updates via email</p>
                </div>
                <Button variant="outline">Configure</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Choose what notifications you receive</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Project updates</p>
                    <p className="text-sm text-muted-foreground">Get notified about project changes</p>
                  </div>
                  <Badge>Enabled</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Team mentions</p>
                    <p className="text-sm text-muted-foreground">When someone mentions you</p>
                  </div>
                  <Badge variant="secondary">Disabled</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Marketing emails</p>
                    <p className="text-sm text-muted-foreground">Product updates and tips</p>
                  </div>
                  <Badge>Enabled</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );

  const renderLanding = () => (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <Badge variant="secondary" className="mb-4">
          ✨ New Feature Available
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Build Amazing{' '}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Applications
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          The fastest way to build modern web applications with beautiful UI components and seamless user experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8">
            Learn More
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <BarChart3 className="w-8 h-8 text-primary mb-4" />
            <CardTitle>Analytics</CardTitle>
            <CardDescription>
              Track your application performance with detailed analytics and insights.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Users className="w-8 h-8 text-primary mb-4" />
            <CardTitle>Team Collaboration</CardTitle>
            <CardDescription>
              Work together seamlessly with your team using built-in collaboration tools.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Settings className="w-8 h-8 text-primary mb-4" />
            <CardTitle>Customization</CardTitle>
            <CardDescription>
              Customize every aspect of your application to match your brand and needs.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-muted-foreground mb-6">
          Join thousands of developers building amazing applications.
        </p>
        <Button size="lg">Start Building Today</Button>
      </section>
    </div>
  );

  const renderContact = () => (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
        <p className="text-muted-foreground">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Contact Form</CardTitle>
          <CardDescription>Fill out the form below and we'll get back to you</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">First Name</label>
              <Input placeholder="John" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Last Name</label>
              <Input placeholder="Doe" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input placeholder="john@example.com" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Subject</label>
            <Input placeholder="How can we help?" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Message</label>
            <textarea
              className="w-full min-h-[120px] p-3 rounded-md border border-input bg-background resize-none"
              placeholder="Tell us more about your inquiry..."
            />
          </div>
          <Button className="w-full">Send Message</Button>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <Card>
          <CardContent className="pt-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Chat Support</h3>
            <p className="text-sm text-muted-foreground">Available 24/7</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Settings className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Help Center</h3>
            <p className="text-sm text-muted-foreground">Find answers fast</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Community</h3>
            <p className="text-sm text-muted-foreground">Join the discussion</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return renderDashboard();
      case 'chat':
        return renderChat();
      case 'settings':
        return renderSettings();
      case 'landing':
        return renderLanding();
      case 'contact':
        return renderContact();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Page Navigation */}
          <div className="lg:w-64 space-y-4 lg:sticky lg:top-8 lg:h-fit">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Preview Pages</CardTitle>
                <CardDescription>
                  See how <strong>{currentTheme.name}</strong> looks across
                  different layouts
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {Object.entries(pages).map(([key, title]) => (
                  <Button
                    key={key}
                    variant={currentPage === key ? 'default' : 'ghost'}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href={`/preview/${key}`}>
                      {key === 'dashboard' && (
                        <BarChart3 className="w-4 h-4 mr-2" />
                      )}
                      {key === 'chat' && (
                        <MessageSquare className="w-4 h-4 mr-2" />
                      )}
                      {key === 'settings' && (
                        <Settings className="w-4 h-4 mr-2" />
                      )}
                      {key === 'landing' && <Home className="w-4 h-4 mr-2" />}
                      {key === 'contact' && <Users className="w-4 h-4 mr-2" />}
                      {title}
                    </Link>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-2">
                {pages[currentPage as keyof typeof pages] || 'Preview'}
              </h1>
              <p className="text-muted-foreground">
                Experience how your theme looks in a real application context
              </p>
            </div>

            {renderPage()}
          </div>
        </div>
      </div>
    </div>
  );
}
