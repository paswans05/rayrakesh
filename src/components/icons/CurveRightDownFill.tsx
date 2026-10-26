import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const CurveRightDownFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M18.3 3h-12.6c-1.491 0-2.7 1.209-2.7 2.7v0 12.6c0 1.491 1.209 2.7 2.7 2.7v0h12.6c1.491 0 2.7-1.209 2.7-2.7v0-12.6c0-1.491-1.209-2.7-2.7-2.7v0zM17.045 14.595l-3.5 3.5c-0.127 0.126-0.302 0.204-0.495 0.204s-0.368-0.078-0.495-0.204l-3.5-3.5c-0.127-0.127-0.205-0.302-0.205-0.495 0-0.387 0.313-0.7 0.7-0.7 0.193 0 0.368 0.078 0.495 0.205v0l2.305 2.305v-6.711c-0.001-1.159-0.941-2.099-2.1-2.1h-2.8c-0.387 0-0.7-0.313-0.7-0.7s0.313-0.7 0.7-0.7h2.8c1.932 0.002 3.498 1.568 3.5 3.5v6.711l2.305-2.305c0.127-0.127 0.302-0.205 0.495-0.205 0.387 0 0.7 0.313 0.7 0.7 0 0.193-0.078 0.368-0.205 0.495v0z"></path>
      </svg>
    );
  }
);

CurveRightDownFill.displayName = 'CurveRightDownFill';
