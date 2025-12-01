import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Package, MapPin, Clock, RotateCcw, Search, Bike, CheckCircle2, XCircle } from 'lucide-react';

export default function ActivityHistory() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('active'); // 'active' or 'history'

  // Data Dummy Aktivitas
  const activeOrders = [
    { id: 1, title: "Kopi Fore Pandan Latte", status: "Mengantar", statusColor: "text-blue-600 bg-blue-50", icon: <Bike size={16}/>, time: "Est. 10 mnt", price: 45000, link: "/tracking" },
    { id: 2, title: "Dokumen Skripsi", status: "Mencari Traveler", statusColor: "text-orange-600 bg-orange-50", icon: <Search size={16}/>, time: "Baru saja", price: 20000, link: "/penitip" },
  ];

  const historyOrders = [
    { id: 3, title: "Nasi Padang Sederhana", status: "Selesai", statusColor: "text-green-600 bg-green-50", icon: <CheckCircle2 size={16}/>, date: "Kemarin, 12:30", price: 32000 },
    { id: 4, title: "Charger iPhone (Miniso)", status: "Selesai", statusColor: "text-green-600 bg-green-50", icon: <CheckCircle2 size={16}/>, date: "2 Hari lalu", price: 115000 },
    { id: 5, title: "Martabak Manis", status: "Dibatalkan", statusColor: "text-red-600 bg-red-50", icon: <XCircle size={16}/>, date: "5 Hari lalu", price: 45000 },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-md mx-auto min-h-screen bg-white flex flex-col relative">
      
      {/* Header Fixed */}
      <div className="p-6 bg-white sticky top-0 z-20 border-b border-gray-100 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
            <Link to="/start" className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors text-slate-600">
                <ChevronLeft size={24}/>
            </Link>
            <h1 className="text-2xl font-black text-slate-900">Aktivitas</h1>
        </div>

        {/* Custom Tab Switcher */}
        <div className="flex p-1 bg-gray-100 rounded-xl">
            <button 
                onClick={() => setActiveTab('active')}
                className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${activeTab === 'active' ? 'bg-white text-slate-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            >
                Dalam Proses
                {activeOrders.length > 0 && <span className="ml-2 bg-red-500 text-white text-[10px] px-1.5 rounded-full align-top">{activeOrders.length}</span>}
            </button>
            <button 
                onClick={() => setActiveTab('history')}
                className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${activeTab === 'history' ? 'bg-white text-slate-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            >
                Riwayat
            </button>
        </div>
      </div>

      {/* Content List */}
      <div className="flex-1 p-4 bg-gray-50/50">
        <AnimatePresence mode='wait'>
            
            {/* TAB: ACTIVE ORDERS */}
            {activeTab === 'active' && (
                <motion.div 
                    key="active"
                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                    className="space-y-4"
                >
                    {activeOrders.map((order) => (
                        <div key={order.id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex gap-3">
                                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                                        <Package size={20}/>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-sm mb-1">{order.title}</h3>
                                        <span className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-md ${order.statusColor}`}>
                                            {order.icon} {order.status}
                                        </span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-400 mb-1">Total</p>
                                    <p className="font-bold text-slate-900">Rp {order.price.toLocaleString()}</p>
                                </div>
                            </div>
                            
                            <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                                <div className="flex items-center gap-1 text-xs text-gray-500">
                                    <Clock size={12}/> {order.time}
                                </div>
                                <button 
                                    onClick={() => navigate(order.link)}
                                    className="px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-primary transition-colors flex items-center gap-2"
                                >
                                    {order.status === "Mencari Traveler" ? "Lihat Radar" : "Lacak Posisi"} <MapPin size={12}/>
                                </button>
                            </div>
                        </div>
                    ))}
                </motion.div>
            )}

            {/* TAB: HISTORY ORDERS */}
            {activeTab === 'history' && (
                <motion.div 
                    key="history"
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                >
                    {historyOrders.map((order) => (
                        <div key={order.id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm group">
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex gap-3">
                                    <div className="w-10 h-10 bg-gray-100 text-gray-500 rounded-xl flex items-center justify-center shrink-0 grayscale group-hover:grayscale-0 transition-all">
                                        <Package size={20}/>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-sm mb-1 line-through text-gray-400 decoration-gray-300 decoration-2 group-hover:no-underline group-hover:text-slate-900 transition-all">{order.title}</h3>
                                        <span className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-md ${order.statusColor}`}>
                                            {order.icon} {order.status}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-between pt-3">
                                <span className="text-xs text-gray-400">{order.date}</span>
                                <div className="flex gap-3 items-center">
                                    <span className="font-bold text-slate-700 text-sm">Rp {order.price.toLocaleString()}</span>
                                    <button 
                                        onClick={() => navigate('/penitip')}
                                        className="p-2 bg-green-50 text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
                                        title="Pesan Lagi"
                                    >
                                        <RotateCcw size={16}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    <div className="text-center py-8">
                        <p className="text-xs text-gray-400">Menampilkan 3 bulan terakhir</p>
                    </div>
                </motion.div>
            )}

        </AnimatePresence>
      </div>

    </motion.div>
  )
}