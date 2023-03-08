import React from 'react'
import {Link} from 'react-router-dom'

function ArticlesList({articles}) {

  return (
    <div>
          {articles.map(article => (
            <Link key={article.name} to={`/articles/${article.name}`}>
                <h3>{article.title}</h3>
                <p>{article.content[0].substring(0, 150)}...</p>
            </Link>
          ))}
    </div>
  )
}

export default ArticlesList