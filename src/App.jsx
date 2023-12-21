import { Route, Routes } from "react-router-dom";

import Rockets from "./components/Rockets";
import SingleRocket from "./components/SingleRocket";
import Capsules from "./components/Capsules";
import Error from "./components/Error";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/rockets/:id" element={<SingleRocket />} />
        <Route path="/capsules" element={<Capsules />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
