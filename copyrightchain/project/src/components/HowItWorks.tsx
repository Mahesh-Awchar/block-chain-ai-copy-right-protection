import React from 'react';
import { Upload, Database, Award, Repeat } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-gray-950 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute left-0 top-1/4 w-64 h-64 bg-purple-900/20 rounded-full blur-3xl"></div>
      <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-teal-900/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-400">
            How CopyrightChain Works
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our blockchain-based system makes it easy to protect your AI-generated content
            in just a few simple steps.
          </p>
        </div>
        
        <div className="flex flex-col">
          <Step 
            number={1}
            icon={<Upload className="w-6 h-6 text-white" />}
            title="Upload Your Content"
            description="Upload your AI-generated content to our platform. We support images, text, audio, and video files."
            color="from-purple-600 to-indigo-600"
            isLast={false}
          />
          
          <Step 
            number={2}
            icon={<Database className="w-6 h-6 text-white" />}
            title="Secure on Blockchain"
            description="Your content is analyzed, fingerprinted, and securely recorded on the blockchain with a timestamp and your verified credentials."
            color="from-teal-600 to-blue-600"
            isLast={false}
          />
          
          <Step 
            number={3}
            icon={<Award className="w-6 h-6 text-white" />}
            title="Mint as NFT (Optional)"
            description="Choose to mint your creation as an NFT for additional ownership benefits and easy marketplace integration."
            color="from-orange-600 to-red-600"
            isLast={false}
          />
          
          <Step 
            number={4}
            icon={<Repeat className="w-6 h-6 text-white" />}
            title="Verify Anytime"
            description="Anyone can verify the authenticity and ownership of your content using our public verification tool."
            color="from-pink-600 to-purple-600"
            isLast={true}
          />
        </div>
      </div>
    </section>
  );
};

interface StepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  isLast: boolean;
}

const Step: React.FC<StepProps> = ({ number, icon, title, description, color, isLast }) => {
  return (
    <div className="flex items-start">
      <div className="flex flex-col items-center mr-6">
        <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-full flex items-center justify-center z-10`}>
          {icon}
        </div>
        {!isLast && (
          <div className="w-0.5 h-24 bg-gradient-to-b from-gray-700 to-gray-800"></div>
        )}
      </div>
      
      <div className="flex-1 pb-16">
        <div className="flex items-center mb-2">
          <span className="text-xl font-bold text-gray-400 mr-2">0{number}</span>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default HowItWorks;