import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const CurveRightUpFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M18.3 3h-12.6c-1.491 0-2.7 1.209-2.7 2.7v0 12.6c0 1.491 1.209 2.7 2.7 2.7v0h12.6c1.491 0 2.7-1.209 2.7-2.7v0-12.6c0-1.491-1.209-2.7-2.7-2.7v0zM16.546 10.591c-0 0-0.001 0-0.001 0-0.189 0-0.36-0.075-0.486-0.197l-2.305-2.305v6.711c-0.003 1.932-1.568 3.498-3.5 3.5h-2.8c-0.387 0-0.7-0.313-0.7-0.7s0.313-0.7 0.7-0.7h2.8c1.159-0.002 2.098-0.941 2.1-2.1v-6.712l-2.306 2.305c-0.127 0.127-0.302 0.205-0.495 0.205-0.387 0-0.7-0.313-0.7-0.7 0-0.193 0.078-0.368 0.205-0.495v0l3.5-3.5c0.127-0.126 0.302-0.204 0.496-0.204s0.369 0.078 0.496 0.204l3.5 3.5c0.122 0.126 0.197 0.297 0.197 0.487 0 0.387-0.313 0.7-0.7 0.7-0 0-0 0-0 0v0z"></path>
      </svg>
    );
  }
);

CurveRightUpFill.displayName = 'CurveRightUpFill';
