import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Monitor, 
  Smartphone, 
  Share2, 
  PenTool, 
  Search,
  Eye,
  ExternalLink,
  Filter,
  Grid3X3,
  List,
  Star,
  Award,
  Zap,
  Heart,
  ArrowRight,
  Play,
  Image as ImageIcon,
  Download,
  FileText,
  BarChart3,
  Users,
  Palette,
  Shield
} from 'lucide-react';
import Footer from './Footer';

const GalleryPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadCatalog = async () => {
    setIsDownloading(true);
    
    try {
      // Simulate PDF generation/download process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Create a mock PDF download
      const link = document.createElement('a');
      link.href = '#'; // In real implementation, this would be your PDF URL
      link.download = 'PixelNest-Solutions-Portfolio-Catalog-2025.pdf';
      
      // For demo purposes, show success message
      alert('🎉 Catalog download started! In a real implementation, this would download a comprehensive PDF catalog of all our projects.');
      
      // In real implementation, you would:
      // 1. Generate PDF server-side or use a service like jsPDF
      // 2. Include all project images, descriptions, case studies
      // 3. Add company branding and professional layout
      // 4. Include client testimonials and metrics
      
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  const categories = [
    { id: 'all', label: 'All Projects', count: 24, icon: Grid3X3, gradient: 'from-blue-500 to-indigo-600' },
    { id: 'web', label: 'Web Development', count: 8, icon: Monitor, gradient: 'from-blue-500 to-cyan-600' },
    { id: 'mobile', label: 'Mobile Apps', count: 6, icon: Smartphone, gradient: 'from-purple-500 to-violet-600' },
    { id: 'social', label: 'Social Media', count: 5, icon: Share2, gradient: 'from-pink-500 to-rose-600' },
    { id: 'graphic', label: 'Graphic Design', count: 3, icon: PenTool, gradient: 'from-orange-500 to-red-600' },
    { id: 'seo', label: 'SEO Projects', count: 2, icon: Search, gradient: 'from-green-500 to-emerald-600' }
  ];

  const projects = [
    // Web Development Projects
    {
      id: 1,
      title: "CADGE Manufacturing Website",
      category: "web",
      description: "Modern manufacturing website with industrial design, responsive layout, and advanced product showcase features.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "Responsive", "Industrial", "Modern"],
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      rating: 5,
      views: "2.5k",
      featured: true
    },
    {
      id: 2,
      title: "E-commerce Platform",
      category: "web",
      description: "Comprehensive e-commerce solution with advanced filtering, payment integration, and inventory management.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["E-commerce", "Payment", "Modern", "Scalable"],
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      rating: 5,
      views: "3.2k",
      featured: false
    },
    {
      id: 3,
      title: "Corporate Dashboard",
      category: "web",
      description: "Clean and intuitive dashboard interface for business analytics with real-time data visualization.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Dashboard", "Analytics", "Corporate", "Real-time"],
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
      rating: 4,
      views: "1.8k",
      featured: false
    },
    {
      id: 4,
      title: "Creative Portfolio Website",
      category: "web",
      description: "Stunning portfolio showcase with smooth animations, modern layout, and interactive elements.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Portfolio", "Creative", "Animation", "Interactive"],
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
      rating: 5,
      views: "4.1k",
      featured: true
    },

    // Mobile App Projects
    {
      id: 5,
      title: "Task Management App",
      category: "mobile",
      description: "Intuitive mobile app for team collaboration, task tracking, and productivity enhancement.",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["iOS", "Android", "Productivity", "Collaboration"],
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
      rating: 5,
      views: "2.9k",
      featured: false
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      category: "mobile",
      description: "Comprehensive health and fitness app with workout tracking, nutrition planning, and progress monitoring.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Health", "Fitness", "Tracking", "Wellness"],
      gradient: "from-green-500 to-teal-600",
      bgGradient: "from-green-50 to-teal-50",
      rating: 4,
      views: "3.7k",
      featured: true
    },
    {
      id: 7,
      title: "Food Delivery App",
      category: "mobile",
      description: "User-friendly food ordering app with real-time tracking, payment integration, and restaurant management.",
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Food", "Delivery", "Real-time", "Payment"],
      gradient: "from-red-500 to-pink-600",
      bgGradient: "from-red-50 to-pink-50",
      rating: 5,
      views: "5.2k",
      featured: true
    },

    // Social Media Projects
    {
      id: 8,
      title: "Educational Content Series",
      category: "social",
      description: "Engaging educational posts for graphic design services promotion with consistent branding and messaging.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Education", "Branding", "Engagement", "Series"],
      gradient: "from-yellow-500 to-orange-600",
      bgGradient: "from-yellow-50 to-orange-50",
      rating: 4,
      views: "1.5k",
      featured: false
    },
    {
      id: 9,
      title: "Restaurant Social Campaign",
      category: "social",
      description: "Appetizing food photography and promotional designs for restaurant chain with seasonal campaigns.",
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Food", "Photography", "Campaign", "Seasonal"],
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
      rating: 5,
      views: "2.8k",
      featured: false
    },
    {
      id: 10,
      title: "Tech Company Hiring",
      category: "social",
      description: "Professional recruitment posts for technology academy with modern design and clear messaging.",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Recruitment", "Tech", "Professional", "Modern"],
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      rating: 4,
      views: "1.9k",
      featured: false
    },
    {
      id: 11,
      title: "Festival Promotion Campaign",
      category: "social",
      description: "Colorful and vibrant designs for festival celebrations, special offers, and community engagement.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Festival", "Celebration", "Offers", "Community"],
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      rating: 5,
      views: "3.4k",
      featured: true
    },

    // Graphic Design Projects
    {
      id: 12,
      title: "Complete Brand Identity",
      category: "graphic",
      description: "Comprehensive brand identity design including logo, color palette, typography, and brand guidelines.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Branding", "Logo", "Identity", "Guidelines"],
      gradient: "from-indigo-500 to-purple-600",
      bgGradient: "from-indigo-50 to-purple-50",
      rating: 5,
      views: "4.6k",
      featured: true
    },
    {
      id: 13,
      title: "Marketing Brochure Design",
      category: "graphic",
      description: "Professional marketing materials for corporate communications with modern layout and compelling visuals.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Print", "Marketing", "Corporate", "Professional"],
      gradient: "from-green-500 to-blue-600",
      bgGradient: "from-green-50 to-blue-50",
      rating: 4,
      views: "2.1k",
      featured: false
    },

    // SEO Projects
    {
      id: 14,
      title: "Local Business SEO Success",
      category: "seo",
      description: "Complete SEO optimization for local restaurant chain resulting in 300% increase in organic traffic.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Local SEO", "Restaurant", "Rankings", "Traffic"],
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
      rating: 5,
      views: "1.7k",
      featured: false
    },
    {
      id: 15,
      title: "E-commerce SEO Campaign",
      category: "seo",
      description: "Comprehensive SEO strategy for online retail platform with keyword optimization and content strategy.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["E-commerce", "SEO", "Traffic", "Strategy"],
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-50 to-purple-50",
      rating: 4,
      views: "2.3k",
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-24 pb-20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-200 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-200 rounded-full blur-2xl"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-pink-200 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-blue-600 shadow-sm mb-8">
              <ImageIcon className="w-4 h-4 mr-2" />
              Our creative showcase
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 leading-tight tracking-tight">
            Portfolio
            <br />
            <span className="font-medium bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              excellence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            Discover our diverse collection of digital masterpieces, from stunning websites 
            to engaging social media campaigns that drive exceptional results.
          </p>
          
          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "150+", label: "Projects Delivered", icon: Award },
              { number: "50+", label: "Happy Clients", icon: Heart },
              { number: "5", label: "Service Categories", icon: Grid3X3 },
              { number: "99%", label: "Client Satisfaction", icon: Star }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
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

      {/* Featured Projects Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-orange-600 shadow-sm mb-8">
              <Star className="w-4 h-4 mr-2" />
              Featured projects
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Our best
              <span className="font-medium bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"> work</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Handpicked projects that showcase our expertise and creativity across different industries and technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.slice(0, 6).map((project) => (
              <div key={project.id} className="group relative">
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative">
                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center shadow-lg">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      FEATURED
                    </div>
                  </div>

                  {/* Project Image */}
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Overlay Actions */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-3">
                        <Link 
                         to={`${import.meta.env.BASE_URL}/project/${project.id}`}
                          className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-colors shadow-lg"
                        >
                          <Eye className="w-5 h-5" />
                        </Link>
                        <button className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-colors shadow-lg">
                          <ExternalLink className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Rating & Views */}
                    <div className="absolute bottom-4 right-4 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-xs font-medium text-gray-700">{project.rating}</span>
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                        <Eye className="w-3 h-3 text-gray-500" />
                        <span className="text-xs font-medium text-gray-700">{project.views}</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white rounded-full text-sm font-medium shadow-sm`}>
                        {categories.find(cat => cat.id === project.category)?.label}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed font-light text-sm">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-xs font-medium">
                          +{project.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Action Button */}
                    <Link 
                      to={`${import.meta.env.BASE_URL}/project/${project.id}`}
                      className={`w-full bg-gradient-to-r ${project.gradient} text-white py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-medium text-sm flex items-center justify-center`}
                    >
                      View Project Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PDF Catalog Download Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-2xl"></div>
            </div>

            <div className="relative z-10 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 rounded-3xl p-12 md:p-16 shadow-2xl border border-white/50">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-sm font-medium text-blue-700 shadow-sm mb-8">
                    <Download className="w-4 h-4 mr-2" />
                    Complete portfolio catalog
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                    Download our
                    <br />
                    <span className="font-medium bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                      complete catalog
                    </span>
                  </h2>
                  
                  <p className="text-xl text-gray-600 mb-8 font-light leading-relaxed">
                    Get instant access to our comprehensive portfolio catalog featuring all our projects, 
                    case studies, and detailed insights into our creative process.
                  </p>

                  {/* Features List */}
                  <div className="space-y-4 mb-10">
                    {[
                      { icon: FileText, text: "150+ Project showcases with detailed descriptions" },
                      { icon: BarChart3, text: "Performance metrics and success stories" },
                      { icon: Users, text: "Client testimonials and case studies" },
                      { icon: Palette, text: "Behind-the-scenes creative process insights" }
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center group">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Download Button */}
                  <button 
                    onClick={handleDownloadCatalog}
                    disabled={isDownloading}
                    className={`group relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white px-10 py-5 rounded-2xl font-medium text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                      isDownloading ? 'cursor-not-allowed opacity-75' : 'hover:from-blue-700 hover:via-indigo-700 hover:to-purple-800'
                    }`}
                  >
                    {/* Button background animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    <div className="relative flex items-center justify-center">
                      {isDownloading ? (
                        <>
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                          Preparing Download...
                        </>
                      ) : (
                        <>
                          <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                          Download Free Catalog
                          <span className="ml-3 px-3 py-1 bg-white/20 rounded-full text-sm font-bold">
                            PDF
                          </span>
                        </>
                      )}
                    </div>
                  </button>

                  {/* Download Info */}
                  <div className="flex items-center mt-6 text-sm text-gray-600">
                    <Shield className="w-4 h-4 mr-2 text-green-500" />
                    <span>Instant download • No email required • 15.2 MB PDF</span>
                  </div>
                </div>

                {/* Right Visual */}
                <div className="relative">
                  {/* PDF Preview Mockup */}
                  <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                      {/* PDF Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                          <img 
                            src="/PIXELNEST SOLUTION LOGO (1).png" 
                            alt="PixelNest Solutions" 
                            className="h-8 w-auto mr-3"
                          />
                          <span className="font-bold text-gray-900">Portfolio Catalog 2025</span>
                        </div>
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                          150+ PROJECTS
                        </div>
                      </div>

                      {/* PDF Content Preview */}
                      <div className="space-y-4">
                        {/* Sample project thumbnails */}
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
                            "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400",
                            "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400",
                            "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=400"
                          ].map((img, index) => (
                            <div key={index} className="relative group">
                              <img 
                                src={img} 
                                alt={`Project ${index + 1}`}
                                className="w-full h-20 object-cover rounded-lg shadow-sm group-hover:shadow-md transition-shadow"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                          ))}
                        </div>

                        {/* Sample text content */}
                        <div className="space-y-2">
                          <div className="h-3 bg-gray-200 rounded-full"></div>
                          <div className="h-3 bg-gray-200 rounded-full w-4/5"></div>
                          <div className="h-3 bg-gray-200 rounded-full w-3/5"></div>
                        </div>

                        {/* Sample stats */}
                        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                          <div className="text-center">
                            <div className="text-lg font-bold text-blue-600">150+</div>
                            <div className="text-xs text-gray-500">Projects</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-green-600">50+</div>
                            <div className="text-xs text-gray-500">Clients</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-purple-600">5+</div>
                            <div className="text-xs text-gray-500">Years</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg animate-pulse"></div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full shadow-lg animate-bounce"></div>
                  </div>

                  {/* Download stats */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                    <div className="bg-white rounded-2xl shadow-xl px-6 py-3 border border-gray-200">
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center text-green-600">
                          <Download className="w-4 h-4 mr-1" />
                          <span className="font-semibold">2,847</span>
                        </div>
                        <div className="text-gray-400">downloads this month</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-sm font-medium text-blue-600 mb-6">
              <Filter className="w-4 h-4 mr-2" />
              Browse by category
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-tight">
              Explore our
              <span className="font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> complete portfolio</span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Enhanced Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`inline-flex items-center px-6 py-4 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 ${
                      activeFilter === category.id
                        ? `bg-gradient-to-r ${category.gradient} text-white shadow-xl`
                        : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-200'
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-2" />
                    {category.label}
                    <span className={`ml-3 px-2 py-1 rounded-full text-xs font-bold ${
                      activeFilter === category.id
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Enhanced View Mode Toggle */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-2xl p-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  viewMode === 'grid' 
                    ? 'bg-white shadow-md text-blue-600' 
                    : 'hover:bg-gray-200 text-gray-600'
                }`}
              >
                <Grid3X3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  viewMode === 'list' 
                    ? 'bg-white shadow-md text-blue-600' 
                    : 'hover:bg-gray-200 text-gray-600'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Results Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                {activeFilter === 'all' ? 'All Projects' : categories.find(cat => cat.id === activeFilter)?.label}
              </h3>
              <p className="text-gray-600 mt-1">
                Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
              </p>
            </div>
          </div>

          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredProjects.map((project) => (
              <div key={project.id} className="group">
                <div className={`bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                  viewMode === 'list' ? 'flex' : ''
                }`}>
                  {/* Project Image */}
                  <div className={`relative overflow-hidden ${
                    viewMode === 'list' ? 'w-80 flex-shrink-0' : 'h-64'
                  }`}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center shadow-lg">
                          <Star className="w-3 h-3 mr-1 fill-current" />
                          FEATURED
                        </div>
                      </div>
                    )}

                    {/* Overlay Actions */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-3">
                        <button className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-colors shadow-lg">
                          <Eye className="w-5 h-5" />
                        </button>
                        <button className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-colors shadow-lg">
                          <ExternalLink className="w-5 h-5" />
                        </button>
                        <button className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-colors shadow-lg">
                          <Play className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Rating & Views */}
                    <div className="absolute bottom-4 right-4 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-xs font-medium text-gray-700">{project.rating}</span>
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                        <Eye className="w-3 h-3 text-gray-500" />
                        <span className="text-xs font-medium text-gray-700">{project.views}</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-8 flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white rounded-full text-sm font-medium shadow-sm`}>
                        {categories.find(cat => cat.id === project.category)?.label}
                      </span>
                      <div className="flex items-center space-x-2">
                        <div className="flex">
                          {[...Array(project.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed font-light">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <Link 
                     to={`${import.meta.env.BASE_URL}/project/${project.id}`}
                      className={`w-full bg-gradient-to-r ${project.gradient} text-white py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-medium flex items-center justify-center`}
                    >
                      View Project Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {filteredProjects.length > 0 && (
            <div className="text-center mt-16">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-12 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium text-lg inline-flex items-center">
                Load More Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          )}
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
              <Zap className="w-4 h-4 mr-2" />
              Ready to create something amazing?
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
            Let's bring your vision
            <br />
            <span className="font-medium">to life together</span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Join our growing list of satisfied clients and let us create something 
            extraordinary that showcases your brand and drives real results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to={`${import.meta.env.BASE_URL}/contact`}
              className="bg-white text-blue-600 px-10 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium text-lg inline-flex items-center justify-center"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to={`${import.meta.env.BASE_URL}/contact`}
              className="border-2 border-white text-white px-10 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 font-medium text-lg inline-flex items-center justify-center"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GalleryPage;