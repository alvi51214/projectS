import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Pages***** */
const Dashboard = Loadable(lazy(() => import('../views/dashboard/Dashboard')))
const Customers = Loadable(lazy(() => import('../views/customers/Customers')))
const AddCustomers = Loadable(lazy(() => import('../views/customers/AddCustomers')))
const Supplier = Loadable(lazy(() => import('../views/supplier/Supplier')))
const AddSupplier = Loadable(lazy(() => import('../views/supplier/AddSupplier')))
const Collaborator = Loadable(lazy(() => import('../views/collaborator/Collaborator')))
const AddCollaborator = Loadable(lazy(() => import('../views/collaborator/AddCollaborator')))
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Register = Loadable(lazy(() => import('../views/authentication/Register')));
const Login = Loadable(lazy(() => import('../views/authentication/Login')));

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/dashboard" /> },
      { path: '/dashboard', exact: true, element: <Dashboard /> },
      { path: '/customers', exact: true, element: <Customers /> },
      { path: '/add-customer', exact: true, element: <AddCustomers /> },
      { path: '/supplier', exact: true, element: <Supplier /> },
      { path: '/add-supplier', exact: true, element: <AddSupplier /> },
      { path: '/collaborator', exact: true, element: <Collaborator /> },
      { path: '/add-collaborator', exact: true, element: <AddCollaborator /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/login', element: <Login /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
