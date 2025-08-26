import React from 'react';
import { Construction, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ 
  title, 
  description = "This page is currently under development. Please check back soon!" 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-edu-primary-50 to-edu-purple-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-24 h-24 bg-gradient-to-br from-edu-primary-500 to-edu-purple-500 rounded-full flex items-center justify-center mx-auto mb-8">
          <Construction className="w-12 h-12 text-white" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          {description}
        </p>
        
        <div className="space-y-4">
          <Link 
            to="/"
            className="inline-flex items-center bg-gradient-to-r from-edu-primary-500 to-edu-purple-500 hover:from-edu-primary-600 hover:to-edu-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-sm text-gray-500">
            Need help? <Link to="/contact" className="text-edu-primary-600 hover:underline">Contact us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPage;
