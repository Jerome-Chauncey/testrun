import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import LivePrices from "./pages/LivePrices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/liveprices",
    element: <LivePrices />,
  },
]);

export default router;
