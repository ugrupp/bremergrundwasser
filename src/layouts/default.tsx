import { HTMLAttributes, useEffect, useRef } from "react";
import PhoneIcon from "../assets/icons/phone.svg";
import Container from "../components/container";
import Footer from "../components/footer";
import TeamKontaktFooter from "../components/team-kontakt/footer";
import OverlayMenu from "../components/overlay-menu";
import Topbar from "../components/topbar";
import staticData from "../data/static.json";

export type LayoutProps = HTMLAttributes<HTMLElement> & {
  staticData: typeof staticData;
};

const Layout = ({ id, staticData, children }: LayoutProps): JSX.Element => {
  const phoneLinkRef = useRef<HTMLAnchorElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (phoneLinkRef.current && footerRef.current) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            phoneLinkRef.current?.classList.add("hidden");
          } else {
            phoneLinkRef.current?.classList.remove("hidden");
          }
        });
      });

      observer.observe(footerRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return (
    <div>
      <Topbar data={staticData.topbar} />
      <OverlayMenu />

      {/* Phone link */}
      <div className="fixed z-40 inset-x-0 bottom-10 md:bottom-20">
        <Container classNameInner="relative">
          <a
            ref={phoneLinkRef}
            href={staticData.phoneLink.href}
            className="absolute left-0 bottom-0 inline-flex gap-8 md:gap-12 items-center text-teal-300 bg-white rounded-full p-8 md:p-12"
          >
            <PhoneIcon className="w-18 h-18 md:w-30 md:h-30 shrink-0" />
            <span className="text-13 md:text-20">
              {staticData.phoneLink.label}
            </span>
          </a>
        </Container>
      </div>

      <main>{children}</main>

      {id === "team-kontakt" ? (
        <TeamKontaktFooter data={staticData.footer} ref={footerRef} />
      ) : (
        <Footer data={staticData.footer} ref={footerRef} />
      )}
    </div>
  );
};

export default Layout;
