import React from 'react'

function Navbar() {
  return (
      <nav className="navbar navbar-expand-sm navbar-light border-bottom shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand" href="#!">
          Berkay info
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarID"
          aria-controls="navbarID"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarID">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#!">
              Anasayfa
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar