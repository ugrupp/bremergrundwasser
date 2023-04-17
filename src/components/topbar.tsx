import { Popover } from "@headlessui/react";
import { useRouter } from 'next/router';
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import Headroom from "react-headroom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import ArrowIcon from "../assets/icons/arrow.svg";
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
  const router = useRouter();
  const { menu } = data;

  // Topbar height
  const setTopbarHeight = useSetRecoilState(topbarHeightState);
  const topbarRef = useRef<HTMLElement>(null);

  const updateTopbarHeight = useCallback(() => {
    if (topbarRef.current) {
      const topbarHeight = topbarRef.current.offsetHeight;
      setTopbarHeight(topbarHeight);
      document.documentElement.style.setProperty(
        "--topbar-height",
        String(topbarHeight)
      );
    }
  }, [setTopbarHeight]);

  useEffect(() => {
    updateTopbarHeight();

    const resizeHandler = () => {
      window.requestAnimationFrame(() => {
        updateTopbarHeight();
      });
    };
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [updateTopbarHeight]);

  // Menu toggler
  const [menuOpen, setMenuOpen] = useRecoilState(menuOpenState);
  const menuTogglerButtonHandler = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollLock = useRecoilValue(scrollLockState);
  const scrollLockStyle = {
    "--scroll-lock-width": scrollLock,
  } as React.CSSProperties;

  // Submenu
  const bremergrundwasserChildren = menu.find(
    ({ id }) => id === "bremergrundwasser"
  )?.children;
  const bremergrundwasserRef = useRef<HTMLSpanElement>(null);

  const [bremergrundwasserPos, setBremergrundwasserPos] = useState(0);

  const updateSubmenuPos = useCallback(() => {
    if (bremergrundwasserRef.current) {
      setBremergrundwasserPos(
        bremergrundwasserRef.current.getBoundingClientRect().left
      );
    }
  }, [setBremergrundwasserPos]);

  useEffect(() => {
    updateSubmenuPos();

    const resizeHandler = () => {
      window.requestAnimationFrame(() => {
        updateSubmenuPos();
      });
    };
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [updateSubmenuPos]);

  return (
    <Headroom className="relative z-40">
      <Popover
        as="header"
        className={classNames(
          "bg-white pt-30 pb-16 md:pt-50 md:pb-30 relative",
          styles.inner
        )}
        ref={topbarRef}
        style={scrollLockStyle}
      >
        {({ open }) => (
          <>
            <Container>
              <div className="flex justify-between xl:items-end gap-x-20">
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
                  <button
                    type="button"
                    className="xl:hidden"
                    onClick={menuTogglerButtonHandler}
                  >
                    <MenuIcon className="h-30 w-30 md:h-40 md:w-40" />
                    <span className="sr-only">Menü</span>
                  </button>

                  {/* Menu */}
                  <nav className="hidden xl:flex gap-x-30 text-19 xl:-translate-y-[0.975em]">
                    {menu.map(({ href, label, children, id }, index) =>
                      href && children.length <= 0 ? (
                        <Link href={href} key={id}>
                          <a
                            className={classNames(
                              "leading-none font-normal transition-colors hover:text-teal-300 flex gap-x-5 items-center relative",
                              router.pathname === href ? "text-teal-300" : "text-brown-700",
                              {
                                "before:h-full before:border-l before:border-dashed before:border-teal-300 before:absolute before:-left-15 before:inset-y-0 before:pointer-events-none":
                                  index > 0,
                              }
                            )}
                          >
                            <span>{label}</span>
                          </a>
                        </Link>
                      ) : (
                        <Popover.Button
                          key={id}
                          className={classNames(
                            "leading-none font-normal transition-colors hover:text-teal-300 flex gap-x-5 items-center relative",
                             children.some(link => router.pathname === link.href) ? "text-teal-300" : "text-brown-700",
                            {
                              "before:h-full before:border-l before:border-dashed before:border-teal-300 before:absolute before:-left-15 before:inset-y-0 before:pointer-events-none":
                                index > 0,
                              "!text-teal-300": open,
                            }
                          )}
                        >
                          <span
                            ref={
                              id === "bremergrundwasser"
                                ? bremergrundwasserRef
                                : undefined
                            }
                          >
                            {label}
                          </span>

                          {/* Children indicator */}
                          {children.length > 0 && (
                            <PlusIcon className="hidden xl:block text-teal-300 h-18 w-18" />
                          )}
                        </Popover.Button>
                      )
                    )}
                  </nav>
                </div>
              </div>
            </Container>

            {/* Sub menu (desktop) */}
            {!!bremergrundwasserChildren && (
              <Popover.Panel
                className={classNames(
                  "submenu hidden xl:block absolute z-10 inset-x-0 top-full bg-white pb-30 -mt-20 overflow-hidden",
                  styles.submenu
                )}
              >
                {({ close }) => (
                  // Only render "bremergrundwasser" children
                  <nav
                    className="space-y-20 flex flex-col items-start relative right-0"
                    style={{ left: bremergrundwasserPos }}
                  >
                    {bremergrundwasserChildren.map(({ href, label }) => (
                      <Link href={href} key={href}>
                        <a
                          className={classNames(
                            "text-17 leading-none font-normal transition-colors hover:text-teal-300 flex gap-x-12 items-center relative",
                            router.pathname === href ? "text-teal-300" : "text-brown-700",
                          )}
                          onClick={() => {
                            close();
                          }}
                        >
                          <ArrowIcon className="text-teal-300 h-18 w-18 rotate-180" />
                          <span>{label}</span>
                        </a>
                      </Link>
                    ))}
                  </nav>
                )}
              </Popover.Panel>
            )}
          </>
        )}
      </Popover>
    </Headroom>
  );
};

export default Topbar;
