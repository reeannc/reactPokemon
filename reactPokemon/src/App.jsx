import { useState, Suspense } from 'react'
import ErrorBoundary from './ErrorBoundary'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ErrorBoundary>
    <Suspense fallback={<div>Loading...</div>}>
      <div className="App">

      </div>
    </Suspense>
    </ErrorBoundary>
  )
}

export default App
