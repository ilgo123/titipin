import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Share2, Copy, Users, Gift, Check } from 'lucide-react';

export default function ReferralSimulation() {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [friendsCount, setFriendsCount] = useState(3);
  const [points, setPoints] = useState(15000);
  const [showNotification, setShowNotification] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    // Simulasi Share ke WA & Teman Join
    setShowNotification(true);
    setTimeout(() => {
        setFriendsCount(prev => prev + 1);
        setPoints(prev => prev + 5000);
    }, 2500);
    
    // Hilangkan notif simulasi
    setTimeout(() => setShowNotification(false), 6000);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-md mx-auto min-h-screen bg-white flex flex-col relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full blur-3xl -mr-16 -mt-16 -z-10"></div>
      
      {/* Header */}
      <div className="p-6">
        <Link to="/profile" className="inline-flex items-center text-gray-500 mb-6 hover:text-slate-900 transition-colors"><ChevronLeft size={20}/> Kembali</Link>
        <h1 className="text-3xl font-black text-slate-900 mb-2">Undang Teman</h1>
        <p className="text-gray-500">Dapatkan Rp 5.000 untuk setiap teman yang bergabung!</p>
      </div>

      <div className="px-6 flex-1 flex flex-col gap-8">
        
        {/* Card Kode Referral */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <Gift size={100} />
            </div>
            
            <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-4">Kode Unik Kamu</p>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex justify-between items-center mb-6">
                <span className="text-3xl font-mono font-bold tracking-wider text-[#10B981]">TITIP-ILGO</span>
                <button onClick={handleCopy} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                    {copied ? <Check size={20} className="text-green-400"/> : <Copy size={20}/>}
                </button>
            </div>

            <button 
                onClick={handleShare}
                className="w-full bg-[#10B981] text-white font-bold py-4 rounded-xl shadow-lg shadow-green-900/50 flex items-center justify-center gap-2 hover:bg-green-500 transition-all active:scale-95"
            >
                <Share2 size={20}/> Bagikan ke WhatsApp
            </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-3">
                    <Users size={20}/>
                </div>
                <motion.p 
                    key={friendsCount}
                    initial={{ scale: 1.5, color: "#10B981" }} animate={{ scale: 1, color: "#1e293b" }}
                    className="text-3xl font-black text-slate-800"
                >
                    {friendsCount}
                </motion.p>
                <p className="text-xs text-gray-500 font-bold uppercase">Teman Bergabung</p>
            </div>
            <div className="bg-yellow-50 p-5 rounded-2xl border border-yellow-100">
                <div className="w-10 h-10 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-3">
                    <Gift size={20}/>
                </div>
                <motion.p 
                    key={points}
                    initial={{ scale: 1.2, color: "#10B981" }} animate={{ scale: 1, color: "#1e293b" }}
                    className="text-3xl font-black text-slate-800"
                >
                    Rp {points.toLocaleString()}
                </motion.p>
                <p className="text-xs text-gray-500 font-bold uppercase">Total Hadiah</p>
            </div>
        </div>

        {/* List Teman */}
        <div>
            <h3 className="font-bold text-slate-900 mb-4">Riwayat Undangan</h3>
            <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold text-xs">A</div>
                        <span className="font-bold text-sm text-slate-700">Andi Saputra</span>
                    </div>
                    <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">+ Rp 5.000</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold text-xs">S</div>
                        <span className="font-bold text-sm text-slate-700">Siti Aminah</span>
                    </div>
                    <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">+ Rp 5.000</span>
                </div>
            </div>
        </div>

      </div>

      {/* NOTIFIKASI SIMULASI */}
      <AnimatePresence>
        {showNotification && (
            <motion.div 
                initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -100, opacity: 0 }}
                className="absolute top-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-green-100 flex items-center gap-4 z-50"
            >
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white shrink-0 animate-bounce">
                    <Gift size={20}/>
                </div>
                <div className="flex-1">
                    <h4 className="font-bold text-sm text-slate-900">Yeay! Teman Bergabung</h4>
                    <p className="text-xs text-gray-500">"Budi" baru saja mendaftar pakai kodemu.</p>
                </div>
                <span className="font-black text-[#10B981]">+5rb</span>
            </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  )
}