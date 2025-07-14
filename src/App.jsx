import { useSelector } from "react-redux";
import DashboardLayout from "./components/layout/DashboardLayout";
import AppRoutes from "./routes/AppRoutes";
import { useEffect } from "react";

export default function App() {
  const mode = useSelector((state) => state.theme.mode);

  useEffect(() => {
    const root = document.documentElement;
    if (mode === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else if (mode === "light") {
      root.classList.remove("dark");
      root.classList.add("light");
    } else {
      root.classList.toggle(
        "dark",
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    }
  }, [mode]);

  return (
    <DashboardLayout>
      <AppRoutes />
    </DashboardLayout>
  );
}
