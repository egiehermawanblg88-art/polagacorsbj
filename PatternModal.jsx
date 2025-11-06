import React, { useState } from 'react';
import { X, RefreshCw, ExternalLink, Sparkles, Target, TrendingUp, Clock, Wallet, Trophy, Zap } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { generateRandomPattern } from '../mockData';

const PatternModal = ({ game, isOpen, onClose, playLink }) => {
  const [pattern, setPattern] = useState(() => generateRandomPattern());
  const [isShuffling, setIsShuffling] = useState(false);

  const handleRandomize = () => {
    setIsShuffling(true);
    setTimeout(() => {
      setPattern(generateRandomPattern());
      setIsShuffling(false);
    }, 500);
  };

  if (!game) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-maroon-950 via-maroon-900 to-black border-2 border-amber-600/50 shadow-2xl shadow-amber-500/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-amber-400 flex items-center gap-2">
            <Sparkles className="w-6 h-6 animate-pulse" />
            Pola Gacor - {game.name}
            <Sparkles className="w-6 h-6 animate-pulse" />
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Game Image */}
          <div className="relative rounded-lg overflow-hidden border-2 border-amber-600/50 golden-border-animation">
            <img
              src={game.image}
              alt={game.name}
              className="w-full h-64 object-cover"
            />
            <div className="absolute top-2 right-2 bg-amber-500 text-black px-3 py-1 rounded-full font-bold text-sm glow-effect">
              🔥 HOT
            </div>
          </div>

          {/* Pattern Content */}
          <div className={`space-y-4 transition-all duration-500 ${isShuffling ? 'opacity-50 blur-sm' : 'opacity-100 blur-0'}`}>
            {/* RTP & Confidence */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-maroon-900/50 border border-amber-600/30 rounded-lg p-4 golden-line-container">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-amber-400" />
                  <h3 className="font-bold text-amber-400">RTP Aktif</h3>
                </div>
                <p className="text-3xl font-bold text-amber-100">{pattern.rtp}</p>
              </div>
              <div className="bg-maroon-900/50 border border-amber-600/30 rounded-lg p-4 golden-line-container">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <h3 className="font-bold text-green-400">Confidence</h3>
                </div>
                <p className="text-3xl font-bold text-green-300">{pattern.confidence}</p>
              </div>
            </div>

            {/* Spin Pattern */}
            <div className="bg-maroon-900/50 border border-amber-600/30 rounded-lg p-4 golden-line-container">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-amber-400" />
                <h3 className="font-bold text-amber-400">Pola Spin</h3>
              </div>
              <div className="flex gap-2 flex-wrap">
                {pattern.spinPattern.map((spin, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-700 rounded-lg font-bold text-white shadow-lg transform hover:scale-105 transition-transform"
                  >
                    {spin}
                  </div>
                ))}
              </div>
            </div>

            {/* Bet Pattern */}
            <div className="bg-maroon-900/50 border border-amber-600/30 rounded-lg p-4 golden-line-container">
              <div className="flex items-center gap-2 mb-3">
                <Wallet className="w-5 h-5 text-amber-400" />
                <h3 className="font-bold text-amber-400">Pola Taruhan</h3>
              </div>
              <div className="flex gap-2 flex-wrap">
                {pattern.betPattern.map((bet, idx) => (
                  <div
                    key={idx}
                    className={`px-4 py-2 rounded-lg font-bold shadow-lg transform hover:scale-105 transition-transform ${
                      bet === 'Kecil'
                        ? 'bg-gradient-to-r from-green-600 to-green-700 text-white'
                        : bet === 'Sedang'
                        ? 'bg-gradient-to-r from-yellow-600 to-yellow-700 text-white'
                        : 'bg-gradient-to-r from-red-600 to-red-700 text-white'
                    }`}
                  >
                    {bet}
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-maroon-900/50 border border-amber-600/30 rounded-lg p-4 golden-line-container">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-amber-400" />
                  <h3 className="font-bold text-amber-400">Waktu Optimal</h3>
                </div>
                <p className="text-amber-100">{pattern.suggestedTime}</p>
              </div>
              <div className="bg-maroon-900/50 border border-amber-600/30 rounded-lg p-4 golden-line-container">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="w-5 h-5 text-amber-400" />
                  <h3 className="font-bold text-amber-400">Target Kemenangan</h3>
                </div>
                <p className="text-amber-100">{pattern.targetWin}</p>
              </div>
            </div>

            {/* Strategy */}
            <div className="bg-maroon-900/50 border border-amber-600/30 rounded-lg p-4 golden-line-container">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <h3 className="font-bold text-amber-400">Strategi</h3>
              </div>
              <p className="text-amber-100">{pattern.strategy}</p>
            </div>

            {/* Budget */}
            <div className="bg-gradient-to-r from-amber-900/50 to-amber-800/50 border-2 border-amber-500 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Wallet className="w-5 h-5 text-amber-300" />
                <h3 className="font-bold text-amber-300">Modal Minimum</h3>
              </div>
              <p className="text-2xl font-bold text-amber-100">{pattern.minBudget}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              onClick={handleRandomize}
              disabled={isShuffling}
              className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-6 text-lg glow-button"
            >
              <RefreshCw className={`w-5 h-5 mr-2 ${isShuffling ? 'animate-spin' : ''}`} />
              Acak Pola
            </Button>
            <Button
              onClick={() => window.open(playLink || '#', '_blank')}
              className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-6 text-lg glow-button-active"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Main Sekarang
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PatternModal;
