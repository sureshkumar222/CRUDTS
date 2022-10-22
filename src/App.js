import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import "../src/fontawesome-free/css/all.min.css";
import "../src/css/sb-admin-2.min.css";
import Createstudents from './Createstudents';
import Createteachers from './Createteachers';
import Editstudent from './Editstudent';
import Editteacher from './Editteacher';
import Login from "./Login";
import PortalLayout from './PortalLayout';
import Register from './Register';
import Students from './Students';
import Teachers from './Teachers';
import Viewdetails from './Viewdetails';
import Viewstudent from './Viewstudent';
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/portal" element={<PortalLayout />}>
          <Route path="teachers" element={<Teachers />}></Route>
          <Route path="create-teachers" element={<Createteachers />}></Route>
          <Route path="view-detail/:id" element={<Viewdetails />}></Route>
          <Route path="edit-detail/:id" element={<Editteacher />}></Route>
          <Route path="students" element={<Students />}></Route>
          <Route path="create-students" element={<Createstudents />}></Route>
          <Route path="students-view/:id" element={<Viewstudent />}></Route>
          <Route path="edit-students/:id" element={<Editstudent />}></Route>
       
    
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
