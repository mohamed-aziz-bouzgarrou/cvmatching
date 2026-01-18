import React, { useState } from 'react'
import { RiRefreshLine } from 'react-icons/ri'

const initialMatches = [
  { id: 1, title: 'Développeur Frontend React', company: 'TechCorp', location: 'Paris', score: 0.91, description: 'Construire des interfaces modernes avec React et Vite.' },
  { id: 2, title: 'Data Analyst', company: 'DataWorks', location: 'Lyon', score: 0.78, description: "Analyser des jeux de données pour l'aide à la décision." },
]

const JobMatchesPage = () => {
  const [matches, setMatches] = useState(initialMatches)
  const [refreshing, setRefreshing] = useState(false)

  const handleRefresh = async () => {
    if (refreshing) return
    setRefreshing(true)
    setTimeout(() => {
      setMatches(prev => prev)
      setRefreshing(false)
    }, 800)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <header className="space-y-1">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">Matching</p>
          <h1 className="text-2xl font-semibold text-slate-900">Opportunités recommandées</h1>
          <p className="text-sm text-slate-500">Découvrez les offres qui correspondent à votre profil.</p>
        </header>
        <button type="button" onClick={handleRefresh} disabled={refreshing} className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:bg-indigo-300">
          <RiRefreshLine className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
          {refreshing ? 'Recherche...' : 'Nouvelles correspondances'}
        </button>
      </div>
      <ul className="space-y-4">
        {matches.map(match => (
          <li key={match.id} className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-900">{match.title}</p>
                <p className="text-xs text-slate-500">{match.company}</p>
              </div>
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">{Math.round(match.score*100)}%</span>
            </div>
            <p className="mt-2 text-sm text-slate-600">{match.description}</p>
            <p className="mt-1 text-xs text-slate-500">{match.location}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default JobMatchesPage