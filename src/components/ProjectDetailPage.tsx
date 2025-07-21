import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft,
  Calendar,
  User,
  Tag,
  ExternalLink,
  Github,
  Star,
  Eye,
  Heart,
  Share2,
  Download,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Monitor,
  Smartphone,
  PenTool,
  Search,
  BarChart3,
  Zap,
  Award,
  CheckCircle,
  Clock,
  Target,
  Users,
  Globe,
  Code,
  Layers,
  Lightbulb,
  TrendingUp
} from 'lucide-react';
import Footer from './Footer';

interface ProjectDetail {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  images: string[];
  tags: string[];
  client: string;
  duration: string;
  completedDate: string;
  teamSize: number;
  technologies: string[];
  challenges: string[];
  solutions: string[];
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  liveUrl?: string;
  githubUrl?: string;
  gradient: string;
  bgGradient: string;
  rating: number;
  views: string;
  likes: number;
}

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  // Comprehensive project data for all projects
  const projectsData: Record<string, ProjectDetail> = {
    '1': {
      id: 1,
      title: "CADGE Manufacturing Website",
      category: "web",
      description: "Modern manufacturing website with industrial design, responsive layout, and advanced product showcase features.",
      longDescription: "A comprehensive digital transformation project for CADGE Manufacturing, featuring a complete website redesign with modern industrial aesthetics, advanced product catalog, and integrated customer portal. The project focused on creating a professional online presence that reflects the company's expertise in precision manufacturing while providing an intuitive user experience for both B2B clients and individual customers. We implemented cutting-edge technologies to ensure optimal performance, security, and scalability.",
      images: [
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ],
      tags: ["React", "Responsive", "Industrial", "Modern", "E-commerce", "B2B"],
      client: "CADGE Manufacturing Inc.",
      duration: "3 months",
      completedDate: "March 2024",
      teamSize: 5,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "AWS"],
      challenges: [
        "Complex product catalog with technical specifications",
        "Integration with existing ERP system",
        "Mobile optimization for field workers",
        "Multi-language support for international clients"
      ],
      solutions: [
        "Custom product configurator with real-time pricing",
        "API integration with SAP ERP system",
        "Progressive Web App for offline functionality",
        "Automated translation system with manual review"
      ],
      results: [
        { metric: "Page Load Speed", value: "40%", description: "Faster loading times" },
        { metric: "Mobile Traffic", value: "65%", description: "Increase in mobile users" },
        { metric: "Lead Generation", value: "120%", description: "More qualified leads" },
        { metric: "User Engagement", value: "85%", description: "Higher session duration" }
      ],
      testimonial: {
        quote: "PixelNest transformed our digital presence completely. The new website not only looks professional but has significantly improved our lead generation and customer engagement.",
        author: "Sarah Johnson",
        role: "Marketing Director",
        company: "CADGE Manufacturing Inc."
      },
      liveUrl: "https://cadgemanufacturing.com",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      rating: 5,
      views: "2.5k",
      likes: 127
    },
    '2': {
      id: 2,
      title: "E-commerce Platform",
      category: "web",
      description: "Comprehensive e-commerce solution with advanced filtering, payment integration, and inventory management.",
      longDescription: "A full-featured e-commerce platform built from the ground up, featuring advanced product filtering, secure payment processing, real-time inventory management, and comprehensive admin dashboard. The platform supports multiple vendors, automated order processing, and provides detailed analytics for business insights. We focused on creating a scalable solution that could handle high traffic volumes while maintaining excellent performance and user experience.",
      images: [
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ],
      tags: ["E-commerce", "Payment", "Modern", "Scalable", "Multi-vendor", "Analytics"],
      client: "RetailTech Solutions",
      duration: "4 months",
      completedDate: "February 2024",
      teamSize: 6,
      technologies: ["Next.js", "React", "Stripe", "MongoDB", "Redis", "Docker"],
      challenges: [
        "Handling high traffic during sales events",
        "Complex multi-vendor commission system",
        "Real-time inventory synchronization",
        "PCI DSS compliance for payments"
      ],
      solutions: [
        "Implemented Redis caching and CDN",
        "Automated commission calculation system",
        "WebSocket-based inventory updates",
        "Stripe integration with secure tokenization"
      ],
      results: [
        { metric: "Sales Volume", value: "200%", description: "Increase in monthly sales" },
        { metric: "Page Speed", value: "50%", description: "Faster checkout process" },
        { metric: "Cart Abandonment", value: "30%", description: "Reduction in abandoned carts" },
        { metric: "Vendor Satisfaction", value: "95%", description: "Positive vendor feedback" }
      ],
      testimonial: {
        quote: "The e-commerce platform exceeded our expectations. The performance improvements and user experience enhancements have directly contributed to our revenue growth.",
        author: "Michael Chen",
        role: "CTO",
        company: "RetailTech Solutions"
      },
      liveUrl: "https://retailtech-demo.com",
      githubUrl: "https://github.com/pixelnest/ecommerce-platform",
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      rating: 5,
      views: "3.2k",
      likes: 89
    },
    '3': {
      id: 3,
      title: "Corporate Dashboard",
      category: "web",
      description: "Clean and intuitive dashboard interface for business analytics with real-time data visualization.",
      longDescription: "A sophisticated business intelligence dashboard designed for corporate executives and managers. The platform provides real-time analytics, customizable widgets, and comprehensive reporting capabilities. We integrated multiple data sources and created an intuitive interface that makes complex data accessible and actionable for decision-makers at all levels.",
      images: [
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ],
      tags: ["Dashboard", "Analytics", "Corporate", "Real-time", "Data Visualization", "BI"],
      client: "DataCorp Analytics",
      duration: "2.5 months",
      completedDate: "January 2024",
      teamSize: 4,
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "PostgreSQL", "WebSocket"],
      challenges: [
        "Real-time data processing from multiple sources",
        "Complex data visualization requirements",
        "Role-based access control",
        "Performance optimization for large datasets"
      ],
      solutions: [
        "Implemented WebSocket connections for real-time updates",
        "Custom D3.js visualizations with interactive features",
        "JWT-based authentication with role management",
        "Database indexing and query optimization"
      ],
      results: [
        { metric: "Data Processing", value: "75%", description: "Faster data analysis" },
        { metric: "User Adoption", value: "90%", description: "Employee engagement" },
        { metric: "Decision Speed", value: "60%", description: "Faster business decisions" },
        { metric: "Cost Savings", value: "35%", description: "Reduced reporting costs" }
      ],
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
      rating: 4,
      views: "1.8k",
      likes: 73
    },
    '4': {
      id: 4,
      title: "Creative Portfolio Website",
      category: "web",
      description: "Stunning portfolio showcase with smooth animations, modern layout, and interactive elements.",
      longDescription: "A visually striking portfolio website for a creative agency, featuring smooth animations, interactive elements, and a modern design aesthetic. The site showcases the agency's work through an immersive experience with custom animations, parallax scrolling, and dynamic content loading. We focused on creating a memorable user experience that reflects the agency's creative capabilities.",
      images: [
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ],
      tags: ["Portfolio", "Creative", "Animation", "Interactive", "Modern", "Showcase"],
      client: "Creative Studio Pro",
      duration: "2 months",
      completedDate: "April 2024",
      teamSize: 3,
      technologies: ["React", "Framer Motion", "Three.js", "GSAP", "Contentful", "Vercel"],
      challenges: [
        "Complex animations without performance impact",
        "Cross-browser compatibility for animations",
        "Content management for portfolio updates",
        "Mobile optimization for interactive elements"
      ],
      solutions: [
        "Optimized animations with Framer Motion and GSAP",
        "Progressive enhancement for browser support",
        "Headless CMS integration with Contentful",
        "Touch-friendly interactions for mobile devices"
      ],
      results: [
        { metric: "User Engagement", value: "150%", description: "Longer session duration" },
        { metric: "Portfolio Views", value: "200%", description: "More project views" },
        { metric: "Client Inquiries", value: "80%", description: "Increase in leads" },
        { metric: "Mobile Usage", value: "45%", description: "Better mobile experience" }
      ],
      testimonial: {
        quote: "Our new portfolio website is absolutely stunning. The animations and interactions perfectly showcase our creative work and have impressed our clients.",
        author: "Emma Rodriguez",
        role: "Creative Director",
        company: "Creative Studio Pro"
      },
      liveUrl: "https://creativestudiopro.com",
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
      rating: 5,
      views: "4.1k",
      likes: 156
    },
    '5': {
      id: 5,
      title: "Task Management App",
      category: "mobile",
      description: "Intuitive mobile app for team collaboration, task tracking, and productivity enhancement.",
      longDescription: "A comprehensive task management mobile application designed for teams and individuals. The app features intuitive task creation, team collaboration tools, progress tracking, and productivity analytics. Built with React Native for cross-platform compatibility, the app provides a seamless experience across iOS and Android devices with offline functionality and real-time synchronization.",
      images: [
        "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ],
      tags: ["iOS", "Android", "Productivity", "Collaboration", "React Native", "Real-time"],
      client: "ProductivityTech Inc.",
      duration: "5 months",
      completedDate: "December 2023",
      teamSize: 4,
      technologies: ["React Native", "Firebase", "Redux", "Socket.io", "Node.js", "MongoDB"],
      challenges: [
        "Cross-platform consistency",
        "Offline functionality with sync",
        "Real-time collaboration features",
        "Performance optimization for large task lists"
      ],
      solutions: [
        "Shared component library for consistency",
        "Local SQLite database with sync queue",
        "WebSocket integration for real-time updates",
        "Virtual scrolling for performance optimization"
      ],
      results: [
        { metric: "User Retention", value: "85%", description: "Monthly active users" },
        { metric: "Task Completion", value: "40%", description: "Improved productivity" },
        { metric: "Team Collaboration", value: "120%", description: "More team interactions" },
        { metric: "App Store Rating", value: "4.8", description: "User satisfaction score" }
      ],
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
      rating: 5,
      views: "2.9k",
      likes: 94
    },
    '6': {
      id: 6,
      title: "Fitness Tracking App",
      category: "mobile",
      description: "Comprehensive health and fitness app with workout tracking, nutrition planning, and progress monitoring.",
      longDescription: "A full-featured fitness and health tracking application that helps users achieve their wellness goals. The app includes workout planning, nutrition tracking, progress monitoring, and social features for motivation. We integrated with various health APIs and wearable devices to provide comprehensive health insights and personalized recommendations.",
      images: [
        "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ],
      tags: ["Health", "Fitness", "Tracking", "Wellness", "Wearables", "Social"],
      client: "FitLife Technologies",
      duration: "6 months",
      completedDate: "November 2023",
      teamSize: 5,
      technologies: ["Flutter", "Dart", "Firebase", "HealthKit", "Google Fit", "ML Kit"],
      challenges: [
        "Integration with multiple health APIs",
        "Complex data visualization for health metrics",
        "Privacy and security for health data",
        "Battery optimization for continuous tracking"
      ],
      solutions: [
        "Unified health data abstraction layer",
        "Custom chart components with smooth animations",
        "End-to-end encryption for sensitive data",
        "Intelligent background processing optimization"
      ],
      results: [
        { metric: "User Engagement", value: "95%", description: "Daily active users" },
        { metric: "Goal Achievement", value: "70%", description: "Users reaching fitness goals" },
        { metric: "Data Accuracy", value: "98%", description: "Health tracking precision" },
        { metric: "User Reviews", value: "4.9", description: "App store rating" }
      ],
      testimonial: {
        quote: "The fitness app has revolutionized how our users approach their health journey. The comprehensive tracking and insights have led to remarkable user engagement.",
        author: "David Kim",
        role: "Product Manager",
        company: "FitLife Technologies"
      },
      gradient: "from-green-500 to-teal-600",
      bgGradient: "from-green-50 to-teal-50",
      rating: 4,
      views: "3.7k",
      likes: 142
    },
    '7': {
      id: 7,
      title: "Food Delivery App",
      category: "mobile",
      description: "User-friendly food ordering app with real-time tracking, payment integration, and restaurant management.",
      longDescription: "A comprehensive food delivery platform connecting customers, restaurants, and delivery partners. The app features real-time order tracking, secure payment processing, restaurant management tools, and delivery optimization. We built separate interfaces for customers, restaurant owners, and delivery drivers, all synchronized through a central backend system.",
      images: [
        "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ],
      tags: ["Food", "Delivery", "Real-time", "Payment", "Multi-platform", "GPS"],
      client: "QuickBite Delivery",
      duration: "7 months",
      completedDate: "October 2023",
      teamSize: 7,
      technologies: ["React Native", "Node.js", "PostgreSQL", "Redis", "Stripe", "Google Maps"],
      challenges: [
        "Real-time order tracking and updates",
        "Complex multi-party payment system",
        "Route optimization for delivery drivers",
        "Handling high concurrent orders during peak times"
      ],
      solutions: [
        "WebSocket-based real-time communication",
        "Escrow payment system with automated splits",
        "Machine learning for delivery route optimization",
        "Microservices architecture with load balancing"
      ],
      results: [
        { metric: "Order Volume", value: "300%", description: "Increase in daily orders" },
        { metric: "Delivery Time", value: "25%", description: "Faster average delivery" },
        { metric: "Customer Satisfaction", value: "92%", description: "Positive ratings" },
        { metric: "Restaurant Partners", value: "150%", description: "Growth in partnerships" }
      ],
      testimonial: {
        quote: "The food delivery app has transformed our business. The real-time tracking and seamless payment system have significantly improved customer satisfaction.",
        author: "Maria Santos",
        role: "Operations Director",
        company: "QuickBite Delivery"
      },
      liveUrl: "https://quickbite-app.com",
      gradient: "from-red-500 to-pink-600",
      bgGradient: "from-red-50 to-pink-50",
      rating: 5,
      views: "5.2k",
      likes: 203
    },
    '8': {
      id: 8,
      title: "Educational Content Series",
      category: "social",
      description: "Engaging educational posts for graphic design services promotion with consistent branding and messaging.",
      longDescription: "A comprehensive social media campaign focused on educating audiences about graphic design principles while promoting our client's services. The campaign included a series of educational posts, interactive content, and behind-the-scenes glimpses into the design process. We developed a consistent visual identity and content strategy that positioned the client as a thought leader in the design industry.",
      images: [
        "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ],
      tags: ["Education", "Branding", "Engagement", "Series", "Content Strategy", "Design"],
      client: "Design Academy Pro",
      duration: "3 months",
      completedDate: "May 2024",
      teamSize: 3,
      technologies: ["Adobe Creative Suite", "Figma", "Canva", "Buffer", "Analytics Tools"],
      challenges: [
        "Creating educational content that's engaging",
        "Maintaining consistent brand voice across platforms",
        "Balancing education with promotion",
        "Measuring educational content effectiveness"
      ],
      solutions: [
        "Interactive design tutorials and tips",
        "Brand guideline templates for consistency",
        "80/20 rule: 80% education, 20% promotion",
        "Custom analytics dashboard for engagement tracking"
      ],
      results: [
        { metric: "Engagement Rate", value: "180%", description: "Higher than industry average" },
        { metric: "Follower Growth", value: "250%", description: "Organic follower increase" },
        { metric: "Lead Generation", value: "90%", description: "More qualified inquiries" },
        { metric: "Brand Awareness", value: "160%", description: "Improved brand recognition" }
      ],
      gradient: "from-yellow-500 to-orange-600",
      bgGradient: "from-yellow-50 to-orange-50",
      rating: 4,
      views: "1.5k",
      likes: 67
    },
    '9': {
      id: 9,
      title: "Restaurant Social Campaign",
      category: "social",
      description: "Appetizing food photography and promotional designs for restaurant chain with seasonal campaigns.",
      longDescription: "A mouth-watering social media campaign for a restaurant chain featuring professional food photography, seasonal menu promotions, and customer engagement strategies. We created visually appealing content that showcased the restaurant's culinary offerings while building a strong community of food enthusiasts. The campaign included user-generated content initiatives and influencer partnerships.",
      images: [
        "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ],
      tags: ["Food", "Photography", "Campaign", "Seasonal", "Restaurant", "Community"],
      client: "Gourmet Bistro Chain",
      duration: "4 months",
      completedDate: "March 2024",
      teamSize: 4,
      technologies: ["Professional Photography", "Adobe Lightroom", "Photoshop", "Instagram", "Facebook"],
      challenges: [
        "Consistent food photography across multiple locations",
        "Seasonal menu promotion timing",
        "Building authentic customer community",
        "Measuring ROI from social media efforts"
      ],
      solutions: [
        "Photography guidelines and training for staff",
        "Content calendar aligned with seasonal menus",
        "User-generated content campaigns with hashtags",
        "Social commerce integration for direct sales tracking"
      ],
      results: [
        { metric: "Social Reach", value: "400%", description: "Expanded audience reach" },
        { metric: "Restaurant Visits", value: "75%", description: "Increase from social referrals" },
        { metric: "User-Generated Content", value: "300%", description: "Customer posts featuring restaurant" },
        { metric: "Online Orders", value: "120%", description: "Growth in delivery orders" }
      ],
      testimonial: {
        quote: "The social media campaign brought our restaurant to life online. The beautiful food photography and engaging content have significantly increased our customer base.",
        author: "Chef Antonio Rodriguez",
        role: "Head Chef & Owner",
        company: "Gourmet Bistro Chain"
      },
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
      rating: 5,
      views: "2.8k",
      likes: 134
    },
    '10': {
      id: 10,
      title: "Tech Company Hiring",
      category: "social",
      description: "Professional recruitment posts for technology academy with modern design and clear messaging.",
      longDescription: "A strategic recruitment campaign for a technology academy looking to attract top talent. The campaign featured modern, professional designs that highlighted company culture, benefits, and growth opportunities. We created a series of posts showcasing employee testimonials, office culture, and the innovative projects candidates would work on, positioning the company as an employer of choice in the tech industry.",
      images: [
        "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ],
      tags: ["Recruitment", "Tech", "Professional", "Modern", "Employer Branding", "Culture"],
      client: "TechAcademy Solutions",
      duration: "2 months",
      completedDate: "February 2024",
      teamSize: 3,
      technologies: ["LinkedIn", "Figma", "Adobe Creative Suite", "Video Editing", "Analytics"],
      challenges: [
        "Standing out in competitive tech recruitment market",
        "Showcasing company culture authentically",
        "Targeting specific technical skill sets",
        "Measuring recruitment campaign effectiveness"
      ],
      solutions: [
        "Employee-generated content and testimonials",
        "Behind-the-scenes office culture videos",
        "Skill-specific job posting designs",
        "Applicant tracking integration with social metrics"
      ],
      results: [
        { metric: "Application Quality", value: "85%", description: "Better qualified candidates" },
        { metric: "Recruitment Time", value: "40%", description: "Faster hiring process" },
        { metric: "Employer Brand", value: "200%", description: "Improved brand recognition" },
        { metric: "Employee Referrals", value: "150%", description: "More internal referrals" }
      ],
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      rating: 4,
      views: "1.9k",
      likes: 82
    },
    '11': {
      id: 11,
      title: "Festival Promotion Campaign",
      category: "social",
      description: "Colorful and vibrant designs for festival celebrations, special offers, and community engagement.",
      longDescription: "An energetic and vibrant social media campaign for a cultural festival, featuring colorful designs, special promotions, and community engagement initiatives. The campaign captured the festive spirit through dynamic visuals, interactive content, and user participation activities. We created a comprehensive content strategy that built excitement leading up to the event and maintained engagement throughout the festival period.",
      images: [
        "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ],
      tags: ["Festival", "Celebration", "Offers", "Community", "Vibrant", "Cultural"],
      client: "Cultural Festival Organization",
      duration: "2 months",
      completedDate: "June 2024",
      teamSize: 4,
      technologies: ["Adobe Creative Suite", "After Effects", "Social Media Tools", "Live Streaming"],
      challenges: [
        "Creating excitement for a new festival",
        "Coordinating multi-platform campaign timing",
        "Managing live event social media coverage",
        "Engaging diverse community demographics"
      ],
      solutions: [
        "Countdown campaigns and sneak peeks",
        "Synchronized content calendar across platforms",
        "Real-time social media team for live coverage",
        "Multilingual content for diverse audiences"
      ],
      results: [
        { metric: "Event Attendance", value: "250%", description: "Exceeded expected turnout" },
        { metric: "Social Engagement", value: "400%", description: "Higher interaction rates" },
        { metric: "Community Participation", value: "180%", description: "More local involvement" },
        { metric: "Sponsor Satisfaction", value: "95%", description: "Positive sponsor feedback" }
      ],
      testimonial: {
        quote: "The festival campaign was absolutely phenomenal. The vibrant designs and community engagement strategies made our first festival a huge success.",
        author: "Lisa Park",
        role: "Event Director",
        company: "Cultural Festival Organization"
      },
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      rating: 5,
      views: "3.4k",
      likes: 187
    },
    '12': {
      id: 12,
      title: "Complete Brand Identity",
      category: "graphic",
      description: "Comprehensive brand identity design including logo, color palette, typography, and brand guidelines.",
      longDescription: "A complete brand identity overhaul for a growing startup, including logo design, color palette development, typography selection, and comprehensive brand guidelines. The project involved extensive research into the company's values, target audience, and competitive landscape to create a distinctive and memorable brand identity that would support the company's growth objectives and market positioning.",
      images: [
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ],
      tags: ["Branding", "Logo", "Identity", "Guidelines", "Typography", "Color Theory"],
      client: "InnovateTech Startup",
      duration: "6 weeks",
      completedDate: "April 2024",
      teamSize: 3,
      technologies: ["Adobe Illustrator", "Photoshop", "InDesign", "Figma", "Brand Guidelines"],
      challenges: [
        "Creating distinctive identity in crowded tech market",
        "Balancing modern appeal with professional credibility",
        "Ensuring scalability across all media",
        "Developing comprehensive usage guidelines"
      ],
      solutions: [
        "Extensive competitor analysis and positioning",
        "Multiple concept iterations with stakeholder feedback",
        "Vector-based designs for infinite scalability",
        "Detailed brand book with usage examples"
      ],
      results: [
        { metric: "Brand Recognition", value: "300%", description: "Improved market recognition" },
        { metric: "Customer Trust", value: "85%", description: "Higher trust scores" },
        { metric: "Marketing Efficiency", value: "60%", description: "Faster campaign development" },
        { metric: "Employee Pride", value: "95%", description: "Increased team satisfaction" }
      ],
      testimonial: {
        quote: "The new brand identity perfectly captures our company's vision and values. It has significantly improved our market presence and customer perception.",
        author: "Alex Thompson",
        role: "Founder & CEO",
        company: "InnovateTech Startup"
      },
      gradient: "from-indigo-500 to-purple-600",
      bgGradient: "from-indigo-50 to-purple-50",
      rating: 5,
      views: "4.6k",
      likes: 198
    },
    '13': {
      id: 13,
      title: "Marketing Brochure Design",
      category: "graphic",
      description: "Professional marketing materials for corporate communications with modern layout and compelling visuals.",
      longDescription: "A comprehensive suite of marketing materials for a B2B consulting firm, including brochures, flyers, presentation templates, and digital assets. The project focused on creating professional, compelling designs that effectively communicate the company's expertise and value proposition to potential clients. We developed a cohesive visual system that works across both print and digital mediums.",
      images: [
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ],
      tags: ["Print", "Marketing", "Corporate", "Professional", "B2B", "Consulting"],
      client: "Strategic Consulting Group",
      duration: "4 weeks",
      completedDate: "March 2024",
      teamSize: 2,
      technologies: ["Adobe InDesign", "Illustrator", "Photoshop", "Print Production"],
      challenges: [
        "Communicating complex consulting services simply",
        "Maintaining brand consistency across materials",
        "Optimizing for both print and digital use",
        "Creating compelling visual hierarchy"
      ],
      solutions: [
        "Infographic-style service explanations",
        "Strict adherence to brand guidelines",
        "Dual-purpose designs with format variations",
        "Strategic use of typography and white space"
      ],
      results: [
        { metric: "Lead Generation", value: "120%", description: "More qualified prospects" },
        { metric: "Sales Meetings", value: "80%", description: "Increase in client meetings" },
        { metric: "Brand Consistency", value: "100%", description: "Unified brand presentation" },
        { metric: "Print Quality", value: "98%", description: "Client satisfaction score" }
      ],
      gradient: "from-green-500 to-blue-600",
      bgGradient: "from-green-50 to-blue-50",
      rating: 4,
      views: "2.1k",
      likes: 91
    },
    '14': {
      id: 14,
      title: "Local Business SEO Success",
      category: "seo",
      description: "Complete SEO optimization for local restaurant chain resulting in 300% increase in organic traffic.",
      longDescription: "A comprehensive SEO campaign for a local restaurant chain focusing on local search optimization, Google My Business management, and content marketing. The project involved technical SEO improvements, local citation building, review management, and content creation to improve search visibility and drive more foot traffic to restaurant locations.",
      images: [
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ],
      tags: ["Local SEO", "Restaurant", "Rankings", "Traffic", "Google My Business", "Reviews"],
      client: "Bella Vista Restaurant Group",
      duration: "6 months",
      completedDate: "January 2024",
      teamSize: 3,
      technologies: ["Google Analytics", "Search Console", "SEMrush", "Local SEO Tools", "Schema Markup"],
      challenges: [
        "Competing with established restaurant chains",
        "Managing multiple location SEO",
        "Improving online review ratings",
        "Seasonal traffic fluctuations"
      ],
      solutions: [
        "Hyperlocal keyword targeting strategy",
        "Individual location page optimization",
        "Proactive review management system",
        "Seasonal content and promotion calendar"
      ],
      results: [
        { metric: "Organic Traffic", value: "300%", description: "Increase in website visits" },
        { metric: "Local Rankings", value: "85%", description: "Keywords in top 3 positions" },
        { metric: "Phone Calls", value: "150%", description: "More reservation calls" },
        { metric: "Online Reviews", value: "4.6", description: "Average rating improvement" }
      ],
      testimonial: {
        quote: "The SEO improvements have dramatically increased our online visibility. We're now the top choice for local diners searching for restaurants in our area.",
        author: "Giuseppe Rossi",
        role: "Owner",
        company: "Bella Vista Restaurant Group"
      },
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
      rating: 5,
      views: "1.7k",
      likes: 76
    },
    '15': {
      id: 15,
      title: "E-commerce SEO Campaign",
      category: "seo",
      description: "Comprehensive SEO strategy for online retail platform with keyword optimization and content strategy.",
      longDescription: "An extensive SEO campaign for a growing e-commerce platform specializing in home goods. The project included technical SEO audits, keyword research and optimization, content strategy development, and link building initiatives. We focused on improving product page rankings, category page optimization, and creating valuable content that drives both traffic and conversions.",
      images: [
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ],
      tags: ["E-commerce", "SEO", "Traffic", "Strategy", "Content Marketing", "Conversions"],
      client: "HomeStyle E-commerce",
      duration: "8 months",
      completedDate: "February 2024",
      teamSize: 4,
      technologies: ["Shopify SEO", "Google Analytics", "Ahrefs", "Content Management", "Schema Markup"],
      challenges: [
        "Competing with major e-commerce platforms",
        "Optimizing thousands of product pages",
        "Improving site speed and technical performance",
        "Building domain authority in competitive niche"
      ],
      solutions: [
        "Long-tail keyword strategy for product pages",
        "Automated SEO optimization for product descriptions",
        "Technical performance optimization and CDN implementation",
        "Strategic content marketing and guest posting campaign"
      ],
      results: [
        { metric: "Organic Revenue", value: "250%", description: "Increase in SEO-driven sales" },
        { metric: "Keyword Rankings", value: "400%", description: "More keywords in top 10" },
        { metric: "Page Speed", value: "60%", description: "Faster loading times" },
        { metric: "Conversion Rate", value: "45%", description: "Better organic traffic conversion" }
      ],
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-50 to-purple-50",
      rating: 4,
      views: "2.3k",
      likes: 103
    }
  };

  const project = projectsData[id || '1'];
  console.log("test");
  console.log(project);
  
  const relatedProjects = Object.values(projectsData)
    .filter(p => p.id !== project?.id && p.category === project?.category)
    .slice(0, 3);

  useEffect(() => {
    if (project) {
      setLikes(project.likes);
    }
  }, [project]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
            <Monitor className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist or has been moved.</p>
          <Link 
             to={`${import.meta.env.BASE_URL}/gallery`}  
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium inline-flex items-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web': return Monitor;
      case 'mobile': return Smartphone;
      case 'graphic': return PenTool;
      case 'seo': return Search;
      case 'social': return Share2;
      default: return Monitor;
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'web': return 'Web Development';
      case 'mobile': return 'Mobile Development';
      case 'graphic': return 'Graphic Design';
      case 'seo': return 'SEO Optimization';
      case 'social': return 'Social Media';
      default: return 'Development';
    }
  };

  const CategoryIcon = getCategoryIcon(project.category);

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Navigation Header */}
      <div className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate(`${import.meta.env.BASE_URL}/gallery`)}
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors group"
              >
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Gallery
              </button>
              
              <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500">
                <span>Gallery</span>
                <ChevronRight className="w-4 h-4" />
                <span className="text-gray-900 font-medium">{project.title}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={handleLike}
                className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                  isLiked 
                    ? 'bg-red-50 text-red-600 shadow-md' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Heart className={`w-4 h-4 mr-2 ${isLiked ? 'fill-current' : ''}`} />
                {likes}
              </button>
              
              <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </button>
              
              <button className="flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-all duration-300 transform hover:scale-105">
                <Download className="w-4 h-4 mr-2" />
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Hero Section */}
      <section className="pt-8 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Enhanced Background decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-r from-green-300 to-emerald-300 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced Project Info */}
            <div>
              <div className="flex items-center mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-3xl flex items-center justify-center mr-6 shadow-xl`}>
                  <CategoryIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className={`px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-full text-sm font-semibold shadow-lg`}>
                    {getCategoryName(project.category)}
                  </span>
                  <div className="flex items-center mt-2 space-x-4">
                    <div className="flex items-center">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-2 text-sm text-gray-600 font-medium">{project.rating}.0</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Eye className="w-4 h-4 mr-1" />
                      {project.views} views
                    </div>
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-6 leading-tight tracking-tight">
                {project.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light leading-relaxed">
                {project.description}
              </p>
              
              {/* Enhanced Project Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                {[
                  { icon: Star, value: project.rating, label: "Rating", color: "text-yellow-500" },
                  { icon: Eye, value: project.views, label: "Views", color: "text-blue-500" },
                  { icon: Heart, value: likes, label: "Likes", color: "text-red-500" },
                  { icon: Users, value: project.teamSize, label: "Team Size", color: "text-green-500" }
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className={`w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              {/* Enhanced Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gradient-to-r ${project.gradient} text-white px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold text-lg inline-flex items-center justify-center group`}
                  >
                    <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    View Live Project
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 font-semibold text-lg inline-flex items-center justify-center group"
                  >
                    <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    View Source Code
                  </a>
                )}
                {!project.liveUrl && !project.githubUrl && (
                  <Link
                    to={`${import.meta.env.BASE_URL}/contact`}  
                    className={`bg-gradient-to-r ${project.gradient} text-white px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold text-lg inline-flex items-center justify-center`}
                  >
                    <Target className="w-5 h-5 mr-2" />
                    Start Similar Project
                  </Link>
                )}
              </div>
            </div>
            
            {/* Enhanced Image Gallery */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white p-2">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={project.images[currentImageIndex]}
                    alt={project.title}
                    className="w-full h-96 object-cover cursor-pointer transition-transform duration-500 hover:scale-105"
                    onClick={() => setIsImageModalOpen(true)}
                  />
                  
                  {/* Enhanced Image Navigation */}
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-110"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-110"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}
                  
                  {/* Enhanced Image Counter */}
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {currentImageIndex + 1} / {project.images.length}
                  </div>
                  
                  {/* Enhanced Image Indicators */}
                  {project.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {project.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentImageIndex 
                              ? 'bg-white w-8 shadow-lg' 
                              : 'bg-white/60 hover:bg-white/80'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Image Thumbnails */}
              {project.images.length > 1 && (
                <div className="flex space-x-3 mt-4 overflow-x-auto pb-2">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'ring-4 ring-blue-500 shadow-lg' 
                          : 'opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${project.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Project Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Enhanced Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Enhanced Project Overview */}
              <div>
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight">
                    Project <span className="font-semibold">Overview</span>
                  </h2>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-6 right-6 w-16 h-16 bg-blue-300 rounded-full"></div>
                    <div className="absolute bottom-6 left-6 w-12 h-12 bg-indigo-300 rounded-full"></div>
                  </div>
                  <div className="relative z-10">
                    <p className="text-lg text-gray-700 leading-relaxed font-light">
                      {project.longDescription}
                    </p>
                  </div>
                </div>
              </div>

              {/* Enhanced Challenges & Solutions */}
              <div>
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight">
                    Challenges & <span className="font-semibold">Solutions</span>
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 right-4 w-16 h-16 bg-red-300 rounded-full"></div>
                      <div className="absolute bottom-4 left-4 w-12 h-12 bg-orange-300 rounded-full"></div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                        <Target className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key Challenges</h3>
                      <ul className="space-y-4">
                        {project.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start text-gray-700">
                            <div className="w-2 h-2 bg-red-400 rounded-full mt-2.5 mr-4 flex-shrink-0"></div>
                            <span className="font-light leading-relaxed">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 right-4 w-16 h-16 bg-green-300 rounded-full"></div>
                      <div className="absolute bottom-4 left-4 w-12 h-12 bg-emerald-300 rounded-full"></div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                        <CheckCircle className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Solutions</h3>
                      <ul className="space-y-4">
                        {project.solutions.map((solution, index) => (
                          <li key={index} className="flex items-start text-gray-700">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="font-light leading-relaxed">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Results */}
              <div>
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight">
                    Project <span className="font-semibold">Results</span>
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.results.map((result, index) => (
                    <div key={index} className={`bg-gradient-to-br ${project.bgGradient} rounded-3xl p-8 text-center relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-3 right-3 w-12 h-12 bg-white rounded-full"></div>
                        <div className="absolute bottom-3 left-3 w-8 h-8 bg-white rounded-full"></div>
                      </div>
                      
                      <div className="relative z-10">
                        <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-3`}>
                          {result.value}
                        </div>
                        <div className="text-xl font-semibold text-gray-900 mb-2">
                          {result.metric}
                        </div>
                        <div className="text-gray-600 font-light">
                          {result.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Testimonial */}
              {project.testimonial && (
                <div>
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight">
                      Client <span className="font-semibold">Testimonial</span>
                    </h2>
                  </div>
                  
                  <div className={`bg-gradient-to-br ${project.bgGradient} rounded-3xl p-10 relative overflow-hidden shadow-xl`}>
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-8 right-8 w-24 h-24 bg-white rounded-full"></div>
                      <div className="absolute bottom-8 left-8 w-20 h-20 bg-white rounded-full"></div>
                      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white rounded-full"></div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className={`w-20 h-20 bg-gradient-to-r ${project.gradient} rounded-3xl flex items-center justify-center mb-8 shadow-xl`}>
                        <Award className="w-10 h-10 text-white" />
                      </div>
                      
                      <blockquote className="text-2xl text-gray-700 italic mb-8 leading-relaxed font-light">
                        "{project.testimonial.quote}"
                      </blockquote>
                      
                      <div className="flex items-center">
                        <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-full flex items-center justify-center mr-6 shadow-lg`}>
                          <span className="text-white font-bold text-xl">
                            {project.testimonial.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-lg">{project.testimonial.author}</div>
                          <div className="text-gray-600">{project.testimonial.role}</div>
                          <div className="text-gray-500 text-sm">{project.testimonial.company}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Enhanced Sidebar */}
            <div className="space-y-8">
              {/* Enhanced Project Info */}
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 relative overflow-hidden shadow-lg">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-16 h-16 bg-blue-300 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-indigo-300 rounded-full"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-3 shadow-lg">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Project Details</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <User className="w-5 h-5 text-blue-500 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-gray-600 font-medium">Client</div>
                        <div className="font-semibold text-gray-900">{project.client}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-green-500 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-gray-600 font-medium">Duration</div>
                        <div className="font-semibold text-gray-900">{project.duration}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Calendar className="w-5 h-5 text-purple-500 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-gray-600 font-medium">Completed</div>
                        <div className="font-semibold text-gray-900">{project.completedDate}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Users className="w-5 h-5 text-orange-500 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-gray-600 font-medium">Team Size</div>
                        <div className="font-semibold text-gray-900">{project.teamSize} members</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Technologies */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-3 shadow-lg">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Technologies Used</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-sm font-medium hover:from-gray-200 hover:to-gray-300 transition-all duration-300 transform hover:scale-105 shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Enhanced Tags */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className={`w-10 h-10 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center mr-3 shadow-lg`}>
                    <Tag className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Project Tags</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, index) => (
                    <span key={index} className={`px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Enhanced Quick Actions */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 relative overflow-hidden shadow-lg">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-12 h-12 bg-indigo-300 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-purple-300 rounded-full"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mr-3 shadow-lg">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Quick Actions</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <Link 
                      to={`${import.meta.env.BASE_URL}/contact`}  
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium text-center block"
                    >
                      Start Similar Project
                    </Link>
                    <Link 
                       to={`${import.meta.env.BASE_URL}/gallery`}  
                      className="w-full border-2 border-gray-300 text-gray-700 py-3 px-4 rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 font-medium text-center block"
                    >
                      View More Projects
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-blue-600 shadow-sm mb-8">
                <Layers className="w-4 h-4 mr-2" />
                Related projects
              </div>
              
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                More
                <span className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> {getCategoryName(project.category)}</span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                Explore more projects in the same category that showcase our expertise and creativity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                   to={`${import.meta.env.BASE_URL}/project/${relatedProject.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                    <div className="relative overflow-hidden h-56">
                      <img 
                        src={relatedProject.images[0]} 
                        alt={relatedProject.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Overlay Actions */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 shadow-xl">
                          <Eye className="w-6 h-6" />
                        </div>
                      </div>
                      
                      {/* Rating */}
                      <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                        <Star className="w-3 h-3 mr-1 text-yellow-400 fill-current" />
                        {relatedProject.rating}
                      </div>
                    </div>

                    <div className="p-8">
                      <span className={`px-3 py-1 bg-gradient-to-r ${relatedProject.gradient} text-white rounded-full text-sm font-medium shadow-sm`}>
                        {getCategoryName(relatedProject.category)}
                      </span>

                      <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3 group-hover:text-blue-600 transition-colors">
                        {relatedProject.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed font-light mb-4">
                        {relatedProject.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {relatedProject.views}
                        </div>
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 mr-1" />
                          {relatedProject.likes}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                 to={`${import.meta.env.BASE_URL}/gallery`}  
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium text-lg inline-flex items-center"
              >
                View All Projects
                <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-white rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-8">
              <Zap className="w-4 h-4 mr-2" />
              Ready to start your project?
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight">
            Let's create something
            <br />
            <span className="font-semibold">extraordinary together</span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Inspired by this project? Let's discuss how we can bring your vision to life 
            with the same level of quality, creativity, and attention to detail.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
             to={`${import.meta.env.BASE_URL}/contact`}
              className="bg-white text-blue-600 px-10 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold text-lg inline-flex items-center justify-center"
            >
              <Target className="w-5 h-5 mr-2" />
              Start Your Project
            </Link>
            <Link 
             to={`${import.meta.env.BASE_URL}/gallary`}
              className="border-2 border-white text-white px-10 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg inline-flex items-center justify-center"
            >
              <Eye className="w-5 h-5 mr-2" />
              View More Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                ✕
              </div>
            </button>
            <img
              src={project.images[currentImageIndex]}
              alt={project.title}
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProjectDetailPage;