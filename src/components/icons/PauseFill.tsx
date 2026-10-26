import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const PauseFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M10.5 8v8c-0.001 1.104-0.896 1.999-2 2h-1c-1.104-0.001-1.999-0.896-2-2v-8c0.001-1.104 0.896-1.999 2-2h1c1.104 0.001 1.999 0.896 2 2v0zM16.5 6h-1c-1.104 0.001-1.999 0.896-2 2v8c0.001 1.104 0.896 1.999 2 2h1c1.104-0.001 1.999-0.896 2-2v-8c-0.001-1.104-0.896-1.999-2-2h-0z"></path>
      </svg>
    );
  }
);

PauseFill.displayName = 'PauseFill';
