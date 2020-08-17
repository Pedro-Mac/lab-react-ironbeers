import React from 'react';

import { Link } from 'react-router-dom';

const HomeSections = (props) => {
  return (
    <Link className="Home-Link" to={props.route}>
      <img src={props.img} alt={props.title} className="Home-img" />
      <h2>{props.title}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        posuere justo a nisi lobortis hendrerit. Praesent pharetra mauris vitae
        ante semper sagittis. Nam bibendum augue eget eros fringilla aliquet
      </p>
    </Link>
  );
};

export default HomeSections;
