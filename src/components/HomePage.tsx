import React from 'react';
import { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Cpu, 
  Zap, 
  Shield, 
  Clock, 
  Monitor, 
  Palette, 
  BarChart3, 
  Smartphone,
  ArrowRight,
  Star,
  Search,
  Share2,
  PenTool,
  Users,
  Award,
  Globe,
  Heart
} from 'lucide-react';
import Footer from './Footer';

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselItems = [
    {
      icon: Share2,
      title: "Social Media Post Designing",
      description: "Eye-catching social media designs that boost engagement and build your brand presence across all platforms.",
      features: ["Instagram Posts", "Facebook Covers", "LinkedIn Graphics", "Story Templates"],
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50"
    },
    {
      icon: Monitor,
      title: "Website Development",
      description: "Custom websites that deliver exceptional user experiences with modern design and cutting-edge technology.",
      features: ["Responsive Design", "E-commerce", "CMS Integration", "Performance Optimized"],
      gradient: "from-blue-500 to-indigo-500",
      bgGradient: "from-blue-50 to-indigo-50"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Comprehensive SEO strategies that improve your search rankings and drive organic traffic to your business.",
      features: ["Keyword Research", "On-page SEO", "Technical SEO", "Analytics Tracking"],
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps that engage users and deliver seamless experiences on any device.",
      features: ["iOS & Android", "React Native", "Flutter", "App Store Ready"],
      gradient: "from-purple-500 to-violet-500",
      bgGradient: "from-purple-50 to-violet-50"
    },
    {
      icon: PenTool,
      title: "Graphic Designing",
      description: "Creative visual designs that communicate your brand message effectively and leave lasting impressions.",
      features: ["Logo Design", "Brand Identity", "Print Design", "Digital Graphics"],
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [carouselItems.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-200 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-200 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-blue-600 shadow-sm mb-8">
              <Award className="w-4 h-4 mr-2" />
              Award-winning digital solutions
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 leading-tight tracking-tight">
            Digital experiences
            <br />
            <span className="font-medium bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              that inspire growth
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            We craft exceptional digital solutions that transform ideas into 
            powerful experiences, driving measurable growth for forward-thinking businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium text-lg">
              Start your project
            </button>
            <button className="text-gray-700 hover:text-blue-600 font-medium inline-flex items-center group text-lg">
              View our portfolio
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { number: "150+", label: "Projects Delivered" },
              { number: "50+", label: "Happy Clients" },
              { number: "5+", label: "Years Experience" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Carousel Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-sm font-medium text-blue-600 mb-6">
              <Palette className="w-4 h-4 mr-2" />
              Our core services
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Comprehensive digital solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              From creative design to technical development, we provide end-to-end solutions 
              that elevate your brand and drive meaningful results.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {carouselItems.map((item, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className={`bg-gradient-to-br ${item.bgGradient} p-12 md:p-20 text-center relative overflow-hidden min-h-[500px] flex flex-col justify-center`}>
                      {/* Background decorative elements */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 left-10 w-24 h-24 bg-white rounded-full"></div>
                        <div className="absolute bottom-10 right-10 w-20 h-20 bg-white rounded-full"></div>
                        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white rounded-full"></div>
                        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-white rounded-full"></div>
                      </div>
                      
                      <div className="relative z-10">
                        {/* Icon */}
                        <div className={`w-24 h-24 bg-gradient-to-r ${item.gradient} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl`}>
                          <item.icon className="w-12 h-12 text-white" />
                        </div>
                        
                        {/* Content */}
                        <h3 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                          {item.title}
                        </h3>
                        
                        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                          {item.description}
                        </p>
                        
                        {/* Features */}
                        <div className="flex flex-wrap justify-center gap-3 mb-10">
                          {item.features.map((feature, featureIndex) => (
                            <span 
                              key={featureIndex} 
                              className="px-6 py-3 bg-white/90 backdrop-blur-sm text-gray-700 rounded-full text-sm font-medium shadow-sm"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                        
                        {/* CTA Button */}
                        <button className={`bg-gradient-to-r ${item.gradient} text-white px-10 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium text-lg`}>
                          Explore Service
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-3">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-blue-600 w-10' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Progress Bar */}
            <div className="mt-6 max-w-xs mx-auto">
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 h-1 rounded-full transition-all duration-300"
                  style={{ width: `${((currentSlide + 1) / carouselItems.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-blue-600 shadow-sm mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Why choose us
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Excellence in every detail
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              We combine technical expertise with creative vision to deliver 
              solutions that exceed expectations and drive real business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Cpu,
                title: "Advanced Technology",
                description: "Cutting-edge solutions built with the latest technologies and industry best practices for optimal performance.",
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-50 to-cyan-50"
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized performance and rapid development cycles that get you to market faster than the competition.",
                gradient: "from-yellow-500 to-orange-500",
                bgGradient: "from-yellow-50 to-orange-50"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-level security measures protecting your data and your customers' privacy with advanced encryption.",
                gradient: "from-green-500 to-emerald-500",
                bgGradient: "from-green-50 to-emerald-50"
              },
              {
                icon: Clock,
                title: "24/7 Support",
                description: "Round-the-clock support and monitoring to ensure your success never stops, wherever you are.",
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

      {/* Featured Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-50 rounded-full text-sm font-medium text-indigo-600 mb-6">
              <Globe className="w-4 h-4 mr-2" />
              Our expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Comprehensive solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              From concept to launch, we provide end-to-end digital solutions 
              tailored to your unique business needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Monitor,
                title: "Web Development",
                description: "Custom websites and applications that deliver exceptional user experiences across all devices and platforms.",
                features: ["Responsive Design", "Performance Optimized", "SEO Ready", "CMS Integration"],
                gradient: "from-blue-500 to-indigo-500",
                bgGradient: "from-blue-50 to-indigo-50"
              },
              {
                icon: Smartphone,
                title: "Mobile Apps",
                description: "Native and cross-platform mobile applications that engage users and drive sustainable business growth.",
                features: ["iOS & Android", "Cross-platform", "App Store Ready", "Push Notifications"],
                gradient: "from-purple-500 to-violet-500",
                bgGradient: "from-purple-50 to-violet-50"
              },
              {
                icon: Palette,
                title: "UI/UX Design",
                description: "Intuitive interfaces and seamless user experiences that captivate visitors and convert them into customers.",
                features: ["User Research", "Prototyping", "Design Systems", "Usability Testing"],
                gradient: "from-pink-500 to-rose-500",
                bgGradient: "from-pink-50 to-rose-50"
              },
              {
                icon: BarChart3,
                title: "Digital Marketing",
                description: "Data-driven marketing strategies that amplify your brand reach and accelerate sustainable business growth.",
                features: ["SEO/SEM", "Social Media", "Content Strategy", "Analytics"],
                gradient: "from-green-500 to-emerald-500",
                bgGradient: "from-green-50 to-emerald-50"
              }
            ].map((service, index) => (
              <div key={index} className={`bg-gradient-to-br ${service.bgGradient} rounded-3xl p-10 hover:shadow-xl transition-all duration-300 group relative overflow-hidden`}>
                {/* Background decorative elements */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-6 right-6 w-16 h-16 bg-white rounded-full"></div>
                  <div className="absolute bottom-6 left-6 w-12 h-12 bg-white rounded-full"></div>
                </div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed font-light">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="px-3 py-1 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full text-sm font-medium shadow-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-indigo-600 shadow-sm mb-6">
              <Users className="w-4 h-4 mr-2" />
              Client testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Trusted by innovators
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Join hundreds of satisfied clients who have transformed their 
              businesses with our innovative solutions and exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "PixelNest transformed our digital presence completely. Their attention to detail and innovative approach exceeded all our expectations. The results speak for themselves.",
                author: "Sarah Johnson",
                role: "CEO, TechVision",
                rating: 5,
                gradient: "from-blue-500 to-indigo-500",
                bgGradient: "from-blue-50 to-indigo-50"
              },
              {
                quote: "Working with PixelNest was a game-changer for our business. Their strategic insights and technical expertise delivered remarkable results that continue to drive our growth.",
                author: "Michael Chen",
                role: "Marketing Director, Innovate Inc.",
                rating: 5,
                gradient: "from-purple-500 to-pink-500",
                bgGradient: "from-purple-50 to-pink-50"
              }
            ].map((testimonial, index) => (
              <div key={index} className={`bg-gradient-to-br ${testimonial.bgGradient} rounded-3xl p-10 relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}>
                {/* Background decorative elements */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-6 right-6 w-20 h-20 bg-white rounded-full"></div>
                  <div className="absolute bottom-6 left-6 w-16 h-16 bg-white rounded-full"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg text-gray-700 mb-8 leading-relaxed font-light italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <div className={`w-14 h-14 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center mr-4 shadow-lg`}>
                      <span className="text-white font-semibold text-lg">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-gray-600 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
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
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-white rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-8">
              <ArrowRight className="w-4 h-4 mr-2" />
              Ready to get started?
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
            Let's create something
            <br />
            <span className="font-medium">extraordinary together</span>
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Transform your vision into reality with our expert team. We're ready to 
            bring your ideas to life and drive your business forward.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-blue-600 px-10 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium text-lg">
              Start your project
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 font-medium text-lg">
              Schedule a consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;