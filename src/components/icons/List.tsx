import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const List = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M20.125 19h-10.5c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h10.5c0.552 0 1 0.448 1 1s-0.448 1-1 1v0zM20.125 13h-10.5c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h10.5c0.552 0 1 0.448 1 1s-0.448 1-1 1v0zM20.125 7h-10.5c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h10.5c0.552 0 1 0.448 1 1s-0.448 1-1 1v0zM4.75 7.5c0.828 0 1.5-0.672 1.5-1.5s-0.672-1.5-1.5-1.5c-0.828 0-1.5 0.672-1.5 1.5v0c0.001 0.828 0.672 1.499 1.5 1.5h0zM4.75 10.5c-0.828 0-1.5 0.672-1.5 1.5s0.672 1.5 1.5 1.5c0.828 0 1.5-0.672 1.5-1.5v0c-0.001-0.828-0.672-1.499-1.5-1.5h-0zM4.75 16.5c-0.828 0-1.5 0.672-1.5 1.5s0.672 1.5 1.5 1.5c0.828 0 1.5-0.672 1.5-1.5v0c-0.001-0.828-0.672-1.499-1.5-1.5h-0z"></path>
      </svg>
    );
  }
);

List.displayName = 'List';
