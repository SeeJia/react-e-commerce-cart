import React, { useContext,useState } from 'react';
import {ShopContext} from '../../context/shop-context';

export const Product = (props) => {
    const { id,productName,price,productImage, productDescription } = props.data;
    
    const { addToCart, cartItems } = useContext(ShopContext);
    
    const cartItemAmount = cartItems[id];

    const [isTextVisible, setIsTextVisible] = useState(false);

    const handleClick = () => {
      setIsTextVisible(!isTextVisible);
    };

    const handleCancel = () => {
      setIsTextVisible(false);
    };

    return (
    <div className='product'>
      <img src={productImage} alt="product_image" />
      <div className='description'>
        <p><b>{productName}</b></p>
        <p>${price}</p>
      </div>
      <button className='addToCartBttn' onClick={() => addToCart(id)}>Add To Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
      <button className='addToCartBttn' onClick={handleClick}>Details</button>
      {isTextVisible && 
      
      (<div className="fullscreen-text">
        <img src={productImage} alt="product_image" />
        <div className='description'>
        <p><b>{productName}</b></p>
        <p className='product-description'>{productDescription}</p>
        <p>${price}</p>
      </div>
        <button className='BttnDark' onClick={() => addToCart(id)}>Add To Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
        <button className='BttnDark' onClick={handleCancel}>Cancel</button>  
      </div>)}
    </div>
  )
}

export default Product