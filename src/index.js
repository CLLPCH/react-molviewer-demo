import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router-dom';
import 'regenerator-runtime/runtime';
import { routes } from './Routes';

const appContainer = document.getElementById('app');

if (!appContainer) {
  throw new Error('#app element does not exist!');
}

if (ReactDOM.createRoot) {
  const root = ReactDOM.createRoot(appContainer);
  root.render(<RouterProvider router={routes} />);
} else {
  ReactDOM.render(<RouterProvider router={routes} />, appContainer);
}
