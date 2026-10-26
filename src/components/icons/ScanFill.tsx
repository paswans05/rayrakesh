import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ScanFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M15 7h2v2h-2zM7 17h2v-2h-2zM7 9h2v-2h-2zM21 5.777v12.445c-0.002 1.533-1.244 2.775-2.777 2.777h-12.446c-1.533-0.002-2.775-1.244-2.777-2.777v-12.446c0.002-1.533 1.244-2.775 2.777-2.777h12.446c1.533 0.002 2.775 1.244 2.777 2.777v0zM11 14c0-0.552-0.448-1-1-1v0h-4c-0.552 0-1 0.448-1 1v0 4c0 0.552 0.448 1 1 1v0h4c0.552 0 1-0.448 1-1v0zM11 6c0-0.552-0.448-1-1-1v0h-4c-0.552 0-1 0.448-1 1v0 4c0 0.552 0.448 1 1 1v0h4c0.552 0 1-0.448 1-1v0zM15 13h-2v4h2zM19 17h-3v2h3zM19 13h-3v2h1v1h2zM19 6c0-0.552-0.448-1-1-1v0h-4c-0.552 0-1 0.448-1 1v0 4c0 0.552 0.448 1 1 1v0h4c0.552 0 1-0.448 1-1v0z"></path>
      </svg>
    );
  }
);

ScanFill.displayName = 'ScanFill';
