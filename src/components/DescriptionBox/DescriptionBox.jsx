import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box-fade">
                Reviews (122)
            </div>
        </div>
        <div className="descriptionbox-description">
            <p>Our eCommerce site offers a seamless shopping experience, featuring a wide range of high-quality products across various categories. With user-friendly navigation, secure payment options, and fast delivery, we ensure that every customer enjoys convenience and satisfaction. Whether you're shopping for fashion, electronics, or home essentials, our platform provides an easy way to find exactly what you need, all from the comfort of your home.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, at quod explicabo reprehenderit, sequi nobis ratione harum esse sint alias consequuntur corrupti nisi nostrum quidem illo, nesciunt ut. Dolorem, modi!</p>
        </div>
    </div>
  )
}

export default DescriptionBox