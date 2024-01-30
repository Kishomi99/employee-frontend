import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import Employee from "./Employee";

function EmployeeList() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(ture);
  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(ture);
      try {
        const response = await EmployeeService.getEmployees();
        setEmployees(response.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className=" container mx-auto my-8">
      <div className="h-12">
        <button
          onClick={() => navigate("/addEmployee")}
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold"
        >
          Add Employee
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="header">First Name</th>
              <th className="header">Last Name</th>
              <th className="header">Email Id</th>
              <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white ">
              {employees.map((employee) => (
                <Employee />
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}

export default EmployeeList;
