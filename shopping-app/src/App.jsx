import { useEffect, useState } from 'react';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import './App.scss'
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <h2>Home</h2>
          <Link to="/products">Products</Link>
        </div>
      ),
    },
    {
      path: "/products/:productId",
      element: <ProductDetails />
    },
    {
      path: "/products",
      element: <Products />
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
