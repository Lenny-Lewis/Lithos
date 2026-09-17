import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Course } from './pages/Course';
import { FieldGuides } from './pages/FieldGuides';
import { Geology } from './pages/Geology';
import { Plans } from './pages/Plans';
import { LiveTour } from './pages/LiveTour';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/field-guides" element={<FieldGuides />} />
          <Route path="/geology" element={<Geology />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/live-tour" element={<LiveTour />} />
          {/* Fallback to Home */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
