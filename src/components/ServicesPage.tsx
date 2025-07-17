import React from 'react';
import { 
  Monitor, 
  Smartphone, 
  BarChart3, 
  Share2, 
  Search, 
  Palette, 
  ShoppingCart, 
  Cloud,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  Award,
  Shield
} from 'lucide-react';
import Footer from './Footer';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Monitor,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
      features: ["Responsive Design", "Modern Frameworks", "Performance Optimization", "Cross-browser Compatibility"],
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50"
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
      features: ["Native iOS & Android", "Cross-platform Solutions", "UI/UX Design", "App Store Optimization"],
      gradient: "from-purple-500 to-violet-600",
      bgGradient: "from-purple-50 to-violet-50"
    },
    {
      icon: BarChart3,
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns that drive traffic, increase engagement, and boost conversions.",
      features: ["Campaign Strategy", "Content Marketing", "Email Marketing", "Analytics & Reporting"],
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      icon: Share2,
      title: "Social Media Handling",
      description: "Complete social media management to build your brand presence and engage with your audience effectively.",
      features: ["Content Creation", "Community Management", "Social Strategy", "Influencer Partnerships"],
      gradient: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-50 to-rose-50"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Comprehensive SEO strategies to improve your search engine rankings and increase organic traffic.",
      features: ["Keyword Research", "On-page SEO", "Technical SEO", "Link Building"],
      gradient: "from-yellow-500 to-orange-600",
      bgGradient: "from-yellow-50 to-orange-50"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Intuitive and engaging user interface designs that captivate users and enhance their experience.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "We analyze your requirements and understand your business goals to create the perfect strategy.",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      step: "02",
      title: "Planning",
      description: "Detailed project planning with timelines, milestones, and resource allocation for optimal execution.",
      gradient: "from-purple-500 to-violet-600"
    },
    {
      step: "03",
      title: "Development",
      description: "Our expert team brings your vision to life using cutting-edge technologies and best practices.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      step: "04",
      title: "Launch",
      description: "Thorough testing, deployment, and ongoing support to ensure your project's continued success.",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-32 pb-20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-200 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-200 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-blue-600 shadow-sm mb-8">
              <Zap className="w-4 h-4 mr-2" />
              Our comprehensive services
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 leading-tight tracking-tight">
            Digital solutions
            <br />
            <span className="font-medium bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              that drive growth
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            From web development to digital marketing, we provide end-to-end solutions 
            to help your business thrive in the digital landscape.
          </p>
          
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium text-lg">
            Explore our services
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-sm font-medium text-blue-600 mb-8">
              <Target className="w-4 h-4 mr-2" />
              What we offer
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Comprehensive digital
              <span className="font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> solutions</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              We combine technical expertise with creative vision to deliver solutions 
              that exceed expectations and drive real business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`bg-gradient-to-br ${service.bgGradient} rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group relative overflow-hidden transform hover:scale-105`}>
                {/* Background decorative elements */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-white rounded-full"></div>
                </div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed font-light">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`bg-gradient-to-r ${service.gradient} text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-medium inline-flex items-center`}>
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-blue-600 shadow-sm mb-8">
              <Award className="w-4 h-4 mr-2" />
              Our proven process
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              How we deliver
              <span className="font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> exceptional results</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              We follow a proven methodology to ensure successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-r ${process.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110`}>
                  {process.step}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {process.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed font-light">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-50 rounded-full text-sm font-medium text-indigo-600 mb-8">
              <Award className="w-4 h-4 mr-2" />
              Why choose us
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Excellence in every
              <span className="font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> detail</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              We combine technical expertise with creative vision to deliver solutions 
              that exceed expectations and drive real business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized performance and rapid development cycles that get you to market faster.",
                gradient: "from-yellow-500 to-orange-500",
                bgGradient: "from-yellow-50 to-orange-50"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-level security measures protecting your data with advanced encryption.",
                gradient: "from-green-500 to-emerald-500",
                bgGradient: "from-green-50 to-emerald-50"
              },
              {
                icon: Target,
                title: "Results Focused",
                description: "Every solution is designed to drive measurable business growth and success.",
                gradient: "from-blue-500 to-indigo-500",
                bgGradient: "from-blue-50 to-indigo-50"
              },
              {
                icon: Award,
                title: "Award Winning",
                description: "Recognized excellence in digital innovation and creative design solutions.",
                gradient: "from-purple-500 to-pink-500",
                bgGradient: "from-purple-50 to-pink-50"
              }
            ].map((feature, index) => (
              <div key={index} className={`bg-gradient-to-br ${feature.bgGradient} rounded-3xl p-8 text-center group hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden`}>
                {/* Background decorative elements */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-white rounded-full"></div>
                </div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-8">
              <ArrowRight className="w-4 h-4 mr-2" />
              Ready to get started?
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
            Let's discuss your project
            <br />
            <span className="font-medium">and create something amazing</span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Our team is ready to bring your vision to life with innovative solutions 
            and creative excellence. Let's start your digital transformation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-blue-600 px-10 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium text-lg">
              Start your project
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 font-medium text-lg">
              View portfolio
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;