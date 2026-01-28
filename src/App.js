import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, AlertTriangle, Target, CheckCircle, Layers, Database, Zap, TestTube2, Rocket, Award, ArrowRight, Code2, Lock, BarChart3, Globe, Server, Smartphone, Users, Shield, TrendingDown } from 'lucide-react';

const SDZonePresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [flowStep, setFlowStep] = useState(0);

  // Flowchart animation
  useEffect(() => {
    if (currentSlide === 8) { // Flowchart slide
      setFlowStep(0);
      const interval = setInterval(() => {
        setFlowStep(prev => {
          if (prev >= 7) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 600); // Each step takes 600ms
      return () => clearInterval(interval);
    }
  }, [currentSlide]);

  const slides = [
    { type: 'title' },
    { type: 'introduction' },
    { type: 'problem' },
    { type: 'objectives' },
    { type: 'scope' },
    { type: 'benefits' },
    { type: 'system-overview-diagram' },
    { type: 'architecture-diagram' },
    { type: 'flowchart' },
    { type: 'tech-stack' },
    { type: 'impact' },
    { type: 'security' },
    { type: 'future' },
    { type: 'conclusion' }
  ];

  const nextSlide = () => currentSlide < slides.length - 1 && setCurrentSlide(currentSlide + 1);
  const prevSlide = () => currentSlide > 0 && setCurrentSlide(currentSlide - 1);
  const goToSlide = (index) => setCurrentSlide(index);

  const renderSlide = (slide) => {
    switch (slide.type) {
      case 'title':
        return (
          <div className="slide-container">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.5) 2px, transparent 2px),
                                 linear-gradient(90deg, rgba(139, 92, 246, 0.5) 2px, transparent 2px)`,
                backgroundSize: '60px 60px',
                animation: 'gridMove 25s linear infinite'
              }}></div>
              
              {[...Array(25)].map((_, i) => (
                <div key={i} className="absolute rounded-full bg-purple-400/20"
                  style={{
                    width: `${Math.random() * 6 + 3}px`,
                    height: `${Math.random() * 6 + 3}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `float ${Math.random() * 12 + 8}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`
                  }}
                />
              ))}
            </div>

            <div className="slide-content z-10 flex flex-col items-center justify-center text-center">
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl opacity-60 animate-pulse"></div>
                <TrendingUp className="relative w-24 h-24 text-purple-300" strokeWidth={1.5} />
              </div>
              
              <h1 className="text-8xl font-black bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent mb-4 animate-fadeInUp" 
                  style={{ fontFamily: "'Outfit', sans-serif", animationDelay: '0.1s' }}>
                SDZONE
              </h1>
              
              <div className="w-48 h-1.5 bg-gradient-to-r from-purple-400 to-pink-500 mb-6 rounded-full animate-fadeInUp" 
                   style={{ animationDelay: '0.2s' }}></div>
              
              <h2 className="text-4xl font-bold text-purple-200 mb-3 animate-fadeInUp" 
                  style={{ animationDelay: '0.3s' }}>
                Supply and Demand Zone
              </h2>
              
              <p className="text-2xl text-purple-300/90 mb-12 animate-fadeInUp" 
                 style={{ animationDelay: '0.4s' }}>
                Automated Trading Indicator Platform
              </p>
              
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-12 py-8 animate-fadeInUp" 
                   style={{ animationDelay: '0.5s' }}>
                <p className="text-2xl font-bold text-white mb-2">Your Name</p>
                <p className="text-lg text-purple-300 mb-4">Your Roll No / PRN</p>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent my-4"></div>
                <p className="text-xl text-purple-200">PG-DAC <span className="text-purple-400">•</span> Feb 2025</p>
                <p className="text-lg text-purple-300 mt-1">CDAC Noida</p>
              </div>
            </div>
          </div>
        );

      case 'introduction':
        return (
          <div className="slide-container">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-700"></div>
            <div className="slide-content">
              <div className="flex items-center mb-8">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl mr-5">
                  <TrendingUp className="w-14 h-14 text-white" strokeWidth={2} />
                </div>
                <h2 className="slide-title">Introduction</h2>
              </div>

              <div className="grid grid-cols-2 gap-8 h-[calc(100%-120px)]">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 flex flex-col justify-center">
                  <div className="text-center mb-6">
                    <h3 className="text-3xl font-bold text-white mb-4">Trading Challenges</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {[
                      { icon: BarChart3, text: 'Complex Market Analysis' },
                      { icon: AlertTriangle, text: 'Manual Decision Making' },
                      { icon: Target, text: 'Entry/Exit Point Detection' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center bg-white/10 rounded-xl p-4 animate-slideInLeft" 
                           style={{ animationDelay: `${idx * 0.1}s` }}>
                        <div className="bg-white/20 rounded-lg p-3 mr-4">
                          <item.icon className="w-8 h-8 text-white" strokeWidth={2} />
                        </div>
                        <span className="text-xl font-semibold text-white">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 text-center">
                    <ArrowRight className="w-12 h-12 text-yellow-300 mx-auto animate-pulse" strokeWidth={3} />
                    <p className="text-2xl font-bold text-yellow-300 mt-2">Need for Automation</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    'Trading markets require quick and accurate decision-making',
                    'Manual supply and demand zone analysis is complex and time-consuming',
                    'Traders need reliable signals to identify entry and exit points',
                    'Automation can significantly improve trading efficiency and accuracy'
                  ].map((point, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 animate-slideInRight"
                         style={{ animationDelay: `${idx * 0.15}s` }}>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center mr-4 mt-1">
                          <span className="text-emerald-900 font-black text-lg">{idx + 1}</span>
                        </div>
                        <p className="text-xl text-white font-medium leading-relaxed">{point}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'problem':
        return (
          <div className="slide-container">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-600 to-pink-700"></div>
            <div className="slide-content">
              <div className="flex items-center mb-8">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl mr-5">
                  <AlertTriangle className="w-14 h-14 text-white" strokeWidth={2} />
                </div>
                <h2 className="slide-title">Problem Statement</h2>
              </div>

              {/* Improved Layout */}
              <div className="grid grid-cols-2 gap-8 h-[calc(100%-120px)]">
                {/* Left side - Main problems */}
                <div className="space-y-4">
                  {[
                    { icon: TrendingDown, title: 'Manual Zone Identification', desc: 'Time-consuming and labor-intensive process' },
                    { icon: AlertTriangle, title: 'Human Error in Analysis', desc: 'High probability of mistakes in technical analysis' },
                    { icon: Database, title: 'Lack of Automation', desc: 'Existing indicators lack precision and full automation' }
                  ].map((problem, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl p-6 animate-slideInLeft hover:bg-white/20 transition-all"
                         style={{ animationDelay: `${idx * 0.15}s` }}>
                      <div className="flex items-start">
                        <div className="bg-yellow-400 rounded-xl p-3 mr-4">
                          <problem.icon className="w-8 h-8 text-rose-900" strokeWidth={2.5} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-black text-white mb-2">{problem.title}</h3>
                          <p className="text-lg text-white/90">{problem.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right side - Additional problems */}
                <div className="space-y-4">
                  {[
                    { icon: Lock, title: 'Subscription Management', desc: 'Challenges in managing user access and subscriptions' },
                    { icon: Server, title: 'Scalability Issues', desc: 'Lack of secure, scalable trading platforms' }
                  ].map((problem, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl p-6 animate-slideInRight hover:bg-white/20 transition-all"
                         style={{ animationDelay: `${idx * 0.15 + 0.3}s` }}>
                      <div className="flex items-start">
                        <div className="bg-orange-400 rounded-xl p-3 mr-4">
                          <problem.icon className="w-8 h-8 text-rose-900" strokeWidth={2.5} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-black text-white mb-2">{problem.title}</h3>
                          <p className="text-lg text-white/90">{problem.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Impact Box */}
                  <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-8 animate-slideUp mt-4"
                       style={{ animationDelay: '0.6s' }}>
                    <div className="text-center">
                      <AlertTriangle className="w-16 h-16 text-rose-900 mx-auto mb-4" strokeWidth={2} />
                      <h3 className="text-2xl font-black text-rose-900 mb-2">Critical Impact</h3>
                      <p className="text-lg text-rose-800 font-bold">Leading to decreased trading efficiency and increased risk</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'objectives':
        return (
          <div className="slide-container">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-700"></div>
            <div className="slide-content">
              <div className="flex items-center mb-8">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl mr-5">
                  <Target className="w-14 h-14 text-white" strokeWidth={2} />
                </div>
                <h2 className="slide-title">Project Objectives</h2>
              </div>

              <div className="grid grid-cols-5 gap-6 h-[calc(100%-120px)] items-center">
                {[
                  { icon: Zap, title: 'Automate', desc: 'Supply & demand zone detection' },
                  { icon: BarChart3, title: 'Provide', desc: 'Accurate buy/sell signals' },
                  { icon: Lock, title: 'Implement', desc: 'Secure subscription model' },
                  { icon: Database, title: 'Automate', desc: 'Indicator deployment' },
                  { icon: CheckCircle, title: 'Ensure', desc: 'Scalability & security' }
                ].map((obj, idx) => (
                  <div key={idx} className="animate-slideUp" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 h-full flex flex-col items-center text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
                      <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-5 mb-4 shadow-xl">
                        <obj.icon className="w-12 h-12 text-white" strokeWidth={2} />
                      </div>
                      <h3 className="text-2xl font-black text-white mb-3">{obj.title}</h3>
                      <p className="text-lg text-white/90 font-medium leading-snug">{obj.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'scope':
        return (
          <div className="slide-container">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-purple-700"></div>
            <div className="slide-content">
              <div className="flex items-center mb-8">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl mr-5">
                  <CheckCircle className="w-14 h-14 text-white" strokeWidth={2} />
                </div>
                <h2 className="slide-title">Scope of the Project</h2>
              </div>

              {/* Improved Grid Layout */}
              <div className="grid grid-cols-3 gap-6 h-[calc(100%-120px)]">
                {[
                  { icon: Code2, title: 'PineScript Indicator', desc: 'Advanced trading indicator development', color: 'from-cyan-500 to-blue-600' },
                  { icon: Globe, title: 'Web Platform', desc: 'Subscription and management system', color: 'from-green-500 to-emerald-600' },
                  { icon: Lock, title: 'Payment Integration', desc: 'Secure payment gateway setup', color: 'from-orange-500 to-red-600' },
                  { icon: Zap, title: 'Automated Deployment', desc: 'Seamless indicator distribution', color: 'from-purple-500 to-pink-600' },
                  { icon: Database, title: 'Communication Module', desc: 'User notifications and updates', color: 'from-indigo-500 to-violet-600' },
                  { icon: Shield, title: 'Security Layer', desc: 'Code protection and encryption', color: 'from-yellow-500 to-orange-600' }
                ].map((item, idx) => (
                  <div key={idx} className="animate-popIn" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <div className={`bg-gradient-to-br ${item.color} rounded-3xl p-8 h-full border-4 border-white/20 shadow-2xl hover:scale-105 transition-transform`}>
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 inline-block mb-4">
                        <item.icon className="w-12 h-12 text-white" strokeWidth={2} />
                      </div>
                      <h3 className="text-2xl font-black text-white mb-3">{item.title}</h3>
                      <p className="text-lg text-white/90 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'benefits':
        return (
          <div className="slide-container">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-cyan-700"></div>
            <div className="slide-content">
              <div className="flex items-center mb-8">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl mr-5">
                  <Award className="w-14 h-14 text-white" strokeWidth={2} />
                </div>
                <h2 className="slide-title">Key Benefits</h2>
              </div>

              <div className="grid grid-cols-2 gap-8 h-[calc(100%-120px)]">
                {[
                  { icon: Zap, title: 'Increased Efficiency', desc: 'Automated zone detection saves hours of manual analysis', color: 'from-yellow-400 to-orange-500' },
                  { icon: Target, title: 'Higher Accuracy', desc: 'Algorithm-based signals reduce human error significantly', color: 'from-green-400 to-emerald-500' },
                  { icon: Lock, title: 'Secure & Reliable', desc: 'Enterprise-grade security for user data and transactions', color: 'from-blue-400 to-indigo-500' },
                  { icon: Users, title: 'Scalable Solution', desc: 'Supports unlimited users with cloud infrastructure', color: 'from-purple-400 to-pink-500' }
                ].map((benefit, idx) => (
                  <div key={idx} className="animate-slideIn" style={{ animationDelay: `${idx * 0.15}s` }}>
                    <div className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-3xl p-8 h-full hover:bg-white/20 transition-all">
                      <div className={`bg-gradient-to-br ${benefit.color} rounded-2xl p-5 inline-block mb-6 shadow-xl`}>
                        <benefit.icon className="w-12 h-12 text-white" strokeWidth={2.5} />
                      </div>
                      <h3 className="text-3xl font-black text-white mb-4">{benefit.title}</h3>
                      <p className="text-xl text-white/90 font-medium leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'system-overview-diagram':
        return (
          <div className="slide-container">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-700"></div>
            <div className="slide-content">
              <h2 className="slide-title mb-8">System Overview</h2>

              <div className="flex items-center justify-between h-[calc(100%-100px)] px-12">
                {[
                  { icon: Globe, title: 'User\nRegistration', color: 'from-cyan-400 to-blue-500', step: 1 },
                  { icon: BarChart3, title: 'Select\nSubscription', color: 'from-green-400 to-emerald-500', step: 2 },
                  { icon: Lock, title: 'Payment\nProcessing', color: 'from-yellow-400 to-orange-500', step: 3 },
                  { icon: Zap, title: 'Grant\nAccess', color: 'from-purple-400 to-pink-500', step: 4 },
                  { icon: Database, title: 'Backend\nManagement', color: 'from-indigo-400 to-violet-500', step: 5 }
                ].map((item, idx) => (
                  <React.Fragment key={idx}>
                    <div className="flex flex-col items-center animate-slideUp" style={{ animationDelay: `${idx * 0.2}s` }}>
                      <div className="bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center mb-4 border-2 border-white/50">
                        <span className="text-2xl font-black text-white">{item.step}</span>
                      </div>
                      
                      <div className={`bg-gradient-to-br ${item.color} rounded-3xl p-8 w-56 shadow-2xl border-2 border-white/30 hover:scale-110 transition-transform`}>
                        <item.icon className="w-16 h-16 text-white mx-auto mb-4" strokeWidth={2} />
                        <p className="text-center text-white font-black text-xl leading-tight whitespace-pre-line">
                          {item.title}
                        </p>
                      </div>
                    </div>
                    
                    {idx < 4 && (
                      <div className="animate-fadeIn" style={{ animationDelay: `${idx * 0.2 + 0.3}s` }}>
                        <ArrowRight className="w-12 h-12 text-white" strokeWidth={4} />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        );

      case 'architecture-diagram':
        return (
          <div className="slide-container">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-gray-900"></div>
            <div className="slide-content">
              <h2 className="slide-title mb-8">System Architecture</h2>

              <div className="grid grid-cols-3 gap-8 h-[calc(100%-100px)] items-stretch">
                <div className="flex flex-col animate-slideInLeft">
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-6 flex-1 border-4 border-white/20 shadow-2xl">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 inline-block mb-6">
                      <Globe className="w-12 h-12 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-3xl font-black text-white mb-6">Frontend</h3>
                    <div className="space-y-4">
                      {['HTML', 'CSS', 'JavaScript'].map((tech, i) => (
                        <div key={i} className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                          <p className="text-xl font-bold text-white">{tech}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 text-center">
                      <div className="bg-white/30 rounded-lg px-4 py-2 inline-block">
                        <p className="text-sm font-bold text-white">User Interface</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col animate-slideUp" style={{ animationDelay: '0.2s' }}>
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 flex-1 border-4 border-white/20 shadow-2xl">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 inline-block mb-6">
                      <Server className="w-12 h-12 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-3xl font-black text-white mb-6">Backend</h3>
                    <div className="space-y-4">
                      {['Node.js', 'Express.js', 'PineScript', 'Razorpay'].map((tech, i) => (
                        <div key={i} className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                          <p className="text-xl font-bold text-white">{tech}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 text-center">
                      <div className="bg-white/30 rounded-lg px-4 py-2 inline-block">
                        <p className="text-sm font-bold text-white">Business Logic</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col animate-slideInRight" style={{ animationDelay: '0.4s' }}>
                  <div className="bg-gradient-to-br from-purple-500 to-violet-600 rounded-3xl p-6 flex-1 border-4 border-white/20 shadow-2xl">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 inline-block mb-6">
                      <Database className="w-12 h-12 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-3xl font-black text-white mb-6">Database</h3>
                    <div className="space-y-4">
                      {['MongoDB', 'User Data', 'Subscriptions', 'Analytics'].map((tech, i) => (
                        <div key={i} className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                          <p className="text-xl font-bold text-white">{tech}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 text-center">
                      <div className="bg-white/30 rounded-lg px-4 py-2 inline-block">
                        <p className="text-sm font-bold text-white">Data Storage</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-32 left-0 right-0 flex justify-center items-center space-x-32 pointer-events-none">
                <ArrowRight className="w-16 h-16 text-white/50 animate-pulse" strokeWidth={3} />
                <ArrowRight className="w-16 h-16 text-white/50 animate-pulse" strokeWidth={3} style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
          </div>
        );

      case 'flowchart':
        return (
          <div className="slide-container">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-purple-800 to-pink-700"></div>
            <div className="slide-content">
              <h2 className="slide-title mb-6">System Flowchart</h2>

              <div className="flex justify-center items-center h-[calc(100%-80px)]">
                <svg viewBox="0 0 900 950" className="w-full h-full max-w-4xl">
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                    </linearGradient>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#059669', stopOpacity: 1 }} />
                    </linearGradient>
                    <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#f59e0b', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#ef4444', stopOpacity: 1 }} />
                    </linearGradient>
                    <filter id="shadow">
                      <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.4"/>
                    </filter>
                    <marker id="arrow" markerWidth="14" markerHeight="14" refX="12" refY="5" orient="auto">
                      <polygon points="0 0, 14 5, 0 10" fill="#ffffff" />
                    </marker>
                  </defs>
                  
                  {/* START */}
                  <ellipse cx="450" cy="60" rx="140" ry="50" 
                    fill={flowStep >= 0 ? "url(#grad1)" : "#4b5563"} 
                    stroke="#ffffff" strokeWidth="4" filter="url(#shadow)"
                    style={{ transition: 'fill 0.3s ease' }}/>
                  <text x="450" y="72" textAnchor="middle" fill="white" fontSize="28" fontWeight="900">START</text>
                  
                  <line x1="450" y1="110" x2="450" y2="160" 
                    stroke={flowStep >= 1 ? "#ffffff" : "#4b5563"} 
                    strokeWidth="4" markerEnd={flowStep >= 1 ? "url(#arrow)" : ""}
                    style={{ transition: 'stroke 0.3s ease' }}/>
                  
                  {/* User Registration */}
                  <rect x="300" y="160" width="300" height="80" 
                    fill={flowStep >= 1 ? "url(#grad2)" : "#4b5563"} 
                    stroke="#ffffff" strokeWidth="4" rx="20" filter="url(#shadow)"
                    style={{ transition: 'fill 0.3s ease' }}/>
                  <text x="450" y="195" textAnchor="middle" fill="white" fontSize="24" fontWeight="900">User Registration</text>
                  <text x="450" y="225" textAnchor="middle" fill="white" fontSize="24" fontWeight="900">& Login</text>
                  
                  <line x1="450" y1="240" x2="450" y2="280" 
                    stroke={flowStep >= 2 ? "#ffffff" : "#4b5563"} 
                    strokeWidth="4" markerEnd={flowStep >= 2 ? "url(#arrow)" : ""}
                    style={{ transition: 'stroke 0.3s ease' }}/>
                  
                  {/* Select Subscription */}
                  <rect x="300" y="280" width="300" height="80" 
                    fill={flowStep >= 2 ? "url(#grad2)" : "#4b5563"} 
                    stroke="#ffffff" strokeWidth="4" rx="20" filter="url(#shadow)"
                    style={{ transition: 'fill 0.3s ease' }}/>
                  <text x="450" y="315" textAnchor="middle" fill="white" fontSize="24" fontWeight="900">Select Subscription</text>
                  <text x="450" y="345" textAnchor="middle" fill="white" fontSize="24" fontWeight="900">Plan</text>
                  
                  <line x1="450" y1="360" x2="450" y2="400" 
                    stroke={flowStep >= 3 ? "#ffffff" : "#4b5563"} 
                    strokeWidth="4" markerEnd={flowStep >= 3 ? "url(#arrow)" : ""}
                    style={{ transition: 'stroke 0.3s ease' }}/>
                  
                  {/* Make Payment */}
                  <rect x="300" y="400" width="300" height="80" 
                    fill={flowStep >= 3 ? "url(#grad2)" : "#4b5563"} 
                    stroke="#ffffff" strokeWidth="4" rx="20" filter="url(#shadow)"
                    style={{ transition: 'fill 0.3s ease' }}/>
                  <text x="450" y="450" textAnchor="middle" fill="white" fontSize="26" fontWeight="900">Make Payment</text>
                  
                  <line x1="450" y1="480" x2="450" y2="520" 
                    stroke={flowStep >= 4 ? "#ffffff" : "#4b5563"} 
                    strokeWidth="4" markerEnd={flowStep >= 4 ? "url(#arrow)" : ""}
                    style={{ transition: 'stroke 0.3s ease' }}/>
                  
                  {/* Payment Verified Decision */}
                  <polygon points="450,520 590,600 450,680 310,600" 
                    fill={flowStep >= 4 ? "url(#grad3)" : "#4b5563"} 
                    stroke="#ffffff" strokeWidth="4" filter="url(#shadow)"
                    style={{ transition: 'fill 0.3s ease' }}/>
                  <text x="450" y="590" textAnchor="middle" fill="white" fontSize="26" fontWeight="900">Payment</text>
                  <text x="450" y="620" textAnchor="middle" fill="white" fontSize="26" fontWeight="900">Verified?</text>
                  
                  {/* Yes Path */}
                  <line x1="450" y1="680" x2="450" y2="730" 
                    stroke={flowStep >= 5 ? "#ffffff" : "#4b5563"} 
                    strokeWidth="4" markerEnd={flowStep >= 5 ? "url(#arrow)" : ""}
                    style={{ transition: 'stroke 0.3s ease' }}/>
                  <text x="475" y="710" fill={flowStep >= 5 ? "#10b981" : "#6b7280"} fontSize="28" fontWeight="900">YES</text>
                  
                  {/* Grant Access */}
                  <rect x="300" y="730" width="300" height="80" 
                    fill={flowStep >= 5 ? "url(#grad2)" : "#4b5563"} 
                    stroke="#ffffff" strokeWidth="4" rx="20" filter="url(#shadow)"
                    style={{ transition: 'fill 0.3s ease' }}/>
                  <text x="450" y="765" textAnchor="middle" fill="white" fontSize="24" fontWeight="900">Grant Indicator</text>
                  <text x="450" y="795" textAnchor="middle" fill="white" fontSize="24" fontWeight="900">Access</text>
                  
                  <line x1="450" y1="810" x2="450" y2="850" 
                    stroke={flowStep >= 6 ? "#ffffff" : "#4b5563"} 
                    strokeWidth="4" markerEnd={flowStep >= 6 ? "url(#arrow)" : ""}
                    style={{ transition: 'stroke 0.3s ease' }}/>
                  
                  {/* END */}
                  <ellipse cx="450" cy="895" rx="140" ry="50" 
                    fill={flowStep >= 6 ? "url(#grad1)" : "#4b5563"} 
                    stroke="#ffffff" strokeWidth="4" filter="url(#shadow)"
                    style={{ transition: 'fill 0.3s ease' }}/>
                  <text x="450" y="907" textAnchor="middle" fill="white" fontSize="28" fontWeight="900">END</text>
                  
                  {/* No Path */}
                  <line x1="590" y1="600" x2="670" y2="600" 
                    stroke={flowStep >= 7 ? "#ffffff" : "#4b5563"} 
                    strokeWidth="4"
                    style={{ transition: 'stroke 0.3s ease' }}/>
                  <line x1="670" y1="600" x2="670" y2="440" 
                    stroke={flowStep >= 7 ? "#ffffff" : "#4b5563"} 
                    strokeWidth="4"
                    style={{ transition: 'stroke 0.3s ease' }}/>
                  <line x1="670" y1="440" x2="600" y2="440" 
                    stroke={flowStep >= 7 ? "#ffffff" : "#4b5563"} 
                    strokeWidth="4" markerEnd={flowStep >= 7 ? "url(#arrow)" : ""}
                    style={{ transition: 'stroke 0.3s ease' }}/>
                  <text x="690" y="610" fill={flowStep >= 7 ? "#ef4444" : "#6b7280"} fontSize="28" fontWeight="900">NO</text>
                </svg>
              </div>
            </div>
          </div>
        );

      case 'tech-stack':
        return (
          <div className="slide-container">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-slate-900"></div>
            <div className="slide-content">
              <h2 className="slide-title mb-8">Technologies Used</h2>

              <div className="grid grid-cols-3 gap-8 h-[calc(100%-100px)]">
                {[
                  { icon: Code2, name: 'PineScript', desc: 'Indicator Logic & Algorithms', color: 'from-cyan-500 to-blue-600' },
                  { icon: Server, name: 'Node.js & Express', desc: 'Backend Server & APIs', color: 'from-green-500 to-emerald-600' },
                  { icon: Database, name: 'MongoDB', desc: 'Database Management', color: 'from-purple-500 to-violet-600' }
                ].map((tech, idx) => (
                  <div key={idx} className="animate-popIn" style={{ animationDelay: `${idx * 0.15}s` }}>
                    <div className={`bg-gradient-to-br ${tech.color} rounded-3xl p-8 h-full border-4 border-white/20 shadow-2xl hover:scale-105 transition-transform`}>
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 inline-block mb-6">
                        <tech.icon className="w-14 h-14 text-white" strokeWidth={2} />
                      </div>
                      <h3 className="text-3xl font-black text-white mb-4">{tech.name}</h3>
                      <p className="text-xl text-white/90 font-semibold leading-relaxed">{tech.desc}</p>
                    </div>
                  </div>
                ))}

                {[
                  { icon: Globe, name: 'HTML/CSS/JS', desc: 'Frontend Interface & UX', color: 'from-orange-500 to-red-600' },
                  { icon: Lock, name: 'Razorpay', desc: 'Payment Gateway Integration', color: 'from-pink-500 to-rose-600' }
                ].map((tech, idx) => (
                  <div key={idx} className={`animate-popIn ${idx === 0 ? 'col-start-1' : ''}`} 
                       style={{ animationDelay: `${(idx + 3) * 0.15}s` }}>
                    <div className={`bg-gradient-to-br ${tech.color} rounded-3xl p-8 h-full border-4 border-white/20 shadow-2xl hover:scale-105 transition-transform`}>
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 inline-block mb-6">
                        <tech.icon className="w-14 h-14 text-white" strokeWidth={2} />
                      </div>
                      <h3 className="text-3xl font-black text-white mb-4">{tech.name}</h3>
                      <p className="text-xl text-white/90 font-semibold leading-relaxed">{tech.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'impact':
        return (
          <div className="slide-container">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-indigo-900"></div>
            <div className="slide-content">
              <h2 className="slide-title mb-8">Project Impact</h2>

              <div className="grid grid-cols-3 gap-8 h-[calc(100%-100px)]">
                {[
                  {
                    title: 'Key Features',
                    icon: Zap,
                    color: 'from-yellow-500 to-orange-600',
                    items: ['Automated zone detection', 'High accuracy signals', 'Secure subscriptions', 'Protected proprietary code']
                  },
                  {
                    title: 'Testing Done',
                    icon: TestTube2,
                    color: 'from-green-500 to-emerald-600',
                    items: ['Unit testing', 'Integration testing', 'System testing', 'Security testing']
                  },
                  {
                    title: 'Results Achieved',
                    icon: Award,
                    color: 'from-purple-500 to-pink-600',
                    items: ['Reduced manual effort', 'Faster decision making', 'Improved accuracy', 'Scalable system']
                  }
                ].map((section, idx) => (
                  <div key={idx} className="animate-slideUp" style={{ animationDelay: `${idx * 0.2}s` }}>
                    <div className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-3xl p-8 h-full shadow-2xl hover:bg-white/15 transition-all">
                      <div className={`bg-gradient-to-br ${section.color} rounded-2xl p-5 inline-block mb-6 shadow-xl`}>
                        <section.icon className="w-12 h-12 text-white" strokeWidth={2.5} />
                      </div>
                      
                      <h3 className="text-3xl font-black text-white mb-6 pb-3 border-b-2 border-white/30">
                        {section.title}
                      </h3>
                      
                      <ul className="space-y-4">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <div className={`flex-shrink-0 w-3 h-3 rounded-full bg-gradient-to-r ${section.color} mt-2 mr-3`}></div>
                            <span className="text-xl text-white/95 font-medium leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="slide-container">
            <div className="absolute inset-0 bg-gradient-to-br from-red-700 to-orange-800"></div>
            <div className="slide-content">
              <div className="flex items-center mb-8">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl mr-5">
                  <Shield className="w-14 h-14 text-white" strokeWidth={2} />
                </div>
                <h2 className="slide-title">Security Features</h2>
              </div>

              <div className="grid grid-cols-2 gap-8 h-[calc(100%-120px)]">
                {[
                  { icon: Lock, title: 'Data Encryption', desc: 'End-to-end encryption for all user data and transactions', color: 'from-blue-500 to-indigo-600' },
                  { icon: Shield, title: 'Code Protection', desc: 'Proprietary indicator code secured with obfuscation', color: 'from-green-500 to-teal-600' },
                  { icon: Users, title: 'Authentication', desc: 'Multi-factor authentication for user accounts', color: 'from-purple-500 to-pink-600' },
                  { icon: Database, title: 'Secure Storage', desc: 'Encrypted database with regular backups', color: 'from-orange-500 to-red-600' }
                ].map((feature, idx) => (
                  <div key={idx} className="animate-popIn" style={{ animationDelay: `${idx * 0.15}s` }}>
                    <div className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-3xl p-8 h-full hover:bg-white/20 transition-all">
                      <div className={`bg-gradient-to-br ${feature.color} rounded-2xl p-5 inline-block mb-6 shadow-xl`}>
                        <feature.icon className="w-12 h-12 text-white" strokeWidth={2.5} />
                      </div>
                      <h3 className="text-3xl font-black text-white mb-4">{feature.title}</h3>
                      <p className="text-xl text-white/90 font-medium leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'future':
        return (
          <div className="slide-container">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700"></div>
            <div className="slide-content">
              <div className="flex items-center mb-8">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl mr-5">
                  <Rocket className="w-14 h-14 text-white" strokeWidth={2} />
                </div>
                <h2 className="slide-title">Future Enhancements</h2>
              </div>

              <div className="grid grid-cols-2 gap-8 h-[calc(100%-120px)]">
                {[
                  { icon: Smartphone, title: 'Mobile Application', desc: 'iOS and Android platforms for on-the-go trading' },
                  { icon: BarChart3, title: 'Advanced Analytics', desc: 'Real-time metrics and performance dashboard' },
                  { icon: Layers, title: 'Multiple Indicators', desc: 'Diverse trading strategies and tools' },
                  { icon: Zap, title: 'AI-Based Filtering', desc: 'Machine learning for trade recommendations' }
                ].map((feature, idx) => (
                  <div key={idx} className="animate-slideIn" style={{ animationDelay: `${idx * 0.15}s` }}>
                    <div className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-3xl p-10 h-full shadow-2xl hover:bg-white/20 hover:scale-105 transition-all">
                      <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 inline-block mb-6 shadow-xl">
                        <feature.icon className="w-14 h-14 text-white" strokeWidth={2} />
                      </div>
                      <h3 className="text-3xl font-black text-white mb-4">{feature.title}</h3>
                      <p className="text-xl text-white/90 font-medium leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'conclusion':
        return (
          <div className="slide-container">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
              {[...Array(40)].map((_, i) => (
                <div key={i} className="absolute rounded-full animate-float"
                  style={{
                    width: `${Math.random() * 10 + 5}px`,
                    height: `${Math.random() * 10 + 5}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    background: `hsl(${Math.random() * 360}, 80%, 70%)`,
                    opacity: Math.random() * 0.7 + 0.3,
                    animationDuration: `${Math.random() * 10 + 8}s`,
                    animationDelay: `${Math.random() * 3}s`
                  }}
                />
              ))}
            </div>

            <div className="slide-content flex flex-col items-center justify-center text-center">
              <div className="mb-8 relative animate-bounce">
                <div className="absolute inset-0 bg-yellow-400 blur-3xl opacity-60"></div>
                <Award className="relative w-32 h-32 text-yellow-300" strokeWidth={1.5} />
              </div>
              
              <h2 className="text-7xl font-black text-white mb-12 animate-fadeInUp" 
                  style={{ fontFamily: "'Outfit', sans-serif" }}>
                Conclusion
              </h2>
              
              <div className="max-w-5xl space-y-6 mb-16">
                {[
                  'Successfully automates complex trading analysis',
                  'Integrates modern technology with financial markets',
                  'Demonstrates practical full-stack development',
                  'Provides scalable and secure trading solution'
                ].map((point, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 animate-slideIn"
                       style={{ animationDelay: `${idx * 0.1}s` }}>
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-5 shadow-lg">
                        <CheckCircle className="w-6 h-6 text-white" strokeWidth={3} />
                      </div>
                      <p className="text-2xl text-white font-semibold text-left">{point}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="relative inline-block animate-slideUp" style={{ animationDelay: '0.5s' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 blur-2xl opacity-60"></div>
                <div className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-20 py-10 rounded-3xl shadow-2xl border-4 border-white/30">
                  <h3 className="text-6xl font-black text-white mb-3">Thank You!</h3>
                  <p className="text-3xl text-white/95 font-bold">Questions?</p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center overflow-hidden">
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet" />
      
      <div className="presentation-wrapper">
        <div className="presentation-content">
          {renderSlide(slides[currentSlide])}
        </div>

        <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm px-5 py-2 rounded-full border border-white/20">
          <span className="text-white font-bold text-lg">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-t border-purple-500/30 z-50">
        <div className="px-8 py-4 flex items-center justify-between max-w-7xl mx-auto">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="control-btn"
          >
            <ChevronLeft className="w-6 h-6 mr-2" />
            Previous
          </button>

          <div className="flex items-center space-x-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentSlide 
                    ? 'w-10 h-3 bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg' 
                    : 'w-3 h-3 bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="control-btn"
          >
            Next
            <ChevronRight className="w-6 h-6 ml-2" />
          </button>
        </div>
      </div>

      <style>{`
        .presentation-wrapper {
          width: 90vw;
          height: calc(90vw * 9 / 16);
          max-width: 1600px;
          max-height: 900px;
          position: relative;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          border-radius: 12px;
          overflow: hidden;
        }

        .presentation-content {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .slide-container {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .slide-content {
          position: relative;
          z-index: 10;
          width: 100%;
          height: 100%;
          padding: 60px 80px;
        }

        .slide-title {
          font-size: 4rem;
          font-weight: 900;
          color: white;
          font-family: 'Outfit', sans-serif;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .control-btn {
          display: flex;
          align-items: center;
          padding: 12px 24px;
          background: linear-gradient(135deg, #7c3aed, #ec4899);
          color: white;
          font-weight: 700;
          border-radius: 12px;
          transition: all 0.3s;
          border: none;
          cursor: pointer;
        }

        .control-btn:disabled {
          background: linear-gradient(135deg, #374151, #4b5563);
          cursor: not-allowed;
          opacity: 0.5;
        }

        .control-btn:not(:disabled):hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes rotateIn {
          from {
            opacity: 0;
            transform: rotate(-180deg) scale(0);
          }
          to {
            opacity: 1;
            transform: rotate(0deg) scale(1);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slideIn {
          animation: slideIn 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-popIn {
          animation: popIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
          opacity: 0;
        }

        .animate-rotateIn {
          animation: rotateIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SDZonePresentation;