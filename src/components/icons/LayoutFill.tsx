import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const LayoutFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M8 10v11h-1c-2.208-0.003-3.997-1.792-4-4v-7zM10 21h7c2.208-0.003 3.997-1.792 4-4v-7h-11zM17 3h-10c-2.208 0.003-3.997 1.792-4 4v1h18v-1c-0.003-2.208-1.792-3.997-4-4h-0z"></path>
      </svg>
    );
  }
);

LayoutFill.displayName = 'LayoutFill';
