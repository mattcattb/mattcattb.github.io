import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { links, routes, posts } from './routesConfig';

function App() {
  return (
    <div className="App">
      <Navbar links={links} />
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={React.cloneElement(element, { posts })} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
