import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const BookRead = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M22 2h-6c-1.636 0.005-3.086 0.797-3.99 2.017l-0.010 0.013c-0.914-1.234-2.364-2.026-3.999-2.031h-6.001c-0.552 0-1 0.448-1 1v0 15c0 0.552 0.448 1 1 1v0h7c1.104 0.002 1.998 0.896 2 2v0c0 0.552 0.448 1 1 1s1-0.448 1-1v0c0.002-1.104 0.896-1.998 2-2h7c0.552 0 1-0.448 1-1v0-15c0-0.552-0.448-1-1-1v0zM11 17.537c-0.572-0.338-1.26-0.537-1.995-0.537-0.002 0-0.004 0-0.006 0h-6v-13h5c1.656 0.002 2.998 1.344 3 3v0zM21 17h-6c-0.002 0-0.003 0-0.005 0-0.735 0-1.423 0.199-2.013 0.547l0.019-0.010v-10.537c0.002-1.656 1.344-2.998 3-3h5z"></path>
      </svg>
    );
  }
);

BookRead.displayName = 'BookRead';
