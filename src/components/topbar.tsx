import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Headroom from "react-headroom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import MenuIcon from "../assets/icons/menu-open.svg";
import PlusIcon from "../assets/icons/plus.svg";
import staticData from "../data/static.json";
import { NEXT_IMAGE_DEFAULT_QUALITY } from "../lib/constants";
import {
  menuOpenState,
  scrollLockState,
  topbarHeightState,
} from "../lib/state";
import styles from "../styles/topbar.module.css";
import Container from "./container";

interface TopbarProps {
  data: typeof staticData.topbar;
}

const Topbar = ({ data }: TopbarProps): JSX.Element => {
  const { menu } = data;

  // Topbar height
  const setTopbarHeight = useSetRecoilState(topbarHeightState);
  const topbarRef = useRef<HTMLElement>(null);

  const updateTopbarHeight = () => {
    if (topbarRef.current) {
      const topbarHeight = topbarRef.current.offsetHeight;
      setTopbarHeight(topbarHeight);
      document.documentElement.style.setProperty(
        "--topbar-height",
        String(topbarHeight)
      );
    }
  };

  useEffect(() => {
    updateTopbarHeight();
    window.addEventListener("resize", () => {
      window.requestAnimationFrame(() => {
        updateTopbarHeight();
      });
    });
  }, []);

  // Menu toggler
  const [menuOpen, setMenuOpen] = useRecoilState(menuOpenState);
  const menuTogglerButtonHandler = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollLock = useRecoilValue(scrollLockState);
  const scrollLockStyle = {
    "--scroll-lock-width": scrollLock,
  } as React.CSSProperties;

  return (
    <Headroom className="relative z-40">
      <header
        className={classNames(
          "bg-white pt-30 pb-16 md:pt-50 md:pb-30",
          styles.inner
        )}
        ref={topbarRef}
        style={scrollLockStyle}
      >
        <Container>
          <div className="flex justify-between gap-x-20">
            {/* Logo */}
            <Link href="/">
              <a className="w-[235px] md:w-[367px] block">
                <Image
                  quality={NEXT_IMAGE_DEFAULT_QUALITY}
                  src="/images/logo.svg"
                  alt="bremergrundwasser. Brunnen + Bewässerung"
                  width={390.19}
                  height={63.97}
                  layout="responsive"
                  priority={true}
                />
              </a>
            </Link>

            <div>
              {/* Menu toggler */}
              <button className="xl:hidden" onClick={menuTogglerButtonHandler}>
                <MenuIcon className="h-30 w-30 md:h-40 md:w-40" />
                <span className="sr-only">Menü</span>
              </button>

              {/* Menu */}
              <nav className="hidden xl:flex gap-x-30">
                {menu.map(({ href, label, children }) => (
                  <Link href={href} key={href}>
                    <a className="text-19 leading-none font-normal transition-colors hover:text-red-300 flex gap-x-1.5 items-center">
                      <span>{label}</span>

                      {/* Children indicator */}
                      {children.length > 0 && (
                        <PlusIcon className="hidden xl:block text-red-200 h-18 w-18" />
                      )}
                    </a>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </Container>
      </header>
    </Headroom>
  );
};

export default Topbar;
