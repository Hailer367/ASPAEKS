// src/pages/index.js
export default function RuneFlip() {
  // Temporary inlined components to avoid import issues
  const UpperPanel = () => (
    <div className="h-full bg-gradient-to-b from-[#0C0D12] to-[#1A1C2E] flex flex-col items-center justify-center">
      {/* Rune Coin */}
      <div className="relative w-64 h-64 mb-8">
        <div className="absolute inset-0 bg-[#1E1F2B] rounded-full border-4 border-[#3FE0D0] animate-pulse">
          {/* Coin will go here */}
        </div>
      </div>

      {/* Bet Controls */}
      <div className="flex space-x-8">
        <button className="bg-[#3FE0D0] px-6 py-3 rounded-full text-black font-bold">
          Heads
        </button>
        <button className="bg-[#9F6CFF] px-6 py-3 rounded-full text-white font-bold">
          Tails
        </button>
      </div>

      {/* Stake Input */}
      <div className="mt-6 flex items-center">
        <input 
          type="number" 
          placeholder="0.001 SOL" 
          className="bg-[#2D2F42] text-white p-3 rounded-l-lg w-40"
          min="0.001"
          step="0.001"
        />
        <button className="bg-[#FFD66B] text-black px-4 py-3 rounded-r-lg font-bold">
          Flip
        </button>
      </div>
    </div>
  );

  const LowerPanel = () => (
    <div className="h-full flex divide-x divide-[#3FE0D0]/30">
      {/* Left Panel - History */}
      <div className="w-1/2 bg-[#1A1C2E] p-4 overflow-y-auto">
        <h3 className="text-[#FFD66B] mb-4">Rune History</h3>
        <div className="space-y-2">
          {Array(5).fill().map((_, i) => (
            <div key={i} className="flex justify-between p-2 bg-[#2D2F42]/50 rounded">
              <span>Heads</span>
              <span className="text-[#3FE0D0]">0.5 SOL</span>
              <span className="text-[#FFD66B]">Winner</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel - Open Games */}
      <div className="w-1/2 bg-[#1A1C2E] p-4 overflow-y-auto">
        <h3 className="text-[#FFD66B] mb-4">Active Runes</h3>
        <div className="space-y-2">
          {Array(3).fill().map((_, i) => (
            <div key={i} className="flex justify-between items-center p-2 bg-[#2D2F42]/50 rounded">
              <span>Tails</span>
              <span className="text-[#9F6CFF]">1.2 SOL</span>
              <button className="bg-[#3FE0D0] px-3 py-1 rounded text-sm">
                Join
              </button>
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
