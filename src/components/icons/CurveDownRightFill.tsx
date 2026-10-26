import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const CurveDownRightFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M18.3 3h-12.6c-1.491 0-2.7 1.209-2.7 2.7v0 12.6c0 1.491 1.209 2.7 2.7 2.7v0h12.6c1.491 0 2.7-1.209 2.7-2.7v0-12.6c0-1.491-1.209-2.7-2.7-2.7v0zM18.247 13.313l0.001-0.001-0.001 0.005c-0.037 0.087-0.087 0.161-0.15 0.223l-3.5 3.5c-0.127 0.127-0.302 0.205-0.495 0.205-0.387 0-0.7-0.313-0.7-0.7 0-0.193 0.078-0.368 0.205-0.495l2.305-2.305h-6.711c-1.932-0.003-3.498-1.568-3.5-3.5v-2.8c0-0.387 0.313-0.7 0.7-0.7s0.7 0.313 0.7 0.7v0 2.8c0.002 1.159 0.941 2.098 2.1 2.1h6.711l-2.305-2.305c-0.127-0.127-0.205-0.302-0.205-0.495 0-0.387 0.313-0.7 0.7-0.7 0.193 0 0.368 0.078 0.495 0.205v0l3.5 3.5c0.126 0.127 0.204 0.302 0.204 0.496 0 0 0 0 0 0v0c0 0 0 0.001 0 0.001 0 0.096-0.020 0.188-0.055 0.271l0.002-0.004z"></path>
      </svg>
    );
  }
);

CurveDownRightFill.displayName = 'CurveDownRightFill';
