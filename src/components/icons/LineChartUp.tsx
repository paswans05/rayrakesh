import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const LineChartUp = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 21c-0.552 0-1-0.448-1-1v0-10c0-0.552 0.448-1 1-1s1 0.448 1 1v0 10c0 0.552-0.448 1-1 1v0zM20 20v-16c0-0.552-0.448-1-1-1s-1 0.448-1 1v0 16c0 0.552 0.448 1 1 1s1-0.448 1-1v0zM6 20v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1v0 4c0 0.552 0.448 1 1 1s1-0.448 1-1v0z"></path>
      </svg>
    );
  }
);

LineChartUp.displayName = 'LineChartUp';
