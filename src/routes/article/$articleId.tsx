import { createFileRoute, Link } from '@tanstack/react-router'
import { articlesData } from '../../data/articlesData'

export const Route = createFileRoute('/article/$articleId')({
  component: ArticlePage,
})

function ArticlePage() {
  const { articleId } = Route.useParams()
  
  // This will show us everything
  return (
    <div style={{ padding: '50px', fontFamily: 'monospace' }}>
      <Link to="/">← Home</Link>
      <h2 style={{ marginTop: '20px' }}>DEBUG:</h2>
      <p>URL ID you typed: "{articleId}"</p>
      <p>Available IDs in data:</p>
      <ul>
        {articlesData.map(a => (
          <li key={a.id}>ID: "{a.id}" - Type: {typeof a.id} - Title: {a.title}</li>
        ))}
      </ul>
      <hr style={{ margin: '20px 0' }} />
      {(() => {
        const found = articlesData.find(a => String(a.id).trim() === String(articleId).trim().replace(/[^0-9]/g, ''))
        if (!found) return <h1>Still not found - send me photo of this screen</h1>
        return (
          <div>
            <h1 style={{ fontSize: '30px', fontWeight: 'bold' }}>{found.title}</h1>
            <p>{found.fullContent}</p>
          </div>
        )
      })()}
    </div>
  )
}