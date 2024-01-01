import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import StudentLogin from "./pages/StudentLogin";
import StudentRegistration from "./pages/StudentRegistration";
import GridLight from "./ui/GridLight";
import TableContainer from "./ui/TableContainer";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate to="login" />} />
          <Route path="login" element={<TableContainer />} />
          {/* <Route path="login" element={<StudentLogin />} /> */}
          <Route path="registration" element={<StudentRegistration />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
