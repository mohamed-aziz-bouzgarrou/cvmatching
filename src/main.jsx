import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import AdminLayout from './ui/AdminLayout.jsx'
import CandidateLayout from './ui/CandidateLayout.jsx'
import AdminDashboard from './pages/admin/Dashboard.jsx'
import ManageFormations from './pages/admin/ManageFormations.jsx'
import ManageOffres from './pages/admin/ManageOffres.jsx'
import CandidateDashboard from './pages/candidate/CandidateDashboard.jsx'
import JobMatchesPage from './pages/candidate/JobMatchesPage.jsx'
import CVAnalysisPage from './pages/candidate/CVAnalysisPage.jsx'
import TrainingPage from './pages/candidate/TrainingPage.jsx'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/admin" replace />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="formations" element={<ManageFormations />} />
        <Route path="offres" element={<ManageOffres />} />
      </Route>
      <Route path="/candidate" element={<CandidateLayout />}>
        <Route index element={<CandidateDashboard />} />
        <Route path="dashboard" element={<CandidateDashboard />} />
        <Route path="cv-analysis" element={<CVAnalysisPage />} />
        <Route path="job-matches" element={<JobMatchesPage />} />
        <Route path="training" element={<TrainingPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

createRoot(document.getElementById('root')).render(<App />)