import { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

const WebVitals = lazy(() => import('@/pages/web-vitals'))

function LazyRoute({ children }: React.PropsWithChildren) {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
}

function Routes() {
  const element = useRoutes([
    {
      path: '/',
      element: (
        <LazyRoute>
          <WebVitals />
        </LazyRoute>
      ),
    },
  ])

  return element
}

export default Routes
