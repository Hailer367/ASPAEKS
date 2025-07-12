export default function GameHistory() {
  const dummyHistory = [
    { id: 1, outcome: 'Win', side: 'Heads', amount: 0.002 },
    { id: 2, outcome: 'Loss', side: 'Tails', amount: 0.001 },
    { id: 3, outcome: 'Win', side: 'Tails', amount: 0.003 },
  ];

  return (
    <div className="flex-1 bg-[#1A1B22] p-4 rounded-lg">
      <h2 className="text-xl mb-2">Game History</h2>
      <ul className="space-y-2">
        {dummyHistory.map((game) => (
          <li key={game.id} className="border-b border-gray-700 pb-2">
            <div className="flex justify-between">
              <span>{game.outcome}: {game.side}</span>
              <span className={game.outcome === 'Win' ? 'text-green-400' : 'text-red-400'}>
                {game.amount} SOL
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}// Match History UI
