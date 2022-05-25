import React from 'react';
import image from '../../src/assets/images/notfound.jpg';


const Notfound = () => {
    return (
        <div className='items-center'>
      <h2 className="text-primary text-center text-3xl font-bold"> Opps Page Not Found!!!</h2>
      <img className="items-center w-100 py-10 " src={image} alt=""/>
    </div>
    );
};

export default Notfound;