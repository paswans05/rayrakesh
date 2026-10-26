"use client";

import { createPortal } from "react-dom";
import { cloneElement, isValidElement, ReactElement, ReactNode, useEffect, useMemo, useState } from "react";
import { Cross } from "@/components/icons";
import { cn } from "@/lib/utils";

export interface VideoPopupProps {
  trigger?: ReactElement<{ onClick?: (e: React.MouseEvent) => void }>;
  children?: ReactNode;
  childClassName?: string;
  video: string;
  local?: boolean;
  title?: string;
  autoPlay?: boolean;
  closeOnOverlay?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  sm: "max-w-xl",
  md: "max-w-3xl",
  lg: "max-w-5xl",
  xl: "max-w-7xl",
};

export default function VideoPopup({
  trigger,
  children,
  childClassName,
  video,
  local = false,
  title,
  autoPlay = true,
  closeOnOverlay = true,
  size = "lg",
}: VideoPopupProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const src = useMemo(() => {
    if (local || !autoPlay) return video;
    return `${video}${video.includes("?") ? "&" : "?"}autoplay=1`;
  }, [video, local, autoPlay]);

  const handleTriggerClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(true);
  };

  const renderTrigger = () => {
    if (trigger && isValidElement(trigger)) {
      return cloneElement(trigger, {
        onClick: (e: React.MouseEvent) => {
          trigger.props.onClick?.(e);
          handleTriggerClick(e);
        },
      });
    }

    if (children) {
      return (
        <span
          onClick={handleTriggerClick}
          className={cn("inline-block cursor-pointer align-middle", childClassName)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setOpen(true);
            }
          }}
        >
          {children}
        </span>
      );
    }

    return null;
  };

  return (
    <>
      {renderTrigger()}

      {mounted &&
        open &&
        createPortal(
          <div
            className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => closeOnOverlay && setOpen(false)}
          >
            <div className={`relative w-full ${sizeClasses[size]}`} onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                aria-label="Close video"
                onClick={() => setOpen(false)}
                className="absolute -top-12 right-0 text-4xl text-white cursor-pointer hover:text-primary transition-colors"
              >
                <Cross className="size-7 fill-white" />
              </button>

              {title && (
                <h3 className="mb-4 text-lg font-semibold text-white">
                  {title}
                </h3>
              )}

              <div className="aspect-video overflow-hidden rounded-xl bg-black shadow-2xl">
                {local ? (
                  <video src={src} className="h-full w-full" controls autoPlay={autoPlay} playsInline />
                ) : (
                  <iframe
                    src={src}
                    title={title ?? "Video"}
                    className="h-full w-full border-0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}