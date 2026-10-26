import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Notes = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M13 18h-10c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h10c0.552 0 1 0.448 1 1s-0.448 1-1 1v0zM21 13h-18c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h18c0.552 0 1 0.448 1 1s-0.448 1-1 1v0zM21 8h-18c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h18c0.552 0 1 0.448 1 1s-0.448 1-1 1v0z"></path>
      </svg>
    );
  }
);

Notes.displayName = 'Notes';
