import { Footer } from "components/footer/Footer";
import { MainNavigation } from "components/main-navigation/main-navigation";
import * as React from "react";

export const MainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNavigation />
      <main className="flex flex-col flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
