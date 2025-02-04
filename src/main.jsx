import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { TreeTable, treeTableLoader } from './components/Tree.jsx'

const router = createBrowserRouter([{
    path: '/',
    element: <App />,
    children: [{
        path: '/trees',
        element: <TreeTable />,
        loader: treeTableLoader
      }, ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
