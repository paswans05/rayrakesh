import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const TodoFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M17.5 2h-11c-1.932 0.002-3.498 1.568-3.5 3.5v13c0.002 1.932 1.568 3.498 3.5 3.5h11c1.932-0.002 3.498-1.568 3.5-3.5v-13c-0.002-1.932-1.568-3.498-3.5-3.5h-0zM8 7h3c0.552 0 1 0.448 1 1s-0.448 1-1 1v0h-3c-0.552 0-1-0.448-1-1s0.448-1 1-1v0zM16 17h-8c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h8c0.552 0 1 0.448 1 1s-0.448 1-1 1v0zM16 13h-8c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h8c0.552 0 1 0.448 1 1s-0.448 1-1 1v0z"></path>
      </svg>
    );
  }
);

TodoFill.displayName = 'TodoFill';
