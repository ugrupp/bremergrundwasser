import { HTMLAttributes } from "react";
import Footer from "../components/footer";
import OverlayMenu from "../components/overlay-menu";
import Topbar from "../components/topbar";
import staticData from "../data/static.json";

export type LayoutProps = HTMLAttributes<HTMLElement> & {
  staticData: typeof staticData;
};

const Layout = ({ staticData, children }: LayoutProps): JSX.Element => {
  return (
    <div>
      <Topbar data={staticData.topbar} />
      <OverlayMenu />

      <main>{children}</main>

      <Footer data={staticData.footer} />
    </div>
  );
};

export default Layout;
