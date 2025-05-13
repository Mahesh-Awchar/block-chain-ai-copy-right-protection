import React, { useState } from 'react';
import { FileUp, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const AIVerification: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [verifying, setVerifying] = useState(false);
  const [verified, setVerified] = useState<boolean | null>(null);
  const [stats, setStats] = useState<any | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      
      // Create a preview for images
      if (selectedFile.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setPreview(event.target?.result as string);
        };
        reader.readAsDataURL(selectedFile);
      } else {
        setPreview(null);
      }
      
      // Reset verification state
      setVerified(null);
      setStats(null);
    }
  };

  const handleVerify = () => {
    if (!file) return;
    
    setVerifying(true);
    
    // Simulate verification process
    setTimeout(() => {
      // Simulate a successful verification
      setVerified(true);
      setStats({
        confidence: 96.8,
        model: "Stable Diffusion XL",
        creator: "0x7F5E...9A3D",
        creationDate: "2025-02-15 09:23:41 UTC",
        registered: true,
        nftStatus: "Minted",
      });
      setVerifying(false);
    }, 2500);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-400">
              AI Content Verification
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Upload any AI-generated content to verify its authenticity, check ownership, 
              and view blockchain registration details.
            </p>
          </div>
          
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                {!preview ? (
                  <div 
                    className="h-64 border-2 border-dashed border-gray-600 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-purple-500 transition-colors"
                    onClick={() => document.getElementById('file-upload')?.click()}
                  >
                    <FileUp className="w-12 h-12 text-gray-400 mb-3" />
                    <p className="text-gray-300 font-medium">
                      Drag and drop or click to upload
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      Supports images, audio, text, and video files
                    </p>
                    <input
                      id="file-upload"
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </div>
                ) : (
                  <div className="relative group">
                    <img 
                      src={preview} 
                      alt="Content preview" 
                      className="h-64 w-full object-cover rounded-lg"
                    />
                    <div 
                      className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-lg"
                      onClick={() => document.getElementById('file-upload')?.click()}
                    >
                      <p className="text-white">Change file</p>
                      <input
                        id="file-upload"
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </div>
                  </div>
                )}
                
                <button
                  onClick={handleVerify}
                  disabled={!file || verifying}
                  className={`w-full mt-4 py-3 rounded-lg font-medium flex items-center justify-center ${
                    !file || verifying
                      ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90 transition'
                  }`}
                >
                  {verifying ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    'Verify Content'
                  )}
                </button>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6">
                {verified === null ? (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <p className="text-gray-400">
                      Upload and verify content to see AI verification results and blockchain registration details
                    </p>
                  </div>
                ) : verified ? (
                  <div>
                    <div className="flex items-center space-x-2 text-green-500 mb-4">
                      <CheckCircle className="w-6 h-6" />
                      <span className="font-semibold text-lg">Verified AI Content</span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">AI Confidence:</span>
                        <span className="text-white font-medium">{stats.confidence}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">AI Model:</span>
                        <span className="text-white font-medium">{stats.model}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Creator:</span>
                        <span className="text-white font-medium">{stats.creator}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Creation Date:</span>
                        <span className="text-white font-medium">{stats.creationDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Blockchain Registered:</span>
                        <span className="text-green-500 font-medium">Yes</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">NFT Status:</span>
                        <span className="text-purple-400 font-medium">{stats.nftStatus}</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-gray-700">
                      <button className="w-full py-2 rounded bg-gray-700 text-white hover:bg-gray-600 transition">
                        View on Blockchain
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center space-x-2 text-red-500 mb-4">
                      <AlertCircle className="w-6 h-6" />
                      <span className="font-semibold text-lg">Unverified Content</span>
                    </div>
                    <p className="text-gray-400">
                      This content could not be verified as AI-generated or is not registered on the blockchain.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIVerification;