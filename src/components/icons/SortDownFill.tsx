import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SortDownFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M18.924 13.617c-0.154-0.365-0.51-0.617-0.924-0.617h-12c-0.552 0-1 0.448-1 1 0 0.276 0.112 0.526 0.293 0.707l6 6c0.181 0.181 0.431 0.293 0.707 0.293s0.526-0.112 0.707-0.293l6-6c0.181-0.181 0.293-0.431 0.293-0.707 0-0.138-0.028-0.27-0.079-0.39l0.002 0.007z"></path>
      </svg>
    );
  }
);

SortDownFill.displayName = 'SortDownFill';
