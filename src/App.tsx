import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PariPage from './pages/PariPage'
import TablePage from './pages/TablePage'
import Layout from './components/Layout'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/pari" element={<PariPage />} />
        <Route path="/table" element={<TablePage />} />
      </Route>
    </Routes>
  )
}

export default App
