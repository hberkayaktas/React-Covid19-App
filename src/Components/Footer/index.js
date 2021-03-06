import React from 'react'

function Footer() {
  return (
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top">
      <p className="col-md-4 mb-0 text-muted">Berkay aktaş Tarafından 2022 yılında yapılmıştır</p>
      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item">
          <a href="https://github.com/hberkayaktas" className="nav-link px-2 text-muted"><i class="fa-brands fa-github"></i></a>
        </li>
        <li className="nav-item">
          <a href="https://www.linkedin.com/in/hberkayaktas/" className="nav-link px-2 text-muted"><i class="fa-brands fa-linkedin"></i></a>
        </li>
        <li className="nav-item">
          <a href="#!" className="nav-link px-2 text-muted">Anasayfa</a>
        </li>
        <li className="nav-item">
          <a href="http://hamiberkayaktas.tk/index.php" className="nav-link px-2 text-muted">kişisel sitem</a>
        </li>
      </ul>
    </footer>
    
  )
}

export default Footer