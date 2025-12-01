import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Users, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  useEffect(() => {
    const targetDate = new Date("2026-01-01T00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="relative min-h-screen flex flex-col overflow-hidden bg-white"
    >
      {/* DECORATIVE BACKGROUND (Agar Laptop tidak terlihat sepi) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-green-50 to-transparent -z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/3 h-[600px] bg-[#10B981]/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-[600px] bg-blue-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* NAVBAR SIMPEL */}
      <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-2xl font-extrabold tracking-tighter text-slate-900 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"><img src="/public/titipin-logo.svg" alt="" srcset="" /></div>
            Titip.in
        </div>
        {/* <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
            <span className="hover:text-[#10B981] cursor-pointer">Cara Kerja</span>
            <span className="hover:text-[#10B981] cursor-pointer">Keamanan</span>
            <span className="hover:text-[#10B981] cursor-pointer">Tentang Kami</span>
        </div> */}
        <Link to="https://forms.gle/1UqNhZhQ216Se6kY8" className="px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-slate-800 transition-colors">
            Daftar Waiting List
        </Link>
      </nav>

      {/* HERO SECTION */}
      <main className="flex-grow flex flex-col justify-center px-4 sm:px-6 py-12 md:py-20">
        <div className="max-w-7xl mx-auto w-full text-center">
          
          {/* Badge */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-green-100 rounded-full shadow-sm mb-8"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10B981]"></span>
            </span>
            <span className="text-sm font-bold text-slate-700 tracking-wide">COMING SOON 2026</span>
          </motion.div>

          {/* Headline Raksasa */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1]">
            Titip Barang <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1F2937] to-green-400">Semudah Nebeng.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
            Platform marketplace komunitas pertama di Indonesia yang mengubah rute perjalananmu menjadi penghasilan, dan ongkir mahal menjadi kenangan.
          </p>

          {/* Countdown Lebar */}
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center mb-14">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-lg shadow-slate-100 border border-white w-24 md:w-32">
                <div className="text-3xl md:text-5xl font-black text-slate-900 tabular-nums">{value}</div>
                <div className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-widest mt-1">{unit}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/start" className="w-full sm:w-auto px-10 py-5 bg-green-600 text-white text-lg font-bold rounded-full hover:bg-[#1F2937] transition-all shadow-xl shadow-green-200 hover:scale-105 flex items-center justify-center gap-2">
              Coba Simulasi Aplikasi <ArrowRight size={20}/>
            </Link>
          </div>

        </div>
      </main>

      {/* FEATURES SECTION (Full Width Grid) */}
      <section className="border-t border-gray-100 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {/* Feature 1 */}
                <div className="flex flex-col items-start p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl hover:shadow-gray-100 transition-all duration-300 border border-transparent hover:border-gray-100">
                    <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                        <Zap size={28} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Hemat Ongkir Ekstrem</h3>
                    <p className="text-gray-500 leading-relaxed mb-6">
                        Lupakan ongkir fix yang mahal. Di sini kamu bisa nego "Uang Tip" sesukamu. Hemat hingga 70% dibanding aplikasi sebelah.
                    </p>
                    <ul className="space-y-2 mt-auto">
                        <li className="flex items-center text-sm text-gray-600"><CheckCircle2 size={16} className="text-[#10B981] mr-2"/> Bebas tentukan harga</li>
                        <li className="flex items-center text-sm text-gray-600"><CheckCircle2 size={16} className="text-[#10B981] mr-2"/> Tanpa biaya tersembunyi</li>
                    </ul>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col items-start p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl hover:shadow-gray-100 transition-all duration-300 border border-transparent hover:border-gray-100">
                    <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                        <Users size={28} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Kekuatan Komunitas</h3>
                    <p className="text-gray-500 leading-relaxed mb-6">
                        Manfaatkan ribuan mahasiswa dan pekerja yang setiap hari melewati rute yang sama denganmu. Nebeng barang, bukan orang.
                    </p>
                    <ul className="space-y-2 mt-auto">
                        <li className="flex items-center text-sm text-gray-600"><CheckCircle2 size={16} className="text-[#10B981] mr-2"/> Rute kampus & kantor</li>
                        <li className="flex items-center text-sm text-gray-600"><CheckCircle2 size={16} className="text-[#10B981] mr-2"/> Saling membantu sesama</li>
                    </ul>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col items-start p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl hover:shadow-gray-100 transition-all duration-300 border border-transparent hover:border-gray-100">
                    <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                        <Shield size={28} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Aman & Terverifikasi</h3>
                    <p className="text-gray-500 leading-relaxed mb-6">
                        Setiap Traveler melalui proses verifikasi identitas. Uangmu aman di Escrow kami sampai barang diterima dengan baik.
                    </p>
                    <ul className="space-y-2 mt-auto">
                        <li className="flex items-center text-sm text-gray-600"><CheckCircle2 size={16} className="text-[#10B981] mr-2"/> Verifikasi KTP & Selfie</li>
                        <li className="flex items-center text-sm text-gray-600"><CheckCircle2 size={16} className="text-[#10B981] mr-2"/> Sistem Rating Transparan</li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* Footer Simple */}
      <footer className="py-8 text-center text-gray-400 text-sm bg-white border-t border-gray-100">
        &copy; 2025 Titip.in - Dibuat dengan ❤️ oleh Mahasiswa STT Terpadu Nurul Fikri
      </footer>
    </motion.div>
  )
}