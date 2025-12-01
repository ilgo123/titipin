import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, MapPin, Phone, MessageCircle, CheckCircle2, Bike, Clock } from 'lucide-react';

export default function TrackingSimulation() {
  const navigate = useNavigate();
  
  // Status: 0=Mencari, 1=Otw Toko, 2=Belanja, 3=Otw Kamu
  const [status, setStatus] = useState(0);

  // Simulasi Perubahan Status Otomatis (Timer)
  useEffect(() => {
    const timer1 = setTimeout(() => setStatus(1), 2500); // Traveler Ditemukan
    const timer2 = setTimeout(() => setStatus(2), 6000); // Sampai di Toko
    const timer3 = setTimeout(() => setStatus(3), 10000); // Menuju Kamu
    
    return () => { clearTimeout(timer1); clearTimeout(timer2); clearTimeout(timer3); };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="max-w-md mx-auto min-h-screen bg-white flex flex-col relative"
    >
      
      {/* --- BAGIAN PETA (SIMULASI VISUAL) --- */}
      <div className="h-[45vh] bg-slate-100 relative overflow-hidden border-b border-gray-200">
        {/* Background Pattern Peta */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        {/* Tombol Back */}
        <button onClick={() => navigate('/start')} className="absolute top-6 left-6 bg-white/90 p-2 rounded-full shadow-sm text-gray-600 hover:text-slate-900 z-30 backdrop-blur-sm border border-gray-200">
            <ChevronLeft size={20}/>
        </button>

        {/* Jalur Rute */}
        <div className="absolute top-1/2 left-12 right-12 h-3 bg-gray-200 rounded-full -translate-y-1/2 overflow-hidden">
            <motion.div 
                className="h-full bg-[#10B981]/30"
                initial={{ width: "0%" }}
                animate={{ 
                    width: status === 0 ? "0%" : status === 1 ? "30%" : status === 2 ? "30%" : "85%" 
                }}
                transition={{ duration: 2, ease: "easeInOut" }}
            />
        </div>
        
        {/* Titik Awal (Toko) */}
        <div className="absolute top-1/2 left-12 -translate-y-1/2 flex flex-col items-center gap-3 -ml-3">
            <div className="w-6 h-6 bg-white border-4 border-gray-400 rounded-full shadow-sm z-10"></div>
            <span className="text-[10px] font-bold text-gray-500 bg-white px-2 py-1 rounded-md shadow-sm border border-gray-100">Toko</span>
        </div>

        {/* Titik Akhir (Kamu) */}
        <div className="absolute top-1/2 right-12 -translate-y-1/2 flex flex-col items-center gap-3 -mr-3">
            <div className="w-8 h-8 bg-[#10B981]/20 rounded-full flex items-center justify-center animate-pulse z-10">
                <MapPin size={18} className="text-[#10B981] fill-[#10B981]"/>
            </div>
            <span className="text-[10px] font-bold text-[#10B981] bg-white px-2 py-1 rounded-md shadow-sm border border-green-100">Kamu</span>
        </div>

        {/* ANIMASI MOTOR TRAVELER */}
        <motion.div 
            className="absolute top-1/2 -translate-y-1/2 z-20"
            initial={{ left: "12%" }}
            animate={{ 
                left: status === 0 ? "12%" : status === 1 ? "30%" : status === 2 ? "30%" : "85%" 
            }}
            transition={{ duration: status === 3 ? 3 : 2, ease: "easeInOut" }}
        >
            <div className="relative -mt-10">
                {/* Ikon Motor */}
                <div className="bg-slate-900 text-white p-2.5 rounded-full shadow-xl relative z-20 border-2 border-white">
                    <Bike size={20} />
                </div>
                
                {/* Bubble Chat Status (Muncul saat Belanja/Otw) */}
                <AnimatePresence mode="wait">
                    {status === 2 && (
                        <motion.div initial={{ scale: 0, y: 10 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0 }} className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-3 py-1.5 rounded-xl shadow-md text-[10px] font-bold whitespace-nowrap border border-gray-100 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></span> Lagi antre...
                        </motion.div>
                    )}
                     {status === 3 && (
                        <motion.div initial={{ scale: 0, y: 10 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0 }} className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-3 py-1.5 rounded-xl shadow-md text-[10px] font-bold whitespace-nowrap border border-gray-100 flex items-center gap-1">
                            🚀 Otw kak!
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
      </div>

      {/* --- BAGIAN INFO STATUS (BAWAH) --- */}
      <div className="flex-1 bg-white -mt-8 rounded-t-[2rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] relative z-30 p-8 flex flex-col">
        
        {/* Handle Bar */}
        <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-8"></div>

        {/* Status Headline */}
        <div className="mb-8 text-center">
            <motion.div 
                key={status}
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 mb-2"
            >
                {status === 0 && <Loader2 className="animate-spin text-gray-400" size={20}/>}
                {status === 2 && <Clock className="animate-pulse text-orange-500" size={20}/>}
                {status === 3 && <Bike className="text-[#10B981]" size={20}/>}
                
                <h2 className="text-2xl font-black text-slate-900">
                    {status === 0 && "Mencari Traveler..."}
                    {status === 1 && "Traveler Ditemukan!"}
                    {status === 2 && "Sedang Membelikan..."}
                    {status === 3 && "Menuju Lokasimu"}
                </h2>
            </motion.div>
            
            <p className="text-gray-500 text-sm">
                {status === 0 ? "Mohon tunggu sebentar, kami sedang mencarikan." : 
                 status === 2 ? "Bima sedang memesan kopi titipanmu." : 
                 "Estimasi sampai: 10 Menit lagi."}
            </p>
        </div>

        {/* Stepper Progress */}
        <div className="flex justify-between mb-10 px-4">
            {[0, 1, 2, 3].map((step) => (
                <div key={step} className="flex flex-col items-center gap-2 flex-1">
                    <div className={`h-1.5 w-full rounded-full transition-colors duration-500 ${step <= status ? 'bg-[#10B981]' : 'bg-gray-100'}`}></div>
                </div>
            ))}
        </div>

        {/* Kartu Driver (Hanya muncul jika sudah dapat driver) */}
        <AnimatePresence>
            {status > 0 && (
                <motion.div 
                    initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                    className="bg-gray-50 p-5 rounded-2xl flex items-center gap-4 border border-gray-100 mb-6"
                >
                    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl overflow-hidden border-2 border-white shadow-sm">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Bima" alt="Bima" />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-slate-900 text-lg">Bima Aryo</h3>
                        <p className="text-xs text-gray-500 font-medium">Honda Vario • B 1234 XYZ</p>
                        <div className="flex items-center gap-1 mt-1">
                             <span className="text-[10px] bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded font-bold">★ 4.9</span>
                             <span className="text-[10px] text-gray-400">Verified Traveler</span>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="w-10 h-10 bg-white rounded-full text-gray-600 border border-gray-200 hover:border-[#10B981] hover:text-[#10B981] transition-colors flex items-center justify-center shadow-sm"><MessageCircle size={20}/></button>
                        <button className="w-10 h-10 bg-white rounded-full text-gray-600 border border-gray-200 hover:border-[#10B981] hover:text-[#10B981] transition-colors flex items-center justify-center shadow-sm"><Phone size={20}/></button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

        {/* Tombol Selesai (Muncul di akhir) */}
        {status === 3 && (
            <motion.button 
                initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/rating?role=penitip')}
                className="mt-auto w-full bg-[#10B981] text-white font-bold py-4 rounded-2xl shadow-lg shadow-green-200 flex items-center justify-center gap-2 hover:bg-green-600 transition-all"
            >
                <CheckCircle2 size={22}/> Pesanan Sudah Diterima
            </motion.button>
        )}
      </div>

    </motion.div>
  )
}

// Komponen Icon Loading (Opsional jika belum ada)
function Loader2({ className, size }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
    )
}