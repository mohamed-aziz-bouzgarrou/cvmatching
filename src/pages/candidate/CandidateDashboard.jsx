import React from 'react'
import { Link } from 'react-router-dom'
import { RiBriefcaseLine, RiFileSearchLine, RiArrowRightLine, RiGraduationCapLine } from 'react-icons/ri'

const stats = [
  { label: 'Matching', value: 8, icon: <RiBriefcaseLine />, to: '/candidate/job-matches' },
  { label: 'Analyse CV', value: 1, icon: <RiFileSearchLine />, to: '/candidate/cv-analysis' },
  { label: 'Formations', value: 4, icon: <RiGraduationCapLine />, to: '/candidate/training' },
]

const latestMatches = [
  { title: 'Ingénieur Backend Node.js', company: 'CloudX', location: 'Paris', score: 0.86 },
  { title: 'Product Designer', company: 'DesignHub', location: 'Remote', score: 0.74 },
]

const CandidateDashboard = () => {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">Tableau de bord</p>
        <h1 className="text-2xl font-semibold text-slate-900">Vue d'ensemble</h1>
        <p className="text-sm text-slate-500">Suivez votre progression, vos recommandations et vos actions récentes.</p>
      </header>
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map(stat => (
          <Link key={stat.label} to={stat.to} className="group rounded-2xl border bg-white p-4 shadow-sm transition hover:-translate-y-0.5">
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-slate-100 p-3">{stat.icon}</div>
              <RiArrowRightLine className="text-slate-300 transition group-hover:text-slate-500" />
            </div>
            <p className="mt-6 text-xs font-medium uppercase tracking-wide text-slate-400">{stat.label}</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">{stat.value}</p>
          </Link>
        ))}
      </section>
      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-900">Derniers matchs</p>
            <Link to="/candidate/job-matches" className="text-sm font-medium text-indigo-600">Voir tout</Link>
          </div>
          <ul className="mt-4 space-y-4">
            {latestMatches.map(match => (
              <li key={match.title} className="rounded-xl border p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{match.title}</p>
                    <p className="text-xs text-slate-500">{match.company}</p>
                  </div>
                  <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">{Math.round(match.score*100)}%</span>
                </div>
                <p className="mt-2 text-xs text-slate-500">{match.location}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-900">Activité récente</p>
            <Link to="/candidate/training" className="text-sm font-medium text-indigo-600">Voir tout</Link>
          </div>
          <ul className="mt-4 space-y-3">
            {[
              { label: 'CV analysé', time: 'Il y a 2j' },
              { label: 'Offre sauvegardée', time: 'Il y a 5j' },
              { label: 'Formation recommandée', time: 'Il y a 1j' },
            ].map(a => (
              <li key={a.label} className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                <span className="text-sm text-slate-700">{a.label}</span>
                <span className="text-xs text-slate-500">{a.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default CandidateDashboard