import { Route, Routes } from "react-router-dom";
import { DashboardLayout } from "../layouts";
import Standard from "./standard";
import PersonalInfo from "./personalInfo";
import Esigenze from "./esigenze";
import Gestione from "./gestione";
import Machine from "./machine";

function BasePage() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route index element={<Standard />} />
        <Route path="personal-info" element={<PersonalInfo />} />
        <Route path="esigenze-formative" element={<Esigenze />} />
        <Route path="gestione-standard" element={<Gestione />} />
        <Route path="machine" element={<Machine />} />
      </Route>
    </Routes>
  );
}

export default BasePage;
