import React from 'react';
import useTools from '../../../hooks/useTools';

const ManageTools = () => {
    const [tools,setTools] = useTools();

    const handleDelete = id =>{

        const proceed = window.confirm('Are you sure?');
        if(proceed){

            const url =`http://localhost:5000/tool/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res=> res.json())
            .then(data=>{
                console.log(data);
                const remaining=tools.filter(tool => tool._id !== id);
                setTools(remaining);
            })
            
        }
    }
    return (

        <div className='w-50 mx-auto'>
                <h2>manage your services</h2>
                {
                    tools.map(tool => <div key={tool._id}>
                        <h4>{tool.name}</h4>

                        <button onClick={()=> handleDelete(tool._id)}>X</button>

                        </div>)
                }
        </div>
    );
};

export default ManageTools;
