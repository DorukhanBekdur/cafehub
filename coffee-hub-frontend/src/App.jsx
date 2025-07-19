import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ChooseRole from "./pages/ChooseRole";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/choose-role" element={<ChooseRole />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
