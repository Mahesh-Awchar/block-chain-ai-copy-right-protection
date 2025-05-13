import React from 'react';
import { CheckCircle, Lock, Eye, CreditCard, Shield, Award } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-400">
            Powerful Features for Content Protection
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our platform provides a comprehensive set of tools for securing, verifying,
            and monetizing AI-generated content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Shield className="w-6 h-6 text-white" />}
            title="Content Fingerprinting"
            description="Unique digital signatures identify your content across the web, preventing unauthorized use."
            color="from-purple-600 to-indigo-600"
          />
          
          <FeatureCard 
            icon={<Lock className="w-6 h-6 text-white" />}
            title="Immutable Records"
            description="Once registered, your ownership claims are permanently stored on the blockchain."
            color="from-teal-600 to-blue-600"
          />
          
          <FeatureCard 
            icon={<Eye className="w-6 h-6 text-white" />}
            title="Transparent Verification"
            description="Anyone can verify the authenticity and ownership of content without intermediaries."
            color="from-orange-600 to-red-600"
          />
          
          <FeatureCard 
            icon={<CreditCard className="w-6 h-6 text-white" />}
            title="Monetization Options"
            description="Sell your content as NFTs or license usage rights directly through the platform."
            color="from-pink-600 to-purple-600"
          />
          
          <FeatureCard 
            icon={<CheckCircle className="w-6 h-6 text-white" />}
            title="Automated Monitoring"
            description="Our system continuously scans for unauthorized usage of your registered content."
            color="from-blue-600 to-indigo-600"
          />
          
          <FeatureCard 
            icon={<Award className="w-6 h-6 text-white" />}
            title="Creator Credentials"
            description="Build a verified portfolio of your AI creations with timestamps and authenticity proofs."
            color="from-emerald-600 to-teal-600"
          />
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, color }) => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-gray-600 hover:shadow-lg transition duration-300">
      <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default Features;