import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './components/pages/App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { About } from './components/pages/About'
import Template from './components/templates/Template'
// import { ContactPage } from './components/pages/Contact'
import { contactLoader } from './components/pages/ContactLoader'
const App= lazy(()=>import('./components/pages/App'));
const About= lazy(()=>import('./components/pages/About'));
const ContactPage= lazy(()=>import('./components/pages/Contact'));


const routes =createBrowserRouter([
  {
    path: '/',
    element: <Template><App /></Template>
  },
  {
    path: '/about',
    element: <Template><About /></Template>
  },
  {
    path: '/contact',
    element: <Template><ContactPage /></Template>,
    loader: contactLoader
  }
]
);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<h3>Loading...</h3>}>
    <RouterProvider router={routes}/>
    </Suspense>
  </StrictMode>,
)
