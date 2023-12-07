import About from "./pages/About";

import Home from "./pages/Home";
import Vans from "./pages/Vans/Vans";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import VanDetail from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import HostVans from "./components/HostVans";
import HostVanDetail from "./components/HostVanDetail/HostVanDetail";
import HostVanDetailDesc from "./components/HostVanDetail/HostVanDetailDesc";
import HostVanDetailPrice from "./components/HostVanDetail/HostVanDetailPrice";
import HostVanDetailPhotos from "./components/HostVanDetail/HostVanDetailPhotos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="vans" element={<HostVans />} />
            <Route path='vans/:vanId' element={<HostVanDetail />} >
              <Route index element={<HostVanDetailDesc />} />
              <Route path="pricing" element={<HostVanDetailPrice />} />
              <Route path="photos" element={<HostVanDetailPhotos />} />
            </Route>
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
