import { Route, Routes } from "react-router-dom";
import { Stats } from "./pages/stats";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Stats />} />
      <Route path="/add" element={<Stats />} />
    </Routes>
  );
}

export default App;
