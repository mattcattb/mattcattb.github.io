// routesConfig.js
import HomeView from './pages/HomeView';
import BlogPostView from './pages/BlogPostView';
import ProjectsView from './pages/ProjectsView';
import BlogHomeView from './pages/BlogPostView';

export const links = [
  { to: '/', name: 'Home' },
  { to: '/projects', name: 'Projects' },
  { to: '/blog', name: 'Blog' },
];

export const posts = [
  { id: 'post1', title: 'Example Post', file: '/blog-posts/post1.md' },
];

export const routes = [
  { path: '/', element: <HomeView /> },
  { path: '/projects', element: <ProjectsView /> },
  { path: '/blog', element: <BlogHomeView posts={posts}/> },
  { path: '/blog/:id', element: <BlogPostView posts={posts}/> },
];
