import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Users, 
  Target, 
  TrendingUp, 
  FileText, 
  Building,
  Calculator,
  Receipt,
  Copyright,
  Clock,
  Eye,
  Shield,
  Zap,
  HeadphonesIcon,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  });

  const handleContactUs = () => {
    window.open("https://api.whatsapp.com/send?phone=919884521264", "_blank");
  };

  const handleSubmitCallback = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the form
    alert("Thank you! We'll get back to you soon.");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* 3D Financial Symbol */}
              <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl shadow-2xl transform rotate-12 relative">
                <div className="absolute inset-4 bg-gradient-to-br from-green-300 to-green-500 rounded-2xl flex items-center justify-center">
                  <div className="text-white text-4xl font-bold">₹</div>
                </div>
              </div>
              
              {/* Floating Chart Icon */}
              <motion.div 
                className="absolute -left-8 top-4 bg-blue-600 text-white p-3 rounded-full shadow-lg animate-float"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <TrendingUp className="w-5 h-5" />
              </motion.div>
              
              {/* Floating Target Icon */}
              <motion.div 
                className="absolute -right-8 top-4 bg-white p-3 rounded-full shadow-lg animate-float-delay"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7 }}
              >
                <Target className="w-6 h-6 text-green-600" />
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
            Your Financial Status<br/>
            <span className="text-blue-600">Is Our Goal</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-testid="hero-description"
          >
            Elevate your business with customized financial strategies designed for growth. 
            Discover unparalleled success through expert guidance and innovative solutions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >

          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-lg font-semibold text-gray-600 mb-8" data-testid="stats-title">Our Achievements</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              data-testid="stat-wealth"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">₹1,00,000</div>
              <div className="text-gray-600">Wealth Created (INR)</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              data-testid="stat-tax"
            >
              <div className="text-4xl font-bold text-green-600 mb-2">₹2,90,900</div>
              <div className="text-gray-600">Tax Saved (INR)</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              data-testid="stat-clients"
            >
              <div className="text-4xl font-bold text-purple-600 mb-2">16</div>
              <div className="text-gray-600">Clients</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              data-testid="stat-professionals"
            >
              <div className="text-4xl font-bold text-orange-600 mb-2">25</div>
              <div className="text-gray-600">Dedicated Professionals</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="about-title">We Help You To Grow Your Business</h2>
            <p className="text-gray-600 max-w-4xl mx-auto mb-8">
              Elevate your business with customized financial strategies designed for growth. 
              Discover unparalleled success through the expert guidance and innovative solutions at Wealth Empires.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              data-testid="feature-available"
            >
              <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Available</h3>
              <p className="text-gray-600 leading-relaxed">
                Anytime assistance for all your financial needs and business queries.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              data-testid="feature-transparent"
            >
              <div className="w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No Hidden Charges</h3>
              <p className="text-gray-600 leading-relaxed">
                Transparent Pricing, Just Transparent. No surprises, just honest service.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              data-testid="feature-team"
            >
              <div className="w-12 h-12 bg-purple-500 text-white rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dedicated Team</h3>
              <p className="text-gray-600 leading-relaxed">
                A Team Devoted to Your Success with personalized attention and expert guidance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="services-title">Awesome Financial Services For Business</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Incorporation",
                icon: <Building className="w-6 h-6" />,
                description: "Streamline Your Business Success with Our Expert Incorporation Services. Complete business registration and legal compliance.",
                features: ["Business Registration", "Legal Compliance", "Ongoing Support"],
                bgColor: "from-blue-200 to-blue-300",
                iconColor: "text-blue-600"
              },
              {
                title: "Accounting & Bookkeeping",
                icon: <Calculator className="w-6 h-6" />,
                description: "Master Your Finances with Professional Accounting and Bookkeeping Services for precise financial management.",
                features: ["Financial Statements", "Payroll Services", "Tax Preparation"],
                bgColor: "from-green-200 to-green-300",
                iconColor: "text-green-600"
              },
              {
                title: "GST Compliance",
                icon: <Receipt className="w-6 h-6" />,
                description: "Ensure Seamless GST Compliance with Expert Guidance and Support for all GST regulations.",
                features: ["GST Registration", "GST Filing", "GST Audits"],
                bgColor: "from-purple-200 to-purple-300",
                iconColor: "text-purple-600"
              },
              {
                title: "Trademark & Licensing",
                icon: <Copyright className="w-6 h-6" />,
                description: "Secure Your Brand's Future with Comprehensive Trademark Protection and licensing services.",
                features: ["Registered Trademarks", "Licensed Services", "IP Protection"],
                bgColor: "from-orange-200 to-orange-300",
                iconColor: "text-orange-600"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.bgColor} rounded-2xl flex items-center justify-center mb-4`}>
                  <div className={service.iconColor}>{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="why-choose-us-title">Few Reasons Why People Are Choosing Us!</h2>
            <p className="text-gray-600 max-w-4xl mx-auto mb-8">
              At Wealth Empires, we stand out for our innovative approach to financial solutions and our unwavering dedication to client success. 
              Our expert team delivers customized strategies that drive meaningful growth and achieve exceptional results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              data-testid="feature-execution"
            >
              <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fast Executions</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Fast and precise execution to accelerate your financial success.
              </p>
              <Button 
                onClick={handleContactUs}
                className="bg-blue-600 hover:bg-blue-700 text-white"
                data-testid="button-contact-execution"
              >
                Contact Us
              </Button>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              data-testid="feature-personalized"
            >
              <div className="w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Personalized Services</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Targeted financial solutions designed for your company's growth.
              </p>
              <Button 
                onClick={handleContactUs}
                className="bg-green-600 hover:bg-green-700 text-white"
                data-testid="button-connect-personalized"
              >
                Connect Us
              </Button>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              data-testid="feature-security"
            >
              <div className="w-12 h-12 bg-purple-500 text-white rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Secure data handling practices for the protection of sensitive information.
              </p>
              <Button 
                onClick={handleContactUs}
                className="bg-purple-600 hover:bg-purple-700 text-white"
                data-testid="button-reach-security"
              >
                Reach Us
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}