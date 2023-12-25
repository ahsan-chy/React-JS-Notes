import {useCartElementState, CartElement} from '@stripe/react-stripe-js';

const NavigationBar = ({options}) => {
  const cartElementState = useCartElementState();

  return (
    <div>
      Your Cart ({cartElementState?.lineItems.count || 0} items)
      <CartElement options={options}>
    </div>
  )
}


export default NavigationBar