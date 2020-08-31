import React from 'react';
import {Link} from 'react-router-dom'


export default function Header() {

    return (
  <nav className="navbar navbar-expand-lg navbar-light bg-success">
    <div className="container">
  <a className="navbar-brand" href="#" style={{fontWeight: "700",fontSize: "25px"}}>
    Loaner</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">
          Request Loan <span className="sr-only">(current)</span></a>
      </li>

      <Link className="btn btn-outline-primary my-2 ml-2 my-sm-0" to="/profile">
        Profile
        </Link>

      
      <li className="nav-item">
        <a className="nav-link" href="#">
          Transactions</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <Link className="btn btn-outline-primary my-2 my-sm-0"  to="/auth/login">
        Login
        </Link>
        <Link className="btn btn-outline-primary my-2 ml-2 my-sm-0" to="/auth/register">
        Signup
        </Link>
    </form>
  </div>
  </div>
</nav>


            )
    }  
  
  
