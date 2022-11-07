import "./App.css";
import Layout from "./Layout";
import WeatherPage from "./pages/WeatherPage";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import ProfilePage from "./pages/ProfilePage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

const Protected = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <Layout />
          </Protected>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="weather" element={<WeatherPage />} />
        <Route path="chat" element={<ChatPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="sign-up" element={<SignUp />} />
    </Routes>
  );
};

export default App;
