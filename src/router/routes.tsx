import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

const PreLoad = lazy(() => import("@/pages/pre-load"));

function LazyRoute({ children }: React.PropsWithChildren) {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
}

function Routes() {
  const element = useRoutes([
    {
      path: "/pre-load",
      element: (
        <LazyRoute>
          <PreLoad />
        </LazyRoute>
      ),
    },
  ]);

  return element;
}

export default Routes;
