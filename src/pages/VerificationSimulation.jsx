import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Camera, ScanFace, CheckCircle2, Fingerprint, Shield, Loader2 } from 'lucide-react';

export default function VerificationSimulation() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: KTP, 2: Selfie, 3: Success
  const [scanning, setScanning] = useState(false);

  const handleScan = () => {
    setScanning(true);
    // Simulasi proses scanning 3 detik
    setTimeout(() => {
      setScanning(false);
      setStep(prev => prev + 1);
    }, 3000);
  };

  const handleFinish = () => {
    navigate('/start'); // Kembali ke menu pemilihan peran dengan status "verified" (mental model)
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-md mx-auto min-h-screen bg-slate-900 text-white flex flex-col relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(to right, #334155 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Header */}
      <div className="p-6 flex items-center gap-4 z-10">
        {step < 3 && (
          <button onClick={() => navigate(-1)} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
            <ChevronLeft/>
          </button>
        )}
        <h2 className="text-lg font-bold flex items-center gap-2">
          <Shield className="text-primary" size={18}/> Pusat Keamanan
        </h2>
      </div>

      {/* CONTENT STEP 1: SCAN KTP */}
      {step === 1 && (
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center z-10">
          <div className="mb-8 relative">
            {/* Ilustrasi KTP */}
            <div className="w-72 h-48 bg-slate-800 rounded-2xl border-2 border-slate-600 relative overflow-hidden flex flex-col p-4">
                <div className="w-16 h-16 bg-slate-700 rounded-lg mb-4"></div>
                <div className="h-3 w-32 bg-slate-700 rounded mb-2"></div>
                <div className="h-3 w-48 bg-slate-700 rounded mb-2"></div>
                <div className="h-3 w-24 bg-slate-700 rounded"></div>
                
                {/* Scan Line Animation */}
                {scanning && (
                    <motion.div 
                        className="absolute left-0 right-0 h-1 bg-primary shadow-[0_0_20px_rgba(16,185,129,0.8)]"
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                )}
            </div>
            {/* Frame Corner */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-xl"></div>
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-xl"></div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-xl"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-xl"></div>
          </div>

          <h1 className="text-2xl font-bold mb-2">Foto e-KTP</h1>
          <p className="text-slate-400 text-sm mb-10 max-w-xs">
            Posisikan KTP Anda di dalam bingkai. Pastikan tulisan terbaca jelas dan tidak buram.
          </p>

          <button 
            onClick={handleScan}
            disabled={scanning}
            className="w-20 h-20 bg-white rounded-full border-4 border-slate-800 outline outline-2 outline-white flex items-center justify-center active:scale-95 transition-transform"
          >
            {scanning ? <Loader2 className="text-slate-900 animate-spin" size={32}/> : <Camera className="text-slate-900" size={32}/>}
          </button>
          {scanning && <p className="mt-4 text-primary font-mono text-sm animate-pulse">Memindai data...</p>}
        </div>
      )}

      {/* CONTENT STEP 2: SELFIE CHECK */}
      {step === 2 && (
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center z-10">
           <div className="mb-8 relative">
            <div className="w-64 h-64 bg-slate-800 rounded-full border-2 border-slate-600 relative overflow-hidden flex items-center justify-center">
                <ScanFace size={120} className={`text-slate-600 ${scanning ? 'animate-pulse text-primary' : ''}`}/>
                
                 {/* Face Grid Animation */}
                 {scanning && (
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-primary/20 to-transparent"
                    />
                )}
            </div>
          </div>

          <h1 className="text-2xl font-bold mb-2">Verifikasi Wajah</h1>
          <p className="text-slate-400 text-sm mb-10 max-w-xs">
            Lakukan gerakan mengangguk dan berkedip untuk memastikan Anda bukan robot.
          </p>

          <button 
            onClick={handleScan}
            disabled={scanning}
            className="w-full bg-primary text-slate-900 font-bold py-4 rounded-xl shadow-lg hover:bg-green-400 transition-all"
          >
            {scanning ? "Memverifikasi Biometrik..." : "Mulai Verifikasi Wajah"}
          </button>
        </div>
      )}

      {/* CONTENT STEP 3: SUCCESS */}
      {step === 3 && (
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center z-10">
          <motion.div 
            initial={{ scale: 0 }} animate={{ scale: 1 }} 
            className="w-32 h-32 bg-green-500/20 rounded-full flex items-center justify-center mb-8"
          >
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(34,197,94,0.6)]">
                <CheckCircle2 size={48} className="text-white"/>
            </div>
          </motion.div>

          <h1 className="text-3xl font-black mb-2">Identitas Terverifikasi!</h1>
          <p className="text-slate-400 text-sm mb-8 max-w-xs">
            Selamat! Akun Anda sekarang memiliki lencana <span className="text-primary font-bold">Verified Traveler</span>. Kepercayaan pengguna meningkat 80%.
          </p>

          <div className="bg-slate-800 p-4 rounded-xl w-full mb-8 border border-slate-700 flex items-center gap-4">
            <div className="p-2 bg-slate-700 rounded-lg">
                <Fingerprint className="text-primary" size={24}/>
            </div>
            <div className="text-left">
                <p className="text-xs text-slate-400">Status Akun</p>
                <p className="font-bold text-white flex items-center gap-1">
                    Level 1: Terverifikasi <Shield size={14} className="fill-primary text-primary"/>
                </p>
            </div>
          </div>

          <button onClick={handleFinish} className="w-full bg-white text-slate-900 font-bold py-4 rounded-xl hover:bg-gray-200 transition-all">
            Lanjut ke Menu Utama
          </button>
        </div>
      )}

    </motion.div>
  )
}