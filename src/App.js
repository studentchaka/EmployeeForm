import React, { useState, useEffect } from "react";
import EmployeeForm from "./EmployeeForm";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const savedEmployees = JSON.parse(
      localStorage.getItem("employees")
    );

    if (savedEmployees) {
      setEmployees(savedEmployees);
    }
  }, []);

  const addEmployee = (employee) => {
    const updatedEmployees = [...employees, employee];

    setEmployees(updatedEmployees);

    localStorage.setItem(
      "employees",
      JSON.stringify(updatedEmployees)
    );
  };

  return (
    <div className="App">
      <EmployeeForm addEmployee={addEmployee} />

      <h2>Employee List</h2>

      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            {employee.name} | {employee.email} | {employee.title} | {employee.department}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;