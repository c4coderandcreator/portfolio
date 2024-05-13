import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  // Use React Router's useLocation hook to get the current location
  const location = useLocation();

  // Scroll to the top of the page whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // Trigger effect when location.pathname changes

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
