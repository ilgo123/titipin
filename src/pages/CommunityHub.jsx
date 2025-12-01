import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Trophy, Gift, Zap, User, Crown, Medal } from 'lucide-react';

export default function CommunityHub() {
  const [activeTab, setActiveTab] = useState('leaderboard'); // 'leaderboard' or 'rewards'
  const [hematCount, setHematCount] = useState(12500000); // Simulasi angka berjalan

  // Animasi angka "Total Hemat"
  useEffect(() => {
    const interval = setInterval(() => {
      setHematCount(prev => prev + Math.floor(Math.random() * 10000));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-md mx-auto min-h-screen bg-white flex flex-col relative">
      
      {/* Header Mewah */}
      <div className="bg-slate-900 text-white p-6 pb-12 rounded-b-[2.5rem] relative overflow-hidden shadow-2xl z-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#10B981]/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
        
        <div className="flex justify-between items-center mb-6 relative z-10">
            <Link to="/start" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><ChevronLeft/></Link>
            <h1 className="font-black text-lg tracking-wide">TITIP CLUB</h1>
            <div className="flex items-center gap-1 bg-yellow-500/20 px-3 py-1 rounded-full border border-yellow-500/50">
                <span className="text-yellow-400 font-bold text-xs">1.250 Poin</span>
            </div>
        </div>

        <div className="text-center relative z-10 mb-4">
            <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">Total Ongkir Dihemat Komunitas</p>
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-[#10B981]">
                Rp {hematCount.toLocaleString()}
            </h2>
        </div>
      </div>

      {/* Tab Switcher */}
      <div className="px-6 -mt-6 relative z-20">
        <div className="bg-white p-1 rounded-2xl shadow-lg border border-gray-100 flex">
            <button 
                onClick={() => setActiveTab('leaderboard')}
                className={`flex-1 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${activeTab === 'leaderboard' ? 'bg-slate-900 text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
            >
                <Trophy size={16}/> Peringkat
            </button>
            <button 
                onClick={() => setActiveTab('rewards')}
                className={`flex-1 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${activeTab === 'rewards' ? 'bg-slate-900 text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
            >
                <Gift size={16}/> Tukar Poin
            </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6 bg-gray-50">
        <AnimatePresence mode='wait'>
            
            {/* --- TAB LEADERBOARD --- */}
            {activeTab === 'leaderboard' && (
                <motion.div 
                    key="leaderboard"
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                >
                    <div className="flex justify-between items-end px-2 mb-2">
                        <h3 className="font-bold text-slate-900">Pahlawan Minggu Ini</h3>
                        <span className="text-xs text-[#10B981] font-bold cursor-pointer">Lihat Semua</span>
                    </div>

                    {/* Top 3 Users */}
                    {[
                        { name: "Bima Aryo", points: 4500, rank: 1, color: "bg-yellow-100 border-yellow-200", icon: "👑" },
                        { name: "Sari Rahma", points: 3200, rank: 2, color: "bg-gray-100 border-gray-200", icon: "🥈" },
                        { name: "Dimas K.", points: 2800, rank: 3, color: "bg-orange-100 border-orange-200", icon: "🥉" },
                    ].map((user) => (
                        <div key={user.rank} className={`p-4 rounded-2xl border flex items-center gap-4 ${user.color} shadow-sm`}>
                            <div className="font-black text-lg w-6 text-center text-slate-700">{user.rank}</div>
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-lg shadow-sm">
                                {user.icon}
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-slate-900">{user.name}</h4>
                                <p className="text-xs text-slate-500">{user.points} Poin • Traveler</p>
                            </div>
                            <div className="bg-white px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm">
                                Level 5
                            </div>
                        </div>
                    ))}

                    {/* User Sendiri */}
                    <div className="mt-6 p-4 bg-slate-900 rounded-2xl text-white flex items-center gap-4 shadow-lg">
                        <div className="font-bold w-6 text-center">142</div>
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                            <User size={20}/>
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold">Kamu</h4>
                            <p className="text-xs text-slate-400">1.250 Poin • Butuh 50 poin lagi naik rank</p>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* --- TAB REWARDS --- */}
            {activeTab === 'rewards' && (
                <motion.div 
                    key="rewards"
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                    className="grid grid-cols-2 gap-4"
                >
                    {[
                        { title: "Voucher Fore", cost: 500, img: "☕" },
                        { title: "Saldo Gopay 10rb", cost: 1000, img: "💸" },
                        { title: "Diskon Ongkir", cost: 200, img: "🛵" },
                        { title: "Tiket Nonton", cost: 2500, img: "🎬" },
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:border-[#10B981] hover:shadow-md transition-all group cursor-pointer">
                            <div className="h-24 bg-gray-50 rounded-xl mb-3 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                                {item.img}
                            </div>
                            <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-bold text-yellow-600 flex items-center gap-1">
                                    <Zap size={10} fill="currentColor"/> {item.cost}
                                </span>
                                <button className="bg-slate-900 text-white text-[10px] px-2 py-1 rounded-lg font-bold group-hover:bg-[#10B981] transition-colors">
                                    Tukar
                                </button>
                            </div>
                        </div>
                    ))}
                </motion.div>
            )}

        </AnimatePresence>
      </div>
    </motion.div>
  )
}