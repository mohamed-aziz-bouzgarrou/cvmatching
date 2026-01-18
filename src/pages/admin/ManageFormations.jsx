import React, { useMemo, useState } from 'react'
import { RiSearchLine, RiFilterLine, RiEyeLine, RiDeleteBinLine } from 'react-icons/ri'

const initialFormations = [
  { id: 1, title: 'UX Research Essentials', provider: 'OpenClassrooms', duration: '8 semaines', price: 'Gratuit', category: 'Design', level: 'Débutant' },
  { id: 2, title: 'Analyse de données', provider: 'Coursera', duration: '10 semaines', price: '890€', category: 'Tech', level: 'Intermédiaire' },
  { id: 3, title: 'Lead Product Manager', provider: 'Udemy', duration: '6 semaines', price: '1 200€', category: 'Management', level: 'Avancé' },
  { id: 4, title: 'Marketing Digital 360°', provider: 'Google', duration: '9 semaines', price: 'Gratuit', category: 'Marketing', level: 'Débutant' },
]

const ManageFormations = () => {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Toutes')
  const [items, setItems] = useState(initialFormations)

  const filtered = useMemo(() => items.filter(f => {
    const s = search.trim().toLowerCase()
    const okSearch = !s || f.title.toLowerCase().includes(s) || f.provider.toLowerCase().includes(s)
    const okCat = category === 'Toutes' || f.category === category
    return okSearch && okCat
  }), [items, search, category])

  const handleDelete = (id) => setItems(prev => prev.filter(i => i.id !== id))

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Formations</h1>
        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-lg border bg-white px-3 py-2 text-sm">
            <RiSearchLine className="mr-2" />
            <input className="w-48 outline-none" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Rechercher" />
          </div>
          <div className="flex items-center rounded-lg border bg-white px-3 py-2 text-sm">
            <RiFilterLine className="mr-2" />
            <select value={category} onChange={e=>setCategory(e.target.value)}>
              {['Toutes','Management','Tech','Marketing','Design'].map(c=> <option key={c}>{c}</option>)}
            </select>
          </div>
        </div>
      </div>
      <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
        <table className="min-w-full divide-y">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Titre</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Organisme</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Durée</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Prix</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Catégorie</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y bg-white">
            {filtered.map(f => (
              <tr key={f.id} className="hover:bg-gray-50">
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{f.title}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{f.provider}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{f.duration}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{f.price}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{f.category}</td>
                <td className="whitespace-nowrap px-6 py-4 text-right text-sm">
                  <div className="flex justify-end gap-2">
                    <button className="rounded-lg border border-indigo-300 p-2 text-indigo-500 hover:bg-indigo-100"><RiEyeLine /></button>
                    <button onClick={()=>handleDelete(f.id)} className="rounded-lg border border-rose-300 p-2 text-rose-500 hover:bg-rose-100"><RiDeleteBinLine /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageFormations