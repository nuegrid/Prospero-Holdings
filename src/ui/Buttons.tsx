"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

import Typography from "@/ui/Typography";

const navigationLinks = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Eco System",
    href: "#ecosystem",
  },
  {
    label: "Companies",
    href: "#companies",
  },
  {
    label: "News",
    href: "#news",
  },
  {
    label: "Careers",
    href: "#careers",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] =
    useState(false);

  const [isPastAbout, setIsPastAbout] =
    useState(false);

  const [isHoverReveal, setIsHoverReveal] =
    useState(false);

  const [
    isFooterVisible,
    setIsFooterVisible,
  ] = useState(false);

  const isFooterVisibleRef = useRef(false);

  /*
   * Navbar visibility:
   * 1. Hero and About: always visible
   * 2. Other sections: top hover cheyyumbol visible
   * 3. Footer: always hidden
   */
  const isNavbarVisible =
    !isFooterVisible &&
    (!isPastAbout || isHoverReveal);

  const updateNavbarPosition =
    useCallback(() => {
      const currentScrollY = window.scrollY;

      const aboutSection =
        document.getElementById("about");

      setIsScrolled(currentScrollY > 30);

      if (!aboutSection) {
        setIsPastAbout(false);
        return;
      }

      const aboutRect =
        aboutSection.getBoundingClientRect();

      setIsPastAbout(aboutRect.bottom <= 0);
    }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    updateNavbarPosition();

    window.addEventListener(
      "scroll",
      updateNavbarPosition,
      {
        passive: true,
      },
    );

    window.addEventListener(
      "resize",
      updateNavbarPosition,
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateNavbarPosition,
      );

      window.removeEventListener(
        "resize",
        updateNavbarPosition,
      );
    };
  }, [updateNavbarPosition]);

  useEffect(() => {
    const footer =
      document.getElementById("footer");

    if (!footer) return;

    const footerObserver =
      new IntersectionObserver(
        ([entry]) => {
          const footerIsVisible =
            entry.isIntersecting;

          isFooterVisibleRef.current =
            footerIsVisible;

          setIsFooterVisible(
            footerIsVisible,
          );

          if (footerIsVisible) {
            setIsHoverReveal(false);
          }
        },
        {
          threshold: 0.05,
        },
      );

    footerObserver.observe(footer);

    return () => {
      footerObserver.disconnect();
    };
  }, []);

  const revealNavbar = () => {
    if (!isFooterVisibleRef.current) {
      setIsHoverReveal(true);
    }
  };

  const hideRevealedNavbar = () => {
    if (isPastAbout) {
      setIsHoverReveal(false);
    }
  };

  return (
    <>
      {/* Invisible top cursor detection area */}
      <div
        aria-hidden="true"
        onPointerEnter={revealNavbar}
        className="
          fixed left-0 top-0
          z-[60] h-[42px] w-full
          bg-transparent
        "
      />

      <header
        className={`
          pointer-events-none sticky
          top-0 z-50
          h-[var(--navbar-height)]
          w-full shrink-0
          transition-[transform,opacity]
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            isNavbarVisible
              ? `
                translate-y-0
                opacity-100
              `
              : `
                -translate-y-full
                opacity-0
              `
          }
        `}
      >
        <nav
          aria-label="Main navigation"
          onPointerEnter={revealNavbar}
          onPointerLeave={
            hideRevealedNavbar
          }
          className={`
            pointer-events-auto
            absolute left-1/2 top-1/2
            flex -translate-x-1/2
            -translate-y-1/2
            items-center justify-center
            overflow-hidden
            transition-[width,height,border-radius,background-color,border-color,box-shadow]
            duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]

            ${
              isScrolled
                ? `
                  h-[64px]
                  w-[min(92vw,1050px)]
                  rounded-[8px]
                  border border-white/[0.15]
                  bg-black/[0.72]
                  shadow-[0_14px_38px_rgba(0,0,0,0.22)]
                  backdrop-blur-[16px]
                `
                : `
                  h-full
                  w-full
                  max-w-[1728px]
                  rounded-none
                  border border-transparent
                  bg-black
                  shadow-none
                  backdrop-blur-none
                `
            }
          `}
        >
          <div
            className={`
              flex items-center
              transition-[width,height,padding]
              duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]

              ${
                isScrolled
                  ? `
                    h-full w-full
                    justify-between
                    px-[22px]
                  `
                  : `
                    h-[min(2.893519vw,50px)]
                    w-[min(83.622685vw,1445px)]
                    justify-between px-0
                  `
              }
            `}
          >
            {/* Logo */}
            <Link
              href="/"
              aria-label="Prospero Holding home"
              className="
                shrink-0
                transition-opacity duration-300
                hover:opacity-75
                focus-visible:outline-none
                focus-visible:ring-1
                focus-visible:ring-[#E0BE3D]
                focus-visible:ring-offset-4
                focus-visible:ring-offset-black
              "
            >
              <Image
                src="/images/logo.svg"
                alt="Prospero Holding"
                width={179}
                height={37}
                priority
                className={`
                  shrink-0 object-contain
                  object-left
                  transition-[width,height]
                  duration-500
                  ease-[cubic-bezier(0.22,1,0.36,1)]

                  ${
                    isScrolled
                      ? `
                        h-[27px]
                        w-[132px]
                      `
                      : `
                        h-[min(2.115503vw,36.56px)]
                        w-[min(10.358796vw,179px)]
                      `
                  }
                `}
              />
            </Link>

            {/* Navigation links */}
            <div
              className={`
                hidden shrink-0
                items-center whitespace-nowrap
                transition-[gap]
                duration-500 ease-out
                md:flex

                ${
                  isScrolled
                    ? `
                      gap-[clamp(14px,1.157407vw,20px)]
                    `
                    : `
                      gap-[min(1.273148vw,22px)]
                    `
                }
              `}
            >
              {navigationLinks.map(
                (item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="
                      group relative py-[8px]
                      focus-visible:outline-none
                    "
                  >
                    <Typography
                      as="span"
                      variant="navLink"
                      className={`
                        block
                        transition-colors
                        duration-300 ease-out
                        group-hover:!text-[#E0BE3D]
                        group-focus-visible:!text-[#E0BE3D]

                        ${
                          isScrolled
                            ? `
                              !text-[15px]
                              !font-medium
                              !text-white/90
                            `
                            : `
                              !font-normal
                              !text-white
                            `
                        }
                      `}
                    >
                      {item.label}
                    </Typography>

                    {/* Hover underline */}
                    <span
                      aria-hidden="true"
                      className="
                        absolute bottom-0
                        left-1/2 h-px w-0
                        bg-[#E0BE3D]
                        transition-[width,left]
                        duration-300 ease-out
                        group-hover:left-0
                        group-hover:w-full
                        group-focus-visible:left-0
                        group-focus-visible:w-full
                      "
                    />
                  </Link>
                ),
              )}
            </div>

            {/* Contact button */}
            <Link
              href="#contact"
              className={`
                group inline-flex shrink-0
                items-center justify-center
                bg-white text-black
                transition-[width,height,gap,border-radius,background-color,transform]
                duration-500
                ease-[cubic-bezier(0.22,1,0.36,1)]
                hover:-translate-y-px
                hover:bg-[#E0BE3D]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#E0BE3D]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-black

                ${
                  isScrolled
                    ? `
                      h-[40px]
                      w-[134px]
                      gap-[8px]
                      rounded-[4px]
                    `
                    : `
                      h-[min(2.893519vw,50px)]
                      w-[min(10.185185vw,176px)]
                      gap-[min(0.578704vw,10px)]
                      rounded-none
                    `
                }
              `}
            >
              <Typography
                as="span"
                variant="buttonDark"
                className={`
                  whitespace-nowrap
                  !text-black

                  ${
                    isScrolled
                      ? `
                        !text-[15px]
                        !font-medium
                      `
                      : ""
                  }
                `}
              >
                Contact
              </Typography>

              <GoArrowRight
                aria-hidden="true"
                strokeWidth={0.8}
                className={`
                  shrink-0 text-black
                  transition-[width,height,transform]
                  duration-500 ease-out
                  group-hover:translate-x-[3px]

                  ${
                    isScrolled
                      ? `
                        h-[18px]
                        w-[18px]
                      `
                      : `
                        h-[min(1.388889vw,24px)]
                        w-[min(1.388889vw,24px)]
                      `
                  }
                `}
              />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}