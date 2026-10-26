"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export interface NavbarContextProps {
  fullWidth: boolean;
  setFullWidth: (value: boolean) => void;
  hideTopBar: boolean;
  setHideTopBar: (value: boolean) => void;
}

const NavbarContext = createContext<NavbarContextProps>({
  fullWidth: false,
  setFullWidth: () => {},
  hideTopBar: false,
  setHideTopBar: () => {},
});

export function NavbarProvider({ children }: { children: React.ReactNode }) {
  const [fullWidth, setFullWidth] = useState<boolean>(false);
  const [hideTopBar, setHideTopBar] = useState<boolean>(false);
  const pathname = usePathname();

  // Route-based default styling
  useEffect(() => {
    if (pathname === "/home-3") {
      setFullWidth(true);
      setHideTopBar(true);
    } else {
      setFullWidth(false);
      setHideTopBar(false);
    }
  }, [pathname]);

  return (
    <NavbarContext.Provider value={{ fullWidth, setFullWidth, hideTopBar, setHideTopBar }}>
      {children}
    </NavbarContext.Provider>
  );
}

export function useNavbar() {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }
  return context;
}

/**
 * Client component helper allowing any page or layout to declaratively configure Navbar
 * Example usage: `<NavbarConfig fullWidth={true} hideTopBar={true} />`
 */
export function NavbarConfig({
  fullWidth,
  hideTopBar,
}: {
  fullWidth?: boolean;
  hideTopBar?: boolean;
}) {
  const { setFullWidth, setHideTopBar } = useNavbar();

  useEffect(() => {
    if (fullWidth !== undefined) setFullWidth(fullWidth);
    if (hideTopBar !== undefined) setHideTopBar(hideTopBar);

    return () => {
      setFullWidth(false);
      setHideTopBar(false);
    };
  }, [fullWidth, hideTopBar, setFullWidth, setHideTopBar]);

  return null;
}
