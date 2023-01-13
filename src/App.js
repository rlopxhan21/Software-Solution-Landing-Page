import React from "react";
import { Routes, Route } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";

import Header from "./components/UI/Header";
import { appTheme } from "./components/UI/Theme";
import HomePage from "./components/pages/HomePage";
import ServicesPage from "./components/pages/ServicesPage";
import ProjectsPage from "./components/pages/ProjectsPage";
import GetAQuotePage from "./components/pages/GetAQuotePage";
import AboutUsPage from "./components/pages/AboutUsPage";
import ContactUsPage from "./components/pages/ContactUsPage";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />

        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/getaquote" element={<GetAQuotePage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
