import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Dashboard from './pages/Dashboard'
import InternalOps from './pages/InternalOps'
import ComplianceReview from './pages/ComplianceReview'
import Overrides from './pages/Overrides'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/internal-ops" element={<InternalOps />} />
          <Route path="/compliance-review" element={<ComplianceReview />} />
          <Route path="/overrides" element={<Overrides />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
