import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { JSComponent, JSChemRepo, JSPubChem, JSPDB } from './components/JSComponents';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <JSComponent />,
  },
  {
    path: '/chemrepo',
    element: <JSChemRepo />,
  },
  {
    path: '/pubchem',
    element: <JSPubChem />,
  },
  {
    path: '/pdb',
    element: <JSPDB />,
  },
]);
