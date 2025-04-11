import AppBar from "@/components/appbar";
import Header from "@/components/header";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="md:hidden">
        <Header />
        {children}
        <AppBar />
      </div>
      <div className="hidden md:block text-center">
        Only Supported in mobile devices
      </div>
    </div>
  );
};

export default layout;
