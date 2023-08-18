import React, { Component } from "react";
import { BrowserRouter,a } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            News-Monkey
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <BrowserRouter> */}
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="/business">business</a></li>    
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="/entertainment">entertainment</a></li>
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="/health">health </a></li>
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="/science">science </a></li>
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="/sports">sports </a></li>
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="/technology">technology</a></li>
              {/* </BrowserRouter> */}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}
