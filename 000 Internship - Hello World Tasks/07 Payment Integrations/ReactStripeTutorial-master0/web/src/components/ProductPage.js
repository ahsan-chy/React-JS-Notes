import {useCartElement} from '@stripe/react-stripe-js';

const ProductPage = ({productId}) => {
  const cartElement = useCartElement();

  const handleAddLineItem = () => {
    if (!cartElement) return;
    cartElement.addLineItem({product: productId});
  };

  return (
    <div>
      <button onClick={handleAddLineItem}>Add to cart</button>
    </div>
  )
};