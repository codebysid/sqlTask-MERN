import React,{useEffect, useState} from 'react'
import '../App.css'
import Msg from './Msg'
const AddEmployee = () => {
    const [name,setName]=useState('')
    const [salary,setSalary]=useState('')
    const [msg,setMsg]=useState({
      toShow:false,msg:''
    })

    const addEmployee=async(e)=>{
        e.preventDefault()

        const body=JSON.stringify({
            name,salary
        })

        const data=await fetch('http://localhost:8282/addEmployee',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:body
        })
        const res=await data.json()
        res.msg==='done'?
        setMsg({toShow:true,msg:'Employee Added Succesfully'}):setMsg({toShow:false,msg:''})
        
    }

  return (
    <div className='addDiv'>
      <form onSubmit={addEmployee}>
        <input 
        type="text" 
        value={name}
        onChange={e=>setName(e.target.value)}
        placeholder='Name'
        required
        />
        <input 
        type="number"
        value={salary}
        onChange={e=>setSalary(e.target.value)}
        placeholder='Salary'
        required
        />
        
        <button
        type='submit'
        >
            Add Employee
        </button>
        {
        msg.toShow?
        <Msg
        msg={msg.msg}
        setMsg={setMsg}
        />:null
  }
    <button 
    type='button'
    onClick={()=>window.location.href='/'
    }>
      Go Back to Home
    </button>
      </form>
  
    </div>
  )
}

export default AddEmployee
