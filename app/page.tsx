import { LaunchBtn } from "@/components/CtaBtn";
import ShoutOutMarque from "@/components/ShoutOutsMarque";
import { LandingPageCommand } from "@/components/Command";

export default function Home() {
  return (
    <div
      className="flex flex-col lowercase bg-white m-0 p-0 text-black items-center"
      style={{
        backgroundImage: "url('/top-left-right.svg')",
        backgroundSize: "cover",
      }}
    >
      {/* Hero Section */}
      <div className="flex w-full h-screen overflow-y-hidden">
        <div
          className="w-[70%] h-full flex flex-col items-center px-8 pt-12"
          style={{ backgroundImage: "url('./right.svg')" }}
        >
          <h1 className="text-7xl font-bold leading-tight">
            Power UP Your Project with <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Community Votes</span>
          </h1>
          <span className="mt-5 text-slate-400 pr-7 text-base">
            Unleash your student projects, hackathon innovations, or personal creations on FlashHub. Share effortlessly, gather votes, gain AI-driven insights, and inspire a global audience—all from a single, trusted platform!
          </span>
          <LandingPageCommand />
        </div>
        <div className="w-[30%] h-full flex items-center flex-col overflow-hidden">
          <div className="px-1 pt-4 w-full flex flex-col">
            {/* Modified Spotlight header with full-width underline */}
            <div className="flex justify-between items-center w-full relative">
              <h3 className="text-xl lowercase font-medium">
              Spotlight
              </h3>
              <div className="flex items-center space-x-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                </span>
                <span className="text-sm text-gray-500">Live</span>
              </div>
              {/* Full-width underline that spans across the entire card */}
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></span>
            </div>
            
            <div
              className="w-full h-1 mt-4"
              style={{
                backgroundImage: "url('/top.svg')",
              }}
            ></div>
          </div>
          <ShoutOutMarque />
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full py-20 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            why <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">flashhub</span>?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">global exposure</h3>
              <p className="text-slate-500">reach a community of developers, creators, and innovators from around the world</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">ai-powered insights</h3>
              <p className="text-slate-500">get intelligent feedback and analytics to improve your projects</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">community voting</h3>
              <p className="text-slate-500">gain recognition through transparent voting from real users</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* How It Works Section */}
      <div className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            how it <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">works</span>
          </h2>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Steps */}
            <div className="md:w-1/2 space-y-10 pr-10">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-gradient-to-r from-indigo-500 to-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">create your project</h3>
                  <p className="text-slate-500">upload your project with description, screenshots, and links</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-gradient-to-r from-indigo-500 to-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">share with community</h3>
                  <p className="text-slate-500">share your project link with your network or discover new audiences</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-gradient-to-r from-indigo-500 to-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">collect votes & feedback</h3>
                  <p className="text-slate-500">get real user feedback and track your project&apos;s performance</p>
                </div>
              </div>
            </div>
            
            {/* Dashboard Card - Updated with hackathon-relevant content */}
            <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
              <div className="w-full max-w-md rounded-lg shadow-lg overflow-hidden border border-indigo-100">
                {/* Card Header */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4">
                  <h3 className="text-xl font-semibold text-white">live project dashboard and analytics</h3>
                </div>
                
                {/* Dashboard Image Container */}
                <div className="bg-white p-4">
                  {/* Replace with your actual dashboard image */}
                  <img 
                    src="/Screenshot 2025-04-10 at 11.16.09 PM.png" 
                    alt="Project Analytics Dashboard" 
                    className="w-full rounded shadow-sm"
                  />
                </div>
                
                {/* Stats Footer - Updated with hackathon content */}
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 px-6 py-4 flex justify-between items-center">
                  <div>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-indigo-600">24</span>
                      <span className="ml-1 text-lg text-indigo-400">hours</span>
                    </div>
                    <p className="text-slate-600">from idea to featured project</p>
                  </div>
                  <div className="bg-indigo-100 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="w-full py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">ready to showcase your project?</h2>
          <p className="text-indigo-100 mb-10 max-w-2xl mx-auto">join thousands of creators who are already gaining recognition and valuable feedback on flashhub</p>
          
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-md font-medium hover:bg-indigo-50 transition-colors">
            get started now
          </button>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="w-full py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <div className="text-xl font-bold text-indigo-600 mb-2">flashhub</div>
              <p className="text-slate-500 text-sm">© 2025 flashhub. all rights reserved.</p>
            </div>
            
            <div className="flex space-x-8">
              <a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">about</a>
              <a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">privacy</a>
              <a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">terms</a>
              <a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}