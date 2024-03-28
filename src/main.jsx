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
import NotFound from './components/NotFound/NotFound.jsx';
import FeaturedBooks from './components/FeaturedBooks/FeaturedBooks.jsx';
import BookBlogs from './components/BookBlogs/BookBlogs.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<NotFound></NotFound>,
    children:[
      {
        path:"/",
        element: <Home></Home>,
        loader: () => fetch('./Books.json')
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
        loader: () => fetch('./Books.json')
      },
      {
        path:"/featuredbooks",
        element:<FeaturedBooks></FeaturedBooks>,
        loader: () => fetch('./FeaturedBooks.json')
      },
      {
        path:"/bookblogs",
        element:<BookBlogs></BookBlogs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
