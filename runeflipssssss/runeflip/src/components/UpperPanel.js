export default function UpperPanel() {
  return (
    <div className="h-full bg-gradient-to-b from-[#0C0D12] to-[#1A1C2E] flex flex-col items-center justify-center">
      {/* Pulsing Rune Coin */}
      <div className="relative w-64 h-64 mb-8">
        <div className="absolute inset-0 bg-[url('/rune-coin.png')] bg-contain animate-pulse"></div>
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
}
