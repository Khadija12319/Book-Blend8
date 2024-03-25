import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesToRead from './components/PagesToRead/PagesToRead';
import BookDetails from './components/BookDetails/BookDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element: <Home></Home>,
        loader: () => fetch('../public/Books.json')
      },
      {
        path:"/listed_books",
        element: <ListedBooks></ListedBooks>
      },
      {
        path:"/pages_to_read",
        element: <PagesToRead></PagesToRead>
      },
      {
        path:"/book/:id",
        element:<BookDetails></BookDetails>,
        loader: () => fetch('../public/Books.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
