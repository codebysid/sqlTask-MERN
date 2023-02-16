import React,{useState} from 'react'
import '../App.css'
import Msg from './Msg'

const AddDepartment = () => {
    const [name,setName]=useState('')
    const [location,setLocation] =useState('')
    const [msg,setMsg]=useState({
      toShow:false,msg:''
    })

    const addDepartment=async(e)=>{
        e.preventDefault()
        
        const body=JSON.stringify({
            name,location
        })
        const data=await fetch('http://localhost:8282/addDepartment',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:body
        })
        const res=await data.json()

        res.msg==='done'?setMsg({toShow:true,msg:'Department Added Successfully'}):setMsg({toShow:false,msg:''})

    }
  return (
    <div className='addDiv'>
      <form onSubmit={addDepartment}>
        <input 
        type="text" 
        value={name}
        onChange={e=>setName(e.target.value)}
        placeholder='Department Name'
        required
        />
        <input 
        type="text"
        value={location}
        onChange={e=>setLocation(e.target.value)}
        placeholder='Department Location'
        required
        />
        
        <button
        type='submit'
        >
            Add Department
        </button>
        {
          msg.toShow?
          <Msg
          msg={msg.msg}
          setMsg={setMsg}
          />
          :null
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

export default AddDepartment
