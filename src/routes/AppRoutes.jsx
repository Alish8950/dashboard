import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Overview = lazy(() => import("../pages/Overview"));
const Projects = lazy(() => import("../pages/Projects"));
const Skills = lazy(() => import("../pages/Skills"));
const Experience = lazy(() => import("../pages/Experience"));
const Contact = lazy(() => import("../pages/Contact"));
const NotFound = lazy(() => import("../pages/NotFound"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<div className="text-center p-6">Loading…</div>}>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
