import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Subscribe from "../pages/Subscribe";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/subscribe" element={<Subscribe />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
