import React from 'react'
import {Link,Outlet} from "react-router-dom";
const Admin = () => {
  return (
    <section className="adminBlock">
        <article>
            <div className="sideBar">
                <nav>
                    <ul>
                        <li>
                            <Link to="/admin/profile">Profile</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="contentBlock">
                <Outlet/>
            </div>
        </article>
    </section>
  )
}

export default Admin