// src/pages/index.js
import { useState } from 'react';

export default function RuneFlip() {
  const [activeTab, setActiveTab] = useState('create');

  // Inlined components to match PDF exactly
  const UpperPanel = () => (
    <div className="h-full bg-[#0C0D12] flex flex-col items-center pt-10">
      {/* Rune Coin Container */}
      <div className="relative w-72 h-72 mb-8">
        <div className="absolute inset-0 rounded-full border-4 border-[#3FE0D0] 
          flex items-center justify-center bg-[#1A1C2E] coin-shadow">
          {/* Rune Symbols (Heads/Tails) */}
          <span className="text-6xl font-rune text-[#FFD66B]">
            {activeTab === 'heads' ? 'ᚠ' : 'ᚢ'}
          </span>
        </div>
      </div>

      {/* Game Mode Selector */}
      <div className="flex mb-6 bg-[#1E1F2B] rounded-lg p-1">
        <button 
          className={`px-4 py-2 rounded-md ${activeTab === 'create' ? 'bg-[#3FE0D0] text-black' : 'text-[#9F6CFF]'}`}
          onClick={() => setActiveTab('create')}
        >
          Create Game
        </button>
        <button 
          className={`px-4 py-2 rounded-md ${activeTab === 'join' ? 'bg-[#3FE0D0] text-black' : 'text-[#9F6CFF]'}`}
          onClick={() => setActiveTab('join')}
        >
          Join Game
        </button>
        <button 
          className={`px-4 py-2 rounded-md ${activeTab === 'multi' ? 'bg-[#3FE0D0] text-black' : 'text-[#9F6CFF]'}`}
          onClick={() => setActiveTab('multi')}
        >
          Multi-Game
        </button>
      </div>

      {/* Stake Input */}
      <div className="flex items-center mb-8">
        <div className="relative">
          <input 
            type="number" 
            placeholder="0.001" 
            className="bg-[#2D2F42] text-white p-3 rounded-l-lg w-40 pr-10"
            min="0.001"
            step="0.001"
          />
          <span className="absolute right-3 top-3 text-[#9F6CFF]">SOL</span>
        </div>
        <button className="bg-[#FFD66B] text-black px-6 py-3 rounded-r-lg font-bold ml-1">
          {activeTab === 'join' ? 'Join' : 'Flip'}
        </button>
      </div>
    </div>
  );

  const LowerPanel = () => (
    <div className="h-full flex divide-x divide-[#3FE0D0]/20">
      {/* Left Panel - Game History */}
      <div className="w-1/2 bg-[#141625] p-4 overflow-y-auto">
        <h3 className="text-[#FFD66B] text-lg mb-4 font-semibold">Your Matches</h3>
        <div className="space-y-3">
          {Array(5).fill().map((_, i) => (
            <div key={i} className="flex justify-between items-center p-3 bg-[#1E1F2B] rounded-lg border-l-4 border-[#3FE0D0]">
              <div>
                <p className="text-sm text-[#9F6CFF]">#{i+1} • 2 min ago</p>
                <p className="text-white">vs. 7y14...W9j3</p>
              </div>
              <div className="text-right">
                <p className={`font-bold ${i % 2 ? 'text-[#3FE0D0]' : 'text-[#FF5555]'}`}>
                  {i % 2 ? '+0.25 SOL' : '-0.25 SOL'}
                </p>
                <p className="text-xs text-[#9F6CFF]">Fee: 0.0025 SOL</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel - Open Games */}
      <div className="w-1/2 bg-[#141625] p-4 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-[#FFD66B] text-lg font-semibold">Open Games</h3>
          <button className="text-[#3FE0D0] text-sm">Auto-Join</button>
        </div>
        <div className="space-y-3">
          {Array(3).fill().map((_, i) => (
            <div key={i} className="p-3 bg-[#1E1F2B] rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="text-[#9F6CFF]">#{i+1}</span>
                <span className="text-[#FFD66B]">{0.25 + (i*0.25)} SOL</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-[#3FE0D0] mr-2"></div>
                  <span>Waiting...</span>
                </div>
                <button className="bg-[#3FE0D0] hover:bg-[#2FC7B7] text-black px-4 py-1 rounded text-sm font-bold">
                  Join
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-screen">
      {/* Upper Half (60vh) */}
      <div className="flex-1" style={{ height: '60vh' }}>
        <UpperPanel />
      </div>
      
      {/* Lower Half (40vh) */}
      <div className="flex-1" style={{ height: '40vh' }}>
        <LowerPanel />
      </div>
    </div>
  );
}
