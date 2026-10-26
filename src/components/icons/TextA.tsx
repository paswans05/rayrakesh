import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const TextA = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M21 19.513h-1.346l-6.738-15.401c-0.159-0.356-0.509-0.599-0.916-0.599s-0.757 0.243-0.913 0.592l-0.003 0.006-6.738 15.401h-1.346c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h4c0.552 0 1-0.448 1-1s-0.448-1-1-1v0h-0.471l1.537-3.513h7.868l1.537 3.513h-0.471c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h4c0.552 0 1-0.448 1-1s-0.448-1-1-1v0zM8.941 14l3.059-6.992 3.059 6.992z"></path>
      </svg>
    );
  }
);

TextA.displayName = 'TextA';
