import './app.less'
import Routes from '@/router/routes'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  return (
    <div className="app">
      <div className="nav-bar">
        <div className="logo">性能优化 demo</div>
        <div className="nav-item" onClick={() => navigate('/web-vitals')}>
          web-vitals
        </div>
        <div className="nav-item" onClick={() => navigate('/test-chunks')}>
          test chunks
        </div>
      </div>
      <div className="main">
        <Routes />
      </div>
    </div>
  )
}

export default App
