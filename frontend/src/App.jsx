import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "flowbite/dist/flowbite.css";
import MyFooter from "./components/MyFooter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-screen">
        <Outlet />
      </div>
      <MyFooter></MyFooter>
    </>
  );
}

export default App;
