import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const CrosshairFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M18 13c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h3.949c-0.496-4.729-4.22-8.453-8.906-8.946l-0.043-0.004v3.949c0 0.552-0.448 1-1 1s-1-0.448-1-1v0-3.949c-4.729 0.496-8.453 4.22-8.946 8.906l-0.004 0.043h3.949c0.552 0 1 0.448 1 1s-0.448 1-1 1v0h-3.949c0.496 4.729 4.22 8.453 8.906 8.946l0.043 0.004v-3.949c0-0.552 0.448-1 1-1s1 0.448 1 1v0 3.949c4.729-0.496 8.453-4.22 8.946-8.906l0.004-0.043zM12 14c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2v0c0 1.105-0.895 2-2 2v0z"></path>
      </svg>
    );
  }
);

CrosshairFill.displayName = 'CrosshairFill';
