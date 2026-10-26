import React from 'react'
import { cn } from '@/lib/utils'

function Overlay({ open, onClose, className }: { open: boolean; onClose: () => void; className?: string }) {
  return (
    <div className={cn(`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`, className)} onClick={onClose} aria-hidden="true" />
  )
}

export {Overlay}