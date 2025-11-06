import React, { useState, useMemo } from 'react';
import { Search, Sparkles } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Input } from '../components/ui/input';
import GameCard from '../components/GameCard';
import PatternModal from '../components/PatternModal';
import { providers, games } from '../mockData';

const Home = () => {
  const [selectedProvider, setSelectedProvider] = useState('pragmatic');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGame, setSelectedGame] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentGames = useMemo(() => {
    const gameList = games[selectedProvider] || [];
    if (!searchQuery) return gameList;
    return gameList.filter(game =>
      game.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [selectedProvider, searchQuery]);

  const handleGameClick = (game) => {
    setSelectedGame(game);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-maroon-950 to-maroon-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-maroon-950/80 border-b-2 border-amber-600/50 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 mb-2 animate-pulse">
              🎰 POLA GACOR SLOT 🎰
            </h1>
            <p className="text-amber-200 text-lg">Temukan Pola Kemenangan Terbaik</p>
          </div>

          {/* Controls */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="w-full md:w-64">
              <Select value={selectedProvider} onValueChange={setSelectedProvider}>
                <SelectTrigger className="bg-maroon-900 border-2 border-amber-600/50 text-amber-100 font-semibold hover:border-amber-500 transition-colors h-12">
                  <SelectValue placeholder="Pilih Provider" />
                </SelectTrigger>
                <SelectContent className="bg-maroon-900 border-2 border-amber-600/50">
                  {providers.map((provider) => (
                    <SelectItem
                      key={provider.id}
                      value={provider.id}
                      className="text-amber-100 hover:bg-maroon-800 focus:bg-maroon-800 cursor-pointer"
                    >
                      {provider.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Cari game..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-maroon-900 border-2 border-amber-600/50 text-amber-100 placeholder:text-amber-400/50 focus:border-amber-500 h-12"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-amber-400 flex items-center gap-2">
            <Sparkles className="w-6 h-6" />
            {providers.find(p => p.id === selectedProvider)?.name}
            <span className="text-amber-200 text-lg">({currentGames.length} Game)</span>
          </h2>
        </div>

        {currentGames.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-amber-300 text-xl">Tidak ada game ditemukan</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {currentGames.map((game) => (
              <GameCard key={game.id} game={game} onClick={handleGameClick} />
            ))}
          </div>
        )}
      </main>

      {/* Pattern Modal */}
      <PatternModal
        game={selectedGame}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        playLink="#" // Placeholder, will be replaced later
      />

      {/* Footer */}
      <footer className="mt-16 py-8 border-t-2 border-amber-600/50 bg-maroon-950/80">
        <div className="container mx-auto px-4 text-center">
          <p className="text-amber-300">⚠️ Disclaimer: Gunakan pola dengan bijak. Hasil tidak dijamin 100%.</p>
          <p className="text-amber-400/70 mt-2 text-sm">© 2025 Pola Gacor Slot. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
