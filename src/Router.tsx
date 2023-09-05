import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { OrderDetails } from './pages/OrderDetails'
import { ConfirmedOrder } from './pages/ConfirmedOrder'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<OrderDetails />} />
        <Route path="/confirmed" element={<ConfirmedOrder />} />
      </Route>
    </Routes>
  )
}
