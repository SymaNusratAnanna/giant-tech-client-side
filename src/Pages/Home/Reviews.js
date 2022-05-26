import React, { useEffect, useState } from 'react';
import qoute from  '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Reveiw from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

 useEffect(()=>{
    //  fetch data
     fetch('http://localhost:5000/review')
     .then(res => res.json())
     .then(data=>{
         console.log(data)
     setReviews(data)})
     
    
     
     
 },[])
   

    return (
       <section>
           <div>
               <div>
                   <h4 className='text-2xl  text-center text-primary font-bold'>Reviews</h4>
                   <h2 className='text-3xl  text-center '> What our Customer say?</h2>
               </div>
               <div>
                  <img src={qoute} className=" w-24 lg:w-48" alt=""/>
               </div>
           </div>
           <div className='grid grid-cols-1 md:grid-cols lg:grid-cols-3 gap-5'>
               {reviews.map(review=><Reveiw key={review._id} review={review}></Reveiw>)}
               
           </div>
       </section>
    );
};

export default Reviews;