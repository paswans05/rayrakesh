import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Layout = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M17 3h-10c-2.208 0.003-3.997 1.792-4 4v10c0.003 2.208 1.792 3.997 4 4h10c2.208-0.003 3.997-1.792 4-4v-10c-0.003-2.208-1.792-3.997-4-4h-0zM7 5h10c1.105 0 2 0.895 2 2v0 1h-14v-1c0-1.105 0.895-2 2-2v0zM5 17v-7h3v9h-1c-1.105 0-2-0.895-2-2v0zM17 19h-7v-9h9v7c0 1.105-0.895 2-2 2v0z"></path>
      </svg>
    );
  }
);

Layout.displayName = 'Layout';
