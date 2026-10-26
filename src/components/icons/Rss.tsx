import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Rss = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M13 21c-0.552 0-1-0.448-1-1v0c-0.005-4.416-3.584-7.995-8-8h-0.001c-0.552 0-1-0.448-1-1s0.448-1 1-1v0c5.52 0.006 9.994 4.48 10 9.999v0.001c0 0.552-0.448 1-1 1v0zM21 20c-0.011-9.384-7.616-16.989-16.999-17h-0.001c-0.552 0-1 0.448-1 1s0.448 1 1 1v0c8.28 0.009 14.991 6.72 15 14.999v0.001c0 0.552 0.448 1 1 1s1-0.448 1-1v0zM7 19c0-1.105-0.895-2-2-2s-2 0.895-2 2c0 1.105 0.895 2 2 2v0c1.104-0.001 1.999-0.896 2-2v-0z"></path>
      </svg>
    );
  }
);

Rss.displayName = 'Rss';
