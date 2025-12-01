import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Map, Wallet, ShieldCheck, ChevronRight } from 'lucide-react';

export default function OnboardingSimulation() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 1,
      icon: <Wallet size={80} className="text-white" />,
      bg: "bg-green-500",
      title: "Ongkir Mahal? Itu Kuno!",
      desc: "Titip barang apa saja dengan 'Uang Tip' sesukamu. Hemat biaya pengiriman hingga 50% dibanding aplikasi lain."
    },
    {
      id: 2,
      icon: <Map size={80} className="text-white" />,
      bg: "bg-blue-500",
      title: "Manfaatkan Rute Searah",
      desc: "Hubungkan kebutuhanmu dengan Traveler yang kebetulan lewat. Kurangi polusi, tambah koneksi."
    },
    {
      id: 3,
      icon: <ShieldCheck size={80} className="text-white" />,
      bg: "bg-slate-900",
      title: "Aman & Terpercaya",
      desc: "Setiap Traveler terverifikasi KTP. Uangmu aman di Rekening Bersama sampai barang diterima."
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      navigate('/start'); // Selesai onboarding, masuk ke pemilihan peran
    }
  };

  const handleSkip = () => {
    navigate('/start');
  };

  return (
    <div className="max-w-md mx-auto min-h-screen bg-white flex flex-col relative overflow-hidden">
      
      {/* Top Bar (Skip) */}
      <div className="absolute top-0 right-0 p-6 z-20">
        <button onClick={handleSkip} className="text-sm font-bold text-gray-400 hover:text-gray-800 transition-colors">
          Lewati
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentStep}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex-1 flex flex-col items-center justify-center p-8 text-center"
          >
            {/* Illustration Blob */}
            <div className={`w-64 h-64 ${steps[currentStep].bg} rounded-[3rem] rotate-3 flex items-center justify-center shadow-2xl shadow-gray-200 mb-12 relative`}>
               <div className="absolute inset-0 bg-white/10 rounded-[3rem] rotate-6 transform scale-90"></div>
               <div className="relative z-10 transform -rotate-3">
                  {steps[currentStep].icon}
               </div>
            </div>

            {/* Text Content */}
            <h1 className="text-3xl font-black text-slate-900 mb-4 leading-tight">
              {steps[currentStep].title}
            </h1>
            <p className="text-gray-500 leading-relaxed text-lg">
              {steps[currentStep].desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Navigation */}
      <div className="p-8">
        <div className="flex items-center justify-between">
          
          {/* Dots Indicator */}
          <div className="flex gap-2">
            {steps.map((_, index) => (
              <motion.div
                key={index}
                animate={{ 
                  width: index === currentStep ? 24 : 8,
                  backgroundColor: index === currentStep ? '#10B981' : '#E2E8F0'
                }}
                className="h-2 rounded-full transition-all duration-300"
              />
            ))}
          </div>

          {/* Next Button */}
          <button 
            onClick={handleNext}
            className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-primary transition-colors shadow-xl shadow-slate-200"
          >
            {currentStep === steps.length - 1 ? <CheckCircle2 size={24}/> : <ChevronRight size={28}/>}
          </button>
        </div>
      </div>

    </div>
  )
}