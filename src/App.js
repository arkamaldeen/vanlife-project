import About from "./pages/About";

import Home from "./pages/Home";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import VanDetail, { loader as vanDetailLoader } from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import HostVans, {loader as hostVanLoader} from "./pages/Host/HostVans";
import HostVanDetail, {loader as hostVanDetailLoader} from "./pages/Host/HostVanDetail";
import HostVanDetailDesc from "./pages/Host/HostVanDetailDesc";
import HostVanDetailPrice from "./pages/Host/HostVanDetailPrice";
import HostVanDetailPhotos from "./pages/Host/HostVanDetailPhotos";
import NotFound from "./pages/NotFound";
import Error from "./components/Error";
import Login from "./pages/Login";
import { requireAuth } from "./util";



function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async () => await requireAuth()}
        />
        <Route
          path="vans"
          element={<HostVans />}
          loader={hostVanLoader}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async () => await requireAuth()}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async () => await requireAuth()}
        />
        <Route
          path='vans/:vanId'
          element={<HostVanDetail />}
          loader={hostVanDetailLoader}
        >
          <Route
            index
            element={<HostVanDetailDesc />}
            loader={async () => await requireAuth()}
          />
          <Route
            path="pricing"
            element={<HostVanDetailPrice />}
            loader={async () => await requireAuth()}
          />
          <Route
            path="photos"
            element={<HostVanDetailPhotos />}
            loader={async () => await requireAuth()}
          />
        </Route>

      </Route>
      <Route
        path="about"
        element={<About />}
      />
      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader} 
        errorElement={<Error />}
      />
      <Route
        path="login"
        element={<Login />}
      />
      <Route
        path="/vans/:id"
        element={<VanDetail />}
        loader={vanDetailLoader}
      />
      <Route
        path="*"
        element={<NotFound />}
      />
    </Route>
  ))


  return (
    <RouterProvider router={router} />
  );
}

export default App;
