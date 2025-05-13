import React, { useState } from 'react';
import { ImageIcon, DollarSign, Tag, Clock } from 'lucide-react';

const NFTMinting: React.FC = () => {
  const [price, setPrice] = useState("0.5");
  const [royalty, setRoyalty] = useState("10");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [minting, setMinting] = useState(false);

  const handleMint = () => {
    if (!name || !description) return;
    
    setMinting(true);
    
    // Simulate minting process
    setTimeout(() => {
      setMinting(false);
      // Here you would redirect to success page or show success modal
      alert("NFT minted successfully!");
    }, 2000);
  };

  return (
    <section className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-400">
              Mint Your AI Creation as NFT
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Turn your blockchain-registered AI content into an NFT that can be sold or 
              licensed in marketplaces.
            </p>
          </div>
          
          <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="bg-gray-800 border border-gray-700 rounded-lg p-3 mb-4">
                    <div className="aspect-square bg-gray-700 rounded flex items-center justify-center">
                      <ImageIcon className="w-12 h-12 text-gray-500" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Price (ETH)</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <DollarSign className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="number"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                          className="bg-gray-800 border border-gray-700 rounded-lg py-2 pl-10 pr-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="0.5"
                          step="0.01"
                          min="0"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Royalty (%)</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Tag className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="number"
                          value={royalty}
                          onChange={(e) => setRoyalty(e.target.value)}
                          className="bg-gray-800 border border-gray-700 rounded-lg py-2 pl-10 pr-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="10"
                          step="1"
                          min="0"
                          max="50"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Duration</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Clock className="h-5 w-5 text-gray-400" />
                        </div>
                        <select className="bg-gray-800 border border-gray-700 rounded-lg py-2 pl-10 pr-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                          <option>7 days</option>
                          <option>14 days</option>
                          <option>30 days</option>
                          <option>No expiration</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">NFT Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-gray-800 border border-gray-700 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Enter a name for your NFT"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Description</label>
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={4}
                        className="bg-gray-800 border border-gray-700 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Describe your AI-generated creation"
                      ></textarea>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Properties</label>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <input
                            type="text"
                            className="bg-gray-800 border border-gray-700 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="Property name"
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            className="bg-gray-800 border border-gray-700 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="Property value"
                          />
                        </div>
                      </div>
                      <button className="mt-2 text-sm text-purple-400 hover:text-purple-300">
                        + Add more properties
                      </button>
                    </div>
                    
                    <div className="pt-4">
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <span>Transaction Fee:</span>
                        <span>0.005 ETH</span>
                      </div>
                      
                      <button
                        onClick={handleMint}
                        disabled={!name || !description || minting}
                        className={`w-full py-3 rounded-lg font-medium ${
                          !name || !description || minting
                            ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90 transition'
                        }`}
                      >
                        {minting ? 'Minting...' : 'Mint NFT'}
                      </button>
                      
                      <p className="mt-3 text-xs text-gray-500 text-center">
                        By minting, you confirm that you own the rights to this AI-generated content
                        and agree to our terms of service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFTMinting;