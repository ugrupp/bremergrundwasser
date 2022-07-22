import { HTMLAttributes } from "react";
import Topbar from "../components/topbar";
import staticData from "../data/static.json";

export type LayoutProps = HTMLAttributes<HTMLElement> & {
  staticData: typeof staticData;
};

const Layout = ({ staticData, children }: LayoutProps): JSX.Element => {
  return (
    <div>
      <Topbar data={staticData.topbar} />
      {/* <OverlayMenu /> */}

      <main className={"mb-60 md:mb-80 lg:mb-112"}>{children}</main>

      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
