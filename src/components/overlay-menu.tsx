import { Dialog, Transition } from "@headlessui/react";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import ArrowIcon from "../assets/icons/arrow-1.svg";
import CloseIcon from "../assets/icons/menu-close.svg";
import PhoneIcon from "../assets/icons/phone.svg";
import data from "../data/static.json";
import { NEXT_IMAGE_DEFAULT_QUALITY } from "../lib/constants";
import { menuOpenState, scrollLockState } from "../lib/state";
import Container from "./container";

const OverlayMenu = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useRecoilState(menuOpenState);

  const closeHandler = () => {
    setMenuOpen(false);
  };

  const scrollLock = useRecoilValue(scrollLockState);

  // Close overlay on larger viewports
  useEffect(() => {
    // Set up media query & listen to it
    const mql = window.matchMedia("(min-width: 1280px)");
    const listener = () => {
      // Close menu if mq matches
      mql.matches && setMenuOpen(false);
    };
    mql.addEventListener("change", listener);
    return () => mql.removeEventListener("change", listener);
  }, [setMenuOpen]);

  return (
    <Transition
      as={Fragment}
      show={menuOpen}
      enter="transition duration-300 ease-out"
      enterFrom="transform opacity-0"
      enterTo="transform opacity-100"
      leave="transition duration-200 ease-out"
      leaveFrom="transform opacity-100"
      leaveTo="transform opacity-0"
    >
      <Dialog
        onClose={closeHandler}
        className={classNames("fixed z-40 inset-0 bg-white")}
      >
        {/* Content */}
        <div className="overflow-auto h-full">
          {/* Double topbar */}
          <div
            className="pt-30 pb-16 md:pt-50 md:pb-30"
            style={{ paddingRight: scrollLock }}
          >
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

                {/* Menu closer */}
                <button type="button" className="flex" onClick={closeHandler}>
                  {/* Icon */}
                  <CloseIcon className="h-30 w-30 md:h-40 md:w-40" />
                  <span className="sr-only">Menü schließen</span>
                </button>
              </div>
            </Container>
          </div>

          <div className="relative">
            {/* Content */}
            <Container className="py-40 relative">
              <div
                style={{ paddingRight: scrollLock }}
                className="pl-30 md:pl-[47px]"
              >
                {/* Menu */}
                <nav className="flex flex-col gap-y-20 w-fit">
                  {data.topbar.menu.map(({ href, label, id, children }) =>
                    href && children.length <= 0 ? (
                      <div key={id}>
                        <Link href={href}>
                          <a
                            className="text-19 leading-none font-normal inline-block whitespace-nowrap text-brown-700"
                            onClick={() => setMenuOpen(false)}
                          >
                            {label}
                          </a>
                        </Link>
                      </div>
                    ) : (
                      <div key={id}>
                        <p className="text-19 leading-none font-normal inline-block whitespace-nowrap text-brown-700">
                          {label}
                        </p>

                        {children.length > 0 && (
                          <div className="mt-25 space-y-20 flex flex-col items-start">
                            {children.map(({ href, label }) => (
                              <Link href={href} key={href}>
                                <a
                                  className={classNames(
                                    "text-17 leading-none font-normal transition-colors text-brown-700 flex gap-x-12 items-center relative"
                                  )}
                                >
                                  <ArrowIcon className="text-teal-300 h-18 w-18" />
                                  <span>{label}</span>
                                </a>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  )}
                </nav>

                {/* Contact */}
                <div className="mt-90">
                  <a
                    href={data.phoneLink.href}
                    className="inline-flex gap-8 items-center text-teal-300"
                  >
                    <PhoneIcon className="w-18 h-18 shrink-0" />
                    <span className="text-13">{data.phoneLink.label}</span>
                  </a>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default OverlayMenu;
