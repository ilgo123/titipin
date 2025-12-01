import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import RoleSelection from './pages/RoleSelection'
import PenitipForm from './pages/PenitipForm'
import TravelerMarket from './pages/TravelerMarket'
import ChatSimulation from './pages/ChatSimulation'
import UserProfile from './pages/UserProfile'
import SuccessTrap from './pages/SuccessTrap'
import PaymentSimulation from './pages/PaymentSimulation'
import EarningsSimulation from './pages/EarningsSimulation'
import TrackingSimulation from './pages/TrackingSimulation'
import RatingSimulation from './pages/RatingSimulation'
import VerificationSimulation from './pages/VerificationSimulation'
import CommunityHub from './pages/CommunityHub'
import ReferralSimulation from './pages/ReferralSimulation'
import NotificationSimulation from './pages/NotificationSimulation'
import OnboardingSimulation from './pages/OnboardingSimulation'
import HelpCenter from './pages/HelpCenter'
import ActivityHistory from './pages/ActivityHistory'


function App() {
  const location = useLocation();
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-50">
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/start" element={<RoleSelection />} />
          <Route path="/penitip" element={<PenitipForm />} />
          <Route path="/traveler" element={<TravelerMarket />} />
          <Route path="/chat" element={<ChatSimulation />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/success" element={<SuccessTrap />} />
          <Route path="/payment" element={<PaymentSimulation />} />
          <Route path="/earnings" element={<EarningsSimulation />} />
          <Route path="/tracking" element={<TrackingSimulation />} />
          <Route path="/rating" element={<RatingSimulation />} />
          <Route path="/verification" element={<VerificationSimulation />} />
          <Route path="/community" element={<CommunityHub />} />
          <Route path="/referral" element={<ReferralSimulation />} />
          <Route path="/notifications" element={<NotificationSimulation />} />
          <Route path="/onboarding" element={<OnboardingSimulation />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/activity" element={<ActivityHistory />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}
export default App