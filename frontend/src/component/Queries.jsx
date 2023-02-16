import React,{useState} from 'react'
import Msg from './Msg'

const Queries = () => {

    const [msg,setMsg]=useState({
        toShow:false,msg:''
    })

    const runQuery=async(body)=>{
        const data=await fetch('http://localhost:8282/runQuery',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(body)
        })
        const res=await data.json()

        if( Array.isArray(res.result)){
            let msgString=[]
            res.result.map(ele=>{
                msgString=[...msgString,`Name is ${ele.name} and salary is ${ele.salary}`]
            })
            setMsg({toShow:true,msg:msgString.join()})
        }
        else{
            let msgString=`Name is ${res.result.name} and salary is ${res.result.salary}`
        res.msg==='done'?setMsg({toShow:true,msg:msgString}):null
        }
    }
  return (
    <div className='queryDiv'>
      <button
      onClick={()=>runQuery({
        nameStart:"s",nameEnd:"t",salary:"max"
      })}
      >Query 1</button>
      <button
      onClick={()=>runQuery({
        nameStart:"m",nameEnd:"r",salary:"min"
      })}
      >Query 2</button>
      <button
      onClick={()=>runQuery({
        location:"Surat",salary:"descending"
      })}
      >Query 3</button>

      <button
      onClick={()=>window.location.href='/'}
      >Go Back to Home</button>

    {
        msg.toShow?
        <Msg
        msg={msg.msg}
        setMsg={setMsg}
        />
        :null
    }
    </div>
  )
}

export default Queries
