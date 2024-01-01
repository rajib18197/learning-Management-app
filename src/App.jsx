import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import StudentLogin from "./pages/StudentLogin";
import StudentRegistration from "./pages/StudentRegistration";
import GridLight from "./ui/GridLight";
import TableContainer from "./ui/TableContainer";
import ProtectedRoute from "./ui/ProtectedRoute";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <TableContainer />
              </ProtectedRoute>
            }
          >
            <Route path="/" element={<TableContainer />} />
          </Route>
          <Route path="login" element={<StudentLogin />} />
          <Route path="registration" element={<StudentRegistration />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
