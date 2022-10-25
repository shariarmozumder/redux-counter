import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/state/counter/CounterSlice';

const Counter = () => {
    const count = useSelector((state)=>state.counter.value);
    const disPatch = useDispatch()
    return (
        <div className='card'>
           <div className="card-header bg-secondary">
            <h4 className='text-white'>My Counter App</h4>
           </div>
           <div className="card-body">
            <h1>{count}</h1>
            <div className="my-4">
                <button onClick={()=>{disPatch(increment())}} className='btn btn-success'>Increase</button>
                <button onClick={()=>{disPatch(decrement())}} className='btn mx-2 btn-danger'>Decrease</button>
            </div>
           </div> 
        </div>
    );
};

export default Counter;