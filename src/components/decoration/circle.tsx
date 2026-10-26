import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'

const circleVariants = cva("border-white opacity-3 rounded-full", {
  variants: {
    size: {
      default: "size-100 border-[5rem]",
      huge: "size-297 border-[10.25rem]",
      tiny: "size-33 border-4",
      lg: "size-400 border-[15.25rem]",
    },
  },
  defaultVariants: {
    size: "default",  
  }
});

export interface CircleProps extends
    VariantProps<typeof circleVariants> {
  onClose?: () => void,
  className?: string
}

export default function Circle({ size, onClose, className }: CircleProps) {
  return (
    <div className={cn(circleVariants({ size }), className)} onClick={onClose} aria-hidden="true" />
  )
}
