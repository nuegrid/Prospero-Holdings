"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type SmoothCursorProps = {
  size?: number;
  offset?: number;
  color?: string;
  smoothing?: number;
  labelWidth?: number;
  labelHeight?: number;
  className?: string;
};

export function SmoothCursor({
  size = 10,
  offset = 18,
  color = "#E0BE3D",
  smoothing = 0.2,
  labelWidth = 100,
  labelHeight = 42,
  className = "",
}: SmoothCursorProps) {
  const cursorRef =
    useRef<HTMLDivElement | null>(null);

  const cursorShapeRef =
    useRef<HTMLDivElement | null>(null);

  const animationFrameRef =
    useRef<number | null>(null);

  const refreshFrameRef =
    useRef<number | null>(null);

  const targetPositionRef = useRef({
    x: -100,
    y: -100,
  });

  const currentPositionRef = useRef({
    x: -100,
    y: -100,
  });

  const pointerPositionRef = useRef({
    x: -100,
    y: -100,
  });

  const currentLabelRef =
    useRef<string | null>(null);

  const hasPositionRef = useRef(false);

  const lastPointerMoveTimeRef =
    useRef(0);

  const previousFrameTimeRef =
    useRef<number | null>(null);

  const rotationRef = useRef(0);

  const [cursorLabel, setCursorLabel] =
    useState<string | null>(null);

  const setLabel = useCallback(
    (nextLabel: string | null) => {
      if (
        currentLabelRef.current ===
        nextLabel
      ) {
        return;
      }

      currentLabelRef.current =
        nextLabel;

      setCursorLabel(nextLabel);
    },
    [],
  );

  const updateCursorState = useCallback(
    (
      element: Element | null,
      shouldShow = true,
    ) => {
      const cursor = cursorRef.current;

      if (!cursor) {
        return;
      }

      const hiddenElement =
        element?.closest(
          "[data-cursor-hidden]",
        );

      if (
        hiddenElement ||
        !shouldShow
      ) {
        cursor.style.opacity = "0";

        setLabel(null);

        return;
      }

      const labelElement =
        element?.closest<HTMLElement>(
          "[data-cursor-label]",
        );

      const nextLabel =
        labelElement?.dataset
          .cursorLabel ?? null;

      setLabel(nextLabel);

      if (hasPositionRef.current) {
        cursor.style.opacity = "1";
      }
    },
    [setLabel],
  );

  const refreshCursorState =
    useCallback(() => {
      const { x, y } =
        pointerPositionRef.current;

      const isOutsideViewport =
        x < 0 ||
        y < 0 ||
        x > window.innerWidth ||
        y > window.innerHeight;

      if (isOutsideViewport) {
        updateCursorState(null, false);

        return;
      }

      const element =
        document.elementFromPoint(x, y);

      updateCursorState(element, true);
    }, [updateCursorState]);

  useEffect(() => {
    const cursor = cursorRef.current;

    const cursorShape =
      cursorShapeRef.current;

    if (!cursor || !cursorShape) {
      return;
    }

    const pointerQuery =
      window.matchMedia(
        "(pointer: fine)",
      );

    const reducedMotionQuery =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      );

    if (!pointerQuery.matches) {
      cursor.style.display = "none";

      return;
    }

    const smoothness = Math.min(
      1,
      Math.max(0.01, smoothing),
    );

    const scheduleCursorRefresh = () => {
      if (
        refreshFrameRef.current !== null
      ) {
        cancelAnimationFrame(
          refreshFrameRef.current,
        );
      }

      refreshFrameRef.current =
        requestAnimationFrame(() => {
          refreshCursorState();

          refreshFrameRef.current = null;
        });
    };

    const handlePointerMove = (
      event: PointerEvent,
    ) => {
      lastPointerMoveTimeRef.current =
        performance.now();

      pointerPositionRef.current = {
        x: event.clientX,
        y: event.clientY,
      };

      targetPositionRef.current = {
        x: event.clientX + offset,
        y: event.clientY + offset,
      };

      if (!hasPositionRef.current) {
        currentPositionRef.current = {
          x: event.clientX + offset,
          y: event.clientY + offset,
        };

        hasPositionRef.current = true;
      }

      const target =
        event.target instanceof Element
          ? event.target
          : null;

      updateCursorState(target, true);
    };

    const handlePointerOver = (
      event: PointerEvent,
    ) => {
      const target =
        event.target instanceof Element
          ? event.target
          : null;

      updateCursorState(target, true);
    };

    const handlePointerOut = (
      event: PointerEvent,
    ) => {
      const nextElement =
        event.relatedTarget instanceof
        Element
          ? event.relatedTarget
          : null;

      if (!nextElement) {
        setLabel(null);

        return;
      }

      updateCursorState(
        nextElement,
        true,
      );
    };

    const handleMouseLeave = () => {
      updateCursorState(null, false);
    };

    const handleMouseEnter = () => {
      if (hasPositionRef.current) {
        scheduleCursorRefresh();
      }
    };

    const handleWindowBlur = () => {
      updateCursorState(null, false);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        updateCursorState(null, false);

        return;
      }

      scheduleCursorRefresh();
    };

    const animateCursor = (
      currentTime: number,
    ) => {
      const current =
        currentPositionRef.current;

      const target =
        targetPositionRef.current;

      current.x +=
        (target.x - current.x) *
        smoothness;

      current.y +=
        (target.y - current.y) *
        smoothness;

      cursor.style.transform =
        `translate3d(${current.x}px, ${current.y}px, 0)`;

      const previousTime =
        previousFrameTimeRef.current ??
        currentTime;

      const elapsedTime = Math.min(
        currentTime - previousTime,
        32,
      );

      previousFrameTimeRef.current =
        currentTime;

      const pointerIsIdle =
        currentTime -
          lastPointerMoveTimeRef.current >
        140;

      const hasActiveLabel =
        Boolean(currentLabelRef.current);

      const shouldRotate =
        pointerIsIdle &&
        !hasActiveLabel &&
        hasPositionRef.current &&
        !reducedMotionQuery.matches;

      if (shouldRotate) {
        rotationRef.current =
          (rotationRef.current +
            elapsedTime * 0.06) %
          360;

        cursorShape.style.transform =
          `rotate(${rotationRef.current}deg)`;
      }

      if (hasActiveLabel) {
        rotationRef.current = 0;

        cursorShape.style.transform =
          "rotate(0deg)";
      }

      animationFrameRef.current =
        requestAnimationFrame(
          animateCursor,
        );
    };

    window.addEventListener(
      "pointermove",
      handlePointerMove,
      {
        passive: true,
      },
    );

    document.addEventListener(
      "pointerover",
      handlePointerOver,
      {
        passive: true,
      },
    );

    document.addEventListener(
      "pointerout",
      handlePointerOut,
      {
        passive: true,
      },
    );

    window.addEventListener(
      "scroll",
      scheduleCursorRefresh,
      {
        passive: true,
        capture: true,
      },
    );

    window.addEventListener(
      "resize",
      scheduleCursorRefresh,
      {
        passive: true,
      },
    );

    window.addEventListener(
      "blur",
      handleWindowBlur,
    );

    document.documentElement.addEventListener(
      "mouseleave",
      handleMouseLeave,
    );

    document.documentElement.addEventListener(
      "mouseenter",
      handleMouseEnter,
    );

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange,
    );

    animationFrameRef.current =
      requestAnimationFrame(
        animateCursor,
      );

    return () => {
      window.removeEventListener(
        "pointermove",
        handlePointerMove,
      );

      document.removeEventListener(
        "pointerover",
        handlePointerOver,
      );

      document.removeEventListener(
        "pointerout",
        handlePointerOut,
      );

      window.removeEventListener(
        "scroll",
        scheduleCursorRefresh,
        true,
      );

      window.removeEventListener(
        "resize",
        scheduleCursorRefresh,
      );

      window.removeEventListener(
        "blur",
        handleWindowBlur,
      );

      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave,
      );

      document.documentElement.removeEventListener(
        "mouseenter",
        handleMouseEnter,
      );

      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange,
      );

      if (
        animationFrameRef.current !==
        null
      ) {
        cancelAnimationFrame(
          animationFrameRef.current,
        );

        animationFrameRef.current = null;
      }

      if (
        refreshFrameRef.current !==
        null
      ) {
        cancelAnimationFrame(
          refreshFrameRef.current,
        );

        refreshFrameRef.current = null;
      }
    };
  }, [
    offset,
    smoothing,
    refreshCursorState,
    setLabel,
    updateCursorState,
  ]);

  const hasLabel = Boolean(cursorLabel);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className={`
        pointer-events-none
        fixed left-0 top-0
        z-[9999]
        flex items-center
        justify-center
        whitespace-nowrap
        opacity-0
        ${className}
      `}
      style={{
        width: hasLabel
          ? `${labelWidth}px`
          : `${size}px`,

        height: hasLabel
          ? `${labelHeight}px`
          : `${size}px`,

        color: "#000000",
        fontSize: "13px",
        fontWeight: 500,
        letterSpacing: "-0.02em",

        willChange:
          "transform, width, height",

        /*
         * Slow square-to-rectangle transition.
         */
        transition: `
          width 440ms cubic-bezier(0.22, 1, 0.36, 1),
          height 440ms cubic-bezier(0.22, 1, 0.36, 1),
          opacity 120ms ease
        `,
      }}
    >
      {/* Yellow shape */}
      <div
        ref={cursorShapeRef}
        className="
          absolute inset-0
          transform-gpu
        "
        style={{
          backgroundColor: color,
          borderRadius: "0px",
          transformOrigin: "center",
          willChange: "transform",

          transition: hasLabel
            ? `
              transform
              260ms
              cubic-bezier(0.22, 1, 0.36, 1)
            `
            : "none",
        }}
      />

      {/* Discover text */}
      <span
        className={`
          relative z-10

          transition-[opacity,transform]
          duration-200
          ease-out

          ${
            hasLabel
              ? `
                delay-200
                scale-100
                opacity-100
              `
              : `
                delay-0
                scale-75
                opacity-0
              `
          }
        `}
      >
        {cursorLabel}
      </span>
    </div>
  );
}