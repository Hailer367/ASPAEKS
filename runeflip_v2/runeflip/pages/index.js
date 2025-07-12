import Head from 'next/head';
import Coin from '../components/Coin';
import WalletConnection from '../components/WalletConnection';
import GameHistory from '../components/GameHistory';
import ActiveGames from '../components/ActiveGames';
import { useState } from 'react';

export default function Home() {
  const [isFlipping, setIsFlipping] = useState(false);
  const [result, setResult] = useState(null);
  const [stake, setStake] = useState(0.001);
  const [selectedSide, setSelectedSide] = useState('heads');

  const flipCoin = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setIsFlipping(false);
      setResult(Math.random() > 0.5 ? 'heads' : 'tails');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0C0D12] text-white flex flex-col p-4">
      <Head>
        <title>RuneFlip - Solana Coin Game</title>
        <meta name="description" content="Fast-paced Solana coin flipping game" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <WalletConnection />

      {/* Upper Interactive Zone */}
      <div className="flex flex-col items-center mt-8">
        <h1 className="text-3xl font-bold mb-6">RuneFlip</h1>
        <Coin isFlipping={isFlipping} result={result} />

        <div className="mt-6 w-full max-w-md">
          <div className="flex justify-around mb-4">
            <button
              onClick={() => setSelectedSide('heads')}
              className={`px-6 py-2 rounded-lg ${
                selectedSide === 'heads'
                  ? 'bg-[#3FE0D0] text-black'
                  : 'bg-[#1A1B22]'
              }`}
            >
              HEADS
            </button>
            <button
              onClick={() => setSelectedSide('tails')}
              className={`px-6 py-2 rounded-lg ${
                selectedSide === 'tails'
                  ? 'bg-[#9F6CFF] text-black'
                  : 'bg-[#1A1B22]'
              }`}
            >
              TAILS
            </button>
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Stake Amount (SOL)</label>
            <input
              type="number"
              min="0.001"
              step="0.001"
              value={stake}
              onChange={(e) => setStake(parseFloat(e.target.value))}
              className="w-full p-2 rounded bg-[#1A1B22] border border-gray-600"
            />
          </div>

          <div className="flex gap-4">
            <button
              onClick={flipCoin}
              disabled={isFlipping}
              className="flex-1 px-4 py-3 bg-[#3FE0D0] text-black font-bold rounded-lg"
            >
              Flip Coin
            </button>
            <button
              onClick={() => alert('Create Game logic coming soon...')}
              className="flex-1 px-4 py-3 bg-[#9F6CFF] text-black font-bold rounded-lg"
            >
              Create Game
            </button>
          </div>
        </div>
      </div>

      {/* Lower Info Panels */}
      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <GameHistory />
        <ActiveGames />
      </div>
    </div>
  );
}
