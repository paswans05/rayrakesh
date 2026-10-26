import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Text2 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M11 15c-0.552 0-1-0.448-1-1v0-1h-2v5h1c0.552 0 1 0.448 1 1s-0.448 1-1 1v0h-4c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h1v-5h-2v1c0 0.552-0.448 1-1 1s-1-0.448-1-1v0-2c0-0.552 0.448-1 1-1v0h8c0.552 0 1 0.448 1 1v0 2c0 0.552-0.448 1-1 1v0zM21 4h-12c-0.552 0-1 0.448-1 1v0 3c0 0.552 0.448 1 1 1s1-0.448 1-1v0-2h4v12h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h6c0.552 0 1-0.448 1-1s-0.448-1-1-1v0h-2v-12h4v2c0 0.552 0.448 1 1 1s1-0.448 1-1v0-3c0-0.552-0.448-1-1-1v0z"></path>
      </svg>
    );
  }
);

Text2.displayName = 'Text2';
