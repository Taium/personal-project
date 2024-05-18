import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../../_metronic/layout/core'
import OrderDetails from './OrderDetails'
import OrderList from './OrderList'

const ordersBreadcrumbs: Array<PageLink> = [
  {
    title: 'Order Management',
    path: '/apps/order-management/orders',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const OrderPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='orders'
          element={
            <>
              <PageTitle breadcrumbs={ordersBreadcrumbs}>Orders list</PageTitle>
              <OrderList />
            </>
          }
        />
      </Route>
      <Route element={<Outlet />}>
        <Route
          path='orders/:id'
          element={
            <>
              <PageTitle breadcrumbs={ordersBreadcrumbs}>Orders Details</PageTitle>
              <OrderDetails />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/user-management/users' />} />
    </Routes>
  )
}

export default OrderPage
