import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const CaretDown = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 16c-0 0-0.001 0-0.001 0-0.276 0-0.525-0.112-0.706-0.293l-6-6c-0.181-0.181-0.293-0.431-0.293-0.707 0-0.552 0.448-1 1-1h12c0.552 0 1 0.448 1 1 0 0.276-0.112 0.526-0.293 0.707l-6 6c-0.18 0.181-0.43 0.293-0.706 0.293-0 0-0.001 0-0.001 0h0zM8.414 10l3.586 3.586 3.586-3.586z"></path>
      </svg>
    );
  }
);

CaretDown.displayName = 'CaretDown';
