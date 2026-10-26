import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ChartUp = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M23 21c0 0.552-0.448 1-1 1v0h-20c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h20c0.552 0 1 0.448 1 1v0zM3 19c0.552 0 1-0.448 1-1v0-3h2v3c0 0.552 0.448 1 1 1s1-0.448 1-1v0-3c-0.002-1.104-0.896-1.998-2-2h-2c-1.104 0.002-1.998 0.896-2 2v3c0 0.552 0.448 1 1 1v0zM10 19c0.552 0 1-0.448 1-1v0-9h2v9c0 0.552 0.448 1 1 1s1-0.448 1-1v0-9c-0.002-1.104-0.896-1.998-2-2h-2c-1.104 0.002-1.998 0.896-2 2v9c0 0.552 0.448 1 1 1v0zM17 19c0.552 0 1-0.448 1-1v0-14h2v14c0 0.552 0.448 1 1 1s1-0.448 1-1v0-14c-0.002-1.104-0.896-1.998-2-2h-2c-1.104 0.002-1.998 0.896-2 2v14c0 0.552 0.448 1 1 1v0z"></path>
      </svg>
    );
  }
);

ChartUp.displayName = 'ChartUp';
