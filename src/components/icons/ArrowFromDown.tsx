import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ArrowFromDown = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M21 4c0 0.552-0.448 1-1 1v0h-16c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h16c0.552 0 1 0.448 1 1v0zM17.293 13.293l-4.293 4.293v-8.586c0-0.552-0.448-1-1-1s-1 0.448-1 1v0 8.586l-4.293-4.293c-0.18-0.174-0.425-0.281-0.695-0.281-0.552 0-1 0.448-1 1 0 0.27 0.107 0.515 0.281 0.695l5.999 5.999c0.181 0.18 0.432 0.292 0.708 0.292s0.526-0.112 0.708-0.292l5.999-5.999c0.174-0.18 0.281-0.425 0.281-0.695 0-0.552-0.448-1-1-1-0.27 0-0.515 0.107-0.695 0.281l0-0z"></path>
      </svg>
    );
  }
);

ArrowFromDown.displayName = 'ArrowFromDown';
