import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const DashboardFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M22 4v7c-0.002 1.104-0.896 1.998-2 2h-5c-1.104-0.002-1.998-0.896-2-2v-7c0.002-1.104 0.896-1.998 2-2h5c1.104 0.002 1.998 0.896 2 2v0zM9 2h-5c-1.104 0.002-1.998 0.896-2 2v4c0.002 1.104 0.896 1.998 2 2h5c1.104-0.002 1.998-0.896 2-2v-4c-0.002-1.104-0.896-1.998-2-2h-0zM20 15h-5c-1.104 0.002-1.998 0.896-2 2v3c0.002 1.104 0.896 1.998 2 2h5c1.104-0.002 1.998-0.896 2-2v-3c-0.002-1.104-0.896-1.998-2-2h-0zM9 12h-5c-1.104 0.002-1.998 0.896-2 2v6c0.002 1.104 0.896 1.998 2 2h5c1.104-0.002 1.998-0.896 2-2v-6c-0.002-1.104-0.896-1.998-2-2h-0z"></path>
      </svg>
    );
  }
);

DashboardFill.displayName = 'DashboardFill';
