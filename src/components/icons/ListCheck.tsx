import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ListCheck = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M9.777 21c-0.218-0-0.42-0.070-0.584-0.189l0.003 0.002-6.222-4.444c-0.243-0.184-0.398-0.473-0.398-0.798 0-0.552 0.448-1 1-1 0.209 0 0.403 0.064 0.563 0.174l-0.003-0.002 5.382 3.844 10.094-15.141c0.182-0.27 0.486-0.445 0.832-0.445 0.552 0 1 0.448 1 1 0 0.206-0.063 0.398-0.17 0.558l0.002-0.004-10.667 16c-0.149 0.221-0.378 0.377-0.645 0.428l-0.006 0.001c-0.054 0.010-0.117 0.016-0.18 0.017h-0zM15.5 5c0-0.552-0.448-1-1-1v0h-11c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h11c0.552 0 1-0.448 1-1v0zM10.5 10c0-0.552-0.448-1-1-1v0h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h6c0.552 0 1-0.448 1-1v0z"></path>
      </svg>
    );
  }
);

ListCheck.displayName = 'ListCheck';
