import { createBrowserRouter } from "react-router-dom";

import Rgb from "./Rgb";
import Hex from "./Hex";
import HomeLayout from "./HomeLayout";

export const App = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomeLayout>
        <Rgb />
      </HomeLayout>
    ),
  },
  {
    path: "/hex",
    element: (
      <HomeLayout>
        <Hex />
      </HomeLayout>
    ),
  },
]);
