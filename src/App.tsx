import { useState } from "react";
import { DashboardLayout } from "./layouts";
import BasePage from "./pages";

function App() {
  const [count, setCount] = useState(0);

  return <BasePage />;
}

export default App;
