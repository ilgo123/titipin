import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, MapPin, ChevronLeft, Clock, Filter, Search, X, Wallet, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function TravelerMarket() {
  const navigate = useNavigate();
  const [selectedJob, setSelectedJob] = useState(null);
  
  const dummyJobs = [
    { id: 1, title: "Kopi Fore Pandan Latte", from: "Margonda", to: "Kutek", tip: 10000, time: "5 mnt lalu", dist: "1.2 km", color: "bg-orange-100 text-orange-600" },
    { id: 2, title: "Buku Gramedia (Novel)", from: "Detos", to: "Pocina", tip: 15000, time: "12 mnt lalu", dist: "3.5 km", color: "bg-blue-100 text-blue-600" },
    { id: 3, title: "Paket JNE (Kecil)", from: "Beji", to: "Kukusan", tip: 8000, time: "30 mnt lalu", dist: "0.8 km", color: "bg-purple-100 text-purple-600" },
    { id: 4, title: "Nasi Padang Sederhana", from: "UI", to: "Margonda", tip: 12000, time: "1 jam lalu", dist: "2.1 km", color: "bg-red-100 text-red-600" },
    { id: 5, title: "Dokumen Skripsi", from: "Fasilkom", to: "Margo City", tip: 20000, time: "Baru saja", dist: "4.0 km", color: "bg-teal-100 text-teal-600" },
    { id: 6, title: "Martabak Manis", from: "Kelapa Dua", to: "Akses UI", tip: 15000, time: "2 jam lalu", dist: "1.5 km", color: "bg-yellow-100 text-yellow-600" },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-gray-50 p-6 md:p-10 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-4">
            <Link to="/start" className="p-3 bg-white rounded-xl shadow-sm hover:bg-gray-100 border border-gray-200 transition-colors"><ChevronLeft/></Link>
            <div>
              <h2 className="text-3xl font-black text-slate-900">Marketplace</h2>
              <p className="text-gray-500">Ambil titipan yang searah dengan rutemu.</p>
            </div>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <div className="relative flex-grow md:w-80">
              <Search className="absolute left-3 top-3 text-gray-400" size={20}/>
              <input type="text" placeholder="Cari rute atau barang..." className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#10B981]/20 outline-none" />
            </div>
            <button className="px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-600 hover:border-[#10B981] hover:text-[#10B981] transition-colors"><Filter size={20}/></button>
          </div>
        </div>

        {/* GRID CARD */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyJobs.map((job, i) => (
            <motion.div 
              initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.05 }}
              key={job.id} 
              onClick={() => setSelectedJob(job)} // KLIK UNTUK BUKA MODAL
              className="bg-white p-6 rounded-3xl border border-gray-100 hover:border-[#10B981]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full cursor-pointer"
            >
              <div className="flex justify-between items-start mb-5">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${job.color}`}>
                    <Package size={24}/>
                </div>
                <span className="bg-gray-50 text-gray-400 px-3 py-1 rounded-full text-xs font-bold flex items-center border border-gray-100">
                  <Clock size={12} className="mr-1"/> {job.time}
                </span>
              </div>

              <div className="flex-grow">
                <h3 className="font-bold text-xl text-slate-900 mb-4 line-clamp-2 group-hover:text-[#10B981] transition-colors">{job.title}</h3>
                <div className="bg-gray-50 p-3 rounded-xl space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="font-medium">Dari:</span> <span className="ml-1 text-slate-900">{job.from}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    <span className="font-medium">Ke:</span> <span className="ml-1 text-slate-900">{job.to}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-end justify-between pt-6 mt-2">
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Uang Tip</p>
                    <p className="text-[#10B981] font-black text-2xl">Rp {job.tip.toLocaleString()}</p>
                  </div>
                  <button className="px-4 py-2 bg-gray-100 text-slate-600 text-sm font-bold rounded-lg group-hover:bg-[#10B981] group-hover:text-white transition-colors">
                    Lihat
                  </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MODAL DETAIL (POP-UP) */}
        <AnimatePresence>
          {selectedJob && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedJob(null)}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
                className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden"
                onClick={e => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="p-6 border-b border-gray-100 flex justify-between items-start bg-gray-50">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-1">{selectedJob.title}</h3>
                    <span className="text-sm text-gray-500 flex items-center gap-1"><MapPin size={14}/> Jarak tempuh tambahan ±{selectedJob.dist}</span>
                  </div>
                  <button onClick={() => setSelectedJob(null)} className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors"><X size={20}/></button>
                </div>

                {/* Modal Body */}
                <div className="p-6 space-y-6">
                  {/* Rute Visual */}
                  <div className="flex items-center justify-between bg-white border-2 border-dashed border-gray-200 p-4 rounded-xl">
                    <div className="text-center">
                      <p className="text-xs text-gray-400 font-bold uppercase">Ambil</p>
                      <p className="font-bold text-slate-800">{selectedJob.from}</p>
                    </div>
                    <div className="h-px w-10 bg-gray-300 relative">
                      <div className="absolute -top-1 right-0 w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-400 font-bold uppercase">Antar</p>
                      <p className="font-bold text-slate-800">{selectedJob.to}</p>
                    </div>
                  </div>

                  {/* Rincian Cuan */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Uang Tip (Dari Penitip)</span>
                      <span>Rp {selectedJob.tip.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Biaya Aplikasi (10%)</span>
                      <span className="text-red-400">- Rp {(selectedJob.tip * 0.1).toLocaleString()}</span>
                    </div>
                    <div className="h-px bg-gray-100 w-full"></div>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-800 flex items-center gap-2"><Wallet size={18} className="text-[#10B981]"/> Pendapatan Bersih</span>
                      <span className="text-2xl font-black text-[#10B981]">Rp {(selectedJob.tip * 0.9).toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-3 rounded-xl flex gap-3 items-start text-xs text-blue-700">
                    <AlertCircle size={16} className="shrink-0 mt-0.5"/>
                    <p>Pastikan barang sesuai deskripsi. Dana akan diteruskan ke saldomu setelah barang diterima.</p>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-6 pt-0">
                  <button 
                    onClick={() => navigate('/success?role=traveler')}
                    className="w-full py-4 bg-slate-900 text-white font-bold text-lg rounded-2xl hover:bg-[#10B981] transition-colors shadow-lg active:scale-95 transform duration-100"
                  >
                    Terima Tawaran Ini
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  )
}