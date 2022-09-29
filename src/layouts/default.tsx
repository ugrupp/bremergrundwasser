import { HTMLAttributes } from "react";
import PlusIcon from "../assets/icons/plus.svg";
import Container from "../components/container";
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

      {/* Phone link */}
      <div className="fixed z-40 inset-x-0 bottom-10 md:bottom-20">
        <Container classNameInner="relative">
          <a
            href={staticData.phoneLink.href}
            className="absolute left-0 bottom-0 inline-flex gap-8 md:gap-12 items-center text-teal-300 bg-white rounded-full p-8 md:p-12"
          >
            <PlusIcon className="w-18 h-18 md:w-30 md:h-30 shrink-0" />
            <span className="text-13 md:text-20">
              {staticData.phoneLink.label}
            </span>
          </a>
        </Container>
      </div>

      <main>{children}</main>

      <Footer data={staticData.footer} />
    </div>
  );
};

export default Layout;
