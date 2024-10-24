import React, { useState } from 'react';
import { Bell, Send, Smartphone, CheckCircle, Menu, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const LandingPage = () => {
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = (e : any) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const messages = [
    { sender: 'user', text: 'Show me the latest tech news' },
    { sender: 'agent', text: '🤖 Here are today\'s top tech headlines:\n\n1. Apple announces breakthrough in quantum computing\n2. Tesla releases new AI features for self-driving cars\n3. Major cybersecurity framework adopted globally' },
    { sender: 'user', text: 'What happened with Tesla?' },
    { sender: 'agent', text: 'Tesla just rolled out their most advanced autopilot update yet. The new AI can now:\n\n• Navigate complex city intersections\n• Respond to emergency vehicles\n• Self-park in tight spaces\n\nWant more details?' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navbar */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">NewsAI</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {/* <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600">About</a> */}
              <Button className="bg-blue-600 hover:bg-blue-700">Sign Up</Button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-gray-600">Features</a>
              <a href="#pricing" className="block px-3 py-2 text-gray-600">Pricing</a>
              <a href="#about" className="block px-3 py-2 text-gray-600">About</a>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-2">Sign Up</Button>
            </div>
          </div>
        )}
      </nav>

      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Your Personal AI News Assistant
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Get instant, personalized news updates delivered right to your phone. Powered by AI, tailored to you.
              </p>
              <div className="space-y-4 md:space-y-0 md:space-x-4">
                <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-lg py-6">
                  Start Free Trial
                </Button>
                <Button variant="outline" className="w-full md:w-auto text-lg py-6">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Fixed Phone Mockup */}
            <div className="flex justify-center">
              <div className="relative w-[280px] h-[560px]">
                {/* Phone Frame */}
                <div className="absolute inset-0 bg-[#1F2937] rounded-[2.5rem] shadow-2xl">
                  {/* Power Button */}
                  <div className="absolute right-[-2px] top-[120px] w-[3px] h-16 bg-gray-600 rounded-l"></div>
                  {/* Volume Buttons */}
                  <div className="absolute left-[-2px] top-[100px] w-[3px] h-10 bg-gray-600 rounded-r"></div>
                  <div className="absolute left-[-2px] top-[140px] w-[3px] h-10 bg-gray-600 rounded-r"></div>
                  
                  {/* Screen Container */}
                  <div className="absolute inset-[4px] bg-black rounded-[2.3rem] overflow-hidden">
                    {/* Dynamic Island */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-7 bg-black rounded-b-3xl z-10"></div>
                    
                    {/* Screen Content */}
                    <div className="relative h-full rounded-[2.3rem] overflow-hidden bg-gray-100">
                      {/* Status Bar */}
                      <div className="h-7 bg-white flex justify-between items-center px-4 text-xs">
                        <span>9:41</span>
                        <span>100%</span>
                      </div>

                      {/* Messages */}
                      <div className="h-[calc(100%-28px)] pt-2 pb-6 px-3 ">
                        {messages.map((message, index) => (
                          <div
                            key={index}
                            className={`mb-3 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                          >
                            <div
                              className={`max-w-[85%] rounded-2xl p-2.5 text-sm ${
                                message.sender === 'user'
                                  ? 'bg-blue-500 text-white rounded-br-sm'
                                  : 'bg-white text-black rounded-bl-sm shadow-sm'
                              }`}
                            >
                              <p className="whitespace-pre-line">{message.text}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6">
            <CardContent className="space-y-4">
              <Bell className="w-12 h-12 text-blue-500" />
              <h3 className="text-xl font-semibold">Personalized Updates</h3>
              <p className="text-gray-600">Choose your topics and receive relevant news tailored to your interests</p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="space-y-4">
              <Smartphone className="w-12 h-12 text-blue-500" />
              <h3 className="text-xl font-semibold">Direct to Your Phone</h3>
              <p className="text-gray-600">Get updates via text message - no apps to install or websites to check</p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="space-y-4">
              <Send className="w-12 h-12 text-blue-500" />
              <h3 className="text-xl font-semibold">Daily Digests</h3>
              <p className="text-gray-600">Receive concise summaries of the most important news in your chosen categories</p>
            </CardContent>
          </Card>
        </div>

        {/* Sign Up Form */}
        <div className="max-w-md mx-auto mb-16">
          <Card className="p-6">
            <CardContent>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-2xl font-bold text-center mb-6">Get Started Today</h2>
                  <Input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full"
                  />
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Sign Up for Free
                  </Button>
                  <p className="text-sm text-gray-500 text-center">
                    No credit card required. Standard message rates apply.
                  </p>
                </form>
              ) : (
                <div className="text-center space-y-4">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                  <h2 className="text-2xl font-bold">Thanks for Signing Up!</h2>
                  <p className="text-gray-600">
                    We'll send you a text message shortly to confirm your subscription.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;