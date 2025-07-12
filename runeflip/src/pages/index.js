

// USE THIS EXACT IMPORT PATH
import UpperPanel from '../../components/UpperPanel';
import LowerPanel from '../../components/LowerPanel';
export default function RuneFlip() {
  return (
    <div className="flex flex-col h-screen">
      {/* Upper Half (60vh) - Interactive Coin Zone */}
      <div className="flex-1" style={{ height: '60vh' }}>
        <UpperPanel />
      </div>
      
      {/* Lower Half (40vh) - Info Panels */}
      <div className="flex-1" style={{ height: '40vh' }}>
        <LowerPanel />
      </div>
    </div>
  );
}
