import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ShieldCheck, CreditCard, QrCode, Wallet } from 'lucide-react';

export default function PaymentSimulation() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [method, setMethod] = useState('qris');

  // Simulasi Biaya (Revenue Stream)
  const hargaBarang = 35000;
  const uangTip = 10000;
  const biayaLayanan = 2000; // Ini profit Titip.in
  const total = hargaBarang + uangTip + biayaLayanan;

  const handlePay = () => {
    setLoading(true);
    setTimeout(() => { navigate('/tracking'); }, 2000);
  };

  return (
    <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="max-w-md mx-auto min-h-screen bg-white flex flex-col">
      
      {/* Header */}
      <div className="p-6 border-b border-gray-100 flex items-center gap-4">
        <button onClick={() => navigate(-1)}><ChevronLeft/></button>
        <h2 className="text-xl font-bold text-slate-900">Pembayaran Aman</h2>
      </div>

      <div className="p-6 flex-1">
        {/* Alert Escrow */}
        <div className="bg-blue-50 p-4 rounded-xl flex gap-3 items-start mb-8 border border-blue-100">
            <ShieldCheck className="text-blue-600 shrink-0" size={20}/>
            <p className="text-xs text-blue-800 leading-relaxed">
                Pembayaranmu aman di <strong>Rekening Bersama (Escrow)</strong> Titip.in. Uang baru diteruskan ke Traveler setelah barang kamu terima.
            </p>
        </div>

        {/* Rincian Biaya */}
        <h3 className="font-bold text-slate-900 mb-4">Rincian Pembayaran</h3>
        <div className="space-y-3 mb-8">
            <div className="flex justify-between text-sm text-gray-600">
                <span>Estimasi Harga Barang</span>
                <span>Rp {hargaBarang.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
                <span>Uang Tip Traveler</span>
                <span>Rp {uangTip.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm text-primary font-bold">
                <span>Biaya Layanan</span>
                <span>Rp {biayaLayanan.toLocaleString()}</span>
            </div>
            <div className="h-px bg-gray-100 my-2"></div>
            <div className="flex justify-between text-lg font-black text-slate-900">
                <span>Total Bayar</span>
                <span>Rp {total.toLocaleString()}</span>
            </div>
        </div>

        {/* Metode Pembayaran */}
        <h3 className="font-bold text-slate-900 mb-4">Pilih Metode</h3>
        <div className="space-y-3">
            <button onClick={() => setMethod('qris')} className={`w-full p-4 rounded-xl border-2 flex items-center gap-3 transition-all ${method === 'qris' ? 'border-primary bg-green-50 text-primary' : 'border-gray-100 hover:border-gray-200'}`}>
                <QrCode size={24}/>
                <span className="font-bold">QRIS (Gopay/Ovo/Dana)</span>
            </button>
            <button onClick={() => setMethod('transfer')} className={`w-full p-4 rounded-xl border-2 flex items-center gap-3 transition-all ${method === 'transfer' ? 'border-primary bg-green-50 text-primary' : 'border-gray-100 hover:border-gray-200'}`}>
                <CreditCard size={24}/>
                <span className="font-bold">Transfer Bank (VA)</span>
            </button>
        </div>
      </div>

      {/* Footer Button */}
      <div className="p-6 border-t border-gray-100">
        <button onClick={handlePay} disabled={loading} className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-primary transition-all disabled:opacity-70 flex justify-center items-center">
            {loading ? "Memproses..." : `Bayar Rp ${total.toLocaleString()}`}
        </button>
      </div>

    </motion.div>
  )
}