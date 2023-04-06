import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import Home from './Component/Home';
import './index.css'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import About from './Component/About';
import Books from './Component/Books';
import Booklist from './Component/Booklist';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'books',
        element:<Books></Books>,
        loader: ()=> fetch('https://api.itbook.store/1.0/new')
      },
      {
        path:"booklist/:bookid",
        element:<Booklist></Booklist>,
        loader: ({params}) => fetch(`https://api.itbook.store/1.0/books/${params.bookid}`)
      },
      {
        path:'about',
        element:<About></About>,
       
      }
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
