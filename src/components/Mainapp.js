import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import React, { useState } from 'react';

const Mainapp = ()=>{
    const [count,setCount]=useState(0)
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        if(count<=0){
            setCount(0)
        }
        else{
            setCount(count-1)
        }
    }
    
    return(<>
    <div className='main-div'>
        <div className='app'>
            <RemoveIcon onClick={decrement} className='operators'/>
            <div style={{height:'10vh',width:'10vw',display:'flex',justifyContent:'center'}}>{count}</div>
            <AddIcon onClick={increment} className='operators'/>

        </div>
    </div>
    </>)
}
export default Mainapp;