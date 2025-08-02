import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import BookAppointment from "./pages/BookAppointment";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/book/:name" element={<BookAppointment />} />
        <Route path="/book/:doctorName" element={<BookAppointment />} />
        <Route path="*" element={<div className="p-4 text-center">404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
