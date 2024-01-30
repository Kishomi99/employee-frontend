import { BrowserRouter,Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import NewEmployee from "./components/NewEmployee";
import EmployeeList from "./components/EmployeeList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<EmployeeList />}/>
          <Route path="/" element={<EmployeeList />}></Route>
          <Route path="/employeeList" element={<EmployeeList />}/>
          <Route path="/addEmployee" element={<NewEmployee />}/>
        </Routes>       
      </BrowserRouter>
    </div>
  );
}

export default App;
