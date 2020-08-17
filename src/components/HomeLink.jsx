import React from 'react';

import { Link } from 'react-router-dom';

const HomeLink = () => {
  return (
    <nav>
      <Link to="/">
        <h5>Home</h5>
      </Link>
    </nav>
  );
};

export default HomeLink;
