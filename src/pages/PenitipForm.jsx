import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Loader2, ChevronLeft, ShoppingBag, MapPin, Wallet } from 'lucide-react';

export default function PenitipForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  // State untuk Live Preview
  const [form, setForm] = useState({
    item: '',
    from: '',
    to: '',
    price: '',
    tip: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { navigate('/success?role=penitip'); }, 2000); // Delay 2 detik biar kerasa searching
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-8">
      <div className="max-w-5xl w-full bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
        
        {/* KOLOM KIRI: FORM INPUT */}
        <div className="w-full md:w-3/5 p-6 md:p-10">
          <Link to="/start" className="inline-flex items-center text-gray-400 mb-6 hover:text-slate-800 transition-colors font-medium text-sm">
            <ChevronLeft size={18}/> Batal
          </Link>
          
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-1">Buat Titipan</h2>
          <p className="text-gray-500 mb-8 text-sm">Isi detail barang agar Traveler mudah mencarinya.</p>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Barang</label>
              <input name="item" onChange={handleChange} required type="text" placeholder="Cth: Kopi Fore Pandan Latte" className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#10B981]/20 focus:border-[#10B981] outline-none transition-all font-medium text-slate-900" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Ambil di</label>
                <input name="from" onChange={handleChange} required type="text" placeholder="Outlet / Toko" className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#10B981]/20 focus:border-[#10B981] outline-none transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Antar ke</label>
                <input name="to" onChange={handleChange} required type="text" placeholder="Lokasi Kamu" className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#10B981]/20 focus:border-[#10B981] outline-none transition-all" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                 <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Estimasi Harga Barang</label>
                    <div className="relative">
                        <span className="absolute left-3.5 top-3.5 text-gray-400 font-bold text-sm">Rp</span>
                        <input name="price" onChange={handleChange} required type="number" placeholder="25.000" className="w-full p-3.5 pl-10 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#10B981]/20 focus:border-[#10B981] outline-none font-medium" />
                    </div>
                </div>
                <div>
                    <label className="block text-xs font-bold text-[#10B981] uppercase tracking-wider mb-2">Uang Tip (Nego)</label>
                    <div className="relative">
                        <span className="absolute left-3.5 top-3.5 text-[#10B981] font-bold text-sm">Rp</span>
                        <input name="tip" onChange={handleChange} required type="number" placeholder="10.000" className="w-full p-3.5 pl-10 bg-green-50 border border-green-200 text-[#10B981] rounded-xl focus:ring-2 focus:ring-[#10B981]/50 focus:border-[#10B981] outline-none font-bold" />
                    </div>
                </div>
            </div>

            <button disabled={loading} type="submit" className="w-full bg-slate-900 hover:bg-[#10B981] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-green-200 transition-all flex justify-center items-center gap-2 mt-4 disabled:opacity-80">
              {loading ? (
                <>
                    <Loader2 className="animate-spin" /> 
                    <span className="animate-pulse">Mencari Traveler...</span>
                </>
              ) : "Posting Titipan"}
            </button>
          </form>
        </div>

        {/* KOLOM KANAN: LIVE PREVIEW (Struk Belanja) */}
        <div className="w-full md:w-2/5 bg-gray-50 border-t md:border-t-0 md:border-l border-gray-100 p-8 flex flex-col justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 relative">
                {/* Hiasan seperti struk */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gray-200 rounded-full"></div>
                
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 text-center">Preview Pesanan</h3>
                
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-green-100 p-2 rounded-lg text-[#10B981] shrink-0">
                            <ShoppingBag size={20}/>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 mb-1">Barang</p>
                            <p className="font-bold text-slate-800 leading-tight">{form.item || "..."}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="bg-blue-100 p-2 rounded-lg text-blue-600 shrink-0">
                            <MapPin size={20}/>
                        </div>
                        <div className="w-full">
                            <p className="text-xs text-gray-500 mb-1">Rute</p>
                            <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                                <span className="truncate max-w-[80px]">{form.from || "Asal"}</span>
                                <span className="text-gray-300">→</span>
                                <span className="truncate max-w-[80px]">{form.to || "Tujuan"}</span>
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-dashed bg-gray-200 w-full my-4"></div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-600">
                            <Wallet size={18}/> Total Estimasi
                        </div>
                        <div className="text-xl font-black text-slate-900">
                            Rp {((parseInt(form.price) || 0) + (parseInt(form.tip) || 0)).toLocaleString()}
                        </div>
                    </div>
                    <p className="text-[10px] text-gray-400 text-right mt-1">*Termasuk harga barang & tip</p>
                </div>
            </div>
            
            <div className="mt-6 flex gap-2 justify-center">
                <span className="px-3 py-1 bg-green-100 text-[#10B981] text-xs font-bold rounded-full">Hemat Waktu</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-bold rounded-full">Aman</span>
            </div>
        </div>

      </div>
    </motion.div>
  )
}