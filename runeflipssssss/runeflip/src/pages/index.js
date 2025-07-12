import UpperPanel from '../components/UpperPanel';
import LowerPanel from '../components/LowerPanel';

export default function RuneFlip() {
  return (
    <div className="h-screen flex flex-col">
      {/* Upper Half - Interactive Zone (60% height) */}
      <div className="flex-1" style={{ height: '60vh' }}>
        <UpperPanel />
      </div>

      {/* Lower Half - Information Panels (40% height) */}
      <div className="flex-1" style={{ height: '40vh' }}>
        <LowerPanel />
      </div>
    </div>
  );
}// Main Game UI
