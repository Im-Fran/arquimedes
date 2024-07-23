import React from 'react'
import ReactDOM from 'react-dom/client'
import MainView from './views/MainView.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AuthView from "./views/AuthView.jsx";
import ErrorView from "./views/ErrorView.jsx";
import ReserveView from "./views/ReserveView.jsx";
import ReservedDatesView from "./views/ReservedDatesView.jsx";
import ContactView from "./views/ContactView.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainView/>,
        errorElement: <ErrorView/>
    },
    {
        path: '/autenticar',
        element: <AuthView/>
    },
    {
        path: '/reserva-hora',
        element: <ReserveView/>
    },
    {
        path: '/hora-de-atencion',
        element: <ReservedDatesView/>
    },
    {
        path: '/servicios-medicos',
        element: <ContactView/>
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode>
    <RouterProvider router={router}/>
</React.StrictMode>)
