import React from "react";

function Employee() {
  return (
    <div>
      <tr key={employee.id}>
        <td className="text-left px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-500">{employee.firstName}</div>
        </td>
        <td className="text-left px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-500">{employee.lastName}</div>
        </td>
        <td className="text-left px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-500">{employee.email}</div>
        </td>
        <td className=" text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
          <a href="#" className="text-indigo-600 hover:text-indigo-800 px-4">
            Edit
          </a>
          <a href="#" className="text-indigo-600 hover:text-indigo-800 px-4">
            Delete
          </a>
        </td>
      </tr>
    </div>
  );
}

export default Employee;
