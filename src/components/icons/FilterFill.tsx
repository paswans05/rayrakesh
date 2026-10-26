import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const FilterFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M21.806 3.603c-0.158-0.357-0.509-0.602-0.917-0.603h-17.777c-0 0-0 0-0 0-0.552 0-1 0.448-1 1 0 0.265 0.103 0.506 0.271 0.685l-0-0.001 7.618 8.12v5.418c0 0.297 0.129 0.563 0.334 0.747l0.001 0.001 2 1.778c0.176 0.157 0.409 0.253 0.665 0.253 0.552 0 1-0.448 1-1 0-0 0-0 0-0v0-7.196l7.618-8.12c0.168-0.178 0.27-0.419 0.27-0.684 0-0.144-0.030-0.281-0.085-0.404l0.003 0.006z"></path>
      </svg>
    );
  }
);

FilterFill.displayName = 'FilterFill';
