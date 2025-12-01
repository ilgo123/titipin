import { Link } from "react-router-dom";
import {
  ShoppingBag,
  MapPin,
  ChevronLeft,
  ArrowRight,
  ShieldCheck,
  Trophy,
  Bell,
  ClipboardList,
} from "lucide-react";
import { motion } from "framer-motion";

export default function RoleSelection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 flex flex-col justify-center p-6 md:p-12"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex justify-between items-center mb-12">
          <Link
            to="/"
            className="inline-flex items-center text-gray-500 hover:text-[#10B981] transition-colors font-medium group"
          >
            <ChevronLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />{" "}
            Kembali ke Home
          </Link>

          <div className="flex gap-3">
            <Link
              to="/activity"
              className="relative p-3 bg-white rounded-full shadow-sm border border-gray-100 hover:shadow-md transition-all group"
              title="Pesanan Saya"
            >
              <ClipboardList
                size={20}
                className="text-gray-600 group-hover:text-primary"
              />
              {/* Dot indikator ada pesanan aktif */}
              <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full"></span>
            </Link>

            <Link
              to="/notifications"
              className="relative p-3 bg-white rounded-full shadow-sm border border-gray-100 hover:shadow-md transition-all group"
            >
              <Bell
                size={20}
                className="text-gray-600 group-hover:text-[#10B981]"
              />
              {/* Dot Merah (Indikator Belum Dibaca) */}
              <span className="absolute top-2 right-2.5 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full animate-pulse"></span>
            </Link>
          </div>
        </div>

        <div className="text-center md:text-left mb-12">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
            Mau ngapain hari ini?
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl">
            Pilih peranmu untuk memulai simulasi transaksi di ekosistem
            Titip.in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* KARTU PENITIP */}
          <Link
            to="/penitip"
            className="group relative overflow-hidden bg-white p-8 md:p-12 rounded-[2rem] shadow-sm hover:shadow-2xl hover:shadow-green-100 border border-gray-200 hover:border-[#10B981] transition-all duration-300 flex flex-col justify-between h-[400px]"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500 ease-out" />

            <div className="relative z-10">
              <div className="w-16 h-16 bg-green-100 text-[#10B981] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#10B981] group-hover:text-white transition-colors">
                <ShoppingBag size={32} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-3">
                Si Penitip
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                Saya butuh bantuan untuk titip beli kopi, makanan, atau ambil
                paket.
              </p>
            </div>

            <div className="relative z-10 flex items-center text-[#10B981] font-bold mt-8 group-hover:translate-x-2 transition-transform">
              Mulai Penitipan <ArrowRight className="ml-2" />
            </div>
          </Link>

          {/* KARTU TRAVELER */}
          <Link
            to="/traveler"
            className="group relative overflow-hidden bg-white p-8 md:p-12 rounded-[2rem] shadow-sm hover:shadow-2xl hover:shadow-blue-100 border border-gray-200 hover:border-blue-500 transition-all duration-300 flex flex-col justify-between h-[400px]"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500 ease-out" />

            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <MapPin size={32} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-3">
                Si Traveler
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                Saya punya rute perjalanan dan mau cari uang bensin tambahan.
              </p>
            </div>

            <div className="relative z-10 flex items-center text-blue-600 font-bold mt-8 group-hover:translate-x-2 transition-transform">
              Cari Titipan <ArrowRight className="ml-2" />
            </div>
          </Link>
        </div>
        <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center items-center">
          <div>
            <Link
              to="/verification"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-green-200 rounded-full text-green-700 font-bold text-sm hover:bg-green-50 hover:shadow-md transition-all"
            >
              <ShieldCheck size={18} /> Coba Simulasi Verifikasi Identitas (KYC)
            </Link>
            <p className="text-xs text-gray-400 mt-2">
              *Fitur keamanan wajib bagi Traveler sebelum mengambil order.
            </p>
          </div>
          <Link
            to="/community"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 border border-slate-900 rounded-full text-white font-bold text-sm hover:bg-slate-800 hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <Trophy size={18} className="text-yellow-400" /> Leaderboard &
            Rewards
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
