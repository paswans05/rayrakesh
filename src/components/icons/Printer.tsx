import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Printer = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M19.2 8.3h-0.8v-5.3c0-0.552-0.448-1-1-1v0h-10.8c-0.552 0-1 0.448-1 1v0 5.3h-0.8c-1.546 0.002-2.798 1.254-2.8 2.8v4.5c0.002 1.546 1.254 2.798 2.8 2.8h0.8v1.6c0.002 1.104 0.896 1.998 2 2h8.8c1.104-0.002 1.998-0.896 2-2v-1.6h0.8c1.546-0.002 2.798-1.254 2.8-2.8v-4.5c-0.002-1.546-1.254-2.798-2.8-2.8h-0zM7.6 4h8.8v4.3h-8.8zM16.4 20h-8.8v-5.2h8.8zM20 15.6c-0 0.442-0.358 0.8-0.8 0.801h-0.8v-1.601c-0.002-1.104-0.896-1.998-2-2h-8.8c-1.104 0.002-1.998 0.896-2 2v1.6h-0.8c-0.442-0.001-0.799-0.358-0.8-0.8v-4.5c0-0.442 0.358-0.8 0.8-0.8h14.4c0.442 0 0.8 0.358 0.8 0.8v0z"></path>
      </svg>
    );
  }
);

Printer.displayName = 'Printer';
