import React from 'react'
import articles from './article-content'

import ArticlesList from '../components/ArticlesList'

function Articleslistpage() {
  return (
    <div>
        <h1>ARticles</h1>
        <ArticlesList articles={articles}/>
    </div>
  )
}

export default Articleslistpage