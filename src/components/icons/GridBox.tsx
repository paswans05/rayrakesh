import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const GridBox = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M6 1h-4c-0.552 0-1 0.448-1 1v0 4c0 0.552 0.448 1 1 1v0h4c0.552 0 1-0.448 1-1v0-4c0-0.552-0.448-1-1-1v0zM5 5h-2v-2h2zM14 1h-4c-0.552 0-1 0.448-1 1v0 4c0 0.552 0.448 1 1 1v0h4c0.552 0 1-0.448 1-1v0-4c0-0.552-0.448-1-1-1v0zM13 5h-2v-2h2zM22 1h-4c-0.552 0-1 0.448-1 1v0 4c0 0.552 0.448 1 1 1v0h4c0.552 0 1-0.448 1-1v0-4c0-0.552-0.448-1-1-1v0zM21 5h-2v-2h2zM6 9h-4c-0.552 0-1 0.448-1 1v0 4c0 0.552 0.448 1 1 1v0h4c0.552 0 1-0.448 1-1v0-4c0-0.552-0.448-1-1-1v0zM5 13h-2v-2h2zM14 9h-4c-0.552 0-1 0.448-1 1v0 4c0 0.552 0.448 1 1 1v0h4c0.552 0 1-0.448 1-1v0-4c0-0.552-0.448-1-1-1v0zM13 13h-2v-2h2zM22 9h-4c-0.552 0-1 0.448-1 1v0 4c0 0.552 0.448 1 1 1v0h4c0.552 0 1-0.448 1-1v0-4c0-0.552-0.448-1-1-1v0zM21 13h-2v-2h2zM6 17h-4c-0.552 0-1 0.448-1 1v0 4c0 0.552 0.448 1 1 1v0h4c0.552 0 1-0.448 1-1v0-4c0-0.552-0.448-1-1-1v0zM5 21h-2v-2h2zM14 17h-4c-0.552 0-1 0.448-1 1v0 4c0 0.552 0.448 1 1 1v0h4c0.552 0 1-0.448 1-1v0-4c0-0.552-0.448-1-1-1v0zM13 21h-2v-2h2zM22 17h-4c-0.552 0-1 0.448-1 1v0 4c0 0.552 0.448 1 1 1v0h4c0.552 0 1-0.448 1-1v0-4c0-0.552-0.448-1-1-1v0zM21 21h-2v-2h2z"></path>
      </svg>
    );
  }
);

GridBox.displayName = 'GridBox';
