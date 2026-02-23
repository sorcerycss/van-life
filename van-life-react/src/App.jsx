import { 
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route
} from 'react-router-dom'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Vans, { loader as vansLoader } from './pages/Vans/Vans.jsx'
import VanDetail from './pages/Vans/VanDetail.jsx'
import Layout from './components/Layout.jsx'
import Dashboard from './pages/Host/Dashboard.jsx'
import Income from './pages/Host/Income.jsx'
import HostVans from './pages/Host/HostVans.jsx'
import HostVanDetail from './pages/Host/HostVanDetail.jsx'
import HostVanInfo from './pages/Host/HostVanInfo.jsx'
import HostVanPricing from './pages/Host/HostVanPricing.jsx'
import HostVanPhotos from './pages/Host/HostVanPhotos.jsx'
import HostLayout from './components/HostLayout.jsx'
import Reviews from './pages/Host/Reviews.jsx'
import NotFound from './pages/NotFound.jsx'
import Login from './pages/Login.jsx'
import AuthRequired from './components/AuthRequired.jsx'
import Error from './components/Error.jsx'


import './App.css'

const routes = (
  <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

          <Route element={<AuthRequired />}> 

            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="vans" element={<HostVans />} />

              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
              
              <Route path="reviews" element={<Reviews />} />
            </Route>

          </Route> 

            <Route path="about" element={<About />} />
            <Route
              path="vans"
              element={<Vans />}
              loader={vansLoader}
              errorElement={<Error />}
              />
            <Route path="vans/:id" element={<VanDetail />} />
            <Route path="login" element={<Login />} />
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
