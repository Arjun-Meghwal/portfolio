import React from "react";
import Header from "./Header";
import SideNav from "./SideNav";
import Footer from "./Footer";
import { StaticBackground } from "../App";

const Layout = ({
  children,
  theme,
  toggleTheme,
  sideNavOpen,
  setSideNavOpen,
}) => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden text-foreground">
      {/* Background */}
      <StaticBackground theme={theme} />

      {/* Header */}
      <Header
        toggleTheme={toggleTheme}
        currentTheme={theme}
        onHamburgerClick={() => setSideNavOpen(true)}
      />

      {/* Mobile Navigation */}
      <SideNav
        open={sideNavOpen}
        onClose={() => setSideNavOpen(false)}
      />

      {/* Main Content */}
      <main className="flex-1 pt-20" tabIndex={-1}>
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default React.memo(Layout);