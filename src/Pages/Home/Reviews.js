import React from 'react';
import qoute from  '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Reveiw from './Review';

const Reviews = () => {
   const reviews = [
    {
        _id:1 ,
        name: 'John Smith' ,
        review: '',
        location:'New York',
        img: people1

    },
    {
        _id:2 ,
        name: 'Henry lofez' ,
        review: '',
        location:'California',
        img: people2

    },
    {
        _id:3 ,
        name: 'Edward Eren' ,
        review: '',
        location:'Washington',
        img: people3

    },

   ]

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