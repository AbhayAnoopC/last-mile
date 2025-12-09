// /web/app/layout.tsx
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Last Mile Delivery Platform</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
