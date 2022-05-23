import React from 'react';

const Blog = () => {
    return (
        <div className='py-5 px-10'>
            <h1 className='text-center font-bold text-5xl'>Blogs</h1>

           <div className='py-5' > <h2 className='font-bold text-3xl'> How will you improve the performance of a React Application?</h2>
            <h3 className=' text-2xl'>

            1.When it's necessary, keep component state local.</h3>
           <h3 className=' text-2xl'> 2.To avoid unwanted re-renders, memorize React components.</h3>
          <h3 className=' text-2xl'>  3.React code splitting with dynamic import ()</h3>

            <h3 className=' text-2xl'>4.In React, windowing or list virtualization is used.</h3>

           <h3 className=' text-2xl'> 5.Images are loaded slowly in React.</h3></div>
            
           <div className='py-5'> <h2 className='font-bold text-3xl'>What are the different ways to manage a state in a React application</h2>
            <h3 className=' text-2xl'>
               There are four main types of state you need to properly manage in your React apps:</h3>
            <h3 className=' text-2xl'>1.Local state.</h3>
            <h3 className=' text-2xl'>2.Global state.</h3>
            <h3 className=' text-2xl'>3.Server state.</h3>
            <h3 className=' text-2xl'>4.URL state.</h3>
</div>
            <div className='py-5'><h2 className='font-bold text-3xl'>How does prototypical inheritance work?</h2>
            <h3 className=' text-2xl'>Prototypal inheritance is a javascript feature that allows you to add methods and properties to objects. It's a method that allows one object to inherit the properties and methods of another. We traditionally use Object.getPrototypeOf and Object.setPrototypeOf to get and set the [[Prototype]] of an object.</h3></div>
        
        <div className='py-5'><h2 className='font-bold text-3xl'> Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h2>
        <h3 className=' text-2xl'> I dont set the state directly because If i alter it directly, executing setState() thereafter may just overwrite my changes.

            This is not changed when i directly update the state. state right away...

              and i ll lose control of the state in all of your components.Thats why i use immutable state because by

            using an Immutable state in React allows mr to compare the state tree before and after a change quickly and cheaply. As a result, before performing any costly DOM actions, each component selects whether or not to re-rendered.</h3></div>
        <div className='py-5'><h2 className='font-bold text-3xl'>What is a unit test? Why should write unit tests?</h2>
        <h3 className=' text-2xl'>Unit tests are automated tests designed and executed by software engineers to confirm that a piece of an application (referred to as a "unit") matches its design and operates as intended. A unit in procedural programming can be a whole module, but it's more likely to be a single function or process.

           I should write unit test because Unit tests provide the advantage of isolating a function, class, or method and just testing that section of code. Individual components of higher quality contribute to overall system robustness. As a result, the code is trustworthy. The nature of the debugging process is likewise altered by unit tests.</h3></div>
        </div>
    );
};

export default Blog;