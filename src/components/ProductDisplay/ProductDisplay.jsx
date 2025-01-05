import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import dull_star_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../context/ShopContext';

const ProductDisplay = ({ product }) => {
  // Always call useContext at the top level, unconditionally
  const { addToCart } = useContext(ShopContext);

  if (!product) {
    return <div>Loading product details...</div>; // Or you can show a placeholder
  }

  // Assuming the product has an array of images
  const productImages = product.images || [product.image]; // Use product.images if available

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {productImages.slice(0, 4).map((img, index) => (
            <img key={index} src={img || 'https://via.placeholder.com/150'} alt={`${product.name || 'Product'} image`} />
          ))}
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image || 'https://via.placeholder.com/150'} alt={product.name || 'Main Product Image'} />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name || 'Product Name Not Available'}</h1>
        <div className="productdisplay-right-star">
          {[...Array(5)].map((_, index) => (
            <img key={index} src={index < product.rating ? star_icon : dull_star_icon} alt="Star" />
          ))}
          <p>({product.reviews || 122})</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          {product.description || 'No description available.'}
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
        <p className="productdisplay-right-category">
          <span>Category :</span> {product.category || 'Unknown'}
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span> {product.tags?.join(', ') || 'No tags'}
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
