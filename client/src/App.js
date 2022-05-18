import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  GamePage,
  LandingPage,
  BeforeYouStartPage,
  NotFoundPage,
  ResultsPage,
  RulesPage,
  SettingsPage,
} from "./pages";

export const LocationDisplay = () => {
  const location = useLocation();

  return <div data-testid="location-display">{location.pathname}</div>;
};

function App() {
  return (
    <div id="quiz-app">
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/rules" element={<RulesPage />} />
          <Route path="/agree" element={<BeforeYouStartPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
