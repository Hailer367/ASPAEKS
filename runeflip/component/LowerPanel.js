export default function LowerPanel() {
  return (
    <div className="h-full flex divide-x divide-[#3FE0D0]/30">
      {/* Left Panel - History (50%) */}
      <div className="w-1/2 bg-[#1A1C2E] p-4 overflow-y-auto">
        <h3 className="text-[#FFD66B] mb-4">Rune History</h3>
        <div className="space-y-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex justify-between p-2 bg-[#2D2F42]/50 rounded">
              <span>Heads</span>
              <span className="text-[#3FE0D0]">0.5 SOL</span>
              <span className="text-[#FFD66B]">Winner</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel - Open Games (50%) */}
      <div className="w-1/2 bg-[#1A1C2E] p-4 overflow-y-auto">
        <h3 className="text-[#FFD66B] mb-4">Active Runes</h3>
        <div className="space-y-2">
          {[...Array(3)].map((_, i) => (
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
}
