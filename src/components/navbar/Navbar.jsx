import React,{useState} from 'react'
import {Link} from 'react-router-dom';
const Navbar = () => {
    let [admin,setAdmin]=useState(true);
  return (
    <section id='mainSec'>
    <article>
      <div className='logoBlock'>
        <a href="#">MyTodo App</a>
      </div>
      <div className='menuBlock'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          {admin && (
            <li><Link to="/admin">Admin</Link></li>
          )}
          
        </ul>
      </div>
    </article>
  </section>
  )
}

export default Navbar