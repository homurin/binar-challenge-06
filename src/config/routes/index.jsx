import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "@/pages/landing-page";
import Cars from "@/pages/cars";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cars" element={<Cars />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
