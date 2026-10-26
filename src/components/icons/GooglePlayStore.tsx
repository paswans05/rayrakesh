import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const GooglePlayStore = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M13.859 11.998l-10.025 10.002c-0.506-0.253-0.848-0.768-0.848-1.363 0-0.006 0-0.012 0-0.018v0.001-17.242c-0-0.005-0-0.011-0-0.017 0-0.594 0.342-1.109 0.839-1.359l0.009-0.004zM6.084 2.508l10.971 6.298-2.348 2.348zM14.706 12.85l2.348 2.348-10.971 6.298zM20.493 13.19l-2.348 1.332-2.567-2.52 2.567-2.52 2.301 1.332c0.348 0.29 0.569 0.723 0.569 1.208 0 0.463-0.201 0.879-0.52 1.166l-0.001 0.001z"></path>
      </svg>
    );
  }
);

GooglePlayStore.displayName = 'GooglePlayStore';
