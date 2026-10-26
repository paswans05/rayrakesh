import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const DotSq = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M9.5 9h5c0.276 0 0.5 0.224 0.5 0.5v5c0 0.276-0.224 0.5-0.5 0.5h-5c-0.276 0-0.5-0.224-0.5-0.5v-5c0-0.276 0.224-0.5 0.5-0.5z"></path>
      </svg>
    );
  }
);

DotSq.displayName = 'DotSq';
