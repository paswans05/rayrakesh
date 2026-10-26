import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const BookFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M18 2h-10c-2.208 0.002-3.998 1.792-4 4v12c0.002 2.208 1.792 3.998 4 4h10c1.104-0.002 1.998-0.896 2-2v-16c-0.001-1.104-0.896-1.999-2-2h-0zM8 20c-1.104-0.002-1.998-0.896-2-2v-0c0.055-0.565 0.527-1.003 1.102-1.003 0.030 0 0.060 0.001 0.090 0.004l-0.004-0h10.814v3z"></path>
      </svg>
    );
  }
);

BookFill.displayName = 'BookFill';
