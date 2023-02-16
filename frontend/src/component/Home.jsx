import React from 'react'

const Home = () => {
  return (
    <div className='empAndDepBtnDiv'>
      <button 
      onClick={()=>window.location='/addEmployee'}>
        Add Employee
      </button>

      <button
      onClick={()=>window.location='/addDepartment'}>
        Add Department</button>

        <button 
      onClick={()=>window.location='/queries'}>
        Fire Queries
      </button>
    </div>
  )
}

export default Home
