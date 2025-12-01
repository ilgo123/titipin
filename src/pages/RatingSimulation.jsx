import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ThumbsUp, Send } from 'lucide-react';

export default function RatingSimulation() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const role = searchParams.get('role') || 'penitip'; // Siapa yang sedang memberi nilai?
  
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState('');

  // Data Dinamis tergantung Role
  const targetName = role === 'penitip' ? 'Bima Aryo' : 'Sari Rahma';
  const targetRole = role === 'penitip' ? 'Traveler' : 'Penitip';
  const targetImg = role === 'penitip' 
    ? "https://api.dicebear.com/7.x/avataaars/svg?seed=Bima" 
    : "https://api.dicebear.com/7.x/avataaars/svg?seed=Sari";

  const tags = ["Ramah Banget", "Respon Cepat", "Tepat Waktu", "Barang Aman"];

  const handleSubmit = () => {
    // Lanjut ke halaman Success (The Trap)
    navigate(`/success?role=${role}`);
  };

  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} 
      className="max-w-md mx-auto min-h-screen bg-white flex flex-col items-center justify-center p-8 text-center relative overflow-hidden"
    >
      {/* Confetti Background Effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-20 h-20 bg-yellow-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-[-10%] right-[20%] w-32 h-32 bg-green-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="relative z-10 w-full">
        
        <h2 className="text-2xl font-black text-slate-900 mb-2">Transaksi Selesai! 🎉</h2>
        <p className="text-gray-500 text-sm mb-8">Gimana pengalamanmu dengan {targetName}?</p>

        {/* Avatar Target */}
        <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full p-1 mb-6 shadow-lg">
            <div className="w-full h-full bg-white rounded-full overflow-hidden">
                <img src={targetImg} alt={targetName} className="w-full h-full object-cover"/>
            </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900">{targetName}</h3>
        <p className="text-xs font-bold text-[#10B981] bg-green-50 px-3 py-1 rounded-full inline-block mt-2 mb-8 uppercase tracking-wider">
            {targetRole}
        </p>

        {/* Star Rating Interactive */}
        <div className="flex justify-center gap-2 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    className="transition-transform hover:scale-110 focus:outline-none"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(rating)}
                >
                    <Star 
                        size={40} 
                        className={`transition-colors duration-200 ${
                            star <= (hover || rating) 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'fill-gray-100 text-gray-200'
                        }`}
                    />
                </button>
            ))}
        </div>

        {/* Tags (Muncul jika sudah rate) */}
        {rating > 0 && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
                <p className="text-xs text-gray-400 font-bold mb-3 uppercase">Apa yang kamu suka?</p>
                <div className="flex flex-wrap justify-center gap-2">
                    {tags.map((tag, i) => (
                        <button key={i} className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-sm font-medium text-gray-600 hover:bg-green-50 hover:text-[#10B981] hover:border-green-200 transition-all">
                            {tag}
                        </button>
                    ))}
                </div>
            </motion.div>
        )}

        {/* Comment Box */}
        <div className="w-full bg-gray-50 p-4 rounded-2xl mb-6 text-left border border-gray-100 focus-within:border-[#10B981] focus-within:ring-1 focus-within:ring-[#10B981]/20 transition-all">
            <textarea 
                rows="3" 
                placeholder="Tulis ulasanmu di sini (opsional)..." 
                className="w-full bg-transparent outline-none text-sm text-slate-800 resize-none"
                onChange={(e) => setComment(e.target.value)}
            ></textarea>
        </div>

        {/* Submit Button */}
        <button 
            onClick={handleSubmit}
            disabled={rating === 0}
            className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-[#10B981] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
            <Send size={18}/> Kirim Ulasan
        </button>

        <button onClick={handleSubmit} className="mt-4 text-sm text-gray-400 font-medium hover:text-slate-600">
            Lewati
        </button>

      </div>
    </motion.div>
  )
}