"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const routeMap: Array<{ test: (p: string) => boolean; route: string }> = [
  { test: (p) => p === "/", route: "home" },
  { test: (p) => p === "/organisations" || p === "/organisations/", route: "organisations" },
  { test: (p) => p.startsWith("/organisations/programmes"), route: "org-programmes" },
  { test: (p) => p.startsWith("/organisations/cpslearn"), route: "org-platform" },
  { test: (p) => p.startsWith("/programmes"), route: "programmes" },
  { test: (p) => p.startsWith("/cpslearn"), route: "platform" },
  { test: (p) => p.startsWith("/about"), route: "about" },
  { test: (p) => p.startsWith("/contact"), route: "contact" },
];

export function RouteAttribute() {
  const pathname = usePathname();
  useEffect(() => {
    const match = routeMap.find((r) => r.test(pathname));
    document.body.dataset.route = match?.route ?? "other";
    return () => {
      delete document.body.dataset.route;
    };
  }, [pathname]);
  return null;
}
