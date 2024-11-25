import React from 'react'
import BlogList from '../components/BlogList'


export default function BlogHomeView({posts}) {
  return (
    <div>
      <h1>Blog</h1>
      <text>My collection of thoughts, updated when I find something else to sink my teeth into!</text>
      <BlogList posts={posts} />
    </div>
  )
}
