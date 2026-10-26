import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const RequestFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M17.625 7.5h-4.875v7.189l2.47-2.469c0.134-0.125 0.313-0.201 0.511-0.201 0.414 0 0.75 0.336 0.75 0.75 0 0.198-0.077 0.378-0.202 0.512l0-0-3.75 3.75c-0.136 0.136-0.323 0.219-0.53 0.219s-0.394-0.084-0.53-0.219v0l-3.75-3.75c-0.125-0.134-0.201-0.313-0.201-0.511 0-0.414 0.336-0.75 0.75-0.75 0.198 0 0.378 0.077 0.512 0.202l-0-0 2.47 2.469v-7.189h-4.875c-1.449 0.002-2.623 1.176-2.625 2.625v9.75c0.002 1.449 1.176 2.623 2.625 2.625h11.25c1.449-0.002 2.623-1.176 2.625-2.625v-9.75c-0.002-1.449-1.176-2.623-2.625-2.625h-0zM12.75 2.25c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 5.25h1.5z"></path>
      </svg>
    );
  }
);

RequestFill.displayName = 'RequestFill';
