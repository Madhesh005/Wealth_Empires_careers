import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Target, 
  TrendingUp, 
  FileText, 
  Video, 
  Home, 
  Phone, 
  MessageCircle,
  CheckCircle,
  X,
  Search,
  Briefcase,
  Shield,
  Zap,
  Layers,
  ArrowRight
} from "lucide-react";

export default function HomePage() {
  const [showValues, setShowValues] = useState(true);

  const handleSeeOpenRoles = () => {
    // In a real app, this would navigate to the jobs page
    alert("Redirecting to open roles page...");
  };

  const handleReachOut = () => {
    window.location.href = "mailto:careers@doola.com";
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-gray-900" data-testid="logo-doola">doola</div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button className="text-gray-600 hover:text-gray-900 transition-colors" data-testid="nav-products">Products</button>
              <button className="text-gray-600 hover:text-gray-900 transition-colors" data-testid="nav-resources">Resources</button>
              <button className="text-gray-600 hover:text-gray-900 transition-colors" data-testid="nav-pricing">Pricing</button>
              <button 
                className="text-blue-600 font-medium" 
                onClick={() => scrollToSection('careers')}
                data-testid="nav-careers"
              >
                Careers
              </button>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900" data-testid="button-signin">
                Sign in
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700" data-testid="button-get-started">
                Get started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="careers" className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* 3D Briefcase */}
              <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl shadow-2xl transform rotate-12 relative">
                <div className="absolute inset-4 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-2xl">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gradient-to-b from-yellow-600 to-yellow-700 rounded-t-lg"></div>
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-yellow-700 rounded"></div>
                </div>
              </div>
              
              {/* Floating Search Icon */}
              <motion.div 
                className="absolute -left-8 top-4 bg-blue-600 text-white p-3 rounded-full shadow-lg animate-float"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Search className="w-5 h-5" />
              </motion.div>
              
              {/* Floating Target Icon */}
              <motion.div 
                className="absolute -right-8 top-4 bg-white p-3 rounded-full shadow-lg animate-float-delay"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7 }}
              >
                <div className="w-6 h-6 border-4 border-red-500 rounded-full relative">
                  <div className="absolute inset-1 bg-red-500 rounded-full"></div>
                </div>
              </motion.div>
              
              {/* Floating Clouds */}
              <motion.div 
                className="absolute -top-4 -left-12 w-16 h-8 bg-white rounded-full shadow-md animate-float"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              ></motion.div>
              <motion.div 
                className="absolute -top-2 -right-12 w-12 h-6 bg-white rounded-full shadow-md animate-float-delay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              ></motion.div>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-testid="hero-title"
          >
            Join our mission to<br/>
            <span className="text-blue-600">democratize entrepreneurship</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-testid="hero-description"
          >
            We're building the future of business formation and compliance. 
            Help us empower entrepreneurs worldwide to start and grow their companies.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              onClick={handleSeeOpenRoles}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
              data-testid="button-see-open-roles"
            >
              See open roles
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Backers Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-lg font-semibold text-gray-600 mb-8" data-testid="backers-title">Backed By The Best</h2>
            <div className="flex justify-center items-center space-x-12 flex-wrap">
              <div className="flex items-center space-x-2 mb-4" data-testid="backer-ycombinator">
                <div className="w-8 h-8 bg-orange-500 text-white font-bold flex items-center justify-center rounded">Y</div>
                <span className="text-gray-900 font-semibold">Combinator</span>
              </div>
              
              <div className="flex items-center space-x-2 mb-4" data-testid="backer-hubspot">
                <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                <span className="text-gray-900 font-semibold">HubSpot</span>
              </div>
              
              <div className="flex items-center space-x-2 mb-4" data-testid="backer-nexus">
                <div className="text-blue-600 font-bold text-xl">nexus</div>
                <span className="text-xs text-gray-500">venture partners</span>
              </div>
              
              <div className="flex items-center space-x-2 mb-4" data-testid="backer-hustle-fund">
                <div className="flex">
                  <div className="w-3 h-3 bg-purple-500 rounded mr-1"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded mr-1"></div>
                  <div className="w-3 h-3 bg-green-500 rounded mr-1"></div>
                  <div className="w-3 h-3 bg-orange-500 rounded"></div>
                </div>
                <span className="text-gray-900 font-semibold">hustle fund</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="commitments-title">Our commitments</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              data-testid="commitment-people"
            >
              <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">People</h3>
              <p className="text-gray-600 leading-relaxed">
                Empower entrepreneurs all over the world, especially those who might not have access 
                to traditional means of wealth creation.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              data-testid="commitment-purpose"
            >
              <div className="w-12 h-12 bg-orange-500 text-white rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Purpose</h3>
              <p className="text-gray-600 leading-relaxed">
                Democratize access to the largest market in the world, with intentional outreach to 
                emerging economies.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              data-testid="commitment-profit"
            >
              <div className="w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Profit</h3>
              <p className="text-gray-600 leading-relaxed">
                Compound wealth creation across the board for us, and our customers. We don't 
                just help you start a business; we help you access financial freedom.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Hire Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="how-we-hire-title">How we hire</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: 1,
                title: "Application Review",
                icon: <FileText className="w-5 h-5" />,
                description: "We'll review your resume and application to see if your skills match up with our current team needs.",
                bgColor: "from-pink-200 to-pink-300",
                iconColor: "text-pink-600"
              },
              {
                step: 2,
                title: "Video Call",
                icon: <Video className="w-5 h-5" />,
                description: "A 1:1 video call with several members of the doola team to get to know you better for you to learn about us.",
                bgColor: "from-purple-200 to-purple-300",
                iconColor: "text-purple-600"
              },
              {
                step: 3,
                title: "Take-home exercise",
                icon: <Home className="w-5 h-5" />,
                description: "If you're applying for a role with a take-home exercise, we'll give you a sample project to take home.",
                bgColor: "from-purple-200 to-purple-300",
                iconColor: "text-purple-600"
              },
              {
                step: 4,
                title: "Review Call",
                icon: <Phone className="w-5 h-5" />,
                description: "If moving forward is the right step, we'll schedule a call to review your work & final steps in the process.",
                bgColor: "from-yellow-200 to-yellow-300",
                iconColor: "text-yellow-600"
              },
              {
                step: 5,
                title: "Teammate Call",
                icon: <Users className="w-5 h-5" />,
                description: "Depending on your location, we'll have you come onsite, and we do a video call, with your teammates.",
                bgColor: "from-pink-200 to-pink-300",
                iconColor: "text-pink-600"
              },
              {
                step: 6,
                title: "Follow up",
                icon: <MessageCircle className="w-5 h-5" />,
                description: "We respect your time, so we'll provide a decision and feedback as soon as we can.",
                bgColor: "from-blue-200 to-blue-300",
                iconColor: "text-blue-600"
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`hiring-step-${item.step}`}
              >
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  Step {item.step}
                </div>
                <div className={`w-16 h-16 bg-gradient-to-br ${item.bgColor} rounded-2xl flex items-center justify-center mb-4`}>
                  <div className={item.iconColor}>{item.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values and Non-Values Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="values-title">Our Values and Non-Values</h2>
            <p className="text-gray-600 max-w-4xl mx-auto mb-8">
              Establishing team values is critical. We believe it's equally essential to identify team non-values. We're 
              stronger in driving our mission home with both values and non-values taken into account. Note: Our goal 
              in sharing these up front and transparency is to be as straightforward with people as possible. Our goal is 
              not to be combative in our language; it's to be straightforward.
            </p>
            
            <div className="flex justify-center mb-12">
              <div className="bg-white rounded-full p-1 shadow-lg">
                <button 
                  onClick={() => setShowValues(true)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                    showValues 
                      ? 'bg-black text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  data-testid="toggle-values"
                >
                  <CheckCircle className="w-4 h-4 inline mr-2" />Values
                </button>
                <button 
                  onClick={() => setShowValues(false)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                    !showValues 
                      ? 'bg-black text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  data-testid="toggle-non-values"
                >
                  <X className="w-4 h-4 inline mr-2" />Non-values
                </button>
              </div>
            </div>
          </div>
          
          {showValues ? (
            <div className="grid md:grid-cols-3 gap-6" data-testid="values-content">
              <motion.div 
                className="bg-green-card rounded-2xl p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-12 h-12 bg-green-200 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Communicate with candor</h3>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  Our motto: Strong opinions, loosely held. We operate as a global team 
                  balancing async and real-time collaboration. Clear, candid 
                  communication is how we stay aligned and move fast.
                </p>
                <div className="bg-green-200 rounded-lg p-3">
                  <p className="text-xs text-green-800">
                    <strong>Guiding Principle:</strong> We communicate openly, 
                    challenge ideas with respect, and remain open to better solutions—always prioritizing 
                    what's best for our customers and team.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-blue-card rounded-2xl p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="w-12 h-12 bg-blue-200 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Aim for your full potential</h3>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  We're here to build something that's never existed before: the first true 
                  Business-in-a-Box™. The kind of ambition requires us to push past limits 
                  and continuously grow.
                </p>
                <div className="bg-blue-200 rounded-lg p-3">
                  <p className="text-xs text-blue-800">
                    <strong>Guiding Principle:</strong> Growth is uncomfortable, 
                    but settling is worse. We choose the harder path—seeking feedback, learning 
                    relentlessly, and striving for excellence. Be extraordinary, not ordinary.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-yellow-card rounded-2xl p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-12 h-12 bg-yellow-200 rounded-xl flex items-center justify-center mb-6">
                  <Layers className="w-6 h-6 text-yellow-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Taking initiative with a full-stack mentality</h3>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  We don't wait for perfect instructions or defined roles. If something needs to be 
                  done, we roll up our sleeves and figure it out with high agency.
                </p>
                <div className="bg-yellow-200 rounded-lg p-3">
                  <p className="text-xs text-yellow-800">
                    <strong>Guiding Principle:</strong> "That wasn't on the job 
                    description" doesn't exist at doola. We take ownership, think end-to-end, and execute 
                    with a bias for action.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-orange-card rounded-2xl p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="w-12 h-12 bg-orange-200 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-orange-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Be trustworthy and always ready to help</h3>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  We help entrepreneurs turn their dreams into reality. To do that, we 
                  operate with integrity, accuracy, and a commitment to doing things right.
                </p>
                <div className="bg-orange-200 rounded-lg p-3">
                  <p className="text-xs text-orange-800">
                    <strong>Guiding Principle:</strong> Trust is everything—within 
                    our team and with our customers. We do what we say, own our mistakes, and lift each 
                    other up.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-purple-card rounded-2xl p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="w-12 h-12 bg-purple-200 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Urgency and focus to execute</h3>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  Speed matters. We are a fast-moving startup in a massive, untapped market. 
                  Execution—done with urgency and focus—sets us apart.
                </p>
                <div className="bg-purple-200 rounded-lg p-3">
                  <p className="text-xs text-purple-800">
                    <strong>Guiding Principle:</strong> Rome wasn't built in a day, 
                    but they laid bricks every hour. We move fast, stay focused, and keep momentum going.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-gray-card rounded-2xl p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center mb-6">
                  <Search className="w-6 h-6 text-gray-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sweat the details</h3>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  Excellence isn't just about speed—it's about precision. The small things 
                  compound into big wins, and getting the details right gives us a competitive 
                  edge.
                </p>
                <div className="bg-gray-200 rounded-lg p-3">
                  <p className="text-xs text-gray-800">
                    <strong>Guiding Principle:</strong> We take pride in our work. 
                    Double-checking, refining, and obsessing over quality isn't extra—it's the standard.
                  </p>
                </div>
              </motion.div>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6" data-testid="non-values-content">
              <motion.div 
                className="bg-gradient-to-br from-red-100 to-red-200 rounded-2xl p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-12 h-12 bg-red-200 rounded-xl flex items-center justify-center mb-6">
                  <X className="w-6 h-6 text-red-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Perfectionism over progress</h3>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  We don't wait for perfect solutions. We ship, learn, and iterate. 
                  Analysis paralysis kills momentum and opportunities.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-red-100 to-red-200 rounded-2xl p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="w-12 h-12 bg-red-200 rounded-xl flex items-center justify-center mb-6">
                  <X className="w-6 h-6 text-red-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ego over collaboration</h3>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  Individual success means nothing if the team fails. We check our egos 
                  at the door and prioritize collective wins.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-red-100 to-red-200 rounded-2xl p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-12 h-12 bg-red-200 rounded-xl flex items-center justify-center mb-6">
                  <X className="w-6 h-6 text-red-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Comfort zones over growth</h3>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  We don't hire for comfort. We're building something unprecedented, 
                  which requires constant learning and adaptation.
                </p>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="bg-gradient-to-br from-blue-100 to-purple-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-200 to-purple-200 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="join-team-title">
                  Excited to join our team?
                </h2>
                <p className="text-gray-700 text-lg mb-6" data-testid="join-team-description">
                  You might be the candidate we're looking for. Many of our teams are actively hiring.
                </p>
                <Button 
                  onClick={handleSeeOpenRoles}
                  className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800"
                  data-testid="button-see-roles-cta"
                >
                  See open roles
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              
              <div className="md:w-1/3 flex justify-center relative">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Professional handshake between colleagues" 
                  className="rounded-2xl shadow-lg max-w-sm"
                  data-testid="handshake-image"
                />
                
                <div className="absolute top-4 right-8 bg-yellow-400 text-black p-2 rounded-full animate-float">
                  <span className="text-lg font-bold">!</span>
                </div>
                <div className="absolute bottom-8 right-12 bg-blue-600 text-white p-2 rounded-full animate-float-delay">
                  <span className="text-lg font-bold">?</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6" data-testid="contact-title">Get in touch</h2>
          <p className="text-xl text-gray-600 mb-8" data-testid="contact-description">
            At doola, we value trust, teamwork, and bringing transparency to help organisations make 
            better decisions. Please don't hesitate to reach out directly at{" "}
            <a href="mailto:careers@doola.com" className="text-blue-600 hover:underline" data-testid="email-link">
              careers@doola.com
            </a>.
          </p>
          
          <Button 
            onClick={handleReachOut}
            className="bg-black text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-800"
            data-testid="button-reach-out"
          >
            Reach out
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="text-2xl font-bold mb-4" data-testid="footer-logo">doola</div>
              <p className="text-gray-400 text-sm">
                The complete platform for starting and running your US business.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-llc">LLC Formation</a></li>
                <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-ein">EIN</a></li>
                <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-bank">Bank Account</a></li>
                <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-bookkeeping">Bookkeeping</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-blog">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-help">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-templates">Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-school">Startup School</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-about">About</a></li>
                <li><a href="#careers" className="hover:text-white transition-colors" data-testid="footer-careers">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-contact">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-privacy">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 doola. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
