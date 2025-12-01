import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Send, MoreVertical, ShieldCheck, ShoppingBag, MapPin } from 'lucide-react';

export default function ChatSimulation() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    // Chat dimulai oleh Traveler (User/Right Side)
    { id: 1, text: "Halo Kak Sari! Saya kebetulan lagi di Fore Margonda nih. Saya ambil titipannya ya?", sender: "me", time: "10:00" },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  // Simulasi Balasan dari Penitip
  useEffect(() => {
    setTimeout(() => { setIsTyping(true); }, 1500);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { id: 2, text: "Wah kebetulan banget! Boleh kak, pesanan sesuai aplikasi ya (Less Sugar). Ditunggu di Kos Kutek!", sender: "partner", time: "10:01" }]);
    }, 4000);
  }, []);

  const handleFinish = () => {
    navigate('/rating?role=traveler');
  };

  return (
    <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }} className="max-w-md mx-auto h-screen bg-white flex flex-col shadow-2xl overflow-hidden relative">
      
      {/* Header Chat: Menampilkan Nama PENITIP */}
      <div className="bg-white p-4 border-b border-gray-100 flex items-center justify-between shadow-sm z-10">
        <div className="flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="text-gray-500 hover:text-[#10B981]"><ChevronLeft/></button>
            <div className="relative">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold overflow-hidden">
                   <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sari" alt="Sari" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <div>
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1">
                    Sari (Penitip) <ShieldCheck size={12} className="text-[#10B981]"/>
                </h3>
                <p className="text-xs text-gray-400 font-medium">Online</p>
            </div>
        </div>
        <div className="bg-green-50 px-3 py-1 rounded-full text-[10px] font-bold text-[#10B981] flex items-center gap-1">
            <ShoppingBag size={10}/> Kopi Fore
        </div>
      </div>

      {/* Isi Chat */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f0f2f5]">
        {/* Rincian Order Bubble */}
        <div className="flex justify-center mb-4">
            <div className="bg-white p-3 rounded-xl shadow-sm text-xs border border-gray-200 w-full max-w-[250px]">
                <div className="flex justify-between mb-2 border-b border-gray-100 pb-2">
                    <span className="font-bold text-slate-700">Rincian Titipan</span>
                    <span className="text-[#10B981] font-bold">Rp 10.000 (Tip)</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <ShoppingBag size={12}/> Kopi Fore Pandan Latte
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={12}/> Ke: Kos Kutek UI
                </div>
            </div>
        </div>

        {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm shadow-sm ${
                    msg.sender === 'me' 
                    ? 'bg-slate-900 text-white rounded-tr-none' 
                    : 'bg-white text-slate-800 rounded-tl-none'
                }`}>
                    <p>{msg.text}</p>
                    <p className={`text-[10px] mt-1 text-right ${msg.sender === 'me' ? 'text-gray-400' : 'text-gray-400'}`}>{msg.time}</p>
                </div>
            </div>
        ))}

        {isTyping && (
            <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1 items-center">
                    <span className="text-xs text-gray-400 mr-2">Sari mengetik</span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-75"></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                </div>
            </div>
        )}
      </div>

      {/* Action Bar: TOMBOL SELESAIKAN */}
      <div className="p-4 bg-white border-t border-gray-100 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
        <p className="text-xs text-center text-gray-400 mb-3">Pastikan barang sudah di tangan Penitip sebelum menyelesaikan.</p>
        <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleFinish}
            className="w-full bg-[#10B981] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-green-200"
        >
            <MapPin size={18}/> Saya Sudah Sampai & Antar
        </motion.button>
      </div>

    </motion.div>
  )
}