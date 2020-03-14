import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Home } from './pages';
import { OffCanvas, SignCanvas } from './components';

function App() {
  return (
    <>
      <Link to="/">Home</Link>
      <Route path="/" component={Home} exact />
      <Route path="/offcanvas" component={OffCanvas} exact />
      <Route path="/sign" component={SignCanvas} exact />
    </>
  );
}

export default App;
