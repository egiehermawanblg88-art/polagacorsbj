import React from 'react';
import { Sparkles } from 'lucide-react';
import { Card } from './ui/card';

const GameCard = ({ game, onClick }) => {
  return (
    <Card
      onClick={() => onClick(game)}
      className="game-card group relative overflow-hidden cursor-pointer border-2 border-amber-600/30 hover:border-amber-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={game.image}
          alt={game.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex items-center justify-center gap-2 text-amber-400">
              <Sparkles className="w-5 h-5 animate-pulse" />
              <span className="font-semibold text-sm">Lihat Pola Gacor</span>
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-3 bg-gradient-to-br from-maroon-900/90 to-maroon-950/90">
        <h3 className="font-bold text-sm text-center text-amber-100 truncate">
          {game.name}
        </h3>
      </div>
      {/* Golden line animation */}
      <div className="golden-line"></div>
    </Card>
  );
};

export default GameCard;
