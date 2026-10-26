import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Done = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M19 20h-14c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h14c0.552 0 1 0.448 1 1s-0.448 1-1 1v0zM9.669 14.993l10-9c0.21-0.184 0.342-0.453 0.342-0.753 0-0.552-0.448-1-1-1-0.263 0-0.502 0.101-0.681 0.267l0.001-0.001-9.256 8.33-3.331-3.709c-0.184-0.208-0.452-0.339-0.75-0.339-0.552 0-1 0.448-1 1 0 0.261 0.1 0.498 0.263 0.676l-0.001-0.001 4 4.454c0.173 0.191 0.416 0.315 0.689 0.331l0.003 0c0.018 0.001 0.035 0.001 0.053 0.001 0 0 0 0 0.001 0 0.257 0 0.492-0.097 0.669-0.258l-0.001 0.001z"></path>
      </svg>
    );
  }
);

Done.displayName = 'Done';
