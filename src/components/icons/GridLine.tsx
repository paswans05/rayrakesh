import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const GridLine = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M21 13c0.552 0 1-0.448 1-1s-0.448-1-1-1v0h-1.7v-4.3h1.7c0.552 0 1-0.448 1-1s-0.448-1-1-1v0h-1.7v-1.7c0-0.552-0.448-1-1-1s-1 0.448-1 1v0 1.7h-4.3v-1.7c0-0.552-0.448-1-1-1s-1 0.448-1 1v0 1.7h-4.3v-1.7c0-0.552-0.448-1-1-1s-1 0.448-1 1v0 1.7h-1.7c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h1.7v4.3h-1.7c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h1.7v4.3h-1.7c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h1.7v1.7c0 0.552 0.448 1 1 1s1-0.448 1-1v0-1.7h4.3v1.7c0 0.552 0.448 1 1 1s1-0.448 1-1v0-1.7h4.3v1.7c0 0.552 0.448 1 1 1s1-0.448 1-1v0-1.7h1.7c0.552 0 1-0.448 1-1s-0.448-1-1-1v0h-1.7v-4.3zM17.3 6.7v4.3h-4.3v-4.3zM6.7 6.7h4.3v4.3h-4.3zM6.7 17.3v-4.3h4.3v4.3zM17.3 17.3h-4.3v-4.3h4.3z"></path>
      </svg>
    );
  }
);

GridLine.displayName = 'GridLine';
