import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Search, MessageCircle, ChevronDown, Shield, CreditCard, User, HelpCircle, Loader2 } from 'lucide-react';

export default function HelpCenter() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);
  const [connecting, setConnecting] = useState(false);

  const faqs = [
    {
      q: "Apakah uang saya aman?",
      a: "Sangat aman. Uangmu ditahan di Rekening Bersama (Escrow) Titip.in dan baru diteruskan ke Traveler setelah kamu konfirmasi barang diterima."
    },
    {
      q: "Bagaimana jika Traveler membatalkan?",
      a: "Sistem akan otomatis mencarikan Traveler pengganti dalam 5 menit. Jika tidak ada, uangmu dikembalikan 100% ke saldo dompet."
    },
    {
      q: "Berapa biaya layanan Titip.in?",
      a: "Biaya layanan kami transparan, yaitu 10% - 15% dari total Uang Tip yang kamu tawarkan. Tidak ada biaya tersembunyi."
    },
    {
      q: "Cara verifikasi akun Traveler?",
      a: "Masuk ke menu Profil, pilih 'Verifikasi Identitas', lalu upload foto KTP dan Selfie. Proses verifikasi memakan waktu maks. 1x24 jam."
    }
  ];

  const handleChat = () => {
    setConnecting(true);
    // Simulasi koneksi (bisa diarahkan ke chat dummy nanti)
    setTimeout(() => {
      setConnecting(false);
      alert("Simulasi: Terhubung dengan Agent 'Dinda'. (Fitur Chat CS akan aktif di versi Live)");
    }, 3000);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-md mx-auto min-h-screen bg-white flex flex-col relative">
      
      {/* Header */}
      <div className="bg-slate-900 text-white p-8 rounded-b-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#10B981]/20 rounded-full blur-3xl -ml-10 -mt-10"></div>
        
        <Link to="/profile" className="inline-flex items-center text-white/70 hover:text-white mb-6 text-sm"><ChevronLeft size={16}/> Kembali</Link>
        
        <h1 className="text-3xl font-black mb-2">Butuh Bantuan?</h1>
        <p className="text-slate-300 text-sm mb-6">Kami siap membantumu 24/7.</p>

        {/* Search Bar Dummy */}
        <div className="relative">
            <Search className="absolute left-4 top-3.5 text-gray-400" size={20}/>
            <input type="text" placeholder="Cari masalahmu..." className="w-full pl-12 pr-4 py-3 bg-white text-slate-900 rounded-xl focus:ring-2 focus:ring-[#10B981] outline-none shadow-lg" />
        </div>
      </div>

      <div className="p-6 flex-1">
        
        {/* Quick Topics */}
        <div className="grid grid-cols-4 gap-4 mb-10">
            {[
                { icon: Shield, label: "Aman", color: "bg-green-100 text-[#10B981]" },
                { icon: CreditCard, label: "Bayar", color: "bg-blue-100 text-blue-600" },
                { icon: User, label: "Akun", color: "bg-orange-100 text-orange-600" },
                { icon: HelpCircle, label: "Lainnya", color: "bg-gray-100 text-gray-600" },
            ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                        <item.icon size={24}/>
                    </div>
                    <span className="text-xs font-bold text-gray-500">{item.label}</span>
                </div>
            ))}
        </div>

        {/* FAQ List */}
        <h3 className="font-bold text-slate-900 mb-4 text-lg">Sering Ditanyakan</h3>
        <div className="space-y-3">
            {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                    <button 
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full p-4 flex justify-between items-center bg-white hover:bg-gray-50 text-left transition-colors"
                    >
                        <span className="font-bold text-slate-700 text-sm">{faq.q}</span>
                        <ChevronDown size={16} className={`text-gray-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}/>
                    </button>
                    <AnimatePresence>
                        {openFaq === i && (
                            <motion.div 
                                initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                                className="bg-gray-50 px-4 pb-4 text-sm text-gray-600 leading-relaxed"
                            >
                                <div className="pt-2 border-t border-gray-100">
                                    {faq.a}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>

      </div>

      {/* Floating Chat Button */}
      <div className="p-6 sticky bottom-0 bg-gradient-to-t from-white to-transparent pt-10">
        <button 
            onClick={handleChat}
            disabled={connecting}
            className="w-full bg-[#10B981] text-white font-bold py-4 rounded-xl shadow-xl shadow-green-200 flex items-center justify-center gap-3 hover:bg-green-600 transition-all active:scale-95"
        >
            {connecting ? (
                <>
                    <Loader2 className="animate-spin" /> Menghubungkan...
                </>
            ) : (
                <>
                    <MessageCircle size={22} fill="currentColor" className="text-white/20"/> Chat Customer Service
                </>
            )}
        </button>
      </div>

    </motion.div>
  )
}