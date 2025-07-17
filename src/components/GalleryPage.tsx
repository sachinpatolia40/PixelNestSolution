import React, { useState } from 'react';
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
  List
} from 'lucide-react';
import Footer from './Footer';

const GalleryPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { id: 'all', label: 'All Projects', count: 24 },
    { id: 'web', label: 'Web Development', count: 8 },
    { id: 'mobile', label: 'Mobile Apps', count: 6 },
    { id: 'social', label: 'Social Media', count: 5 },
    { id: 'graphic', label: 'Graphic Design', count: 3 },
    { id: 'seo', label: 'SEO Projects', count: 2 }
  ];

  const projects = [
    // Web Development Projects
    {
      id: 1,
      title: "CADGE Manufacturing Website",
      category: "web",
      description: "Responsive manufacturing website with modern design and industrial aesthetics",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "Responsive", "Industrial"],
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      category: "web",
      description: "Modern e-commerce solution with advanced filtering and payment integration",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["E-commerce", "Payment", "Modern"],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      id: 3,
      title: "Corporate Dashboard",
      category: "web",
      description: "Clean and intuitive dashboard interface for business analytics",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Dashboard", "Analytics", "Corporate"],
      gradient: "from-green-500 to-emerald-600"
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "web",
      description: "Creative portfolio showcase with smooth animations and modern layout",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Portfolio", "Creative", "Animation"],
      gradient: "from-orange-500 to-red-600"
    },

    // Mobile App Projects
    {
      id: 5,
      title: "Task Management App",
      category: "mobile",
      description: "Intuitive mobile app for team collaboration and task tracking",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["iOS", "Android", "Productivity"],
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      category: "mobile",
      description: "Health and fitness app with workout tracking and nutrition planning",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Health", "Fitness", "Tracking"],
      gradient: "from-green-500 to-teal-600"
    },
    {
      id: 7,
      title: "Food Delivery App",
      category: "mobile",
      description: "User-friendly food ordering app with real-time tracking",
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Food", "Delivery", "Real-time"],
      gradient: "from-red-500 to-pink-600"
    },

    // Social Media Projects
    {
      id: 8,
      title: "Educational Content Series",
      category: "social",
      description: "Engaging educational posts for graphic design services promotion",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Education", "Branding", "Engagement"],
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      id: 9,
      title: "Restaurant Social Campaign",
      category: "social",
      description: "Appetizing food photography and promotional designs for restaurant chain",
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Food", "Photography", "Campaign"],
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: 10,
      title: "Tech Company Hiring",
      category: "social",
      description: "Professional recruitment posts for technology academy",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Recruitment", "Tech", "Professional"],
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      id: 11,
      title: "Festival Promotion",
      category: "social",
      description: "Colorful and vibrant designs for festival celebrations and offers",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Festival", "Celebration", "Offers"],
      gradient: "from-purple-500 to-pink-600"
    },

    // Graphic Design Projects
    {
      id: 12,
      title: "Brand Identity Package",
      category: "graphic",
      description: "Complete brand identity design including logo, colors, and guidelines",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Branding", "Logo", "Identity"],
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      id: 13,
      title: "Marketing Brochure",
      category: "graphic",
      description: "Professional marketing materials for corporate communications",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Print", "Marketing", "Corporate"],
      gradient: "from-green-500 to-blue-600"
    },

    // SEO Projects
    {
      id: 14,
      title: "Local Business SEO",
      category: "seo",
      description: "Complete SEO optimization for local restaurant chain",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Local SEO", "Restaurant", "Rankings"],
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      id: 15,
      title: "E-commerce SEO Campaign",
      category: "seo",
      description: "Comprehensive SEO strategy for online retail platform",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["E-commerce", "SEO", "Traffic"],
      gradient: "from-blue-500 to-purple-600"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web': return Monitor;
      case 'mobile': return Smartphone;
      case 'social': return Share2;
      case 'graphic': return PenTool;
      case 'seo': return Search;
      default: return Grid3X3;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-24 pb-20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-200 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-200 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-blue-600 shadow-sm mb-8">
              <Eye className="w-4 h-4 mr-2" />
              Our creative portfolio
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 leading-tight tracking-tight">
            Creative
            <br />
            <span className="font-medium bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              showcase
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            Explore our diverse portfolio of digital solutions, from stunning websites 
            to engaging social media designs that drive results.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "25+", label: "Happy Clients" },
              { number: "5", label: "Service Categories" },
              { number: "100%", label: "Client Satisfaction" }
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

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const Icon = getCategoryIcon(category.id);
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      activeFilter === category.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {category.label}
                    <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                      activeFilter === category.id
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-full transition-colors ${
                  viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-full transition-colors ${
                  viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredProjects.map((project) => (
              <div key={project.id} className="group">
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white rounded-full text-sm font-medium`}>
                        {categories.find(cat => cat.id === project.category)?.label}
                      </span>
                      <div className="flex items-center text-gray-400">
                        <Eye className="w-4 h-4 mr-1" />
                        <span className="text-sm">View</span>
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
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <button className={`w-full bg-gradient-to-r ${project.gradient} text-white py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-medium`}>
                      View Project Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {filteredProjects.length > 0 && (
            <div className="text-center mt-16">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium text-lg">
                Load More Projects
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
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
            Ready to create your
            <br />
            <span className="font-medium">next project?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Let's collaborate to bring your vision to life with our creative expertise 
            and technical excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-blue-600 px-10 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium text-lg">
              Start your project
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 font-medium text-lg">
              Get a quote
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GalleryPage;