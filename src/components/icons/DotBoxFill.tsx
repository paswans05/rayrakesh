import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const DotBoxFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M17.5 3h-11c-1.932 0.002-3.498 1.568-3.5 3.5v11c0.002 1.932 1.568 3.498 3.5 3.5h11c1.932-0.002 3.498-1.568 3.5-3.5v-11c-0.002-1.932-1.568-3.498-3.5-3.5h-0zM8 18h-2v-2h2zM8 13h-2v-2h2zM8 8h-2v-2h2zM13 18h-2v-2h2zM13 13h-2v-2h2zM13 8h-2v-2h2zM18 18h-2v-2h2zM18 13h-2v-2h2zM18 8h-2v-2h2z"></path>
      </svg>
    );
  }
);

DotBoxFill.displayName = 'DotBoxFill';
