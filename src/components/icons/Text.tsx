import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Text = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M20 3h-16c-0.552 0-1 0.448-1 1v0 3c0 0.552 0.448 1 1 1s1-0.448 1-1v0-2h6v14h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h6c0.552 0 1-0.448 1-1s-0.448-1-1-1v0h-2v-14h6v2c0 0.552 0.448 1 1 1s1-0.448 1-1v0-3c0-0.552-0.448-1-1-1v0z"></path>
      </svg>
    );
  }
);

Text.displayName = 'Text';
