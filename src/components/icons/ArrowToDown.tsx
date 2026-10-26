import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ArrowToDown = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M21 20c0 0.552-0.448 1-1 1v0h-16c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h16c0.552 0 1 0.448 1 1v0zM11.068 15.338c0.138 0.389 0.503 0.662 0.932 0.662s0.794-0.273 0.93-0.655l0.002-0.007 5.775-5.775c0.175-0.18 0.282-0.425 0.282-0.696 0-0.552-0.448-1-1-1-0.271 0-0.516 0.108-0.696 0.282l0-0-4.293 4.293v-8.441c0-0.552-0.448-1-1-1s-1 0.448-1 1v0 8.441l-4.293-4.293c-0.18-0.175-0.425-0.282-0.696-0.282-0.552 0-1 0.448-1 1 0 0.271 0.108 0.516 0.282 0.697l-0-0z"></path>
      </svg>
    );
  }
);

ArrowToDown.displayName = 'ArrowToDown';
