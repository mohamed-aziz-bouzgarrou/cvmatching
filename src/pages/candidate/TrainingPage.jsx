import React, { useState } from 'react'
import { RiRefreshLine } from 'react-icons/ri'

const initialFormations = [
  { id: 1, title: 'React avancé', provider: 'OpenClassrooms', level: 'Intermédiaire', duration: '6 semaines' },
  { id: 2, title: 'Visualisation de données', provider: 'Coursera', level: 'Débutant', duration: '4 semaines' },
  { id: 3, title: 'Gestion de projet Agile', provider: 'Udemy', level: 'Intermédiaire', duration: '5 semaines' },
]

const TrainingPage = () => {
  const [items, setItems] = useState(initialFormations)
  const [refreshing, setRefreshing] = useState(false)

  const handleRefresh = async () => {
    if (refreshing) return
    setRefreshing(true)
    setTimeout(() => {
      setItems(prev => prev)
      setRefreshing(false)
    }, 800)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <header className="space-y-1">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">Formations</p>
          <h1 className="text-2xl font-semibold text-slate-900">Formations recommandées</h1>
          <p className="text-sm text-slate-500">Renforcez vos compétences avec des parcours adaptés.</p>
        </header>
        <button onClick={handleRefresh} disabled={refreshing} className="inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:bg-indigo-400">
          <RiRefreshLine className={`mr-2 ${refreshing ? 'animate-spin' : ''}`} />
          {refreshing ? 'Actualisation...' : 'Actualiser'}
        </button>
      </div>

      <ul className="space-y-4">
        {items.map(f => (
          <li key={f.id} className="rounded-xl border bg-white p-4 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">{f.title}</p>
            <p className="text-xs text-slate-500">{f.provider} • {f.level} • {f.duration}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TrainingPage