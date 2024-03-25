import React,{useEffect} from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import VisitorsPage from "./pages/VisitorsPage";
import AddProductPage from "./pages/AddProductPage";
import AddvisitorPage from "./pages/AddvisitorPage";
import Logout from "./pages/Logout";
import Protected from "./components/Protected";
import PageNotFound from "./pages/404";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProductsAsync, selectProducts } from "./Redux-Toolkit/products/productSlice";
import { fetchAllVisitorsAsync, selectVisitors } from "./Redux-Toolkit/visitors/visitorSlice";

const router = createBrowserRouter([
  {
    path: "/dashboard/:username",
    element: (
      <Protected>
        <HomePage></HomePage>
      </Protected>
    )
  },
  {
    path: "/",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/register",
    element: <RegisterPage></RegisterPage>,
  },
  {
    path: "/products",
    element:(
      <Protected>
        <ProductsPage></ProductsPage>
      </Protected>
    ) 
  },
  {
    path: "/visitors",
    element: (
      <Protected>
        <VisitorsPage></VisitorsPage>
      </Protected>
    )
  },
  {
    path: "/add-product",
    element: (
      <Protected>
        <AddProductPage></AddProductPage>
      </Protected>
    )
  },
  {
    path: "/add-visitor",
    element: (
      <Protected>
        <AddvisitorPage></AddvisitorPage>
      </Protected>
    )
  },
  {
    path: "/logout",
    element: <Logout></Logout>,
  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>,
  },
]);

const App = () => {
  const dispatch = useDispatch();
  const product = useSelector(selectProducts);
  const visitors = useSelector(selectVisitors);
  useEffect(() => {
    if (!product) {
      dispatch(fetchAllProductsAsync());
    }
  }, [dispatch, product]);

  
  useEffect(() => {
    if (!visitors) {
      dispatch(fetchAllVisitorsAsync());
    }
  }, [dispatch,visitors]);
  

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
