import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <>
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
