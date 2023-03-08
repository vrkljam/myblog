import React from 'react'
import { useParams } from 'react-router-dom'
import articles from './article-content'
import NotFound from './NotFound'

function ArticlePage() {
  const params =useParams()
  const articleId =params.articleId
  const article =articles.find(article =>article.name ===articleId)

    if (!article){
      return <NotFound />
    } 
      return (
        <div>
          <h1>{article.title}</h1>
          {article.content.map((paragraph, i) =>(
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      )
    
}

export default ArticlePage