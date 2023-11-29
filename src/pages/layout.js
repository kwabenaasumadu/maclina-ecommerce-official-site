import React from "react";
import First_header from "../pages/components/first_header";

function Layout({ children }) {
  return (
    <div>
      <First_header />

      {children}
    </div>
  );
}

export default Layout;
