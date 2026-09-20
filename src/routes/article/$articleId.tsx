import { createFileRoute, Link } from '@tanstack/react-router'
import { articlesData } from '../../data/articlesData'

export const Route = createFileRoute('/article/$articleId')({
  component: ArticleDetail,
})

function ArticleDetail() {
  const { articleId } = Route.useParams()
  
  // FIX: compare as string so 1 == "1" works
  const article = articlesData.find((a) => String(a.id) === String(articleId))

  if (!article) {
    return (
      <div className="p-20 text-center">
        <h1 className="text-2xl">Article not found</h1>
        <p className="mt-2 text-gray-500">You searched for ID: {articleId}</p>
        <p className="text-sm text-gray-400">Available IDs: {articlesData.map(a => a.id).join(', ')}</p>
        <Link to="/" className="mt-6 inline-block bg-[#0a4d2e] text-white px-6 py-2 rounded-full">Go home</Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f8f9f6]">
      <div className="bg-[#0a4d2e] text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="text-sm opacity-70 hover:opacity-100">← Back to PedPey Africa</Link>
          <div className="mt-4 inline-block bg-[#f4b400] text-black text-xs font-bold px-3 py-1 rounded-full">
            {article.category.toUpperCase()}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">{article.title}</h1>
          <div className="flex gap-4 mt-4 text-sm opacity-80">
            <span>{article.author}</span><span>•</span><span>{article.date}</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-8 pb-20">
        <div className="bg-white rounded-[20px] shadow-xl overflow-hidden">
          <img src={article.image} alt={article.title} className="w-full h-[350px] object-cover" />
          <div className="p-8 md:p-12">
            <p className="text-xl text-gray-600 italic border-l-4 border-[#f4b400] pl-4 mb-8">
              {article.excerpt}
            </p>
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
        </div>
      </div>
    </div>
  )
}