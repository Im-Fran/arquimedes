import React from 'react'
import ReactDOM from 'react-dom/client'
import MainView from './views/MainView.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AuthView from "./views/AuthView.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainView/>
    },
    {
        path: '/autenticar',
        element: <AuthView/>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><RouterProvider router={router}/></React.StrictMode>)
