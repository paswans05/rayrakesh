import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const VimeoFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M21 6v12c0 1.657-1.343 3-3 3v0h-12c-1.657 0-3-1.343-3-3v0-12c0-1.657 1.343-3 3-3v0h12c1.657 0 3 1.343 3 3v0zM16.552 6.439q-2.67-0.084-3.62 3.017c0.787-0.337 1.953-0.426 1.816 0.892-0.156 0.74-0.457 1.393-0.873 1.954l0.009-0.013c-1.495 2.358-1.86 1.571-2.684-3.636q-0.35-2.2-1.848-2.053c-0.884 0.080-2.298 1.527-3.781 2.829l0.603 0.779c0.289-0.242 0.622-0.446 0.983-0.597l0.026-0.009c0.836 0 1.266 2.174 2.278 5.882 0.518 1.382 1.149 2.073 1.9 2.073q1.814 0 4.436-3.407 2.537-3.261 2.624-5.139c0.076-1.671-0.546-2.531-1.868-2.571z"></path>
      </svg>
    );
  }
);

VimeoFill.displayName = 'VimeoFill';
