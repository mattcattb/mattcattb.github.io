import { Link } from 'react-router-dom';

export default function BlogList ({ posts }) {
    return(
    <div>
        <h1>Blog</h1>
        <ul>
        {posts.map((post, index) => (
            <BlogPostCard key={index} post={post} />
        ))}
        </ul>
    </div>
    );
}


function BlogPostCard ({ index, post }){
  return (
    <div>
        <li key={index}>
            <h2>{post.title}</h2>
            <p>{post.date}</p>
            <p>{post.description}</p>
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </li>
    </div>
  );
};
