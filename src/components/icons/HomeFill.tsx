import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const HomeFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M14 13v9h-4v-9zM20.619 8.514l-8-6.3c-0.169-0.134-0.384-0.215-0.619-0.215s-0.451 0.081-0.621 0.216l0.002-0.002-8 6.3c-0.233 0.185-0.381 0.468-0.381 0.785 0 0 0 0 0 0.001v-0 9.9c0 0.002-0 0.005-0 0.008 0 1.537 1.242 2.784 2.777 2.792h2.223v-10c0-0.552 0.448-1 1-1v0h6c0.552 0 1 0.448 1 1v0 10h2.223c1.536-0.008 2.777-1.255 2.777-2.792 0-0.003 0-0.006-0-0.009v0-9.9c0-0 0-0 0-0 0-0.318-0.148-0.601-0.379-0.784l-0.002-0.002z"></path>
      </svg>
    );
  }
);

HomeFill.displayName = 'HomeFill';
