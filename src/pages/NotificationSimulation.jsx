import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Bell, Package, Wallet, Tag, ShieldAlert, Check } from 'lucide-react';

export default function NotificationSimulation() {
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'order', title: 'Pesanan Selesai', desc: 'Kopi Fore Pandan Latte telah diterima. Jangan lupa kasih rating!', time: '2 mnt lalu', read: false },
    { id: 2, type: 'wallet', title: 'Dana Masuk', desc: 'Saldo Rp 15.000 dari jasa titip telah ditambahkan ke dompetmu.', time: '1 jam lalu', read: false },
    { id: 3, type: 'promo', title: 'Diskon Ongkir 50%', desc: 'Pakai kode TITIPHEMAT untuk transaksi berikutnya. Berlaku hari ini!', time: '5 jam lalu', read: true },
    { id: 4, type: 'system', title: 'Verifikasi Berhasil', desc: 'Identitas KTP kamu sudah terverifikasi. Sekarang kamu bisa ambil orderan lebih mahal.', time: '1 hari lalu', read: true },
    { id: 5, type: 'alert', title: 'Peringatan Keamanan', desc: 'Login terdeteksi dari perangkat baru (Samsung S23). Bukan kamu?', time: '2 hari lalu', read: true },
  ]);

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const deleteNotif = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  // Helper Icon
  const getIcon = (type) => {
    switch (type) {
      case 'order': return <Package size={20} className="text-blue-600"/>;
      case 'wallet': return <Wallet size={20} className="text-green-600"/>;
      case 'promo': return <Tag size={20} className="text-orange-600"/>;
      case 'alert': return <ShieldAlert size={20} className="text-red-600"/>;
      default: return <Bell size={20} className="text-gray-600"/>;
    }
  };

  // Helper BG Color
  const getBg = (type) => {
    switch (type) {
      case 'order': return 'bg-blue-100';
      case 'wallet': return 'bg-green-100';
      case 'promo': return 'bg-orange-100';
      case 'alert': return 'bg-red-100';
      default: return 'bg-gray-100';
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-md mx-auto min-h-screen bg-white flex flex-col">
      
      {/* Header */}
      <div className="p-6 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-10">
        <div className="flex items-center gap-4">
            <Link to="/start" className="text-gray-500 hover:text-slate-900"><ChevronLeft/></Link>
            <h1 className="text-xl font-bold text-slate-900">Notifikasi</h1>
        </div>
        <button onClick={markAllRead} className="text-xs font-bold text-primary hover:text-green-700 transition-colors">
            Tandai Dibaca Semua
        </button>
      </div>

      {/* List */}
      <div className="flex-1 p-4 space-y-2 bg-gray-50">
        <AnimatePresence>
            {notifications.length > 0 ? (
                notifications.map((item) => (
                    <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -100 }}
                        className={`p-4 rounded-2xl flex gap-4 border relative overflow-hidden group transition-all ${item.read ? 'bg-white border-gray-100' : 'bg-blue-50/50 border-blue-100'}`}
                    >
                        {/* Status Dot */}
                        {!item.read && <div className="absolute top-4 right-4 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>}
                        
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${getBg(item.type)}`}>
                            {getIcon(item.type)}
                        </div>
                        
                        <div className="flex-1">
                            <h4 className={`text-sm mb-1 ${item.read ? 'font-bold text-slate-700' : 'font-black text-slate-900'}`}>{item.title}</h4>
                            <p className="text-xs text-gray-500 leading-relaxed mb-2">{item.desc}</p>
                            <p className="text-[10px] text-gray-400 font-medium">{item.time}</p>
                        </div>

                        {/* Swipe/Delete Action (Hover simulation) */}
                        <button 
                            onClick={() => deleteNotif(item.id)}
                            className="absolute right-0 top-0 bottom-0 w-16 bg-red-500 text-white flex items-center justify-center translate-x-full group-hover:translate-x-0 transition-transform cursor-pointer"
                        >
                            Hapus
                        </button>
                    </motion.div>
                ))
            ) : (
                <div className="flex flex-col items-center justify-center h-[50vh] text-center p-6 text-gray-400">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <Bell size={32} className="text-gray-300"/>
                    </div>
                    <p className="text-sm font-medium">Belum ada notifikasi baru.</p>
                </div>
            )}
        </AnimatePresence>
      </div>

    </motion.div>
  )
}