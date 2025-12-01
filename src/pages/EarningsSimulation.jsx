import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Wallet, TrendingUp, ArrowUpRight, History } from 'lucide-react';

export default function EarningsSimulation() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-md mx-auto min-h-screen bg-gray-50">
      
      {/* Header Saldo */}
      <div className="bg-slate-900 text-white p-8 rounded-b-[2.5rem] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
        
        <Link to="/" className="inline-flex items-center text-white/70 hover:text-white mb-6 text-sm"><ChevronLeft size={16}/> Kembali</Link>
        
        <p className="text-slate-300 text-sm mb-1">Saldo Penghasilan</p>
        <h1 className="text-5xl font-black tracking-tight mb-6">Rp 48.500</h1>
        
        <div className="flex gap-3">
            <button className="flex-1 bg-primary text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-green-900/20 flex items-center justify-center gap-2 hover:bg-green-500 transition-colors">
                <ArrowUpRight size={18}/> Tarik Dana
            </button>
            <button className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                <History size={20}/>
            </button>
        </div>
      </div>

      {/* Riwayat Transaksi */}
      <div className="p-6">
        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <TrendingUp size={20} className="text-primary"/> Riwayat "Uang Bensin"
        </h3>
        
        <div className="space-y-4">
            {/* Item 1 (Baru Saja) */}
            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-primary">
                        <Wallet size={20}/>
                    </div>
                    <div>
                        <p className="font-bold text-slate-800 text-sm">Kopi Fore Margonda</p>
                        <p className="text-xs text-gray-400">Baru saja • Selesai</p>
                    </div>
                </div>
                <span className="font-black text-green-600">+Rp 9.000</span>
            </div>

            {/* Item 2 */}
            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600/50">
                        <Wallet size={20}/>
                    </div>
                    <div>
                        <p className="font-bold text-slate-800 text-sm">Buku Gramedia</p>
                        <p className="text-xs text-gray-400">Kemarin • Selesai</p>
                    </div>
                </div>
                <span className="font-black text-slate-400">+Rp 13.500</span>
            </div>

             {/* Item 3 */}
             <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600/50">
                        <Wallet size={20}/>
                    </div>
                    <div>
                        <p className="font-bold text-slate-800 text-sm">Paket JNE</p>
                        <p className="text-xs text-gray-400">2 Hari lalu • Selesai</p>
                    </div>
                </div>
                <span className="font-black text-slate-400">+Rp 26.000</span>
            </div>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-2xl border border-blue-100 text-center">
            <p className="text-xs text-blue-800">
                Total pendapatan bulan ini: <strong>Rp 285.000</strong>. <br/>Lumayan buat bensin! ⛽
            </p>
        </div>
      </div>
    </motion.div>
  )
}