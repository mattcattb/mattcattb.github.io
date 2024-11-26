import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function BlogPostCard({ post }) {
  return (
    <Link to={`/blog/${post.id}`} className="block no-underline text-inherit">
      <div className="bg-white border border-gray-300 rounded-lg shadow-md p-4 w-[300px] flex flex-col justify-between transition-transform duration-200 hover:translate-y-[-5px] hover:shadow-lg">
        <Typography variant="h5" className="text-xl font-bold text-gray-800 mb-2 text-center">
          {post.title}
        </Typography>
        <Typography variant="body2" className="text-gray-600 mb-4 text-center">
          {post.description}
        </Typography>
      </div>
    </Link>
  );
}

