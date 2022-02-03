// import React, { useState, useEffect } from 'react';
import React from "react";
import "./NotFound.scss";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      {/* <div className="c-notfound" style={{ backgroundImage: `url(/Portfolio/img/403.jpg`}}> */}
      <div className="c-notfound">
        <div className="c-notfound__title">
          <h1>404</h1>
          <h2>This Page is Broken</h2>
        </div>
        <div className="c-notfound__home">
          <Link to={`/Portfolio`}>
            <h3>← Go Home</h3>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
