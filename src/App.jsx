import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MealPlanPage from "./pages/MealPlanPage";
import MealPointsPage from "./pages/MealPointsPage";
import MealHistoryPage from "./pages/MealHistoryPage";
//import ReferralPage from "./pages/ReferralPage";
import Onboarding from "./pages/Onboarding";
import MealPlanPoints from "./Components/MealPlanPoints";

function App() {
  return (
    <div className="font-[Manrope]">
      <Router>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/MealPoint" element={<MealPointsPage />} />
          <Route path="/mealplan" element={<MealPlanPage />} />
          <Route path="/history" element={<MealHistoryPage />} />
          {/* <Route path="/referral" element={ReferralPage} /> */}
          <Route path="/MealPoint" Component={MealPlanPoints} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
