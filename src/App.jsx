import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import StudentLogin from "./pages/StudentLogin";
import StudentRegistration from "./pages/StudentRegistration";
import GridLight from "./ui/GridLight";
import TableContainer from "./ui/TableContainer";
import ProtectedRoute from "./ui/ProtectedRoute";
import CoursePlayer from "./pages/CoursePlayer";
import AppLayout from "./ui/AppLayout";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/coursePlayer" element={<CoursePlayer />} />
            <Route path="/coursePlayer/:id" element={<CoursePlayer />} />
          </Route>
          <Route path="login" element={<StudentLogin />} />
          <Route path="registration" element={<StudentRegistration />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
