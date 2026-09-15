"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import type { MouseEvent } from "react";

import Image from "next/image";
import Link from "next/link";
import {
  usePathname,
  useRouter,
} from "next/navigation";
import { useLenis } from "lenis/react";
import { GoArrowRight } from "react-icons/go";
import {
  LuMenu,
  LuX,
} from "react-icons/lu";

import Typography from "@/ui/Typography";

type NavigationItem = {
  label: string;
  href: string;
  sectionId?: string;
};

const PENDING_SECTION_KEY =
  "prospero-pending-section";

const navigationLinks: NavigationItem[] = [
  {
    label: "Home",
    href: "/#home",
    sectionId: "home",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Eco System",
    href: "/#ecosystem",
    sectionId: "ecosystem",
  },
  {
    label: "Companies",
    href: "/#companies",
    sectionId: "companies",
  },
  {
    label: "News",
    href: "/#news",
    sectionId: "news",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const lenis = useLenis();

  const [isScrolled, setIsScrolled] =
    useState(false);

  const [isPastAbout, setIsPastAbout] =
    useState(false);

  const [
    isFooterVisible,
    setIsFooterVisible,
  ] = useState(false);

  const [isHoverReveal, setIsHoverReveal] =
    useState(false);

  const [
    isMobileMenuOpen,
    setIsMobileMenuOpen,
  ] = useState(false);

  const scrollFrameRef =
    useRef<number | null>(null);

  const isHomePage = pathname === "/";

  const isAboutPage =
    pathname === "/about" ||
    pathname.startsWith("/about/");

  const isNavbarVisible =
    isMobileMenuOpen ||
    (!isFooterVisible &&
      (!isPastAbout || isHoverReveal));

  const getNavbarHeight = useCallback(() => {
    const rootStyles = getComputedStyle(
      document.documentElement,
    );

    const customProperty = rootStyles
      .getPropertyValue("--navbar-height")
      .trim();

    const parsedHeight =
      Number.parseFloat(customProperty);

    if (
      Number.isFinite(parsedHeight) &&
      parsedHeight > 0
    ) {
      return parsedHeight;
    }

    return 0;
  }, []);

  const jumpToSection = useCallback(
    (sectionId: string) => {
      const target =
        document.getElementById(sectionId);

      if (!target) {
        return false;
      }

      const navbarHeight =
        getNavbarHeight();

      if (lenis) {
        lenis.resize();

        lenis.scrollTo(target, {
          offset: -navbarHeight,
          immediate: true,
          force: true,
        });
      } else {
        const targetTop =
          window.scrollY +
          target.getBoundingClientRect().top -
          navbarHeight;

        window.scrollTo({
          top: Math.max(0, targetTop),
          left: 0,
          behavior: "auto",
        });
      }

      return true;
    },
    [getNavbarHeight, lenis],
  );

  /*
   * Reset navbar states during route changes.
   */
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsFooterVisible(false);
    setIsHoverReveal(false);
    setIsMobileMenuOpen(false);

    if (!isHomePage) {
      setIsPastAbout(false);
    }
  }, [isHomePage, pathname]);

  /*
   * Open saved home-page section immediately.
   * Long retry loops and correction timers
   * have been removed.
   */
  useLayoutEffect(() => {
    if (!isHomePage) {
      return;
    }

    const pendingSection =
      sessionStorage.getItem(
        PENDING_SECTION_KEY,
      );

    const hashSection =
      window.location.hash
        .replace(/^#/, "")
        .trim();

    const sectionId =
      pendingSection || hashSection;

    if (!sectionId) {
      return;
    }

    let cancelled = false;
    let navigationFrame: number | null =
      null;

    const completeNavigation = () => {
      if (cancelled) {
        return;
      }

      const sectionFound =
        jumpToSection(sectionId);

      if (!sectionFound) {
        return;
      }

      sessionStorage.removeItem(
        PENDING_SECTION_KEY,
      );

      window.history.replaceState(
        null,
        "",
        `/#${sectionId}`,
      );
    };

    /*
     * First attempt immediately.
     */
    completeNavigation();

    /*
     * One frame correction only.
     */
    navigationFrame =
      requestAnimationFrame(
        completeNavigation,
      );

    return () => {
      cancelled = true;

      if (navigationFrame !== null) {
        cancelAnimationFrame(
          navigationFrame,
        );
      }
    };
  }, [isHomePage, jumpToSection]);

  /*
   * Navbar scroll state.
   */
  const updateNavbarState =
    useCallback(() => {
      if (scrollFrameRef.current !== null) {
        return;
      }

      scrollFrameRef.current =
        requestAnimationFrame(() => {
          const nextIsScrolled =
            window.scrollY > 30;

          setIsScrolled((current) =>
            current === nextIsScrolled
              ? current
              : nextIsScrolled,
          );

          if (!isHomePage) {
            setIsPastAbout(false);
            scrollFrameRef.current = null;
            return;
          }

          const aboutSection =
            document.getElementById("about");

          const nextIsPastAbout =
            aboutSection
              ? aboutSection.getBoundingClientRect()
                  .bottom <= 0
              : false;

          setIsPastAbout((current) =>
            current === nextIsPastAbout
              ? current
              : nextIsPastAbout,
          );

          scrollFrameRef.current = null;
        });
    }, [isHomePage]);

  useEffect(() => {
    updateNavbarState();

    window.addEventListener(
      "scroll",
      updateNavbarState,
      {
        passive: true,
      },
    );

    window.addEventListener(
      "resize",
      updateNavbarState,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateNavbarState,
      );

      window.removeEventListener(
        "resize",
        updateNavbarState,
      );

      if (scrollFrameRef.current !== null) {
        cancelAnimationFrame(
          scrollFrameRef.current,
        );

        scrollFrameRef.current = null;
      }
    };
  }, [updateNavbarState]);

  /*
   * Close tablet menu when changing to desktop.
   */
  useEffect(() => {
    const desktopMedia =
      window.matchMedia(
        "(min-width: 1024px)",
      );

    const handleDesktopChange = () => {
      if (desktopMedia.matches) {
        setIsMobileMenuOpen(false);
      }
    };

    desktopMedia.addEventListener(
      "change",
      handleDesktopChange,
    );

    return () => {
      desktopMedia.removeEventListener(
        "change",
        handleDesktopChange,
      );
    };
  }, []);

  /*
   * Hide navbar while footer is visible.
   */
  useEffect(() => {
    const footer =
      document.getElementById("footer");

    if (!footer) {
      return;
    }

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          setIsFooterVisible(
            entry.isIntersecting,
          );

          if (entry.isIntersecting) {
            setIsHoverReveal(false);
            setIsMobileMenuOpen(false);
          }
        },
        {
          threshold: 0.05,
        },
      );

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  /*
   * Stop background scrolling while menu is open.
   */
  useEffect(() => {
    if (!isMobileMenuOpen) {
      lenis?.start();
      return;
    }

    lenis?.stop();

    return () => {
      lenis?.start();
    };
  }, [isMobileMenuOpen, lenis]);

  /*
   * Close menu using Escape.
   */
  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [isMobileMenuOpen]);

  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    item: NavigationItem,
  ) => {
    setIsMobileMenuOpen(false);

    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    if (!item.sectionId) {
      sessionStorage.removeItem(
        PENDING_SECTION_KEY,
      );

      return;
    }

    event.preventDefault();

    if (isHomePage) {
      sessionStorage.removeItem(
        PENDING_SECTION_KEY,
      );

      window.history.pushState(
        null,
        "",
        `/#${item.sectionId}`,
      );

      jumpToSection(item.sectionId);

      return;
    }

    sessionStorage.setItem(
      PENDING_SECTION_KEY,
      item.sectionId,
    );

    router.push(`/#${item.sectionId}`, {
      scroll: true,
    });
  };

  const revealNavbar = () => {
    if (!isFooterVisible) {
      setIsHoverReveal(true);
    }
  };

  const hideNavbarReveal = () => {
    if (
      isPastAbout &&
      !isMobileMenuOpen
    ) {
      setIsHoverReveal(false);
    }
  };

  const handleContactClick = () => {
    sessionStorage.removeItem(
      PENDING_SECTION_KEY,
    );

    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop top-hover trigger */}
      <div
        aria-hidden="true"
        data-cursor-hidden
        onPointerEnter={revealNavbar}
        className="
          fixed left-0 top-0
          z-40 hidden
          h-[42px] w-full
          bg-transparent

          lg:block
        "
      />

      {/* Mobile/tablet backdrop */}
      <button
        type="button"
        aria-label="Close navigation menu"
        tabIndex={
          isMobileMenuOpen ? 0 : -1
        }
        onClick={() => {
          setIsMobileMenuOpen(false);
        }}
        className={`
          fixed inset-0
          z-[45]
          bg-black/55
          transition-[opacity,visibility]
          duration-200 ease-out

          lg:hidden

          ${
            isMobileMenuOpen
              ? `
                visible
                opacity-100
              `
              : `
                invisible
                opacity-0
              `
          }
        `}
      />

      <header
        data-cursor-hidden
        className={`
          pointer-events-none
          sticky top-0 z-50
          h-[var(--navbar-height)]
          w-full shrink-0
          transition-[transform,opacity]
          duration-200
          ease-[cubic-bezier(0.16,1,0.3,1)]

          motion-reduce:transition-none

          ${
            isNavbarVisible
              ? `
                translate-y-0
                opacity-100
              `
              : `
                -translate-y-[115%]
                opacity-0
              `
          }
        `}
      >
        <nav
          aria-label="Main navigation"
          onPointerEnter={revealNavbar}
          onPointerLeave={hideNavbarReveal}
          className={`
            navbar-load-animation
            pointer-events-auto
            absolute left-1/2 top-1/2
            flex -translate-x-1/2
            -translate-y-1/2
            items-center justify-center
            overflow-hidden
            transition-[width,height,border-radius,background-color,border-color,box-shadow]
            duration-200
            ease-[cubic-bezier(0.16,1,0.3,1)]

            ${
              isScrolled
                ? `
                  h-[64px]
                  w-[min(92vw,1050px)]
                  rounded-[8px]
                  border border-white/[0.15]
                  bg-black/[0.94]
                  shadow-[0_10px_28px_rgba(0,0,0,0.2)]
                `
                : `
                  h-full
                  w-full max-w-[1728px]
                  rounded-none
                  border border-transparent
                  bg-black
                  shadow-none
                `
            }

            max-lg:h-[62px]
            max-lg:w-[calc(100%_-_24px)]
            max-lg:max-w-[760px]
            max-lg:rounded-[12px]
            max-lg:border-white/[0.14]
            max-lg:bg-black/[0.97]
            max-lg:shadow-[0_12px_34px_rgba(0,0,0,0.26)]

            sm:max-lg:w-[calc(100%_-_40px)]
          `}
        >
          {/* Mobile premium highlight */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute inset-x-[18px]
              top-0 h-px
              bg-gradient-to-r
              from-transparent
              via-white/25
              to-transparent

              lg:hidden
            "
          />

          <div
            className={`
              flex items-center
              transition-[width,height,padding]
              duration-200
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

              max-lg:h-full
              max-lg:w-full
              max-lg:px-[14px]

              sm:max-lg:px-[18px]
            `}
          >
            {/* Logo */}
            <Link
              href="/#home"
              scroll={false}
              onClick={(event) => {
                handleNavigation(event, {
                  label: "Home",
                  href: "/#home",
                  sectionId: "home",
                });
              }}
              aria-label="Prospero Holding home"
              className={`
                relative block shrink-0
                overflow-visible
                transition-opacity
                duration-150

                hover:opacity-75

                focus-visible:outline-none
                focus-visible:ring-1
                focus-visible:ring-[#E0BE3D]
                focus-visible:ring-offset-4
                focus-visible:ring-offset-black

                ${
                  isScrolled
                    ? `
                      h-[27px] w-[132px]
                    `
                    : `
                      h-[min(2.115503vw,36.56px)]
                      w-[min(10.358796vw,179px)]
                    `
                }

                max-lg:h-[26px]
                max-lg:w-[126px]

                sm:max-lg:h-[29px]
                sm:max-lg:w-[142px]
              `}
            >
              <Image
                src="/images/company-logos/prospero-holding.svg"
                alt="Prospero Holding"
                width={179}
                height={37}
                priority
                className={`
                  absolute left-0 top-1/2
                  shrink-0 origin-left
                  -translate-y-1/2
                  scale-[2.35]
                  object-contain object-left
                  transition-[width,height,transform]
                  duration-200

                  ${
                    isScrolled
                      ? `
                        h-[27px] w-[132px]
                      `
                      : `
                        h-[min(2.115503vw,36.56px)]
                        w-[min(10.358796vw,179px)]
                      `
                  }

                  max-lg:h-[26px]
                  max-lg:w-[126px]

                  sm:max-lg:h-[29px]
                  sm:max-lg:w-[142px]
                `}
              />
            </Link>

            {/* Desktop links */}
            <div
              className={`
                hidden shrink-0
                items-center whitespace-nowrap
                transition-[gap]
                duration-200

                lg:flex

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
                (item) => {
                  const isActive =
                    item.label === "About" &&
                    isAboutPage;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      scroll={!item.sectionId}
                      onClick={(event) => {
                        handleNavigation(
                          event,
                          item,
                        );
                      }}
                      aria-current={
                        isActive
                          ? "page"
                          : undefined
                      }
                      className="
                        group relative z-10
                        inline-flex cursor-pointer
                        items-center justify-center
                        px-[4px] py-[8px]

                        focus-visible:outline-none
                      "
                    >
                      <Typography
                        as="span"
                        variant="navLink"
                        className={`
                          pointer-events-none
                          block
                          transition-colors
                          duration-150

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

                      <span
                        aria-hidden="true"
                        className={`
                          pointer-events-none
                          absolute bottom-[3px]
                          left-[4px] right-[4px]
                          h-px origin-left
                          bg-[#E0BE3D]
                          transition-transform
                          duration-200

                          group-hover:scale-x-100
                          group-focus-visible:scale-x-100

                          ${
                            isActive
                              ? "scale-x-100"
                              : "scale-x-0"
                          }
                        `}
                      />
                    </Link>
                  );
                },
              )}
            </div>

            {/* Desktop contact */}
            <Link
              href="/contact"
              scroll
              onClick={handleContactClick}
              aria-label="Go to contact page"
              className={`
                group relative isolate
                hidden shrink-0
                items-center justify-center
                bg-white text-black
                transition-[width,height,gap,border-radius,transform,box-shadow]
                duration-200

                hover:-translate-y-px
                hover:shadow-[0_8px_20px_rgba(0,0,0,0.16)]

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#E0BE3D]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-black

                lg:inline-flex

                ${
                  isScrolled
                    ? `
                      h-[40px]
                      w-[134px]
                      translate-x-[7px]
                      gap-[8px]
                      rounded-[4px]
                    `
                    : `
                      h-[min(2.893519vw,50px)]
                      w-[min(10.185185vw,176px)]
                      translate-x-0
                      gap-[min(0.578704vw,10px)]
                      rounded-none
                    `
                }
              `}
            >
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute inset-0 -z-10
                  origin-left scale-x-0
                  bg-[#E0BE3D]
                  transition-transform
                  duration-300

                  group-hover:scale-x-100
                  group-focus-visible:scale-x-100
                "
              />

              <Typography
                as="span"
                variant="buttonDark"
                className={`
                  pointer-events-none
                  relative z-10
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
                  pointer-events-none
                  relative z-10
                  shrink-0 text-black
                  transition-transform
                  duration-200

                  group-hover:translate-x-[3px]

                  ${
                    isScrolled
                      ? `
                        h-[18px] w-[18px]
                      `
                      : `
                        h-[min(1.388889vw,24px)]
                        w-[min(1.388889vw,24px)]
                      `
                  }
                `}
              />
            </Link>

            {/* Mobile/tablet menu button */}
            <button
              type="button"
              aria-label={
                isMobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => {
                setIsMobileMenuOpen(
                  (current) => !current,
                );
              }}
              className={`
                relative flex
                h-[42px] w-[42px]
                cursor-pointer
                items-center justify-center
                overflow-hidden rounded-[8px]
                border
                transition-[background-color,border-color,color]
                duration-150

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#E0BE3D]

                lg:hidden

                ${
                  isMobileMenuOpen
                    ? `
                      border-[#E0BE3D]
                      bg-[#E0BE3D]
                      text-black
                    `
                    : `
                      border-white/[0.16]
                      bg-white/[0.05]
                      text-white
                    `
                }
              `}
            >
              {isMobileMenuOpen ? (
                <LuX
                  aria-hidden="true"
                  strokeWidth={1.8}
                  className="h-[21px] w-[21px]"
                />
              ) : (
                <LuMenu
                  aria-hidden="true"
                  strokeWidth={1.8}
                  className="h-[21px] w-[21px]"
                />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile/tablet dropdown */}
        <div
          id="mobile-navigation"
          aria-hidden={!isMobileMenuOpen}
          className={`
            pointer-events-auto
            absolute left-1/2
            top-[calc(50%_+_40px)]
            w-[calc(100%_-_24px)]
            max-w-[760px]
            -translate-x-1/2
            overflow-hidden
            rounded-[14px]
            border border-white/[0.14]
            bg-[#090909]
            shadow-[0_20px_50px_rgba(0,0,0,0.42)]
            transition-[opacity,transform,visibility]
            duration-200
            ease-[cubic-bezier(0.16,1,0.3,1)]

            sm:w-[calc(100%_-_40px)]

            lg:hidden

            ${
              isMobileMenuOpen
                ? `
                  visible
                  translate-y-0
                  opacity-100
                `
                : `
                  invisible
                  -translate-y-[6px]
                  opacity-0
                `
            }
          `}
        >
          {/* Top accent */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute inset-x-[24px]
              top-0 h-px
              bg-gradient-to-r
              from-transparent
              via-[#E0BE3D]/70
              to-transparent
            "
          />

          {/* Dropdown header */}
          <div
            className="
              flex items-center
              justify-between
              border-b border-white/[0.1]
              px-[20px] py-[17px]

              sm:px-[24px]
            "
          >
            <div
              className="
                flex items-center
                gap-[10px]
              "
            >
              <span
                aria-hidden="true"
                className="
                  h-[8px] w-[8px]
                  bg-[#E0BE3D]
                "
              />

              <Typography
                as="span"
                variant="statLabel"
                className="
                  !m-0
                  !text-[11px]
                  !font-medium
                  !uppercase
                  !leading-none
                  !tracking-[0.12em]
                  !text-white/55
                "
              >
                Navigation
              </Typography>
            </div>

            <Typography
              as="span"
              variant="statLabel"
              className="
                !m-0
                !text-[11px]
                !font-normal
                !leading-none
                !tracking-[0.06em]
                !text-white/30
              "
            >
              Prospero
            </Typography>
          </div>

          {/* Menu links */}
          <div
            className="
              grid grid-cols-1
              p-[8px]

              sm:grid-cols-2
            "
          >
            {navigationLinks.map(
              (item, index) => {
                const isActive =
                  item.label === "About" &&
                  isAboutPage;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    scroll={!item.sectionId}
                    onClick={(event) => {
                      handleNavigation(
                        event,
                        item,
                      );
                    }}
                    aria-current={
                      isActive
                        ? "page"
                        : undefined
                    }
                    className={`
                      group relative
                      flex min-h-[58px]
                      items-center
                      justify-between
                      overflow-hidden
                      rounded-[8px]
                      px-[14px]
                      transition-colors
                      duration-150

                      focus-visible:outline-none
                      focus-visible:ring-1
                      focus-visible:ring-inset
                      focus-visible:ring-[#E0BE3D]

                      ${
                        isActive
                          ? `
                            bg-white/[0.08]
                          `
                          : `
                            hover:bg-white/[0.055]
                          `
                      }
                    `}
                  >
                    <div
                      className="
                        flex min-w-0
                        items-center
                        gap-[14px]
                      "
                    >
                      <span
                        className={`
                          shrink-0
                          font-[family-name:var(--font-geist-sans)]
                          text-[10px]
                          font-medium
                          leading-none
                          tracking-[0.08em]

                          ${
                            isActive
                              ? "text-[#E0BE3D]"
                              : "text-white/30"
                          }
                        `}
                      >
                        {String(
                          index + 1,
                        ).padStart(2, "0")}
                      </span>

                      <Typography
                        as="span"
                        variant="navLink"
                        className={`
                          !m-0
                          !text-[15px]
                          !font-medium
                          !leading-none
                          transition-colors
                          duration-150

                          ${
                            isActive
                              ? "!text-white"
                              : `
                                !text-white/80
                                group-hover:!text-white
                              `
                          }
                        `}
                      >
                        {item.label}
                      </Typography>
                    </div>

                    <span
                      aria-hidden="true"
                      className={`
                        h-[5px] w-[5px]
                        shrink-0 rounded-full

                        ${
                          isActive
                            ? `
                              bg-[#E0BE3D]
                            `
                            : `
                              bg-white/20
                            `
                        }
                      `}
                    />
                  </Link>
                );
              },
            )}

            {/* Mobile contact button */}
            <Link
              href="/contact"
              onClick={handleContactClick}
              className="
                group relative isolate
                mt-[8px]
                flex min-h-[54px]
                items-center justify-between
                overflow-hidden rounded-[8px]
                bg-[#E0BE3D]
                px-[16px]
                text-black

                sm:col-span-2

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-inset
                focus-visible:ring-white
              "
            >
              <Typography
                as="span"
                variant="buttonDark"
                className="
                  !m-0
                  !text-[15px]
                  !font-medium
                  !text-black
                "
              >
                Start a Conversation
              </Typography>

              <span
                aria-hidden="true"
                className="
                  flex h-[32px] w-[32px]
                  items-center justify-center
                  rounded-full
                  bg-black text-white
                "
              >
                <GoArrowRight
                  className="
                    h-[18px] w-[18px]
                    transition-transform
                    duration-200

                    group-hover:translate-x-[3px]
                  "
                />
              </span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}