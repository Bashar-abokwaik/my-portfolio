import { Outlet } from "react-router";
import { Suspense } from "react";

import ScrollToTop from "../components/common/ScrollToTop";
import PageLoader from "../components/PageLoader";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Rootlayout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}
