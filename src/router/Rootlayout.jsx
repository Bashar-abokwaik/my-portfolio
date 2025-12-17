import { Outlet } from "react-router";
import { Suspense } from "react";

import PageLoader from "../components/PageLoader";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Rootlayout() {
  return (
    <>
      <Header />
      <Suspense fallback={<PageLoader />}>
        <Outlet />
        <Footer />
      </Suspense>
    </>
  );
}
