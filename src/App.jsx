import About from "./pages/About";

import Home from "./pages/Home";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import VanDetail, { loader as vanDetailLoader } from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import Dashboard, { loader as DashboardLoader } from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import HostVans, { loader as hostVanLoader } from "./pages/Host/HostVans";
import HostVanDetail, { loader as hostVanDetailLoader } from "./pages/Host/HostVanDetail";
import HostVanDetailDesc from "./pages/Host/HostVanDetailDesc";
import HostVanDetailPrice from "./pages/Host/HostVanDetailPrice";
import HostVanDetailPhotos from "./pages/Host/HostVanDetailPhotos";
import NotFound from "./pages/NotFound";
import Error from "./components/Error";
import Login, { loader as loginLoader, action as loginAction } from "./pages/Login";
import { requireAuth } from "./util";


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={DashboardLoader}
        />
        <Route
          path="vans"
          element={<HostVans />}
          loader={hostVanLoader}
          errorElement={<Error />}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path='vans/:vanId'
          element={<HostVanDetail />}
          loader={hostVanDetailLoader}
          errorElement={<Error />}
        >
          <Route
            index
            element={<HostVanDetailDesc />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="pricing"
            element={<HostVanDetailPrice />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="photos"
            element={<HostVanDetailPhotos />}
            loader={async ({ request }) => await requireAuth(request)}
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
        loader={loginLoader}
        action={loginAction}
      />
      <Route
        path="/vans/:id"
        element={<VanDetail />}
        loader={vanDetailLoader}
        errorElement={<Error />}
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
