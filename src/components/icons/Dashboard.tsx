import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Dashboard = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M20 13h-5c-1.104-0.002-1.998-0.896-2-2v-7c0.002-1.104 0.896-1.998 2-2h5c1.104 0.002 1.998 0.896 2 2v7c-0.002 1.104-0.896 1.998-2 2h-0zM15 4v7h5.002l-0.002-7zM9 10h-5c-1.104-0.002-1.998-0.896-2-2v-4c0.002-1.104 0.896-1.998 2-2h5c1.104 0.002 1.998 0.896 2 2v4c-0.002 1.104-0.896 1.998-2 2h-0zM4 4v4h5.002l-0.002-4zM20 22h-5c-1.104-0.002-1.998-0.896-2-2v-3c0.002-1.104 0.896-1.998 2-2h5c1.104 0.002 1.998 0.896 2 2v3c-0.002 1.104-0.896 1.998-2 2h-0zM15 17v3h5.002l-0.002-3zM9 22h-5c-1.104-0.002-1.998-0.896-2-2v-6c0.002-1.104 0.896-1.998 2-2h5c1.104 0.002 1.998 0.896 2 2v6c-0.002 1.104-0.896 1.998-2 2h-0zM4 14v6h5.002l-0.002-6z"></path>
      </svg>
    );
  }
);

Dashboard.displayName = 'Dashboard';
