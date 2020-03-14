import React from 'react';
import { Link } from 'react-router-dom';
export const Home = () => {
  return (
    <>
      <div>Best practice React canvas</div>
      <Link to="/offcanvas">Off Canvas</Link>
      <Link to="/sign">Sign Canvas</Link>
    </>
  );
};

// export default Home;
