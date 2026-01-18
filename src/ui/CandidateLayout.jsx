import React, { useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { RiDashboardLine, RiBriefcaseLine, RiGraduationCapLine, RiMenuLine, RiCloseLine, RiFileSearchLine } from 'react-icons/ri'

const CandidateLayout = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const nav = [
    { to: '/candidate/dashboard', label: 'Tableau de bord', icon: <RiDashboardLine /> },
    { to: '/candidate/cv-analysis', label: 'Analyse CV', icon: <RiFileSearchLine /> },
    { to: '/candidate/job-matches', label: 'Matching', icon: <RiBriefcaseLine /> },
    { to: '/candidate/training', label: 'Formations', icon: <RiGraduationCapLine /> },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex h-14 items-center justify-between border-b bg-white px-4">
        <button className="md:hidden" onClick={() => setOpen(true)}><RiMenuLine /></button>
        <p className="text-sm font-semibold">Candidat</p>
        <Link to="/admin/dashboard" className="rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700">Aller à l’admin</Link>
      </div>
      <div className="flex h-[calc(100vh-56px)]">
        <aside className={`fixed inset-y-0 left-0 z-20 w-64 transform bg-white p-4 shadow md:static md:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex h-10 items-center justify-between">
            <p className="font-semibold">Navigation</p>
            <button className="md:hidden" onClick={() => setOpen(false)}><RiCloseLine /></button>
          </div>
          <nav className="mt-4 space-y-1">
            {nav.map(item => (
              <Link key={item.to} to={item.to} className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm ${location.pathname===item.to?'bg-indigo-50 text-indigo-600':'text-gray-700 hover:bg-gray-50'}`}>
                <span className="text-lg">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="flex-1 w-full p-4 md:p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default CandidateLayout