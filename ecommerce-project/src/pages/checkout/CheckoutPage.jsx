import './CheckoutPage.css'
import axios from 'axios'
import {OrderSummary} from './OrderSummary'
import { PaymentSummary } from './PaymentSummary'
import { useEffect, useState } from 'react'
import CheckoutPageHeader from './CheckoutPageHeader'


function CheckoutPage({ cart ,loadCart}) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);


  useEffect(() => {
    const fetchCheckout=async()=>{
      const response = await axios.get('https://ecommerce-fullstack-0klb.onrender.com/api/delivery-options?expand=estimatedDeliveryTime');

      setDeliveryOptions(response.data);
    };
     fetchCheckout();
  }, []);
  

  useEffect(()=>{
    const loadPayment=async()=>{
const response = await axios.get('https://ecommerce-fullstack-0klb.onrender.com/api/payment-summary');

      setPaymentSummary(response.data);
    }
    loadPayment();
  },[cart])


  return (
    <>
      <title>Checkout</title>
      <CheckoutPageHeader />
      <link rel="icon" type="image/svg+xml" href="/cart-favicon.png" />
      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary deliveryOptions={deliveryOptions} cart={cart} loadCart={loadCart}/>

          <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
        </div>
      </div>
    </>
  );
}
export default CheckoutPage;