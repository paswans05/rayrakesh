import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const NavigateUp = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M19 22.5c-0.174-0-0.338-0.045-0.481-0.123l0.005 0.003-6.524-3.532-6.524 3.532c-0.138 0.076-0.302 0.121-0.476 0.121-0.552 0-1-0.448-1-1 0-0.131 0.025-0.255 0.071-0.37l-0.002 0.007 7-18c0.149-0.376 0.51-0.638 0.932-0.638s0.783 0.261 0.93 0.631l0.002 0.007 7 18c0.043 0.107 0.068 0.232 0.068 0.362 0 0.552-0.448 1-1 1v0zM12 16.711c0 0 0 0 0 0 0.174 0 0.338 0.044 0.481 0.123l-0.005-0.003 4.605 2.493-5.081-13.065-5.081 13.065 4.605-2.493c0.138-0.076 0.302-0.12 0.476-0.12v0z"></path>
      </svg>
    );
  }
);

NavigateUp.displayName = 'NavigateUp';
