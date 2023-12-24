import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TaskManagerPage from "./pages/TaskManagerPage";
import MainNavigation from "./shared/UIElements/NavBar/MainNavigation";

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/tasks-manager" element={<TaskManagerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
