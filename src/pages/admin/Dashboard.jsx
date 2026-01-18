import React from 'react'
import { RiUserLine, RiBriefcaseLine, RiBookOpenLine, RiArrowUpLine, RiArrowDownLine } from 'react-icons/ri'

const cards = [
  { title: "Offres d'emploi", value: '1 250', trend: '12%', positive: true, icon: <RiBriefcaseLine />, iconBg: 'bg-purple-500' },
  { title: 'Formations', value: '320', trend: '5%', positive: true, icon: <RiBookOpenLine />, iconBg: 'bg-indigo-500' },
  { title: 'Utilisateurs', value: '3 480', trend: '2%', positive: false, icon: <RiUserLine />, iconBg: 'bg-green-500' },
]

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((c, i) => (
          <div key={i} className="rounded-xl border bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div className={`rounded-lg p-3 text-white ${c.iconBg}`}>{c.icon}</div>
              <div className={`flex items-center gap-1 text-sm ${c.positive?'text-emerald-600':'text-rose-600'}`}>
                {c.positive ? <RiArrowUpLine /> : <RiArrowDownLine />}
                {c.trend}
              </div>
            </div>
            <p className="mt-4 text-xs font-medium text-gray-500">{c.title}</p>
            <p className="mt-1 text-2xl font-semibold text-gray-900">{c.value}</p>
          </div>
        ))}
      </div>
      <div className="rounded-xl border bg-white p-4 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">Dernières offres</h2>
        <ul className="mt-3 divide-y">
          {[
            { title: 'Développeur Frontend React', company: 'TechCorp', location: 'Paris' },
            { title: 'Data Analyst', company: 'DataWorks', location: 'Lyon' },
            { title: 'Chef de projet IT', company: 'Innovate', location: 'Marseille' },
          ].map((o, idx) => (
            <li key={idx} className="py-3">
              <p className="text-sm font-semibold text-gray-900">{o.title}</p>
              <p className="text-xs text-gray-500">{o.company} • {o.location}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Dashboard