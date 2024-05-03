import "./App.css";
import LandingPage from "./Stores/Pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import MobilePage from "./Stores/Pages/MobilePage";
import ComputersPage from "./Stores/Pages/ComputersPage";
import FridgesPage from "./Stores/Pages/FridgesPage";
import MensPage from "./Stores/Pages/MensPage";
import WomensPages from "./Stores/Pages/WomensPages";
import FurniturePage from "./Stores/Pages/FurniturePage";
import KitchPage from "./Stores/Pages/KitchPage";
import AcPage from "./Stores/Pages/AcPage";

import MobileIndividual from "./individual/MobileIndividual";
import AcIndividual from "./individual/AcIndividual";
import ComputersIndividual from "./individual/ComputersIndividual";
import FurnitureIndividual from "./individual/FurnitureIndividual";
import WomenIndividual from "./individual/WomenIndividual";
import MenIndividual from "./individual/MenIndividual";
import FridgeIndividual from "./individual/FridgeIndividual";
import KitchenIndividual from "./individual/KitchenIndividual";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="mobiles" element={<MobilePage />}></Route>
        <Route path="computers" element={<ComputersPage />}></Route>
        <Route path="fridges" element={<FridgesPage />}></Route>
        <Route path="mensfashions" element={<MensPage />}></Route>
        <Route path="womenfashions" element={<WomensPages />}></Route>
        <Route path="furniture" element={<FurniturePage />}></Route>
        <Route path="kitchen" element={<KitchPage />}></Route>
        <Route path="ac" element={<AcPage />}></Route>
        <Route path="/mobiles/:id" element={<MobileIndividual />}></Route>
        <Route path="/ac/:id" element={<AcIndividual />}></Route>
        <Route path="/computers/:id" element={<ComputersIndividual />}></Route>
        <Route path="/furniture/:id" element={<FurnitureIndividual />}></Route>
        <Route path="/fridges/:id" element={<FridgeIndividual />}></Route>
        <Route path="/kitchen/:id" element={<KitchenIndividual />}></Route>
        <Route path="/mens/:id" element={<MenIndividual />}></Route>
        <Route path="/women/:id" element={<WomenIndividual />}></Route>
      </Routes>
    </div>
  );
}

export default App;
