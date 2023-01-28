import { Route, Routes } from "react-router-dom";
import Login from "./pages/AuthPage/Login";
import Signup from "./pages/AuthPage/Signup";
import RootPage from "./pages/RootPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
