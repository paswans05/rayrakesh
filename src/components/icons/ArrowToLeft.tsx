import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ArrowToLeft = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M5 4v16c0 0.552-0.448 1-1 1s-1-0.448-1-1v0-16c0-0.552 0.448-1 1-1s1 0.448 1 1v0zM20 11h-8.941l4.293-4.293c0.175-0.18 0.282-0.425 0.282-0.696 0-0.552-0.448-1-1-1-0.271 0-0.516 0.108-0.697 0.282l-6 6c-0.181 0.181-0.293 0.431-0.293 0.707s0.112 0.526 0.293 0.707l6 6c0.18 0.175 0.425 0.282 0.696 0.282 0.552 0 1-0.448 1-1 0-0.271-0.108-0.516-0.282-0.696l0 0-4.293-4.293h8.941c0.552 0 1-0.448 1-1s-0.448-1-1-1v0z"></path>
      </svg>
    );
  }
);

ArrowToLeft.displayName = 'ArrowToLeft';
