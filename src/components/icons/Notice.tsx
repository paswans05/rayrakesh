import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Notice = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M18.5 3h-13c-1.932 0.002-3.498 1.568-3.5 3.5v8c0.002 1.932 1.568 3.498 3.5 3.5h2.086l2.707 2.707c0.181 0.181 0.431 0.293 0.707 0.293s0.526-0.112 0.707-0.293l2.707-2.707h4.086c1.932-0.002 3.498-1.568 3.5-3.5v-8c-0.002-1.932-1.568-3.498-3.5-3.5h-0zM20 14.5c-0.001 0.828-0.672 1.499-1.5 1.5h-4.5c-0.276 0-0.526 0.112-0.707 0.293l-2.293 2.293-2.293-2.293c-0.181-0.181-0.431-0.293-0.707-0.293h-2.5c-0.828-0.001-1.499-0.672-1.5-1.5v-8c0.001-0.828 0.672-1.499 1.5-1.5h13c0.828 0.001 1.499 0.672 1.5 1.5v0z"></path>
<path d="M7 9h4c0.552 0 1-0.448 1-1s-0.448-1-1-1v0h-4c-0.552 0-1 0.448-1 1s0.448 1 1 1v0z"></path>
<path d="M15 11h-8c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h8c0.552 0 1-0.448 1-1s-0.448-1-1-1v0z"></path>
      </svg>
    );
  }
);

Notice.displayName = 'Notice';
