import React, { useState, useRef } from 'react';
import { NeoCard } from './ui/NeoCard';
import { NeoButton } from './ui/NeoButton';
import { Upload, AlertTriangle, CheckCircle, Loader2 } from 'lucide-react';
import { analyzeScreenshot } from '../services/geminiService';
import { LoadingState, RoastResponse } from '../types';

export const RoastFeature: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const [result, setResult] = useState<RoastResponse | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
      setStatus(LoadingState.IDLE);
      setResult(null);
    }
  };

  const handleRoast = async () => {
    if (!preview || !file) return;

    setStatus(LoadingState.ANALYZING);
    try {
      const roastResult = await analyzeScreenshot(preview);
      setResult(roastResult);
      setStatus(LoadingState.COMPLETE);
    } catch (error) {
      console.error(error);
      setStatus(LoadingState.ERROR);
    }
  };

  return (
    <div id="roast-ai" className="py-20 bg-neo-black text-neo-white border-y-4 border-black">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-neo-green">
            INSTANT AI ROAST
          </h2>
          <p className="text-xl font-mono max-w-2xl mx-auto">
            Upload a screenshot of your hero section. Our Gemini-powered AI will tear it apart for free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Upload Section */}
          <NeoCard color="white" className="text-black h-full">
            <div 
              className={`border-4 border-dashed border-gray-300 bg-gray-50 rounded-none p-8 flex flex-col items-center justify-center min-h-[300px] cursor-pointer transition-colors ${file ? 'border-neo-green bg-green-50' : 'hover:bg-gray-100'}`}
              onClick={() => fileInputRef.current?.click()}
            >
              {preview ? (
                <img src={preview} alt="Preview" className="max-h-64 object-contain border-2 border-black shadow-neo" />
              ) : (
                <>
                  <Upload size={48} className="mb-4 text-gray-400" />
                  <p className="font-bold text-lg text-center">Click to upload screenshot</p>
                  <p className="text-sm text-gray-500 mt-2 text-center">PNG, JPG up to 5MB</p>
                </>
              )}
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                className="hidden" 
                accept="image/*"
              />
            </div>

            <div className="mt-6">
              <NeoButton 
                fullWidth 
                variant="accent" 
                disabled={!file || status === LoadingState.ANALYZING}
                onClick={handleRoast}
              >
                {status === LoadingState.ANALYZING ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="animate-spin" /> ROASTING...
                  </span>
                ) : "ROAST MY SITE"}
              </NeoButton>
            </div>
            
            {status === LoadingState.ERROR && (
              <p className="mt-4 text-red-600 font-bold text-center bg-red-100 p-2 border-2 border-red-500">
                AI FAILED. API KEY MISSING OR ERROR.
              </p>
            )}
          </NeoCard>

          {/* Results Section */}
          <div className="space-y-6">
             {status === LoadingState.IDLE && !result && (
               <div className="border-4 border-white/20 p-8 h-full flex items-center justify-center text-center text-white/50 font-mono">
                 Waiting for victim...
               </div>
             )}

             {result && (
               <>
                <NeoCard color="yellow" className="text-black transform rotate-1">
                  <div className="flex justify-between items-center border-b-4 border-black pb-4 mb-4">
                    <h3 className="text-2xl font-black">THE VERDICT</h3>
                    <div className="text-4xl font-black bg-black text-white px-3 py-1 transform -rotate-3">
                      {result.score}/10
                    </div>
                  </div>
                  <ul className="space-y-4">
                    {result.critique.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <AlertTriangle className="flex-shrink-0 text-red-600 mt-1" />
                        <span className="font-mono font-bold text-sm md:text-base leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                </NeoCard>

                <NeoCard color="green" className="text-black transform -rotate-1">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="text-black" />
                    <h3 className="text-xl font-black">QUICK FIX</h3>
                  </div>
                  <p className="font-mono text-lg border-l-4 border-black pl-4 py-2 bg-white/50">
                    {result.fix}
                  </p>
                </NeoCard>

                <div className="text-center mt-8">
                  <p className="mb-4 font-bold">Want a full human audit?</p>
                  <NeoButton variant="secondary" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth'})}>
                    GET THE REAL DEAL
                  </NeoButton>
                </div>
               </>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};