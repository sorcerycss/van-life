import { 
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
  redirect
} from 'react-router-dom'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Vans, { loader as vansLoader } from './pages/Vans/Vans.jsx'
import VanDetail, { loader as vanDetailLoader} from './pages/Vans/VanDetail.jsx'
import Layout from './components/Layout.jsx'
import Dashboard, { loader as dashboardLoader } from './pages/Host/Dashboard.jsx'
import Income from './pages/Host/Income.jsx'
import HostVans, { loader as hostVansLoader } from './pages/Host/HostVans.jsx'
import HostVanDetail, { loader as hostVanDetailLoader } from './pages/Host/HostVanDetail.jsx'
import HostVanInfo from './pages/Host/HostVanInfo.jsx'
import HostVanPricing from './pages/Host/HostVanPricing.jsx'
import HostVanPhotos from './pages/Host/HostVanPhotos.jsx'
import HostLayout from './components/HostLayout.jsx'
import Reviews from './pages/Host/Reviews.jsx'
import NotFound from './pages/NotFound.jsx'
import Login, { loader as loginLoader } from './pages/Login.jsx'
import AuthRequired from './components/AuthRequired.jsx'
import Error from './components/Error.jsx'


import './App.css'
import { requireAuth } from './utils.js'

const routes = (
  <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route element={<AuthRequired />}> 

            <Route
              path="host"
              element={<HostLayout />}
              errorElement={<Error />}
              >
              <Route
                index
                element={<Dashboard />}
                loader={dashboardLoader}
                />
              <Route
                path="income"
                element={<Income />}
                // loader={async () => await requireAuth()}
                />
              <Route
                path="vans"
                element={<HostVans />}
                loader={hostVansLoader}
                />

              <Route
                path="vans/:id"
                element={<HostVanDetail />}
                loader={hostVanDetailLoader}
                >
                <Route
                  index
                  element={<HostVanInfo />} 
                  // loader={() => requireAuth()}
                  />
                <Route
                  path="pricing"
                  element={<HostVanPricing />}
                  // loader={() => requireAuth()}
                  />
                <Route
                  path="photos"
                  element={<HostVanPhotos />}
                  // loader={() => requireAuth()}
                  />
              </Route>
              
              <Route
                path="reviews"
                element={<Reviews />}
                // loader={() => requireAuth()}
                />
            </Route>

          </Route> 

            <Route path="about" element={<About />} />
            <Route
              path="vans"
              element={<Vans />}
              loader={vansLoader}
              errorElement={<Error />}
              />
            <Route
            path="vans/:id"
            element={<VanDetail />}
            loader={vanDetailLoader}
            />
            <Route
              path="login"
              element={<Login />}
              loader={loginLoader}
              errorElement={<Error />}
              />
            <Route path="*" element={<NotFound />} />
    </Route>
)

const router = createBrowserRouter(createRoutesFromElements(routes))

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
