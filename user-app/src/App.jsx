import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { links, routes } from './routesConfig';  // Assuming you have a routesConfig.js to manage your routes
import blogPosts from './content/blogPosts.json';

function App() {
  return (
    <div className="App">
      {/* Navbar component with dynamic links */}
      <Navbar links={links} />

      {/* Routes configuration */}
      <Routes>
        {routes.map(({ path, element }) => (
          <Route 
            key={path} 
            path={path} 
            element={React.cloneElement(element, { blogPosts })} 
          />
        ))}

        {/* Optional: Add a fallback route for 404 or unknown paths */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
