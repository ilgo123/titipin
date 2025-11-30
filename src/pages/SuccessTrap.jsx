import { useSearchParams } from 'react-router-dom';
import { CheckCircle, ArrowRight, Star, ShieldCheck, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function SuccessTrap() {
  const [searchParams] = useSearchParams();
  const role = searchParams.get('role') === 'penitip' ? 'Diposting!' : 'Diambil!';
  
  const gformLink = "https://forms.gle/1UqNhZhQ216Se6kY8"; 

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="min-h-screen bg-white flex items-center justify-center p-6 relative overflow-hidden"
    >
      {/* Background Blobs (Hanya muncul di Desktop untuk performa HP) */}
      <div className="hidden md:block absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-green-50 to-transparent -z-10" />
      <div className="hidden md:block absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl -z-10 opacity-50" />

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 md:gap-12 items-center">
        
        {/* BAGIAN ATAS (Mobile) / KIRI (Desktop): HASIL SIMULASI */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left pt-10 md:pt-0">
            <motion.div 
              initial={{ scale: 0 }} animate={{ scale: 1 }} 
              className="w-24 h-24 md:w-32 md:h-32 bg-green-100 text-[#10B981] rounded-full flex items-center justify-center mb-6 md:mb-8 shadow-lg shadow-green-100 relative"
            >
                <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
                <CheckCircle className="w-12 h-12 md:w-16 md:h-16" strokeWidth={3} />
            </motion.div>

            <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-4 md:mb-6 leading-tight tracking-tight">
                Titipan <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1F2937] to-green-600">Berhasil {role}</span>
            </h1>

            <div className="space-y-2 md:space-y-4 max-w-lg mb-8 md:mb-0">
                <p className="text-lg md:text-2xl text-gray-600 font-medium">
                    Eits, ini baru simulasi lho! 🎉
                </p>
                <p className="text-sm md:text-lg text-gray-500 leading-relaxed">
                    Bayangkan kalau cari uang jajan tambahan atau nitip kopi bisa semudah klik tombol tadi di kehidupan nyata?
                </p>
            </div>
            
            {/* Tombol Home (Hanya muncul di Desktop, di HP kita taruh paling bawah) */}
            <Link to="/" className="hidden md:inline-flex mt-12 items-center text-gray-400 hover:text-slate-900 font-bold transition-colors group">
                <ChevronLeft className="mr-2 group-hover:-translate-x-1 transition-transform"/> Kembali ke Home
            </Link>
        </div>

        {/* BAGIAN BAWAH (Mobile) / KANAN (Desktop): THE TRAP */}
        {/* Di HP: Tampilan Simpel (Putih). Di Desktop: Tampilan Kartu (Gelap) */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
          className="w-full"
        >   
            <div className="relative w-full bg-white md:bg-slate-900 text-slate-900 md:text-white p-0 md:p-16 rounded-none md:rounded-[3rem] shadow-none md:shadow-2xl md:shadow-slate-300 overflow-visible md:overflow-hidden border-none md:border border-slate-800 flex flex-col items-center md:items-start text-center md:text-left">
                
                {/* Badge Early Access */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 md:bg-white/10 rounded-full text-xs font-bold text-[#10B981] md:text-[#10B981] mb-4 border border-green-200 md:border-white/10">
                    <Star size={14} fill="currentColor"/> EARLY ACCESS
                </div>

                <h3 className="text-2xl md:text-5xl font-black mb-2 md:mb-6 leading-tight">
                    Tertarik pakai <br className="hidden md:block"/> Titip.in beneran?
                </h3>
                
                <p className="text-gray-500 md:text-slate-300 text-sm md:text-lg mb-6 md:mb-10 leading-relaxed max-w-xs md:max-w-none mx-auto md:mx-0">
                    Daftar sekarang untuk dapat <strong className="text-[#10B981]">Bebas Biaya Layanan</strong> pada transaksi pertamamu!
                </p>

                {/* Tombol Utama yang menonjol di HP */}
                <a 
                    href={gformLink} 
                    target="_blank" 
                    className="group w-full block bg-[#10B981] md:bg-white text-white md:text-slate-900 text-center font-black text-lg md:text-xl py-4 md:py-5 rounded-2xl hover:bg-green-600 md:hover:bg-green-50 transition-all shadow-xl shadow-green-200 md:shadow-none active:scale-95"
                >
                    Daftar Waiting List Sekarang
                    <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20}/>
                </a>
                
                <p className="text-center text-gray-400 md:text-slate-500 text-xs md:text-sm mt-4 md:mt-6">
                    *Slot terbatas. 100% Gratis.
                </p>

                 {/* Tombol Home (Versi Mobile) */}
                 <Link to="/" className="md:hidden mt-8 inline-flex items-center text-gray-400 hover:text-slate-900 font-medium text-sm">
                    Kembali ke Home
                </Link>
            </div>
        </motion.div>

      </div>
    </motion.div>
  )
}