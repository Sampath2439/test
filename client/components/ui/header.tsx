import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './button';
import { cn } from '@/lib/utils';
import { Search, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home', scrollTo: 'hero' },
    { href: '#about', label: 'About Us', scrollTo: 'about' },
    { href: '#programs', label: 'Programs', scrollTo: 'programs' },
    { href: '#partners', label: 'Our Official Partners', scrollTo: 'partners' },
    { href: '#contact', label: 'Contact', scrollTo: 'contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md transition-all duration-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center transition-transform duration-200 hover:scale-105"
          >
            <img
              src="./main_logo.svg"
              alt="MySchool - The Soul of Education"
              className="h-8 md:h-6 lg:h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.scrollTo)}
                className="relative text-gray-600 transition-colors duration-200 hover:text-edu-primary-600 group text-sm md:text-xs lg:text-sm"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-edu-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Search and Auth */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="border-edu-primary-200 text-edu-primary-600 hover:bg-edu-primary-50 hover:border-edu-primary-300 transition-all duration-200 text-sm md:text-xs lg:text-sm"
            >
              Login
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-edu-primary-500 to-edu-purple-500 hover:from-edu-primary-600 hover:to-edu-purple-600 text-white transition-all duration-200 transform hover:scale-105 hover:shadow-lg text-sm md:text-xs lg:text-sm"
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-edu-primary-600 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'md:hidden transition-all duration-300 ease-in-out overflow-hidden',
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <nav className="py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => {
                  scrollToSection(item.scrollTo);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left py-2 text-gray-600 hover:text-edu-primary-600 transition-colors duration-200 text-sm md:text-xs lg:text-sm"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 space-y-3 border-t border-gray-200">
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start text-gray-600 hover:text-edu-primary-600 hover:bg-edu-primary-50 text-sm md:text-xs lg:text-sm"
              >
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full border-edu-primary-200 text-edu-primary-600 hover:bg-edu-primary-50 text-sm md:text-xs lg:text-sm"
              >
                Login
              </Button>
              <Button
                size="sm"
                className="w-full bg-gradient-to-r from-edu-primary-500 to-edu-purple-500 hover:from-edu-primary-600 hover:to-edu-purple-600 text-white text-sm md:text-xs lg:text-sm"
              >
                Sign Up
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
