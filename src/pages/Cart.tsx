import CartComponent from '../customComponents/CartComponent'
import Layout from '../customComponents/Layout'

const Cart = () => {
  return (
    <Layout>
      <div className='mt-10'>
        <CartComponent/>
      </div>
    </Layout>
  )
}

export default Cart