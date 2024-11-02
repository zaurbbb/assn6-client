import React, {
  Suspense,
  useEffect,
} from "react";
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import CustomSpin from "../../components/CustomSpin";
import PublicLayout from "../../design/PublicDesign";
import DashboardLayout from "../../design/PrivateDesign";
import { useIsAuthStore } from "../../zustand/useIsAuth";

import {
  privateRoutes,
  publicRoutes,
} from "../routes";

function RouterProvider() {
  const { isAuth, changeIsAuth } = useIsAuthStore();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      changeIsAuth();
    }
  }, [ localStorage.getItem("accessToken") ]);

  const defaultRoute = isAuth ? "/" : "/login";

  return (
    <>
      <PublicLayout>
        <Suspense
          fallback={
            <CustomSpin />
          }
        >
          {!isAuth && (
            <Routes>
              {publicRoutes.map((route) =>
                <Route
                  key={route.path}
                  {...route}
                />,
              )}
              <Route
                path="*"
                element={(
                  <Navigate
                    to={defaultRoute}
                    replace
                  />
                )}
              />
            </Routes>
          )}
          {isAuth && (
            <Routes>
              {privateRoutes.map((route) =>
                <Route
                  key={route.path}
                  {...route}
                />,
              )}
              <Route
                path="*"
                element={(
                  <Navigate
                    to={defaultRoute}
                    replace
                  />
                )}
              />
            </Routes>
          )}
        </Suspense>
      </PublicLayout>

      {/*{isAuth && (*/}
      {/*  <DashboardLayout>*/}
      {/*    <Suspense*/}
      {/*      fallback={*/}
      {/*        <CustomSpin />*/}
      {/*      }*/}
      {/*    >*/}
      {/*      <Routes>*/}
      {/*        {privateRoutes.map((route) =>*/}
      {/*          <Route*/}
      {/*            key={route.path}*/}
      {/*            {...route}*/}
      {/*          />,*/}
      {/*        )}*/}
      {/*        <Route*/}
      {/*          path="*"*/}
      {/*          element={(*/}
      {/*            <Navigate*/}
      {/*              to={defaultRoute}*/}
      {/*              replace*/}
      {/*            />*/}
      {/*          )}*/}
      {/*        />*/}
      {/*      </Routes>*/}
      {/*    </Suspense>*/}
      {/*  </DashboardLayout>*/}
      {/*)}*/}
    </>
  );
}

export default RouterProvider;