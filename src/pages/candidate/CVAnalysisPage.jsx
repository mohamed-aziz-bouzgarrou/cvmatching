import React, { useState } from 'react'

const initialAnalysis = {
  updated_at: new Date().toISOString(),
  score: 78,
  contact: { name: 'John Doe', email: 'john.doe@example.com', phone: '+33 6 00 00 00 00' },
  summary: "Développeur frontend polyvalent. Solide expérience avec React, outillage moderne et bonnes pratiques.",
  keywords: ['React', 'Vite', 'Tailwind', 'Testing', 'Accessibility'],
  raw: {
    skills: [
      { name: 'React', degree: 'advanced', score: 9 },
      { name: 'JavaScript', degree: 'advanced', score: 9 },
      { name: 'TailwindCSS', degree: 'intermediate', score: 7 },
      { name: 'Node.js', degree: 'intermediate', score: 6 },
      { name: 'Testing', degree: 'beginner', score: 4 },
    ],
    education: [
      { diploma: 'Master Informatique', institution: 'Université de Paris', startDate: '2018', endDate: '2020', location: 'Paris' },
    ],
    work_experience: [
      { position: 'Développeur Frontend', enterprise: 'Acme Corp', startDate: '2021', endDate: '2024', location: 'Paris', description: 'Développement d’interfaces réactives, outillage Vite, intégration Tailwind.' },
    ],
  },
  recommendations: [
    "Renforcer les tests (unitaires et e2e)",
    "Ajouter des projets open-source au CV",
    "Préciser les métriques de performance",
  ],
}

const getProfiencyColor = (degree) => {
  switch (String(degree).toLowerCase()) {
    case 'intermediate':
      return 'bg-blue-100 text-blue-700'
    case 'beginner':
      return 'bg-amber-100 text-amber-700'
    case 'awareness':
      return 'bg-gray-100 text-gray-700'
    case 'expert':
    case 'advanced':
      return 'bg-green-100 text-green-700'
    default:
      return 'bg-slate-100 text-slate-700'
  }
}

const CVAnalysisPage = () => {
  const [analysis, setAnalysis] = useState(initialAnalysis)
  const [uploading, setUploading] = useState(false)
  const [file, setFile] = useState(null)
  const [message, setMessage] = useState('')
  const [error, setError] = useState(null)
  const [rawView, setRawView] = useState(false)

  const handleFileChange = (event) => {
    setFile(event.target.files?.[0] || null)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!file) {
      setMessage('Veuillez sélectionner un fichier.')
      return
    }
    setUploading(true)
    setMessage('')
    setError(null)
    setTimeout(() => {
      setMessage('CV téléchargé et analysé avec succès.')
      setAnalysis(initialAnalysis)
      setFile(null)
      setUploading(false)
    }, 800)
  }

  return (
    <div className='space-y-8'>
      <header className='space-y-1'>
        <p className='text-sm font-semibold uppercase tracking-wide text-slate-400'>Analyse CV</p>
        <h1 className='text-2xl font-semibold text-slate-900'>Analysez votre CV</h1>
        <p className='text-sm text-slate-500'>Téléchargez votre CV pour obtenir une analyse détaillée et des recommandations personnalisées.</p>
      </header>
      <section className='grid gap-6 lg:grid-cols-2'>
        <form onSubmit={handleSubmit} className='rounded-3xl border bg-white p-8 shadow-sm'>
          <div className='space-y-6'>
            <div>
              <h2 className='text-lg font-semibold text-slate-900'>Télécharger un nouveau CV</h2>
              <p className='mt-1 text-sm text-slate-500'>Formats acceptés : PDF, DOCX. Taille maximale recommandée : 5 Mo.</p>
            </div>
            <label htmlFor='cv-upload' className='flex h-40 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 text-center transition hover:border-indigo-300 hover:bg-indigo-50'>
              <span className='text-sm font-medium text-slate-600'>Déposez votre fichier ici</span>
              <span className='mt-2 text-xs text-slate-400'>ou cliquez pour sélectionner</span>
              <input id='cv-upload' type='file' accept='.pdf,.doc,.docx' onChange={handleFileChange} className='hidden' />
              {file && <span className='mt-3 text-xs text-indigo-600'>{file.name}</span>}
            </label>
            <button type='submit' className='w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:bg-indigo-300' disabled={uploading}>
              {uploading ? 'Analyse en cours...' : 'Analyser mon CV'}
            </button>
            {message && <div className='rounded-lg bg-emerald-50 p-3 text-sm text-emerald-600'>{message}</div>}
            {error && <div className='rounded-lg bg-rose-50 p-3 text-sm text-rose-600'>{error}</div>}
          </div>
        </form>

        <div className='rounded-3xl border bg-white p-8 shadow-sm'>
          {!analysis ? (
            <div className='space-y-3 text-sm text-slate-500'>
              <p>Aucune analyse disponible pour le moment.</p>
              <p>Téléchargez votre CV pour obtenir des recommandations personnalisées.</p>
            </div>
          ) : (
            <div className='space-y-6'>
              <div className='flex items-center justify-between gap-4'>
                <div>
                  <h2 className='text-lg font-semibold text-slate-900'>Résumé de l'analyse</h2>
                  <p className='text-sm text-slate-500'>Dernière mise à jour {new Date(analysis.updated_at).toLocaleString()}</p>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600'>Score {Math.round(analysis.score)}%</div>
                  <button type='button' onClick={() => setRawView(prev => !prev)} className='rounded-xl border px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-indigo-300 hover:text-indigo-600'>
                    {rawView ? 'Masquer le JSON' : 'Voir le JSON'}
                  </button>
                </div>
              </div>

              <div className='space-y-2'>
                <h3 className='text-sm font-semibold text-slate-900'>Informations de contact</h3>
                <div className='space-y-2 rounded-lg border bg-slate-50 p-4 text-sm'>
                  <p><span className='font-semibold text-slate-700'>Nom:</span> {analysis.contact.name}</p>
                  <p><span className='font-semibold text-slate-700'>Email:</span> {analysis.contact.email}</p>
                  <p><span className='font-semibold text-slate-700'>Téléphone:</span> {analysis.contact.phone}</p>
                </div>
              </div>

              {analysis.summary && (
                <div className='space-y-2'>
                  <h3 className='text-sm font-semibold text-slate-900'>Résumé professionnel</h3>
                  <p className='text-sm leading-relaxed text-slate-600'>{analysis.summary}</p>
                </div>
              )}

              {rawView && (
                <div className='space-y-2'>
                  <h3 className='text-sm font-semibold text-slate-900'>Données brut</h3>
                  <pre className='max-h-64 overflow-auto rounded-2xl bg-slate-900 p-4 text-xs text-slate-100'>{JSON.stringify(analysis.raw, null, 2)}</pre>
                </div>
              )}

              {Array.isArray(analysis.keywords) && analysis.keywords.length > 0 && (
                <div>
                  <h3 className='text-sm font-semibold text-slate-900'>Mots-clés détectés</h3>
                  <div className='mt-2 flex flex-wrap gap-2 text-xs'>
                    {analysis.keywords.map(keyword => (
                      <span key={keyword} className='rounded-full bg-indigo-50 px-3 py-1 text-indigo-600'>{keyword}</span>
                    ))}
                  </div>
                </div>
              )}

              {Array.isArray(analysis.raw.skills) && analysis.raw.skills.length > 0 && (
                <div className='space-y-3'>
                  <h3 className='text-sm font-semibold text-slate-900'>Compétences techniques</h3>
                  <div className='grid grid-cols-2 gap-2'>
                    {analysis.raw.skills.map((skill, index) => (
                      <div key={`skill-${index}`} className='flex items-center justify-between rounded-lg border bg-slate-50 px-3 py-2'>
                        <span className='text-xs font-medium text-slate-900'>{skill.name}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${getProfiencyColor(skill.degree)}`}>{skill.degree} - {skill.score}/10</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {Array.isArray(analysis.recommendations) && analysis.recommendations.length > 0 && (
                <div className='space-y-2'>
                  <h3 className='text-sm font-semibold text-slate-900'>Recommandations</h3>
                  <ul className='space-y-2 text-sm text-slate-600'>
                    {analysis.recommendations.map((item, index) => (
                      <li key={`rec-${index}`} className='flex gap-2'>
                        <span className='mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400' />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {Array.isArray(analysis.raw.education) && analysis.raw.education.length > 0 && (
                <div className='space-y-3'>
                  <h3 className='text-sm font-semibold text-slate-900'>Formation</h3>
                  <div className='space-y-3'>
                    {analysis.raw.education.map((edu, index) => (
                      <div key={`edu-${index}`} className='rounded-lg border bg-slate-50 p-4'>
                        <div className='flex items-start justify-between gap-2'>
                          <div className='flex-1'>
                            <h4 className='text-sm font-semibold text-slate-900'>{edu.diploma || 'Diplôme'}</h4>
                            {edu.institution && <p className='mt-1 text-xs text-slate-600'>{edu.institution}</p>}
                          </div>
                          {(edu.startDate || edu.endDate) && (
                            <p className='whitespace-nowrap text-xs text-slate-500'>
                              {edu.startDate && edu.endDate ? `${edu.startDate} - ${edu.endDate}` : (edu.startDate || edu.endDate)}
                            </p>
                          )}
                        </div>
                        {edu.location && <p className='mt-2 text-xs text-slate-600'>{edu.location}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {Array.isArray(analysis.raw.work_experience) && analysis.raw.work_experience.length > 0 && (
                <div className='space-y-3'>
                  <h3 className='text-sm font-semibold text-slate-900'>Expérience professionnelle</h3>
                  <div className='space-y-3'>
                    {analysis.raw.work_experience.map((exp, index) => (
                      <div key={`exp-${index}`} className='rounded-lg border bg-slate-50 p-4'>
                        <div className='flex items-start justify-between gap-2'>
                          <div className='flex-1'>
                            <h4 className='text-sm font-semibold text-slate-900'>{exp.position || 'Poste'}</h4>
                            {exp.enterprise && <p className='mt-1 text-xs font-medium text-indigo-600'>{exp.enterprise}</p>}
                          </div>
                          {(exp.startDate || exp.endDate) && (
                            <p className='whitespace-nowrap text-xs text-slate-500'>
                              {exp.startDate && exp.endDate ? `${exp.startDate} - ${exp.endDate}` : (exp.startDate || exp.endDate)}
                            </p>
                          )}
                        </div>
                        {exp.location && <p className='mt-2 text-xs text-slate-600'>{exp.location}</p>}
                        {exp.description && <p className='mt-2 text-xs leading-relaxed text-slate-600'>{exp.description}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default CVAnalysisPage