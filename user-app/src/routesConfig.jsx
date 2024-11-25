// routesConfig.js
import HomeView from './pages/HomeView';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Projects from './pages/Projects';

export const links = [
  { to: '/', name: 'Home' },
  { to: '/projects', name: 'Projects' },
  { to: '/blog', name: 'Blog' },
];

export const routes = [
  { path: '/', element: <HomeView /> },
  { path: '/projects', element: <Projects /> },
  { path: '/blog', element: <Blog /> },
  { path: '/blog/:id', element: <BlogPost /> },
];

export const posts = [
  { id: 'post1', title: 'Example Post', file: '/blog-posts/post1.md' },
];
