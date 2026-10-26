"use client"

import React from "react"
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import Fade from "embla-carousel-fade"

import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "@/components/icons"

type CarouselApi = UseEmblaCarouselType[1]
type UseEmblaParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseEmblaParameters[0]
type CarouselPlugin = UseEmblaParameters[1]

/* ---------------------------------- TYPES --------------------------------- */

type CarouselEffect = "slide" | "fade"

type CarouselProps = {
  autoHeight?: boolean

  opts?: CarouselOptions & {
    scrollMode?: "one" | "page"
  }

  effect?: CarouselEffect

  autoplay?:
  | boolean
  | Parameters<typeof Autoplay>[0]

  plugins?: CarouselPlugin

  orientation?: "horizontal" | "vertical"

  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: CarouselApi
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
  orientation: "horizontal" | "vertical"
  scrollDirection: "next" | "prev"
  autoHeight?: boolean
} & CarouselProps

/* -------------------------------- CONTEXT --------------------------------- */

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

/* --------------------------------- ROOT ----------------------------------- */

function Carousel({
  orientation = "horizontal",
  opts,
  effect = "slide",
  autoplay,
  autoHeight = false,
  setApi,
  plugins,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & CarouselProps) {
  const { scrollMode = "one", ...restOpts } = opts || {}

  const autoplayPlugin = React.useMemo(() => {
    if (!autoplay) return null

    return Autoplay(
      typeof autoplay === "object"
        ? autoplay
        : {}
    )
  }, [autoplay])

  const fadePlugin = React.useMemo(() => {
    return effect === "fade" ? Fade() : null
  }, [effect])

  const [carouselRef, api] = useEmblaCarousel(
    {
      ...restOpts,
      axis: orientation === "horizontal" ? "x" : "y",
      slidesToScroll:
        effect === "fade" ? 1 : scrollMode === "page" ? "auto" : 1,
    },
    [
      ...(plugins ?? []),
      ...(autoplayPlugin ? [autoplayPlugin] : []),
      ...(fadePlugin ? [fadePlugin] : []),
    ]
  )

  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)
  const [scrollDirection, setScrollDirection] = React.useState<"next" | "prev">("next")
  const prevSnapRef = React.useRef(0)

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())

    const currentSnap = api.selectedScrollSnap()
    const totalSnaps = api.scrollSnapList().length

    if (prevSnapRef.current !== currentSnap) {
      if (
        (currentSnap > prevSnapRef.current && !(prevSnapRef.current === 0 && currentSnap === totalSnaps - 1)) ||
        (prevSnapRef.current === totalSnaps - 1 && currentSnap === 0)
      ) {
        setScrollDirection("next")
      } else {
        setScrollDirection("prev")
      }
      prevSnapRef.current = currentSnap
    }
  }, [])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault()
        scrollPrev()
      }
      if (event.key === "ArrowRight") {
        event.preventDefault()
        scrollNext()
      }
    },
    [scrollPrev, scrollNext]
  )

  React.useEffect(() => {
    if (!api || !setApi) return
    setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
    if (!api) return

    onSelect(api)

    api.on("reInit", onSelect)
    api.on("select", onSelect)

    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api, onSelect])

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api,
        opts,
        plugins,
        orientation,
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
        scrollDirection,
        autoHeight,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

/* ------------------------------ CONTENT ------------------------------ */

function CarouselContent({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) {
  const { carouselRef, orientation, api, autoHeight } = useCarousel()
  const [contentHeight, setContentHeight] = React.useState<number | undefined>(undefined)

  React.useEffect(() => {
    if (!autoHeight || !api) return

    const updateHeight = () => {
      const slideNodes = api.slideNodes()
      const currentSnap = api.selectedScrollSnap()
      const activeSlide = slideNodes[currentSnap]
      if (activeSlide) {
        setContentHeight(activeSlide.getBoundingClientRect().height)
      }
    }

    updateHeight()
    api.on("select", updateHeight)
    api.on("reInit", updateHeight)

    window.addEventListener("resize", updateHeight)

    return () => {
      api.off("select", updateHeight)
      api.off("reInit", updateHeight)
      window.removeEventListener("resize", updateHeight)
    }
  }, [api, autoHeight])

  return (
    <div
      ref={carouselRef}
      className={cn("overflow-hidden", autoHeight && "transition-[height] duration-300 ease-in-out")}
      style={{
        ...(autoHeight && contentHeight ? { height: `${contentHeight}px` } : {}),
        ...style,
      }}
      data-slot="content"
    >
      <div
        className={cn(
          "flex",
          autoHeight ? "items-start" : "",
          orientation === "horizontal" ? "" : "flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
}

/* ------------------------------ ITEM ------------------------------ */

function CarouselItem({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { orientation, api, scrollDirection } = useCarousel()
  const itemRef = React.useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = React.useState(false)
  const [isPreloaderDone, setIsPreloaderDone] = React.useState(false)

  React.useEffect(() => {
    if (typeof document !== "undefined" && document.documentElement.getAttribute("data-loaded") === "true") {
      setIsPreloaderDone(true)
      return
    }

    const handleComplete = () => setIsPreloaderDone(true)
    window.addEventListener("preloaderComplete", handleComplete)
    return () => window.removeEventListener("preloaderComplete", handleComplete)
  }, [])

  React.useEffect(() => {
    if (!api || !itemRef.current) return

    const updateActive = () => {
      if (!itemRef.current || !itemRef.current.parentElement) return
      const parent = itemRef.current.parentElement
      const index = Array.from(parent.children).indexOf(itemRef.current)
      setIsActive(api.selectedScrollSnap() === index)
    }

    updateActive()

    api.on("select", updateActive)
    api.on("reInit", updateActive)

    return () => {
      api.off("select", updateActive)
      api.off("reInit", updateActive)
    }
  }, [api])

  const showActive = isActive && isPreloaderDone

  return (
    <div
      ref={itemRef}
      role="group"
      aria-roledescription="slide"
      aria-selected={showActive}
      data-active={showActive ? "" : undefined}
      data-direction={scrollDirection}
      className={cn(
        "group/slide min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
}

/* ------------------------------ BUTTONS ------------------------------ */

function CarouselPrevious({
  className,
  size = "default",
  variant = "outline-primary",
  ...props
}: ButtonProps) {
  const { scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      variant={variant}
      size={size}
      onlyIcon
      className={cn(className)}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
      icon={<ArrowLeft />}
    >
    </Button>
  )
}

function CarouselNext({
  className,
  size = "default",
  variant = "outline-primary",
  ...props
}: ButtonProps) {
  const { scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      variant={variant}
      size={size}
      onlyIcon
      className={cn(className)}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
      icon={<ArrowRight />}
    >
    </Button>
  )
}

/* ------------------------------ DOTS ------------------------------ */

type CarouselDotsProps = React.ComponentProps<"div"> & {
  dotClassName?: string
  activeDotClassName?: string
}

function CarouselDots({
  className,
  dotClassName,
  activeDotClassName,
  ...props
}: CarouselDotsProps) {
  const { api } = useCarousel()

  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])

  React.useEffect(() => {
    if (!api) return

    const onInit = () => {
      setScrollSnaps(api.scrollSnapList())
      setSelectedIndex(api.selectedScrollSnap())
    }

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap())
    }

    onInit()

    api.on("reInit", onInit)
    api.on("select", onSelect)

    return () => {
      api.off("reInit", onInit)
      api.off("select", onSelect)
    }
  }, [api])

  if (!scrollSnaps.length) return null

  return (
    <div className={cn("flex justify-center items-center gap-1.5", className)} {...props}>
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => api?.scrollTo(index)}
          aria-current={selectedIndex === index}
          className={cn(
            "h-1 w-4 sm:w-7.5 bg-primary/60 transition-all",
            dotClassName,
            selectedIndex === index &&
            cn("bg-primary", activeDotClassName)
          )}
        />
      ))}
    </div>
  )
}

type CarouselScrollbarProps = React.ComponentProps<"div"> & {
  thumbClassName?: string
}

function CarouselScrollbar({
  className,
  thumbClassName,
  ...props
}: CarouselScrollbarProps) {
  const { api } = useCarousel()

  const trackRef = React.useRef<HTMLDivElement>(null)

  const [progress, setProgress] = React.useState(0)
  const [thumbWidth, setThumbWidth] = React.useState(20)

  React.useEffect(() => {
    if (!api) return

    const update = () => {
      const snaps = api.scrollSnapList()

      const width =
        snaps.length > 1 ? 100 / snaps.length : 100

      setThumbWidth(width)
      setProgress(api.scrollProgress())
    }

    update()

    api.on("scroll", update)
    api.on("select", update)
    api.on("reInit", update)

    return () => {
      api.off("scroll", update)
      api.off("select", update)
      api.off("reInit", update)
    }
  }, [api])

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!trackRef.current || !api) return

    const rect = trackRef.current.getBoundingClientRect()

    const move = (clientX: number) => {
      const x = clientX - rect.left
      const pct = Math.min(1, Math.max(0, x / rect.width))
      api.scrollTo(
        Math.round((api.scrollSnapList().length - 1) * pct)
      )
    }

    move(e.clientX)

    const handleMove = (event: PointerEvent) => move(event.clientX)

    const handleUp = () => {
      window.removeEventListener("pointermove", handleMove)
      window.removeEventListener("pointerup", handleUp)
    }

    window.addEventListener("pointermove", handleMove)
    window.addEventListener("pointerup", handleUp)
  }

  return (
    <div
      ref={trackRef}
      onPointerDown={handlePointerDown}
      className={cn(
        "relative mt-4 h-1.5 w-full cursor-pointer rounded-full bg-muted",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "absolute top-0 left-0 h-full rounded-full bg-primary transition-transform",
          thumbClassName
        )}
        style={{
          width: `${thumbWidth}%`,
          transform: `translateX(${progress * (100 - thumbWidth)}%)`,
        }}
      />
    </div>
  )
}

type CarouselProgressProps = React.ComponentProps<"div"> & {
  indicatorClassName?: string
}

function CarouselProgress({
  className,
  indicatorClassName,
  ...props
}: CarouselProgressProps) {
  const { api } = useCarousel()

  const indicatorRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!api) return

    const update = () => {
      if (!indicatorRef.current) return

      const total = api.scrollSnapList().length
      const scrollProgress = Math.max(0, Math.min(1, api.scrollProgress()))
      const progress = total <= 1 ? 1 : scrollProgress * ((total - 1) / total) + 1 / total

      indicatorRef.current.style.transform = `scaleX(${progress})`
    }

    update()

    api.on("scroll", update)
    api.on("select", update)
    api.on("reInit", update)

    return () => {
      api.off("scroll", update)
      api.off("select", update)
      api.off("reInit", update)
    }
  }, [api])

  return (
    <div
      className={cn(
        "relative h-1.5 w-full overflow-hidden rounded-full bg-muted",
        className
      )}
      {...props}
    >
      <div
        ref={indicatorRef}
        className={cn(
          "absolute inset-0 origin-left bg-primary transition ease-in-out",
          indicatorClassName
        )}
        style={{
          transform: "scaleX(0)",
        }}
      />
    </div>
  )
}

type CarouselNowProps = React.ComponentProps<"span"> & {
  showTotal?: boolean
  separator?: string
}

function CarouselNow({
  className,
  showTotal = false,
  separator = " / ",
  ...props
}: CarouselNowProps) {
  const { api } = useCarousel()

  const [current, setCurrent] = React.useState(1)
  const [total, setTotal] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    const update = () => {
      setCurrent(api.selectedScrollSnap() + 1)
      setTotal(api.scrollSnapList().length)
    }

    update()

    api.on("select", update)
    api.on("reInit", update)

    return () => {
      api.off("select", update)
      api.off("reInit", update)
    }
  }, [api])

  return (
    <span
      className={cn(
        "inline-flex items-center text-sm font-medium tabular-nums",
        className
      )}
      {...props}
    >
      {showTotal ? `${current}${separator}${total}` : (current > 9) ? current : `0${current}`}
    </span>
  )
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
  CarouselScrollbar,
  CarouselProgress,
  CarouselNow,
  useCarousel,
}