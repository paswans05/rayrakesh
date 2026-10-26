import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Italic = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M18.5 3h-8c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h3.057l-5.25 14h-2.807c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h8c0.552 0 1-0.448 1-1s-0.448-1-1-1v0h-3.057l5.25-14h2.807c0.552 0 1-0.448 1-1s-0.448-1-1-1v0z"></path>
      </svg>
    );
  }
);

Italic.displayName = 'Italic';
