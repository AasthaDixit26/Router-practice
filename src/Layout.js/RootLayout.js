import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
export default function RootLayout() {
  return (
    <div className="root-Layout">
      <header>
        <nav>
          <h1>JobRouter</h1>
          <Link to="/">Home</Link>
          <NavLink to="about">About</NavLink>
          {/* through the nav link we get the class as active not active and all but with the link we only get simple anchor tag */}
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  );
}
