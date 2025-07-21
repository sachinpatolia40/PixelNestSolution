import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  Award, 
  Lightbulb,
  Heart,
  Zap,
  Shield,
  Globe,
  CheckCircle,
  ArrowRight,
  Quote,
  Star
} from 'lucide-react';
import Footer from './Footer';

const AboutPage: React.FC = () => {
  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "We pour our heart into every project, ensuring exceptional results that exceed expectations.",
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50"
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and creative solutions to stay ahead of the curve.",
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50"
    },
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "Our clients trust us to deliver on time, every time, with transparent communication throughout.",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "We bring international best practices and diverse perspectives to every project we undertake.",
      gradient: "from-blue-500 to-indigo-500",
      bgGradient: "from-blue-50 to-indigo-50"
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "SJ",
      description: "Visionary leader with 10+ years in digital transformation and business strategy.",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "MC",
      description: "Technical architect specializing in scalable solutions and emerging technologies.",
      gradient: "from-purple-500 to-violet-600"
    },
    {
      name: "Emily Rodriguez",
      role: "Creative Director",
      image: "ER",
      description: "Award-winning designer with expertise in user experience and brand identity.",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      name: "David Thompson",
      role: "Lead Developer",
      image: "DT",
      description: "Full-stack developer passionate about clean code and innovative solutions.",
      gradient: "from-green-500 to-emerald-600"
    }
  ];

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Started with a vision to transform digital experiences",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      year: "2020",
      title: "First Major Client",
      description: "Secured partnership with Fortune 500 company",
      gradient: "from-purple-500 to-violet-500"
    },
    {
      year: "2022",
      title: "Team Expansion",
      description: "Grew to 25+ talented professionals",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      year: "2024",
      title: "Global Recognition",
      description: "Won 'Digital Innovation Award' for outstanding work",
      gradient: "from-orange-500 to-red-500"
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
              <Users className="w-4 h-4 mr-2" />
              About our company
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 leading-tight tracking-tight">
            Crafting digital
            <br />
            <span className="font-medium bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              excellence together
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            We're a passionate team of digital innovators, transforming ideas into 
            extraordinary experiences that drive meaningful business growth.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
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

      {/* Our Story Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-blue-600 shadow-sm mb-8">
                <Target className="w-4 h-4 mr-2" />
                Our story
              </div>
              
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 tracking-tight">
                Building the future of
                <span className="font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> digital experiences</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed font-light">
                Founded in 2019, PixelNest Solutions began with a simple yet powerful vision: 
                to bridge the gap between innovative technology and exceptional user experiences. 
                What started as a small team of passionate developers has grown into a full-service 
                digital agency.
              </p>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
                Today, we're proud to serve clients across the globe, from startups to Fortune 500 
                companies, helping them navigate the digital landscape and achieve their business goals 
                through cutting-edge solutions and creative excellence.
              </p>
              
              <Link
              to={`${import.meta.env.BASE_URL}/services`}  
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium inline-flex items-center"
              >
                Learn more about our journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-10 relative overflow-hidden shadow-xl">
                {/* Background decorative elements */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-6 right-6 w-20 h-20 bg-blue-300 rounded-full"></div>
                  <div className="absolute bottom-6 left-6 w-16 h-16 bg-indigo-300 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-purple-300 rounded-full"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Quote className="w-8 h-8 text-white" />
                  </div>
                  
                  <blockquote className="text-xl text-gray-700 italic mb-6 leading-relaxed font-light">
                    "Our mission is to empower businesses with digital solutions that not only 
                    meet today's needs but anticipate tomorrow's opportunities."
                  </blockquote>
                  
                  <cite className="text-blue-600 font-semibold text-lg">- Sarah Johnson, CEO & Founder</cite>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-sm font-medium text-blue-600 mb-8">
              <Heart className="w-4 h-4 mr-2" />
              Our core values
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              What drives us
              <span className="font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> forward</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              These core values guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className={`bg-gradient-to-br ${value.bgGradient} rounded-3xl p-10 hover:shadow-xl transition-all duration-300 group relative overflow-hidden`}>
                {/* Background decorative elements */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-6 right-6 w-16 h-16 bg-white rounded-full"></div>
                  <div className="absolute bottom-6 left-6 w-12 h-12 bg-white rounded-full"></div>
                </div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed font-light">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-blue-600 shadow-sm mb-8">
              <Award className="w-4 h-4 mr-2" />
              Our journey
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Key milestones that
              <span className="font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> shaped our growth</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              From humble beginnings to industry recognition, here's how we've evolved over the years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-r ${milestone.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110`}>
                  <span className="text-white font-bold text-lg">{milestone.year}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {milestone.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed font-light">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-50 rounded-full text-sm font-medium text-indigo-600 mb-8">
              <Users className="w-4 h-4 mr-2" />
              Meet our team
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              The talented minds behind
              <span className="font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> PixelNest Solutions</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Each team member brings unique expertise and passion to every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className={`w-32 h-32 bg-gradient-to-br ${member.gradient} rounded-3xl flex items-center justify-center mx-auto text-white text-2xl font-bold shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110`}>
                    {member.image}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                
                <p className="text-blue-600 font-medium mb-4">
                  {member.role}
                </p>
                
                <p className="text-gray-600 text-sm leading-relaxed font-light">
                  {member.description}
                </p>
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
              Ready to work with us?
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
            Let's collaborate to bring
            <br />
            <span className="font-medium">your vision to life</span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Our team is excited to hear about your project and help you achieve your goals 
            with innovative solutions and creative excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
            to={`${import.meta.env.BASE_URL}/contact`}
              className="bg-white text-blue-600 px-10 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium text-lg inline-flex items-center justify-center"
            >
              Start your project
            </Link>
            <Link 
              to={`${import.meta.env.BASE_URL}/gallary`}  
              className="border-2 border-white text-white px-10 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 font-medium text-lg inline-flex items-center justify-center"
            >
              View our work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;