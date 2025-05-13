import React from 'react';
import { ShieldCheck, Database, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-20 bg-gray-950 text-white overflow-hidden relative">
      {/* Gradient circles */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-900/30 to-teal-900/30 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 mb-4 border border-purple-700/30 rounded-full bg-purple-900/20 text-purple-400 text-sm">
            <span className="mr-2 bg-purple-500 w-2 h-2 rounded-full"></span>
            Decentralized AI Content Protection
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-teal-400 to-blue-500">
            Protect Your AI Creations<br />With Blockchain Security
          </h1>
          
          <p className="text-lg text-gray-300 max-w-3xl mb-8">
            Secure ownership of your AI-generated content on an immutable blockchain ledger.
            Verify authorship, mint NFTs, and monetize your creations with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:opacity-90 transform hover:scale-105 transition duration-300">
              Start Protecting Your Content
            </button>
            <button className="px-8 py-3 rounded-lg border border-gray-700 bg-gray-800/50 text-white font-semibold hover:bg-gray-800 transition">
              Learn How It Works
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-purple-700/50 hover:shadow-purple-900/20 hover:shadow-lg transition duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Authorship Verification</h3>
            <p className="text-gray-400">
              Our system uses advanced algorithms to verify AI-generated content and identify the creator through model fingerprinting.
            </p>
          </div>
          
          <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-teal-700/50 hover:shadow-teal-900/20 hover:shadow-lg transition duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-blue-500 rounded-lg flex items-center justify-center mb-4">
              <Database className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Blockchain Ledger</h3>
            <p className="text-gray-400">
              Register ownership and timestamps on a tamper-proof, decentralized ledger that prevents unauthorized claims.
            </p>
          </div>
          
          <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-orange-700/50 hover:shadow-orange-900/20 hover:shadow-lg transition duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-500 rounded-lg flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">NFT Integration</h3>
            <p className="text-gray-400">
              Mint your AI-generated works as NFTs, enabling easy monetization and transfer of ownership in marketplaces.
            </p>
          </div>
        </div>
        
        <div className="relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
          <div className="relative p-8">
            <div className="w-full h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <span className="text-sm font-medium text-gray-400">Interactive Demo</span>
                <h3 className="text-xl font-bold text-white">Blockchain Visualization Coming Soon</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;