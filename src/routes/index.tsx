import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MyAddress from "../pages/MyAddress";
import Subscribe from "../pages/Subscribe";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/my-address" element={<MyAddress />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
