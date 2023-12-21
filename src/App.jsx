import { Route, Routes } from "react-router-dom";

import Rockets from "./components/Rockets";
import SingleRocket from "./components/SingleRocket";
import Capsules from "./components/Capsules";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/rockets/:id" element={<SingleRocket />} />
        <Route path="/capsules" element={<Capsules />} />
        <Route path="*" element={<h1>404 NOt Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
