import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Account from "./pages/Account";
import DietPlansPage from "./pages/DietPlansPage";
import DietPlanDetails from "./pages/DietPlanDetails";
// import DietPlanCard from "./components/DietPlanCard";
import ContactForm from "./components/ContactForm";
import Subscription from "./components/Subscription";
import ExercisesPage from "./pages/ExercisesPage";

const App = () => {
  const isAuthenticated = localStorage.getItem("user");
  const hasSubscription = localStorage.getItem("subscription");

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",              
        flexDirection: "column",      
      }}
    >
      <Navbar />
      
      <Box sx={{ flex: 1, width: "100%", maxWidth: "1488px", mx: "auto" }}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-form" element={<ContactForm />} />
          <Route path="/subscription" element={<Subscription />} />

          {/* Private Routes */}
          <Route path="/account" element={isAuthenticated ? <Account /> : <Navigate to="/login" />} />
          <Route path="/exercise" element={isAuthenticated ? <ExercisesPage /> : <Navigate to="/login" />} />
          <Route path="/exercise/:id" element={isAuthenticated ? <ExerciseDetail /> : <Navigate to="/login" />} />
          
          {/* Diet Plan Routes */}
          <Route 
            path="/diet-plans" 
            element={
              isAuthenticated ? (
                hasSubscription === 'true' ? (
                  <DietPlansPage />
                ) : (
                  <Navigate to="/subscription" />
                )
              ) : (
                <Navigate to="/login" />
              )
            } 
          />
          <Route 
            path="/diet-plans/:slug" 
            element={
              isAuthenticated ? (
                hasSubscription === 'true' ? (
                  <DietPlanDetails />
                ) : (
                  <Navigate to="/subscription" />
                )
              ) : (
                <Navigate to="/login" />
              )
            } 
          />
          
          {/* Redirects */}
          <Route path="/diet-paln-card" element={<Navigate to="/diet-plans" />} />
          <Route path="/plan/:slug" element={<Navigate to="/diet-plans/:slug" />} />
        </Routes>
      </Box>

      <Footer />
    </Box>
  );
};

export default App;