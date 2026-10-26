import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const MsgFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M19 2h-14c-1.662 0.023-3 1.376-3 3.041 0 0.012 0 0.024 0 0.035l-0-0.002v15.926c0 0.552 0.448 1 1 1 0.276 0 0.526-0.112 0.707-0.293l3.707-3.707h11.586c1.662-0.023 3-1.376 3-3.041 0-0.012-0-0.024-0-0.035l0 0.002v-9.852c0-0.010 0-0.022 0-0.033 0-1.665-1.338-3.018-2.998-3.041l-0.002-0z"></path>
      </svg>
    );
  }
);

MsgFill.displayName = 'MsgFill';
