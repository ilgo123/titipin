import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ShieldCheck,
  Star,
  MapPin,
  ShoppingBag,
  Gift,
  HelpCircle,
  ChevronRight,
} from "lucide-react";

export default function UserProfile() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-md mx-auto min-h-screen bg-white pb-20"
    >
      {/* Header */}
      <div className="h-32 bg-gradient-to-r from-green-400 to-emerald-600 relative">
        <button
          onClick={() => window.history.back()}
          className="absolute top-6 left-6 text-white/90 hover:text-white flex items-center gap-1 font-bold"
        >
          <ChevronLeft /> Kembali
        </button>
      </div>

      {/* Profile Info (PENITIP) */}
      <div className="px-6 relative">
        <div className="w-24 h-24 bg-white rounded-full p-1 absolute -top-12 shadow-lg">
          <div className="w-full h-full bg-slate-100 rounded-full flex items-center justify-center text-slate-400 font-bold text-3xl overflow-hidden">
            {/* Simulasi Foto Profil */}
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sari"
              alt="Profile"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="pt-16">
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl font-black text-slate-900">Sari Rahma</h1>
            <ShieldCheck className="text-green-500 fill-green-50" size={20} />
          </div>
          <p className="text-gray-500 text-sm mb-6 flex items-center gap-1">
            <span className="bg-green-100 text-primary px-2 py-0.5 rounded text-xs font-bold">
              Penitip
            </span>
            • Mahasiswi UI • Kukusan
          </p>

          {/* Stats Card (Statistik Penitip) */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="p-3 bg-gray-50 rounded-xl text-center border border-gray-100">
              <div className="text-lg font-black text-slate-800">5.0</div>
              <div className="text-[10px] text-gray-500 font-bold uppercase flex justify-center items-center gap-1">
                <Star size={10} className="text-orange-400 fill-orange-400" />{" "}
                Rating
              </div>
            </div>
            <div className="p-3 bg-gray-50 rounded-xl text-center border border-gray-100">
              <div className="text-lg font-black text-slate-800">42</div>
              <div className="text-[10px] text-gray-500 font-bold uppercase">
                Titipan
              </div>
            </div>
            <div className="p-3 bg-gray-50 rounded-xl text-center border border-gray-100">
              <div className="text-lg font-black text-green-600">100%</div>
              <div className="text-[10px] text-gray-500 font-bold uppercase">
                Payment
              </div>
            </div>
          </div>
          <Link to="/referral" className="block mb-8 group">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-4 rounded-2xl flex items-center justify-between shadow-lg relative overflow-hidden">
              <div className="absolute right-0 top-0 w-24 h-24 bg-primary/20 rounded-full blur-2xl -mr-8 -mt-8"></div>
              <div className="relative z-10 text-white">
                <h3 className="font-bold text-sm">Undang Teman</h3>
                <p className="text-xs text-slate-400">
                  Dapatkan Rp 5.000 per teman!
                </p>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <Gift size={20} />
              </div>
            </div>
          </Link>

          {/* Reviews dari Traveler lain */}
          <h3 className="font-bold text-slate-900 mb-4">Kata Traveler Lain</h3>
          <div className="space-y-4">
            {[
              {
                name: "Budi (Traveler)",
                text: "Kak Sari fast respon, uang tip juga oke banget!",
                star: 5,
              },
              {
                name: "Joko (Traveler)",
                text: "Jelas banget kasih titik antarnya, ga nyasar.",
                star: 5,
              },
            ].map((review, i) => (
              <div
                key={i}
                className="border-b border-gray-50 pb-4 last:border-0"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm text-slate-800">
                    {review.name}
                  </span>
                  <div className="flex text-orange-400">
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                  </div>
                </div>
                <p className="text-sm text-gray-500 italic">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-100 pt-6">
        <h3 className="font-bold text-slate-900 mb-4">Lainnya</h3>

        <Link
          to="/help"
          className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl group hover:bg-slate-50 transition-colors"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-500 shadow-sm border border-gray-100">
              <HelpCircle size={20} />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">
                Pusat Bantuan
              </h4>
              <p className="text-xs text-gray-500">FAQ & Customer Service</p>
            </div>
          </div>
          <ChevronRight
            size={18}
            className="text-gray-400 group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </motion.div>
  );
}
