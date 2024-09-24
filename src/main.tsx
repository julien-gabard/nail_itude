import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import LayoutProvider from 'contexts/LayoutContext'
import Router from 'router/Router'

import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <LayoutProvider>
            <RouterProvider router={Router} />
        </LayoutProvider>
    </React.StrictMode>,
)
