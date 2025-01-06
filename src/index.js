import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router-dom';
import 'regenerator-runtime/runtime';
import { routes } from './Routes';

const appContainer = document.getElementById('app');

if (!appContainer) {
  throw new Error('#app element does not exist!');
}

(async () => {
  if ('createRoot' in ReactDOM) {
    const { createRoot } = await import('react-dom/client');
    const root = createRoot(appContainer);
    root.render(<RouterProvider router={routes} />);
  } else {
    ReactDOM.render(<RouterProvider router={routes} />, appContainer);
  }
})();
