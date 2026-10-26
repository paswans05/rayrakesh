import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const BoxViewFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M11 13v8h-4.5c-1.932-0.002-3.498-1.568-3.5-3.5v-4.5zM11 3h-4.5c-1.932 0.002-3.498 1.568-3.5 3.5v4.5h8zM17.5 3h-4.5v8h8v-4.5c-0.002-1.932-1.568-3.498-3.5-3.5h-0zM13 21h4.5c1.932-0.002 3.498-1.568 3.5-3.5v-4.5h-8z"></path>
      </svg>
    );
  }
);

BoxViewFill.displayName = 'BoxViewFill';
