import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import CustomSpin from "../components/CustomSpin";
import RouterProvider from "./providers/RouterProvider";
import TanstackProvider from "./providers/TanstackProvider";
import ThemeProvider from "./providers/ThemeProvider";

function App() {
  return (
    <Suspense fallback={<CustomSpin />}>
      <ThemeProvider>
        <TanstackProvider>
          <BrowserRouter>
            <RouterProvider />
          </BrowserRouter>
        </TanstackProvider>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
