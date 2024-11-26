// routesConfig.js
import HomeView from './pages/HomeView';
import ProjectsView from './pages/ProjectsView';
import BlogHomeView from './pages/BlogHomeView';
import BlogPostView from './pages/BlogPostView';
import ExperienceView from './pages/ExperienceView'

export const links = [
  { to: '/', name: 'Home' },
  { to: '/projects', name: 'Projects' },
  { to: '/blog', name: 'Blog' },
  { to: '/experience', name: 'Experience'}
];

export const posts = [
  { id: 'post1', title: 'Example Post', file: '/blog-posts/post1.md' },
  { id: 'post2', title: 'Another Post', file: '/blog-posts/post2.md' },
];

export const routes = [
  { path: '/', element: <HomeView /> },
  { path: '/projects', element: <ProjectsView /> },
  { path: '/experience', element: <ExperienceView posts={posts}/> },
  { path: '/blog', element: <BlogHomeView posts={posts}/> },
  { path: '/blog/:id', element: <BlogPostView posts={posts}/> },
];
