import React, { useEffect, useState } from "react";

const List = () => {
//   let empData = [];
//   let depData = [];
const [empData,setEmpData]=useState([])
const [depDeta,setDepData]=useState([])

  const asyncFun = async () => {
    const data = await fetch("http://localhost:8282/list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: null,
    });
    const res = await data.json();
    setEmpData([...res.employeeData])
    setDepData([...res.departmentData])
    // empData = [...res.employeeData];
    // depData = [...res.departmentData];

  };

  useEffect(() => {
    asyncFun();
  }, []);
  return (
    <div className="listDiv">
      <ul className="list"><span>Employee List (name , salary)</span>
        {empData
          ? empData.map((ele, key) => {
            console.log(ele)
              return (
                <li key={key}>
                  {ele.name} , {ele.salary}
                </li>
              );
            })
          : <p>Pta nhi</p>}
      </ul>

      <ul className="list"><span>Department List (name , location)</span>
        {depDeta
          ? depDeta.map((ele, key) => {
            console.log(ele)
              return (
                <li key={key}>
                  {ele.name} , {ele.location}
                </li>
              );
            })
          : <p>Pta nhi</p>}
      </ul>
    </div>
  );
};

export default List;
