import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from './pages';

function App() {
  return (
    <>
      <Route to="/" component={Home} exact />
    </>
  );
}

export default App;
