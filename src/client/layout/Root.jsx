import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

import "./Root.less";
import "../layout/Root.css"

export default function Root() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
