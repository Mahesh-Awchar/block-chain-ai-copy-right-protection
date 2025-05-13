import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import AIVerification from '../components/AIVerification';
import NFTMinting from '../components/NFTMinting';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <AIVerification />
        <NFTMinting />
      </main>
      <Footer />
    </div>
  );
};

export default Home;