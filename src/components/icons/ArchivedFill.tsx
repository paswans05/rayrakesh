import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ArchivedFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M20 3h-16c-1.104 0.001-1.999 0.896-2 2v2c0.001 1.104 0.896 1.999 2 2h0v9c0.002 1.656 1.344 2.998 3 3h10c1.656-0.002 2.998-1.344 3-3v-9c1.104-0.001 1.999-0.896 2-2v-2c-0.001-1.104-0.896-1.999-2-2h-0zM14 13h-4c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h4c0.552 0 1 0.448 1 1s-0.448 1-1 1v0zM20 7h-16v-2h16z"></path>
      </svg>
    );
  }
);

ArchivedFill.displayName = 'ArchivedFill';
