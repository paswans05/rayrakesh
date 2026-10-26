import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Heading = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M20 19h-1v-14h1c0.552 0 1-0.448 1-1s-0.448-1-1-1v0h-4c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h1v6h-10v-6h1c0.552 0 1-0.448 1-1s-0.448-1-1-1v0h-4c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h1v14h-1c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h4c0.552 0 1-0.448 1-1s-0.448-1-1-1v0h-1v-6h10v6h-1c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h4c0.552 0 1-0.448 1-1s-0.448-1-1-1v0z"></path>
      </svg>
    );
  }
);

Heading.displayName = 'Heading';
