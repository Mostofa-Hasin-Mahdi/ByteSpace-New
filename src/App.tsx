import React from 'react';
import { Search, Menu, User, ShoppingCart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary px-8 pt-6 pb-20 lg:pb-32 relative overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between max-w-7xl mx-auto mb-20 relative z-20">
          <div className="flex items-center gap-2">
            <img src="/src/assets/Vector.png" alt="Logo" className="w-8 h-8 object-contain" />
            <img src="/src/assets/ByteSpace.png" alt="ByteSpace" className="h-6 ml-1 object-contain" />
          </div>
          
          <nav className="hidden md:flex items-center gap-6 text-[#f5f5f6]">
            <a href="#" className="font-medium hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-white transition-colors">Courses</a>
            <a href="#" className="hover:text-white transition-colors">Creators</a>
          </nav>

          <div className="flex items-center gap-6 text-[#f5f5f6]">
            <a href="#" className="hidden md:block hover:text-white transition-colors">
              Sign In
            </a>
            <a href="#" className="hidden md:block hover:text-white transition-colors">
              Join Us
            </a>
            <button className="hover:text-white transition-colors">
              <ShoppingCart size={24} />
            </button>
          </div>
        </header>

        {/* Background Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border-4 border-yellow-400 rounded-full opacity-50 z-0"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border-4 border-[#d4fb20] opacity-50 rotate-45 z-0"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-white">
            <h1 className="text-5xl lg:text-7xl font-semibold leading-tight mb-6">
              Get Access to Hundreds<br/>Courses Available
            </h1>
            <p className="text-gray-200 text-lg mb-10 max-w-lg">
              Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
            </p>
            
            {/* Search Bar */}
            <div className="bg-white p-2 rounded-full flex items-center max-w-md w-full shadow-lg">
              <div className="pl-4 text-gray-400">
                <Search size={20} />
              </div>
              <input 
                type="text" 
                placeholder="Search courses..." 
                className="flex-1 bg-transparent px-4 py-2 outline-none text-gray-900 placeholder-gray-400"
              />
              <button className="bg-lime-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-lime-500 transition-colors">
                Search
              </button>
            </div>
            
            {/* Avatars / Social Proof */}
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-primary bg-gray-200 overflow-hidden">
                    <img src={`/images/avatar-${i}.jpg`} alt="Student" className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-2 border-primary bg-white flex items-center justify-center text-sm font-bold text-gray-900">
                  2K+
                </div>
              </div>
              <div className="text-white">
                <div className="font-medium">Happy Students</div>
                <div className="flex items-center gap-1 text-sm text-lime-400">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  <span className="text-gray-200 ml-1">4.5 (240)</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
             {/* Main Hero Image Placeholder */}
             <div className="w-full relative z-20">
               <img src="/src/assets/hero.png" alt="Student learning" className="w-full h-auto object-contain drop-shadow-2xl" />
             </div>
          </div>
        </div>
      </section>
      
      {/* Course Categories / Body placeholder */}
      <section className="py-20 px-8 max-w-7xl mx-auto">
         <div className="text-center mb-12">
           <h2 className="text-3xl font-bold mb-4">Explore Our Popular Courses</h2>
           <p className="text-gray-500 max-w-2xl mx-auto">Discover a wide range of courses tailored to your interests and career goals.</p>
         </div>
         <div className="grid md:grid-cols-3 gap-8">
            {[1,2,3].map(i => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow p-4">
                <div className="aspect-video bg-gray-100 rounded-xl mb-4 overflow-hidden">
                  <img src={`/images/course-${i}.jpg`} alt="Course" className="w-full h-full object-cover" />
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-primary bg-blue-50 px-3 py-1 rounded-full">Development</span>
                  <span className="font-bold">⭐ 4.8</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Web Development Bootcamp 2024</h3>
                <p className="text-sm text-gray-500 mb-4 border-b border-gray-100 pb-4">Learn the latest technologies from industry experts.</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-xl">$49.99</span>
                  <button className="text-sm font-bold text-primary hover:underline">Enroll Now</button>
                </div>
              </div>
            ))}
         </div>
      </section>
    </div>
  );
}

export default App;
