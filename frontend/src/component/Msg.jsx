import React,{useState} from 'react'

const Msg = ({msg,setMsg}) => {
  return (
    <div className='msgDiv'>
        <p>{msg}
          <button 
            onClick={()=>{
              setMsg({toShow:false,msg:''})
            }}
              >x
           </button>
        </p>
    </div>
  )
}

export default Msg
