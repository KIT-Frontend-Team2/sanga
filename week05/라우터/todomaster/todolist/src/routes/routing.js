import { createBrowserRouter } from "react-router-dom";
import WebPage from "../pages/main";
import WebToonPage from "../pages/webtoon/webtoon";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <WebPage />,
      },
      {
        path: "/web/:webId",
        element: <WebToonPage />,
      },
    ],
  },
]);

export default router;
