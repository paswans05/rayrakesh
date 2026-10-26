import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const CcFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M1 8h22v9.5c-0.002 1.932-1.568 3.498-3.5 3.5h-15c-1.932-0.002-3.498-1.568-3.5-3.5v-0zM22.95 6c-0.25-1.702-1.698-2.995-3.449-3h-15.001c-1.751 0.005-3.199 1.298-3.447 2.981l-0.002 0.019z"></path>
      </svg>
    );
  }
);

CcFill.displayName = 'CcFill';
