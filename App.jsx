import React, { useState, useEffect, useRef } from 'react';
import { Heart, Stars, Lock, Terminal, Image as ImageIcon, Music, Play, Pause, ChevronRight, X, Gift } from 'lucide-react';

// --- CONFIGURATION ---
// You can replace these placeholder images with your sister's photo URLs
const MEMORIES = [
  { id: 1, url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600', caption: "Your Radiant Smile!" },
  { id: 2, url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600', caption: "Always the Coolest." },
  { id: 3, url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600', caption: "The Best Advisor." },
  { id: 4, url: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600', caption: "Memories to Cherish." },
  { id: 5, url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600', caption: "To my Inspiration." },
  { id: 6, url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600', caption: "Growing up together." },
];

const App = () => {
  const [stage, setStage] = useState('lock'); // lock, terminal, vault
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const terminalEndRef = useRef(null);

  // Terminal logic
  const runTerminal = () => {
    setStage('terminal');
    const messages = [
      "> Initializing Birthday_Sequence_2026...",
      "> Locating server: MY_LOVELY_SISTER_DATABASE",
      "> Status: ACCESS GRANTED (Admin Level)",
      "> Loading high_resolution_smiles.dll...",
      "> Decrypting core_memories.zip...",
      "> Bypassing 'Annoying_Brother' firewall...",
      "> Success! Preparing visual interface...",
      "> System ready. Welcome, Elder Sister."
    ];

    messages.forEach((msg, i) => {
      setTimeout(() => {
        setLogs(prev => [...prev, msg]);
      }, i * 800);
    });

    setTimeout(() => setStage('vault'), messages.length * 850);
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-pink-500 selection:text-white">
      
      {/* --- STAGE 1: THE LOCK SCREEN --- */}
      {stage === 'lock' && (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-8 animate-in fade-in duration-1000">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 animate-pulse"></div>
            <div className="relative bg-slate-900 p-8 rounded-full">
              <Lock className="w-12 h-12 text-pink-500" />
            </div>
          </div>
          
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
              System: Locked
            </h1>
            <p className="text-slate-400">Enter the secret passcode to access your surprise.</p>
            <p className="text-xs text-slate-600 italic">(Hint: It's your birthday DDMM)</p>
          </div>

          <div className="flex space-x-2">
            <input 
              type="text" 
              placeholder="####"
              maxLength={4}
              className="bg-slate-900 border border-slate-700 px-4 py-2 rounded-lg text-center text-2xl tracking-widest focus:ring-2 focus:ring-pink-500 outline-none w-32"
              value={input}
              onChange={(e) => {
                const val = e.target.value;
                setInput(val);
                if(val === '2802') runTerminal();
              }}
            />
          </div>
        </div>
      )}

      {/* --- STAGE 2: THE TERMINAL --- */}
      {stage === 'terminal' && (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 font-mono text-sm md:text-base">
          <div className="w-full max-w-2xl bg-black border border-slate-800 rounded-lg shadow-2xl overflow-hidden">
            <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-slate-500 text-xs">root@brother-pc: ~/birthday-script</span>
            </div>
            <div className="p-6 space-y-2 h-80 overflow-y-auto scrollbar-hide">
              {logs.map((log, i) => (
                <div key={i} className="text-emerald-400">
                  {log}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>
          </div>
        </div>
      )}

      {/* --- STAGE 3: THE MEMORY VAULT --- */}
      {stage === 'vault' && (
        <div className="animate-in fade-in zoom-in duration-1000 pb-20">
          {/* Header */}
          <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 p-6 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Heart className="text-pink-500 fill-pink-500 w-6 h-6 animate-bounce" />
              <h2 className="text-xl font-bold italic tracking-wider">HBD SISTER!</h2>
            </div>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 bg-pink-600 rounded-full hover:bg-pink-500 transition-colors shadow-lg shadow-pink-500/20"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
          </header>

          <main className="max-w-6xl mx-auto p-6 space-y-16 mt-8">
            {/* Hero Message */}
            <section className="text-center space-y-6">
              <div className="inline-block px-4 py-1 rounded-full bg-pink-500/10 text-pink-400 text-sm font-medium border border-pink-500/20">
                February 28, 2026
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold">
                Happy Birthday to my <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                  Amazing Elder Sister
                </span>
              </h1>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                Since I'm a CSE student, I couldn't just give you a card. I built you a private digital archive of our best moments. You are the best mentor, friend, and sister anyone could ask for.
              </p>
            </section>

            {/* Photo Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MEMORIES.map((photo) => (
                <div 
                  key={photo.id}
                  className="group relative aspect-square overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 cursor-pointer hover:border-pink-500/50 transition-all duration-500"
                  onClick={() => setSelectedImg(photo)}
                >
                  <img 
                    src={photo.url} 
                    alt={photo.caption} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                    <p className="text-pink-400 text-sm font-mono mb-1">#Memory_{photo.id}</p>
                    <p className="font-semibold text-white">{photo.caption}</p>
                  </div>
                </div>
              ))}
            </section>

            {/* Feature Cards */}
            <section className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-3xl hover:bg-slate-900 transition-colors group">
                <div className="w-12 h-12 bg-pink-500/20 rounded-2xl flex items-center justify-center mb-6 text-pink-500 group-hover:scale-110 transition-transform">
                  <Stars />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">The Spark</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  You’ve always been the one to light up the way. Thanks for guiding me through life (and debugging my first codes).
                </p>
              </div>
              <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-3xl hover:bg-slate-900 transition-colors group">
                <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 text-purple-500 group-hover:scale-110 transition-transform">
                  <Gift />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">The Support</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  More than just a sister, you're the best support system. Always stable, never crashing!
                </p>
              </div>
              <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-3xl hover:bg-slate-900 transition-colors group">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 text-indigo-500 group-hover:scale-110 transition-transform">
                  <Terminal />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">The Tech Side</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Built with React & TailWind, just for you. Every line of code represents a happy memory we share.
                </p>
              </div>
            </section>
          </main>

          {/* Modal for Image Preview */}
          {selectedImg && (
            <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300">
              <button 
                className="absolute top-6 right-6 text-white hover:text-pink-500"
                onClick={() => setSelectedImg(null)}
              >
                <X size={40} />
              </button>
              <div className="max-w-4xl w-full flex flex-col md:flex-row gap-8 items-center">
                <img 
                  src={selectedImg.url} 
                  className="w-full md:w-2/3 h-auto max-h-[70vh] object-contain rounded-xl shadow-2xl shadow-pink-500/10"
                />
                <div className="flex-1 space-y-4">
                  <h2 className="text-3xl font-bold text-pink-400">Memory Details</h2>
                  <p className="text-xl text-slate-300 italic">"{selectedImg.caption}"</p>
                  <div className="h-px bg-slate-800 w-full" />
                  <p className="text-slate-500 text-sm">
                    Time: Somewhere in our beautiful past.<br/>
                    Status: Stored in high-priority cache forever.
                  </p>
                </div>
              </div>
            </div>
          )}

          <footer className="text-center py-20 text-slate-500 text-sm">
            <p>© 2026 Developed with ❤️ by your favorite CSE Brother</p>
          </footer>
        </div>
      )}

      {/* Music Playing Indicator */}
      {isPlaying && (
        <div className="fixed bottom-6 right-6 z-[60] flex items-center space-x-2 bg-slate-900/90 border border-slate-800 px-4 py-2 rounded-full backdrop-blur-sm animate-bounce">
          <div className="flex space-x-1 items-end h-4">
            <div className="w-1 bg-pink-500 h-2 animate-pulse" />
            <div className="w-1 bg-pink-500 h-4 animate-pulse delay-75" />
            <div className="w-1 bg-pink-500 h-3 animate-pulse delay-150" />
          </div>
          <span className="text-xs font-medium text-pink-400">Sister_Fav_Song.mp3</span>
        </div>
      )}
    </div>
  );
};

export default App;
