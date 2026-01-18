import React, { useMemo, useState } from 'react'
import { RiBriefcaseLine, RiSearchLine, RiFilterLine, RiEyeLine } from 'react-icons/ri'

const initialOffers = [
  { id: 1, title: 'Développeur Frontend React', company: 'TechCorp', location: 'Paris', source: 'France Travail', contract: 'CDI', status: 'Active' },
  { id: 2, title: 'Data Analyst', company: 'DataWorks', location: 'Lyon', source: 'Pôle Emploi', contract: 'CDD', status: 'Active' },
  { id: 3, title: 'Chef de projet IT', company: 'Innovate', location: 'Marseille', source: 'Monster', contract: 'CDI', status: 'Inactive' },
]

const ManageOffres = () => {
  const [search, setSearch] = useState('')
  const [type, setType] = useState('Tous')
  const [status, setStatus] = useState('Tous')
  const offers = useMemo(() => initialOffers.filter(o => {
    const s = search.trim().toLowerCase()
    const okSearch = !s || o.title.toLowerCase().includes(s) || o.company.toLowerCase().includes(s)
    const okType = type === 'Tous' || o.contract === type
    const okStatus = status === 'Tous' || o.status === status
    return okSearch && okType && okStatus
  }), [search, type, status])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Offres d'emploi</h1>
        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-lg border bg-white px-3 py-2 text-sm">
            <RiSearchLine className="mr-2" />
            <input className="w-48 outline-none" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Rechercher" />
          </div>
          <div className="flex items-center rounded-lg border bg-white px-3 py-2 text-sm">
            <RiFilterLine className="mr-2" />
            <select value={type} onChange={e=>setType(e.target.value)}>
              {['Tous','CDI','CDD','Stage'].map(c=> <option key={c}>{c}</option>)}
            </select>
          </div>
          <div className="flex items-center rounded-lg border bg-white px-3 py-2 text-sm">
            <select value={status} onChange={e=>setStatus(e.target.value)}>
              {['Tous','Active','Inactive'].map(c=> <option key={c}>{c}</option>)}
            </select>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
        <table className="min-w-full divide-y">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Titre</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Entreprise</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Lieu</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Source</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Contrat</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">Statut</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y bg-white">
            {offers.map(o => (
              <tr key={o.id} className="hover:bg-gray-50">
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{o.title}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{o.company}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{o.location}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{o.source}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{o.contract}</td>
                <td className="whitespace-nowrap px-6 py-4 text-right text-sm">
                  <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${o.status==='Active'?'bg-green-100 text-green-800':'bg-red-100 text-red-800'}`}>{o.status}</span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-right text-sm">
                  <button className="rounded-lg border border-indigo-300 p-2 text-indigo-500 hover:bg-indigo-100"><RiEyeLine /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageOffres