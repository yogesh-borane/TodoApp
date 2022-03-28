import React from 'react'
import {Link, Outlet} from 'react-router-dom'
const Profile = () => {
  return (
    <section className="profileBlock">
        <article>
            <header>
                <ul>
                    <li>
                        <Link to="/admin/profile/upload-photo">upload Profile Photo</Link>
                    </li>
                    <li>
                        <Link to="/admin/profile/update-password">update Password</Link>
                    </li>
                    <li>
                        <Link to="/admin/profile/delete-account">Remove Account</Link>
                    </li>
                </ul>
            </header>
            <main>
                <Outlet/>
            </main>
        </article>
    </section>
  )
}

export default Profile