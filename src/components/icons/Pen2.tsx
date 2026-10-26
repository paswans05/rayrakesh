import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Pen2 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M20.808 3.163c-0.429-0.41-1.012-0.663-1.654-0.663s-1.225 0.253-1.655 0.664l0.001-0.001-1.777 1.782 3.308 3.308 1.777-1.782c0.423-0.424 0.684-1.008 0.684-1.654s-0.261-1.23-0.684-1.654l0 0z"></path>
<path d="M14.692 5.978l-11.215 11.245c-0.093 0.093-0.162 0.211-0.196 0.343l-0.001 0.005-0.75 2.998c-0.014 0.055-0.022 0.117-0.022 0.182 0 0.414 0.335 0.749 0.749 0.749 0.064 0 0.127-0.008 0.187-0.023l-0.005 0.001 2.998-0.75c0.137-0.035 0.255-0.104 0.348-0.197v0l11.215-11.245z"></path>
      </svg>
    );
  }
);

Pen2.displayName = 'Pen2';
