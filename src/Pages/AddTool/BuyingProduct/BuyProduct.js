import React from 'react';



const BuyProduct = ({product}) => {

   
    return (

  




        <div>
            
                    <form  className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                       
                        
                        <input type="text"  placeholder='your name' name="name" className="input input-bordered w-full max-w-xs" />
                        <input type="email" placeholder='your email' name="email"  className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="product-name" placeholder="Product name" className="input input-bordered w-full max-w-xs" />
                        <input type="number" name="price" placeholder="Price" className="input input-bordered w-full max-w-xs" />
                        <input type="number" name="Quantity" placeholder="Quantity" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
        
    
    );
};

export default BuyProduct;