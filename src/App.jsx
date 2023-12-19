import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import StarsCanvas from "./components/Stars";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<StarsCanvas />} />
        <Route
          path="/rockets"
          element={<div className="h-screen ">Rockets</div>}
        />
        <Route path="*" element={<h1>404 NOt Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
