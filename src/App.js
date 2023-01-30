import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="about" element={<div>About</div>} />
        <Route path="sign-up" element={<div>Sign-up</div>} />
      </Routes>
    </div>
  );
}

export default App;
