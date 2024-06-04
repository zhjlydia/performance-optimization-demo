import { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

const WebVitals = lazy(() => import('@/pages/web-vitals'))
const TestChunks = lazy(() => import('@/pages/test-chunks'))

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
    {
      path: '/web-vitals',
      element: (
        <LazyRoute>
          <WebVitals />
        </LazyRoute>
      ),
    },
    {
      path: '/test-chunks',
      element: (
        <LazyRoute>
          <TestChunks />
        </LazyRoute>
      ),
    },
  ])

  return element
}

export default Routes
