import React,{useState} from "react";
import EmployeeService from "../services/EmployeeService";

function NewEmployee() {
    const [employee,setEmployee] = useState({
        id: "",
        firstName: "",
        lastName: "",
        email: ""
    });
    const handleChange =(e)=>{
        const {name,value}= e.target    //destructure
        setEmployee({...employee,[name]:value})
    }

    const saveEmployee =(e)=>{
        e.preventDefault()    //stop page to refresh
        EmployeeService.saveEmployee(employee)
        .then((response) =>{
          console.log(response);
        })
        .catch((error)=>{
          console.log(error);
        });
    }

  return (
    <div className="flex max-w-2xl shadow border-b mx-auto">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add New Employee</h1>
        </div>
        <div className=" items-center justify-center h-14 w-full my-4">
          <label className=" block text-gray-600 text-sm font-normal">
            First Name
          </label>
          <input type="text"
          name="firstName"
          value={employee.firstName} 
          onChange={(e) => handleChange(e)}
          className="h-10 w-96 border mt-2 p-2 " />
        </div>
        <div className=" items-center justify-center h-14 w-full my-4">
          <label className=" block text-gray-600 text-sm font-normal">
            Last Name
          </label>
          <input type="text" 
          name="lastName"
          value={employee.lastName} 
          onChange={(e) => handleChange(e)}
          className="h-10 w-96 border mt-2 p-2 " />
        </div>
        <div className=" items-center justify-center h-14 w-full my-4">
          <label className=" block text-gray-600 text-sm font-normal">
            Email
          </label>
          <input type="email" 
          name="email"
          value={employee.email} 
          onChange={(e) => handleChange(e)}
          className="h-10 w-96 border mt-2 p-2 " />
        </div>
        <div className=" items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button onClick={saveEmployee}    className=" rounded text-white bg-green-400 px-6 py-2 hover:bg-green-700">
            Save
          </button>
          <button className=" rounded text-white bg-red-400 px-6 py-2 hover:bg-red-700">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewEmployee;
