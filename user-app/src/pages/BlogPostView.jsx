// BlogPost.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const BlogPostView = ({ posts }) => {
  const { id } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    const post = posts.find((p) => p.id === id);
    if (post) {
      fetch(post.file)
        .then((res) => res.text())
        .then((text) => setContent(text));
    }
  }, [id, posts]);

  return (
    <div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default BlogPostView;
