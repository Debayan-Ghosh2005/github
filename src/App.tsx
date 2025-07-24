import React from 'react';
import ManDanceBox from './components/ManDanceBox';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
          {/* Dancing Man and Gift Box Section */}
          <ManDanceBox />
          
          {/* Contact Form Section */}
          <ContactForm />
        </div>
      </div>

      {/* Floating Elements for Extra Visual Interest */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 right-16 w-6 h-6 bg-blue-300/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-purple-300/20 rounded-full animate-pulse delay-2000"></div>
    </div>
  );
}

export default App;