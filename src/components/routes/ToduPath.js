import React from 'react';
import {useRoutes} from 'react-router-dom';
import Admin from '../admin/Admin';
import Profile from '../admin/profile/Profile';
import RemoveAccount from '../admin/profile/RemoveAccount';
import UpdatePassword from '../admin/profile/UpdatePassword';
import Uploadphoto from '../admin/profile/Uploadphoto';
import Home from '../navbar/Home';
import Login from '../navbar/Login';
import PagenotFound from '../navbar/PagenotFound';
import Register from '../navbar/Register';


const ToduPath = () => {
    let Path=useRoutes([
        {
            path: '/',
            element:<Home/>
        },
        {
            path:"login",
            element:<Login/>
        },
        {
            path:"register",
            element:<Register/>
        },
        {
            path:"admin",
            element:<Admin/>,
            children:[
                {
                    path:"profile",
                    element:<Profile/>,
                    children:[
                        {
                            path:"upload-photo",
                            element:<Uploadphoto/>
                        },
                        {
                            path:"update-password",
                            element:<UpdatePassword/>
                        },
                        {
                            path:"delete-account",
                            element:<RemoveAccount/>
                        }
                    ]
                }
            ]

        },
        {
            path:"*",
            element:<PagenotFound/>
        }
    ])
  return Path
}

export default ToduPath