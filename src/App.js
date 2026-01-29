import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, AlertTriangle, Target, CheckCircle, Layers, Database, Zap, TestTube2, Rocket, Award, ArrowRight, Code2, Lock, BarChart3, Globe, Server, Smartphone, Users, Shield, TrendingDown } from 'lucide-react';

const SDZonePresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [flowStep, setFlowStep] = useState(0);

  useEffect(() => {
    if (currentSlide === 8) {
      setFlowStep(0);
      const interval = setInterval(() => {
        setFlowStep(prev => {
          if (prev >= 7) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 600);
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
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `linear-gradient(rgba(100, 116, 139, 0.5) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(100, 116, 139, 0.5) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }}></div>
            </div>

            <div className="slide-content z-10 flex flex-col items-center justify-center text-center">
              <div className="mb-8">
                <TrendingUp className="w-20 h-20 text-blue-500 mx-auto" strokeWidth={1.5} />
              </div>
              
              <h1 className="text-8xl font-bold text-white mb-4 animate-fadeInUp" 
                  style={{ fontFamily: "'Inter', sans-serif", animationDelay: '0.1s', letterSpacing: '-0.02em' }}>
                SDZONE
              </h1>
              
              <div className="w-32 h-0.5 bg-blue-500 mb-6 animate-fadeInUp" 
                   style={{ animationDelay: '0.2s' }}></div>
              
              <h2 className="text-3xl font-semibold text-slate-300 mb-2 animate-fadeInUp" 
                  style={{ animationDelay: '0.3s' }}>
                Supply and Demand Zone
              </h2>
              
              <p className="text-xl text-slate-400 mb-16 animate-fadeInUp" 
                 style={{ animationDelay: '0.4s' }}>
                Automated Trading Indicator Platform
              </p>
              
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg px-12 py-8 animate-fadeInUp" 
                   style={{ animationDelay: '0.5s' }}>
                <p className="text-2xl font-semibold text-white mb-2">Your Name</p>
                <p className="text-lg text-slate-400 mb-4">Your Roll No / PRN</p>
                <div className="w-full h-px bg-slate-700 my-4"></div>
                <p className="text-lg text-slate-300">PG-DAC <span className="text-slate-600">•</span> Feb 2025</p>
                <p className="text-base text-slate-400 mt-1">CDAC Noida</p>
              </div>
            </div>
          </div>
        );

      case 'introduction':
        return (
          <div className="slide-container">
            <div className="absolute inset-0 bg-white"></div>
            <div className="slide-content">
              <div className="flex items-center mb-10">
                <div className="bg-blue-500 p-3 rounded-lg mr-4">
                  <TrendingUp className="w-10 h-10 text-white" strokeWidth={2} />
                </div>
                <h2 className="slide-title text-slate-900">Introduction</h2>
              </div>

              <div className="grid grid-cols-2 gap-8 h-[calc(100%-120px)]">
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-8 flex flex-col justify-center">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">Trading Challenges</h3>
                  </div>
                  
                  <div className="space-y-5">
                    {[
                      { icon: BarChart3, text: 'Complex Market Analysis' },
                      { icon: AlertTriangle, text: 'Manual Decision Making' },
                      { icon: Target, text: 'Entry/Exit Point Detection' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center bg-white border border-slate-200 rounded-lg p-4 animate-slideInLeft" 
                           style={{ animationDelay: `${idx * 0.1}s` }}>
                        <div className="bg-blue-50 rounded-lg p-2 mr-4">
                          <item.icon className="w-7 h-7 text-blue-600" strokeWidth={2} />
                        </div>
                        <span className="text-lg font-medium text-slate-700">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 text-center">
                    <ArrowRight className="w-10 h-10 text-blue-500 mx-auto mb-2" strokeWidth={2.5} />
                    <p className="text-lg font-semibold text-slate-800">Need for Automation</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    'Trading markets require quick and accurate decision-making',
                    'Manual supply and demand zone analysis is complex and time-consuming',
                    'Traders need reliable signals to identify entry and exit points',
                    'Automation can significantly improve trading efficiency and accuracy'
                  ].map((point, idx) => (
                    <div key={idx} className="bg-white border border-slate-200 rounded-lg p-5 animate-slideInRight"
                         style={{ animationDelay: `${idx * 0.15}s` }}>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-7 h-7 bg-blue-500 rounded flex items-center justify-center mr-4 mt-0.5">
                          <span className="text-white font-bold text-sm">{idx + 1}</span>
                        </div>
                        <p className="text-lg text-slate-700 leading-relaxed">{point}</p>
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
            <div className="absolute inset-0 bg-slate-50"></div>
            <div className="slide-content">
              <div className="flex items-center mb-10">
                <div className="bg-red-500 p-3 rounded-lg mr-4">
                  <AlertTriangle className="w-10 h-10 text-white" strokeWidth={2} />
                </div>
                <h2 className="slide-title text-slate-900">Problem Statement</h2>
              </div>

              <div className="grid grid-cols-2 gap-6 h-[calc(100%-120px)]">
                <div className="space-y-4">
                  {[
                    { icon: TrendingDown, title: 'Manual Zone Identification', desc: 'Time-consuming and labor-intensive process' },
                    { icon: AlertTriangle, title: 'Human Error in Analysis', desc: 'High probability of mistakes in technical analysis' },
                    { icon: Database, title: 'Lack of Automation', desc: 'Existing indicators lack precision and full automation' }
                  ].map((problem, idx) => (
                    <div key={idx} className="bg-white border-l-4 border-red-500 shadow-sm rounded-lg p-6 animate-slideInLeft hover:shadow-md transition-shadow"
                         style={{ animationDelay: `${idx * 0.15}s` }}>
                      <div className="flex items-start">
                        <div className="bg-red-50 rounded-lg p-2 mr-4">
                          <problem.icon className="w-7 h-7 text-red-600" strokeWidth={2} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2">{problem.title}</h3>
                          <p className="text-base text-slate-600">{problem.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Lock, title: 'Subscription Management', desc: 'Challenges in managing user access and subscriptions' },
                    { icon: Server, title: 'Scalability Issues', desc: 'Lack of secure, scalable trading platforms' }
                  ].map((problem, idx) => (
                    <div key={idx} className="bg-white border-l-4 border-orange-500 shadow-sm rounded-lg p-6 animate-slideInRight hover:shadow-md transition-shadow"
                         style={{ animationDelay: `${idx * 0.15 + 0.3}s` }}>
                      <div className="flex items-start">
                        <div className="bg-orange-50 rounded-lg p-2 mr-4">
                          <problem.icon className="w-7 h-7 text-orange-600" strokeWidth={2} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2">{problem.title}</h3>
                          <p className="text-base text-slate-600">{problem.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-lg p-8 animate-slideUp shadow-lg"
                       style={{ animationDelay: '0.6s' }}>
                    <div className="text-center">
                      <AlertTriangle className="w-12 h-12 text-white mx-auto mb-3" strokeWidth={2} />
                      <h3 className="text-xl font-bold text-white mb-2">Critical Impact</h3>
                      <p className="text-base text-white/90 font-medium">Decreased efficiency & increased risk</p>
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
            <div className="absolute inset-0 bg-white"></div>
            <div className="slide-content">
              <div className="flex items-center mb-10">
                <div className="bg-blue-500 p-3 rounded-lg mr-4">
                  <Target className="w-10 h-10 text-white" strokeWidth={2} />
                </div>
                <h2 className="slide-title text-slate-900">Project Objectives</h2>
              </div>

              <div className="grid grid-cols-5 gap-5 h-[calc(100%-120px)] items-center">
                {[
                  { icon: Zap, title: 'Automate', desc: 'Supply & demand zone detection' },
                  { icon: BarChart3, title: 'Provide', desc: 'Accurate buy/sell signals' },
                  { icon: Lock, title: 'Implement', desc: 'Secure subscription model' },
                  { icon: Database, title: 'Automate', desc: 'Indicator deployment' },
                  { icon: CheckCircle, title: 'Ensure', desc: 'Scalability & security' }
                ].map((obj, idx) => (
                  <div key={idx} className="animate-slideUp" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <div className="bg-white border border-slate-200 rounded-lg p-6 h-full flex flex-col items-center text-center hover:border-blue-500 hover:shadow-md transition-all duration-300">
                      <div className="bg-blue-500 rounded-lg p-4 mb-4">
                        <obj.icon className="w-10 h-10 text-white" strokeWidth={2} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{obj.title}</h3>
                      <p className="text-sm text-slate-600 leading-snug">{obj.desc}</p>
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
            <div className="absolute inset-0 bg-slate-50"></div>
            <div className="slide-content">
              <div className="flex items-center mb-10">
                <div className="bg-indigo-500 p-3 rounded-lg mr-4">
                  <CheckCircle className="w-10 h-10 text-white" strokeWidth={2} />
                </div>
                <h2 className="slide-title text-slate-900">Scope of the Project</h2>
              </div>

              <div className="grid grid-cols-3 gap-6 h-[calc(100%-120px)]">
                {[
                  { icon: Code2, title: 'PineScript Indicator', desc: 'Advanced trading indicator development', color: 'blue' },
                  { icon: Globe, title: 'Web Platform', desc: 'Subscription and management system', color: 'green' },
                  { icon: Lock, title: 'Payment Integration', desc: 'Secure payment gateway setup', color: 'orange' },
                  { icon: Zap, title: 'Automated Deployment', desc: 'Seamless indicator distribution', color: 'purple' },
                  { icon: Database, title: 'Communication Module', desc: 'User notifications and updates', color: 'indigo' },
                  { icon: Shield, title: 'Security Layer', desc: 'Code protection and encryption', color: 'red' }
                ].map((item, idx) => (
                  <div key={idx} className="animate-popIn" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <div className={`bg-white border-l-4 border-${item.color}-500 rounded-lg p-6 h-full shadow-sm hover:shadow-md transition-all`}>
                      <div className={`bg-${item.color}-50 rounded-lg p-3 inline-block mb-4`}>
                        <item.icon className={`w-9 h-9 text-${item.color}-600`} strokeWidth={2} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-base text-slate-600 leading-relaxed">{item.desc}</p>
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
            <div className="absolute inset-0 bg-white"></div>
            <div className="slide-content">
              <div className="flex items-center mb-10">
                <div className="bg-green-500 p-3 rounded-lg mr-4">
                  <Award className="w-10 h-10 text-white" strokeWidth={2} />
                </div>
                <h2 className="slide-title text-slate-900">Key Benefits</h2>
              </div>

              <div className="grid grid-cols-2 gap-8 h-[calc(100%-120px)]">
                {[
                  { icon: Zap, title: 'Increased Efficiency', desc: 'Automated zone detection saves hours of manual analysis', color: 'yellow' },
                  { icon: Target, title: 'Higher Accuracy', desc: 'Algorithm-based signals reduce human error significantly', color: 'green' },
                  { icon: Lock, title: 'Secure & Reliable', desc: 'Enterprise-grade security for user data and transactions', color: 'blue' },
                  { icon: Users, title: 'Scalable Solution', desc: 'Supports unlimited users with cloud infrastructure', color: 'purple' }
                ].map((benefit, idx) => (
                  <div key={idx} className="animate-slideIn" style={{ animationDelay: `${idx * 0.15}s` }}>
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-8 h-full hover:border-blue-500 transition-all">
                      <div className={`bg-${benefit.color}-500 rounded-lg p-4 inline-block mb-5`}>
                        <benefit.icon className="w-10 h-10 text-white" strokeWidth={2} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                      <p className="text-lg text-slate-600 leading-relaxed">{benefit.desc}</p>
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
            <div className="absolute inset-0 bg-slate-50"></div>
            <div className="slide-content">
              <h2 className="slide-title text-slate-900 mb-10">System Overview</h2>

              <div className="flex items-center justify-between h-[calc(100%-100px)] px-8">
                {[
                  { icon: Globe, title: 'User Registration', step: 1 },
                  { icon: BarChart3, title: 'Select Subscription', step: 2 },
                  { icon: Lock, title: 'Payment Processing', step: 3 },
                  { icon: Zap, title: 'Grant Access', step: 4 },
                  { icon: Database, title: 'Backend Management', step: 5 }
                ].map((item, idx) => (
                  <React.Fragment key={idx}>
                    <div className="flex flex-col items-center animate-slideUp" style={{ animationDelay: `${idx * 0.2}s` }}>
                      <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                        <span className="text-lg font-bold text-white">{item.step}</span>
                      </div>
                      
                      <div className="bg-white border-2 border-slate-200 rounded-lg p-6 w-52 shadow-sm hover:shadow-md hover:border-blue-500 transition-all">
                        <item.icon className="w-12 h-12 text-blue-600 mx-auto mb-3" strokeWidth={2} />
                        <p className="text-center text-slate-900 font-semibold text-lg leading-tight">
                          {item.title}
                        </p>
                      </div>
                    </div>
                    
                    {idx < 4 && (
                      <div className="animate-fadeIn" style={{ animationDelay: `${idx * 0.2 + 0.3}s` }}>
                        <ArrowRight className="w-10 h-10 text-slate-400" strokeWidth={2.5} />
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
            <div className="absolute inset-0 bg-white"></div>
            <div className="slide-content">
              <h2 className="slide-title text-slate-900 mb-10">System Architecture</h2>

              <div className="grid grid-cols-3 gap-8 h-[calc(100%-100px)] items-stretch">
                {[
                  { icon: Globe, title: 'Frontend', techs: ['HTML', 'CSS', 'JavaScript'], label: 'User Interface', color: 'blue' },
                  { icon: Server, title: 'Backend', techs: ['Node.js', 'Express.js', 'PineScript', 'Razorpay'], label: 'Business Logic', color: 'green' },
                  { icon: Database, title: 'Database', techs: ['MongoDB', 'User Data', 'Subscriptions', 'Analytics'], label: 'Data Storage', color: 'purple' }
                ].map((layer, idx) => (
                  <div key={idx} className={`animate-slideUp`} style={{ animationDelay: `${idx * 0.2}s` }}>
                    <div className={`bg-white border-2 border-${layer.color}-500 rounded-lg p-6 h-full shadow-md`}>
                      <div className={`bg-${layer.color}-500 rounded-lg p-3 inline-block mb-5`}>
                        <layer.icon className="w-9 h-9 text-white" strokeWidth={2} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-5">{layer.title}</h3>
                      <div className="space-y-3 mb-6">
                        {layer.techs.map((tech, i) => (
                          <div key={i} className="bg-slate-50 border border-slate-200 rounded p-3">
                            <p className="text-base font-medium text-slate-700">{tech}</p>
                          </div>
                        ))}
                      </div>
                      <div className="text-center">
                        <div className="bg-slate-100 rounded px-3 py-2 inline-block">
                          <p className="text-xs font-semibold text-slate-600">{layer.label}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute bottom-28 left-0 right-0 flex justify-center items-center space-x-32 pointer-events-none">
                <ArrowRight className="w-12 h-12 text-slate-300" strokeWidth={2.5} />
                <ArrowRight className="w-12 h-12 text-slate-300" strokeWidth={2.5} />
              </div>
            </div>
          </div>
        );

      case 'flowchart':
        return (
          <div className="slide-container">
            <div className="absolute inset-0 bg-slate-50"></div>
            <div className="slide-content">
              <h2 className="slide-title text-slate-900 mb-6">System Flowchart</h2>

              <div className="flex justify-center items-center h-[calc(100%-80px)]">
                <svg viewBox="0 0 900 950" className="w-full h-full max-w-4xl">
                  <defs>
                    <filter id="shadow">
                      <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15"/>
                    </filter>
                    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="#64748b" />
                    </marker>
                  </defs>
                  
                  {/* START */}
                  <ellipse cx="450" cy="60" rx="120" ry="45" 
                    fill={flowStep >= 0 ? "#3b82f6" : "#e2e8f0"} 
                    stroke={flowStep >= 0 ? "#2563eb" : "#cbd5e1"} strokeWidth="3" filter="url(#shadow)"
                    style={{ transition: 'all 0.3s ease' }}/>
                  <text x="450" y="70" textAnchor="middle" fill="white" fontSize="24" fontWeight="700">START</text>
                  
                  <line x1="450" y1="105" x2="450" y2="150" 
                    stroke={flowStep >= 1 ? "#64748b" : "#cbd5e1"} 
                    strokeWidth="3" markerEnd={flowStep >= 1 ? "url(#arrow)" : ""}
                    style={{ transition: 'stroke 0.3s ease' }}/>
                  
                  {/* User Registration */}
                  <rect x="325" y="150" width="250" height="70" 
                    fill={flowStep >= 1 ? "#3b82f6" : "#e2e8f0"} 
                    stroke={flowStep >= 1 ? "#2563eb" : "#cbd5e1"} strokeWidth="3" rx="8" filter="url(#shadow)"
                    style={{ transition: 'all 0.3s ease' }}/>
                  <text x="450" y="180" textAnchor="middle" fill="white" fontSize="20" fontWeight="600">User Registration</text>
                  <text x="450" y="205" textAnchor="middle" fill="white" fontSize="20" fontWeight="600">& Login</text>
                  
                  <line x1="450" y1="220" x2="450" y2="260" 
                    stroke={flowStep >= 2 ? "#64748b" : "#cbd5e1"} 
                    strokeWidth="3" markerEnd={flowStep >= 2 ? "url(#arrow)" : ""}
                    style={{ transition: 'stroke 0.3s ease' }}/>
                  
                  {/* Select Subscription */}
                  <rect x="325" y="260" width="250" height="70" 
                    fill={flowStep >= 2 ? "#3b82f6" : "#e2e8f0"} 
                    stroke={flowStep >= 2 ? "#2563eb" : "#cbd5e1"} strokeWidth="3" rx="8" filter="url(#shadow)"
                    style={{ transition: 'all 0.3s ease' }}/>
                  <text x="450" y="290" textAnchor="middle" fill="white" fontSize="20" fontWeight="600">Select Subscription</text>
                  <text x="450" y="315" textAnchor="middle" fill="white" fontSize="20" fontWeight="600">Plan</text>
                  
                  <line x1="450" y1="330" x2="450" y2="370" 
                    stroke={flowStep >= 3 ? "#64748b" : "#cbd5e1"} 
                    strokeWidth="3" markerEnd={flowStep >= 3 ? "url(#arrow)" : ""}
                    style={{ transition: 'stroke 0.3s ease' }}/>
                  
                  {/* Make Payment */}
                  <rect x="325" y="370" width="250" height="70" 
                    fill={flowStep >= 3 ? "#3b82f6" : "#e2e8f0"} 
                    stroke={flowStep >= 3 ? "#2563eb" : "#cbd5e1"} strokeWidth="3" rx="8" filter="url(#shadow)"
                    style={{ transition: 'all 0.3s ease' }}/>
                  <text x="450" y="410" textAnchor="middle" fill="white" fontSize="22" fontWeight="600">Make Payment</text>
                  
                  <line x1="450" y1="440" x2="450" y2="480" 
                    stroke={flowStep >= 4 ? "#64748b" : "#cbd5e1"} 
                    strokeWidth="3" markerEnd={flowStep >= 4 ? "url(#arrow)" : ""}
                    style={{ transition: 'stroke 0.3s ease' }}/>
                  
                  {/* Payment Verified Decision */}
                  <polygon points="450,480 570,550 450,620 330,550" 
                    fill={flowStep >= 4 ? "#f59e0b" : "#e2e8f0"} 
                    stroke={flowStep >= 4 ? "#d97706" : "#cbd5e1"} strokeWidth="3" filter="url(#shadow)"
                    style={{ transition: 'all 0.3s ease' }}/>
                  <text x="450" y="540" textAnchor="middle" fill="white" fontSize="20" fontWeight="600">Payment</text>
                  <text x="450" y="565" textAnchor="middle" fill="white" fontSize="20" fontWeight="600">Verified?</text>
                  
                  {/* Yes Path */}
                  <line x1="450" y1="620" x2="450" y2="670" 
                    stroke={flowStep >= 5 ? "#64748b" : "#cbd5e1"} 
                    strokeWidth="3" markerEnd={flowStep >= 5 ? "url(#arrow)" : ""}
                    style={{ transition: 'stroke 0.3s ease' }}/>
                  <text x="470" y="650" fill={flowStep >= 5 ? "#10b981" : "#cbd5e1"} fontSize="22" fontWeight="700">YES</text>
                  
                  {/* Grant Access */}
                  <rect x="325" y="670" width="250" height="70" 
                    fill={flowStep >= 5 ? "#10b981" : "#e2e8f0"} 
                    stroke={flowStep >= 5 ? "#059669" : "#cbd5e1"} strokeWidth="3" rx="8" filter="url(#shadow)"
                    style={{ transition: 'all 0.3s ease' }}/>
                  <text x="450" y="700" textAnchor="middle" fill="white" fontSize="20" fontWeight="600">Grant Indicator</text>
                  <text x="450" y="725" textAnchor="middle" fill="white" fontSize="20" fontWeight="600">Access</text>
                  
                  <line x1="450" y1="740" x2="450" y2="800" 
                    stroke={flowStep >= 6 ? "#64748b" : "#cbd5e1"} 
                    strokeWidth="3" markerEnd={flowStep >= 6 ? "url(#arrow)" : ""}
                    style={{ transition: 'stroke 0.3s ease' }}/>
                  
                  {/* END */}
                  <ellipse cx="450" cy="845" rx="120" ry="45" 
                    fill={flowStep >= 6 ? "#3b82f6" : "#e2e8f0"} 
                    stroke={flowStep >= 6 ? "#2563eb" : "#cbd5e1"} strokeWidth="3" filter="url(#shadow)"
                    style={{ transition: 'all 0.3s ease' }}/>
                  <text x="450" y="855" textAnchor="middle" fill="white" fontSize="24" fontWeight="700">END</text>
                  
                  {/* No Path */}
                  <line x1="570" y1="550" x2="640" y2="550" 
                    stroke={flowStep >= 7 ? "#64748b" : "#cbd5e1"} 
                    strokeWidth="3"
                    style={{ transition: 'stroke 0.3s ease' }}/>
                  <line x1="640" y1="550" x2="640" y2="405" 
                    stroke={flowStep >= 7 ? "#64748b" : "#cbd5e1"} 
                    strokeWidth="3"
                    style={{ transition: 'stroke 0.3s ease' }}/>
                  <line x1="640" y1="405" x2="575" y2="405" 
                    stroke={flowStep >= 7 ? "#64748b" : "#cbd5e1"} 
                    strokeWidth="3" markerEnd={flowStep >= 7 ? "url(#arrow)" : ""}
                    style={{ transition: 'stroke 0.3s ease' }}/>
                  <text x="655" y="560" fill={flowStep >= 7 ? "#ef4444" : "#cbd5e1"} fontSize="22" fontWeight="700">NO</text>
                </svg>
              </div>
            </div>
          </div>
        );

      case 'tech-stack':
        return (
          <div className="slide-container">
            <div className="absolute inset-0 bg-white"></div>
            <div className="slide-content">
              <h2 className="slide-title text-slate-900 mb-10">Technologies Used</h2>

              <div className="grid grid-cols-3 gap-8 h-[calc(100%-100px)]">
                {[
                  { icon: Code2, name: 'PineScript', desc: 'Indicator Logic & Algorithms', color: 'blue' },
                  { icon: Server, name: 'Node.js & Express', desc: 'Backend Server & APIs', color: 'green' },
                  { icon: Database, name: 'MongoDB', desc: 'Database Management', color: 'purple' }
                ].map((tech, idx) => (
                  <div key={idx} className="animate-popIn" style={{ animationDelay: `${idx * 0.15}s` }}>
                    <div className={`bg-white border-2 border-${tech.color}-500 rounded-lg p-8 h-full shadow-md hover:shadow-lg transition-all`}>
                      <div className={`bg-${tech.color}-500 rounded-lg p-4 inline-block mb-5`}>
                        <tech.icon className="w-10 h-10 text-white" strokeWidth={2} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{tech.name}</h3>
                      <p className="text-lg text-slate-600 leading-relaxed">{tech.desc}</p>
                    </div>
                  </div>
                ))}

                {[
                  { icon: Globe, name: 'HTML/CSS/JS', desc: 'Frontend Interface & UX', color: 'orange' },
                  { icon: Lock, name: 'Razorpay', desc: 'Payment Gateway Integration', color: 'red' }
                ].map((tech, idx) => (
                  <div key={idx} className={`animate-popIn ${idx === 0 ? 'col-start-1' : ''}`} 
                       style={{ animationDelay: `${(idx + 3) * 0.15}s` }}>
                    <div className={`bg-white border-2 border-${tech.color}-500 rounded-lg p-8 h-full shadow-md hover:shadow-lg transition-all`}>
                      <div className={`bg-${tech.color}-500 rounded-lg p-4 inline-block mb-5`}>
                        <tech.icon className="w-10 h-10 text-white" strokeWidth={2} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{tech.name}</h3>
                      <p className="text-lg text-slate-600 leading-relaxed">{tech.desc}</p>
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
            <div className="absolute inset-0 bg-slate-50"></div>
            <div className="slide-content">
              <h2 className="slide-title text-slate-900 mb-10">Project Impact</h2>

              <div className="grid grid-cols-3 gap-8 h-[calc(100%-100px)]">
                {[
                  {
                    title: 'Key Features',
                    icon: Zap,
                    color: 'yellow',
                    items: ['Automated zone detection', 'High accuracy signals', 'Secure subscriptions', 'Protected proprietary code']
                  },
                  {
                    title: 'Testing Done',
                    icon: TestTube2,
                    color: 'green',
                    items: ['Unit testing', 'Integration testing', 'System testing', 'Security testing']
                  },
                  {
                    title: 'Results Achieved',
                    icon: Award,
                    color: 'purple',
                    items: ['Reduced manual effort', 'Faster decision making', 'Improved accuracy', 'Scalable system']
                  }
                ].map((section, idx) => (
                  <div key={idx} className="animate-slideUp" style={{ animationDelay: `${idx * 0.2}s` }}>
                    <div className="bg-white border border-slate-200 rounded-lg p-8 h-full shadow-sm hover:shadow-md transition-all">
                      <div className={`bg-${section.color}-500 rounded-lg p-4 inline-block mb-5`}>
                        <section.icon className="w-9 h-9 text-white" strokeWidth={2} />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-slate-900 mb-5 pb-3 border-b border-slate-200">
                        {section.title}
                      </h3>
                      
                      <ul className="space-y-3">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <div className={`flex-shrink-0 w-2 h-2 rounded-full bg-${section.color}-500 mt-2 mr-3`}></div>
                            <span className="text-base text-slate-700 leading-relaxed">{item}</span>
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
            <div className="absolute inset-0 bg-white"></div>
            <div className="slide-content">
              <div className="flex items-center mb-10">
                <div className="bg-red-500 p-3 rounded-lg mr-4">
                  <Shield className="w-10 h-10 text-white" strokeWidth={2} />
                </div>
                <h2 className="slide-title text-slate-900">Security Features</h2>
              </div>

              <div className="grid grid-cols-2 gap-8 h-[calc(100%-120px)]">
                {[
                  { icon: Lock, title: 'Data Encryption', desc: 'End-to-end encryption for all user data and transactions' },
                  { icon: Shield, title: 'Code Protection', desc: 'Proprietary indicator code secured with obfuscation' },
                  { icon: Users, title: 'Authentication', desc: 'Multi-factor authentication for user accounts' },
                  { icon: Database, title: 'Secure Storage', desc: 'Encrypted database with regular backups' }
                ].map((feature, idx) => (
                  <div key={idx} className="animate-popIn" style={{ animationDelay: `${idx * 0.15}s` }}>
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-8 h-full hover:border-red-500 transition-all">
                      <div className="bg-red-500 rounded-lg p-4 inline-block mb-5">
                        <feature.icon className="w-9 h-9 text-white" strokeWidth={2} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                      <p className="text-lg text-slate-600 leading-relaxed">{feature.desc}</p>
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
            <div className="absolute inset-0 bg-slate-50"></div>
            <div className="slide-content">
              <div className="flex items-center mb-10">
                <div className="bg-indigo-500 p-3 rounded-lg mr-4">
                  <Rocket className="w-10 h-10 text-white" strokeWidth={2} />
                </div>
                <h2 className="slide-title text-slate-900">Future Enhancements</h2>
              </div>

              <div className="grid grid-cols-2 gap-8 h-[calc(100%-120px)]">
                {[
                  { icon: Smartphone, title: 'Mobile Application', desc: 'iOS and Android platforms for on-the-go trading' },
                  { icon: BarChart3, title: 'Advanced Analytics', desc: 'Real-time metrics and performance dashboard' },
                  { icon: Layers, title: 'Multiple Indicators', desc: 'Diverse trading strategies and tools' },
                  { icon: Zap, title: 'AI-Based Filtering', desc: 'Machine learning for trade recommendations' }
                ].map((feature, idx) => (
                  <div key={idx} className="animate-slideIn" style={{ animationDelay: `${idx * 0.15}s` }}>
                    <div className="bg-white border border-slate-200 rounded-lg p-8 h-full hover:border-indigo-500 hover:shadow-md transition-all">
                      <div className="bg-indigo-500 rounded-lg p-4 inline-block mb-5">
                        <feature.icon className="w-10 h-10 text-white" strokeWidth={2} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                      <p className="text-lg text-slate-600 leading-relaxed">{feature.desc}</p>
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
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `linear-gradient(rgba(100, 116, 139, 0.5) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(100, 116, 139, 0.5) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }}></div>
            </div>

            <div className="slide-content flex flex-col items-center justify-center text-center">
              <div className="mb-8">
                <Award className="w-24 h-24 text-blue-500 mx-auto" strokeWidth={1.5} />
              </div>
              
              <h2 className="text-6xl font-bold text-white mb-12 animate-fadeInUp" 
                  style={{ fontFamily: "'Inter', sans-serif" }}>
                Conclusion
              </h2>
              
              <div className="max-w-5xl space-y-5 mb-16">
                {[
                  'Successfully automates complex trading analysis',
                  'Integrates modern technology with financial markets',
                  'Demonstrates practical full-stack development',
                  'Provides scalable and secure trading solution'
                ].map((point, idx) => (
                  <div key={idx} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-5 animate-slideIn"
                       style={{ animationDelay: `${idx * 0.1}s` }}>
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                        <CheckCircle className="w-5 h-5 text-white" strokeWidth={2.5} />
                      </div>
                      <p className="text-xl text-slate-200 font-medium text-left">{point}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-blue-500 px-16 py-8 rounded-lg shadow-xl animate-slideUp" style={{ animationDelay: '0.5s' }}>
                <h3 className="text-5xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-2xl text-white/90 font-medium">Questions?</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-screen h-screen bg-slate-100 flex items-center justify-center overflow-hidden">
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      
      <div className="presentation-wrapper">
        <div className="presentation-content">
          {renderSlide(slides[currentSlide])}
        </div>

        <div className="absolute top-6 right-6 bg-slate-800 px-4 py-2 rounded-lg">
          <span className="text-white font-semibold text-sm">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-slate-800 border-t border-slate-700 z-50">
        <div className="px-8 py-4 flex items-center justify-between max-w-7xl mx-auto">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="control-btn"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Previous
          </button>

          <div className="flex items-center space-x-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentSlide 
                    ? 'w-8 h-2 bg-blue-500' 
                    : 'w-2 h-2 bg-slate-600 hover:bg-slate-500'
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
            <ChevronRight className="w-5 h-5 ml-2" />
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
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          border-radius: 8px;
          overflow: hidden;
          background: white;
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
          font-size: 3.5rem;
          font-weight: 800;
          font-family: 'Inter', sans-serif;
          letter-spacing: -0.02em;
        }

        .control-btn {
          display: flex;
          align-items: center;
          padding: 10px 20px;
          background: #3b82f6;
          color: white;
          font-weight: 600;
          border-radius: 8px;
          transition: all 0.2s;
          border: none;
          cursor: pointer;
          font-size: 14px;
        }

        .control-btn:disabled {
          background: #475569;
          cursor: not-allowed;
          opacity: 0.5;
        }

        .control-btn:not(:disabled):hover {
          background: #2563eb;
          transform: translateY(-1px);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.5s ease-out forwards;
          opacity: 0;
        }

        .animate-slideInRight {
          animation: slideInRight 0.5s ease-out forwards;
          opacity: 0;
        }

        .animate-slideUp {
          animation: slideUp 0.5s ease-out forwards;
          opacity: 0;
        }

        .animate-slideIn {
          animation: slideIn 0.5s ease-out forwards;
          opacity: 0;
        }

        .animate-popIn {
          animation: popIn 0.5s ease-out forwards;
          opacity: 0;
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default SDZonePresentation;