export default function ActiveGames() {
  const activeGames = [
    { id: 1, stake: 0.002, opponent: 'SolflareUser...', status: 'Waiting' },
    { id: 2, stake: 0.005, opponent: 'PhantomUser...', status: 'In Progress' },
  ];

  return (
    <div className="flex-1 bg-[#1A1B22] p-4 rounded-lg">
      <h2 className="text-xl mb-2">Active Games</h2>
      <ul className="space-y-2">
        {activeGames.length > 0 ? (
          activeGames.map((game) => (
            <li key={game.id} className="border-b border-gray-700 pb-2">
              <div className="flex justify-between">
                <span>Stake: {game.stake} SOL</span>
                <span>Status: {game.status}</span>
              </div>
              <small className="text-gray-400">{game.opponent}</small>
            </li>
          ))
        ) : (
          <p>No active games.</p>
        )}
      </ul>
    </div>
  );
}
