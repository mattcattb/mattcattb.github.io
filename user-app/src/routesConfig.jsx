// routesConfig.js
import HomeView from './pages/HomeView';
import ProjectsView from './pages/ProjectsView';
import BlogHomeView from './pages/BlogHomeView';
import BlogPostView from './pages/BlogPostView';
import ExperienceView from './pages/ExperienceView'

import blogPosts from './content/blogPosts.json';

export const links = [
  { to: '/projects', name: 'Projects' },
  { to: '/blog', name: 'Blog' },
  { to: '/experience', name: 'Experience'}
];

export const routes = [
  { path: '/', element: <HomeView /> },
  { path: '/projects', element: <ProjectsView /> },
  { path: '/experience', element: <ExperienceView posts={blogPosts}/> },
  { path: '/blog', element: <BlogHomeView posts={blogPosts}/> },
  { path: '/blog/:id', element: <BlogPostView posts={blogPosts}/> },
];
