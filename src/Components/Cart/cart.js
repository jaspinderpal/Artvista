import { Link } from "react-router-dom";
import { useCart } from "../../CartContext";
import "./cart.css";
import { FaTimes } from "react-icons/fa";


const CartView = () => {
  const { cartItems,removeFromCart } = useCart();

  const calculateSubtotal = (cartItems) => {
    let subtotal = 0;
    cartItems.forEach((cartItem) => {
      subtotal += cartItem.new_price * 1;
    });
    return subtotal;
  };
  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };
  const calculateTotalPrice = (cartItems) => {
    const subtotal = calculateSubtotal(cartItems);
    const deliveryCharge = 5; // Example delivery charge
    const taxRate = 0.1; // Example tax rate
    const tax = subtotal * taxRate;
    const total = subtotal + tax + deliveryCharge;
    return total.toFixed(2);
  };

  const handleCheckout = (cartItems) => {
    // Logic to handle checkout
    console.log("Checkout:", cartItems);
  };

  return (
    <div className="cart-container">
      <div className="product-details">
        <h2 className="mb-3">Your Cart</h2>
        {cartItems.length === 0 ? (
          <div className="empty-cart-message">
            <p>You don't have any items in your cart.</p>
            <Link to="/">Shop Now</Link>
          </div>
        ) : (
          cartItems.map((cartItem) => (
            <div className="product-detail mt-5" key={cartItem._id}>
              <img
                src={cartItem.image}
                alt={cartItem.name}
                className="product-image"
              />
              <div className="product-info">
                <h3>{cartItem.name}</h3>
                <p>${cartItem.new_price}</p>
                <p>Size: {cartItem.size}</p>
                <p>Quantity: 1</p>
              </div>
              <button className="remove-item" onClick={() => handleRemoveItem(cartItem._id)}>
                  <FaTimes />
                </button>
            </div>
          ))
        )}
      </div>
      {cartItems.length === 0 ? "" : (
       <div className="cart-summary">
       <div className="order-summary">
         <h3>Order Summary</h3>
         <p>Subtotal: ${calculateSubtotal(cartItems)}</p>
         <p>Delivery Charge: $5.00</p>
         <p>Tax: ${(calculateSubtotal(cartItems) * 0.1).toFixed(2)}</p>
         <p className="total-price">Total Price: ${calculateTotalPrice(cartItems)}</p>
       </div>
       <div className="checkout-button">
         <button onClick={() => handleCheckout(cartItems)}>Checkout</button>
       </div>
     </div>
     
      )}
    </div>
  );
};

export default CartView;