import { Outlet } from "react-router-dom";
import BackgroundGlow from "../ui/BackgroundGlow";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-white">
      <BackgroundGlow />
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}