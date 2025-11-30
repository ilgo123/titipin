import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import RoleSelection from './pages/RoleSelection'
import PenitipForm from './pages/PenitipForm'
import TravelerMarket from './pages/TravelerMarket'
import SuccessTrap from './pages/SuccessTrap'

function App() {
  const location = useLocation();
  
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/start" element={<RoleSelection />} />
          <Route path="/penitip" element={<PenitipForm />} />
          <Route path="/traveler" element={<TravelerMarket />} />
          <Route path="/success" element={<SuccessTrap />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App