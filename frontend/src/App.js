import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TaskManagerPage from "./pages/TaskManagerPage";
import Index from "./pages/Index";
import { useContext } from "react";
import { AuthContext } from "./shared/context/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  let routes;
  if (authCtx.isLoggedIn) {
    routes = (
      <>
        <Route path="/" element={<Index />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="/tasks-manager" element={<TaskManagerPage />} />
      </>
    );
  } else {
    routes = (
      <>
        <Route path="/" element={<Index />}>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </>
    );
  }
  return (
    <BrowserRouter>
      <Routes>{routes}</Routes>
    </BrowserRouter>
  );
}

export default App;
