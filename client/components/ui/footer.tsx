import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Smartphone,
  Monitor,
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Mission', href: '/mission' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press', href: '/press' },
      { label: 'Blog', href: '/blog' }
    ],
    products: [
      { label: 'Smart Wall', href: '/smart-wall' },
      { label: 'Teacher\'s Aid', href: '/teachers-aid' },
      { label: 'Learning Games', href: '/games' },
      { label: 'Hobby Box', href: '/hobby-box' },
      { label: 'Mobile App', href: '/mobile' }
    ],
    resources: [
      { label: 'Help Center', href: '/help' },
      { label: 'Documentation', href: '/docs' },
      { label: 'Community', href: '/community' },
      { label: 'Webinars', href: '/webinars' },
      { label: 'Training', href: '/training' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'COPPA Compliance', href: '/coppa' },
      { label: 'Accessibility', href: '/accessibility' },
      { label: 'Security', href: '/security' }
    ]
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter', color: 'hover:text-sky-500' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: <Youtube className="w-5 h-5" />, href: '#', label: 'YouTube', color: 'hover:text-red-500' }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-edu-primary-500/5 rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-edu-purple-500/5 rounded-full translate-x-40 translate-y-40"></div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center mb-6 group">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fa689521c3c5e4053a2feb0032c12a446%2Fcfc9b51d63b940888d2ec611e54a9b8f?format=webp&width=800"
                  alt="MySchool - The Soul of Education"
                  className="h-10 w-auto group-hover:scale-110 transition-transform duration-200 brightness-0 invert"
                />
              </Link>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Transforming education through innovative technology, making learning engaging, 
                accessible, and fun for students worldwide.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-200 transform hover:scale-110 ${social.color} group`}
                  >
                    {React.cloneElement(social.icon, {
                      className: 'w-5 h-5 group-hover:scale-110 transition-transform duration-200'
                    })}
                  </a>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.href} 
                      className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block transform"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Products</h3>
              <ul className="space-y-3">
                {footerLinks.products.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.href} 
                      className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block transform"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.href} 
                      className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block transform"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">hello@myschool.com</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start space-x-3 text-gray-400">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">123 Education St,<br />Learning City, LC 12345</span>
                </li>
              </ul>

              <h4 className="text-sm font-semibold mb-3 text-white">Legal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.slice(0, 3).map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.href} 
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* App Store Badges */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Download Our App</h3>
                <div className="flex space-x-4">
                  <a href="#" className="group flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105">
                    <Smartphone className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
                    <div className="text-left">
                      <div className="text-xs text-gray-400">Download on the</div>
                      <div className="text-sm font-semibold text-white">App Store</div>
                    </div>
                  </a>
                  <a href="#" className="group flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105">
                    <Monitor className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
                    <div className="text-left">
                      <div className="text-xs text-gray-400">Get it on</div>
                      <div className="text-sm font-semibold text-white">Google Play</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="w-full md:w-auto">
                <h3 className="text-lg font-semibold mb-4 text-white">Stay Updated</h3>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 md:w-64 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-edu-primary-500 transition-colors duration-200"
                  />
                  <button className="bg-gradient-to-r from-edu-primary-500 to-edu-purple-500 hover:from-edu-primary-600 hover:to-edu-purple-600 px-6 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {currentYear} MySchool. All rights reserved.
              </div>
              
              <div className="flex items-center space-x-1 text-sm text-gray-400">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>for education</span>
              </div>

              <div className="flex space-x-6">
                {footerLinks.legal.slice(3).map((link, index) => (
                  <Link 
                    key={index}
                    to={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
