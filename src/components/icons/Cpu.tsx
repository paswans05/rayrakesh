import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Cpu = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M14 9h-4c-0.552 0-1 0.448-1 1v0 4c0 0.552 0.448 1 1 1v0h4c0.552 0 1-0.448 1-1v0-4c0-0.552-0.448-1-1-1v0zM13 13h-2v-2h2zM21 13h-2v-3h2c0.552 0 1-0.448 1-1s-0.448-1-1-1v0h-2c-0.002-1.656-1.344-2.998-3-3h-0v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1v0 2h-4v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1v0 2c-1.656 0.002-2.998 1.344-3 3v0h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h2v3h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h2v1c0.002 1.656 1.344 2.998 3 3h0v2c0 0.552 0.448 1 1 1s1-0.448 1-1v0-2h4v2c0 0.552 0.448 1 1 1s1-0.448 1-1v0-2c1.656-0.002 2.998-1.344 3-3v-1h2c0.552 0 1-0.448 1-1s-0.448-1-1-1v0zM17 16c-0 0.552-0.448 1-1 1h-8c-0.552-0-1-0.448-1-1v-8c0.001-0.552 0.448-0.999 1-1h8c0.552 0.001 0.999 0.448 1 1v0z"></path>
      </svg>
    );
  }
);

Cpu.displayName = 'Cpu';
