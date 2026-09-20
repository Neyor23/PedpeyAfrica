import { useParams, Link } from "react-router-dom"
import { articlesData } from "../../data/articlesData"

export default function ArticleDetail() {
  const { articleId } = useParams()
  const article = articlesData.find((a: any) => a.id === Number(articleId))

  if (!article) return <div className="p-10 text-center">Article not found</div>

  return (
    <div className="min-h-screen bg-[#f8f9f6]">
      {/* Header */}
      <div className="bg-[#0a4d2e] text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="text-sm opacity-70 hover:opacity-100">← Back to PedPey Africa</Link>
          <div className="mt-4 inline-block bg-[#f4b400] text-black text-xs font-bold px-3 py-1 rounded-full">
            {article.category.toUpperCase()}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">{article.title}</h1>
          <div className="flex gap-4 mt-4 text-sm opacity-80">
            <span>{article.author}</span> • <span>{article.date}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 -mt-8">
        <div className="bg-white rounded-[20px] shadow-xl overflow-hidden">
          <img src={article.image} alt={article.title} className="w-full h-[350px] object-cover" />

          <div className="p-8 md:p-12 prose prose-lg max-w-none prose-headings:text-[#0a4d2e] prose-b:text-black">
            <p className="text-xl text-gray-600 leading-relaxed italic border-l-4 border-[#f4b400] pl-4 mb-8">
              {article.excerpt}
            </p>
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>

          {/* Partnership CTA */}
          <div className="bg-[#0a4d2e] text-white p-8 m-8 rounded-xl">
            <h3 className="text-xl font-bold mb-2">Partner with PedPey Africa</h3>
            <p className="opacity-80 text-sm mb-4">Join the Pan Africa Technical Electronic Mechanism driving Agenda 2063 across 54 states.</p>
            <Link to="/#partner" className="bg-[#f4b400] text-black px-5 py-2 rounded-full text-sm font-bold inline-block">
              Become a Partner
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}