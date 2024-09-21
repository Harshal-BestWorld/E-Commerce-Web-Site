import React, { useContext } from 'react';
import './CartItems.css';
import remove_icon from '../Assets/cart_cross_icon.png';
import { ShopContext } from '../../Context/ShopContext';

export const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  // Calculate the total cart amount once
  const totalAmount = getTotalCartAmount ? getTotalCartAmount() : 0;

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Remove</p>
      </div>
      <hr />
      
      {all_product && all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id} className="cartitems-product">
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt={e.name} className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img 
                  className='carticon-remove-icon' 
                  src={remove_icon} 
                  onClick={() => removeFromCart(e.id)} 
                  alt="Remove item" 
                  aria-label={`Remove ${e.name} from cart`} 
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${totalAmount}</p> 
            </div>
            <hr />
            <div className='cartitems-total-item'>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className='cartitems-total-item'>
              <h3>Total</h3>
              <h3>${totalAmount}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='Promo code' />
            <button>Submit</button>
          </div>
        </div> 
      </div>
    </div>
  );
};
