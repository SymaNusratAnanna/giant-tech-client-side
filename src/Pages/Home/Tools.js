import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
 const [tools, setTools] = useState([]);

 useEffect(()=>{
    //  fetch data
     fetch('https://immense-sierra-48732.herokuapp.com/tool')
     .then(res => res.json())
     .then(data=>setTools(data));
    
     
     
 },[])
 
 

    return (
        <div className='my-28 text-center'>
            
               <h3 className='text-primary text-3xl font-bold '>Our Services</h3>
               <h2 className='text-4xl'>Tools We Provided</h2>

           <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-12'>
               
               {/* map tool */}
               {
                   tools.map(tool => <Tool 
                     key={tool._id}
                     tool={tool}
                    
                     >

                     </Tool>)

               }
           </div>
        
        </div>
    );
};

export default Tools;