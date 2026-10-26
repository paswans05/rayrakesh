import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const VolNo = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M11.5 21c-0 0-0 0-0.001 0-0.26 0-0.497-0.099-0.675-0.262l0.001 0.001-4.713-4.31h-3.612c-0.552 0-1-0.448-1-1v0-6.857c0-0.552 0.448-1 1-1v0h3.612l4.713-4.31c0.177-0.162 0.414-0.262 0.675-0.262 0.552 0 1 0.448 1 1 0 0 0 0 0 0.001v-0 16c-0 0.406-0.242 0.756-0.59 0.912l-0.006 0.003c-0.118 0.054-0.256 0.085-0.401 0.085-0.001 0-0.001 0-0.002 0h0zM3.5 14.429h3c0.26 0 0.497 0.1 0.676 0.262l-0.001-0.001 3.325 3.040v-11.461l-3.325 3.041c-0.177 0.162-0.414 0.261-0.675 0.261-0 0-0 0-0 0h-3z"></path>
      </svg>
    );
  }
);

VolNo.displayName = 'VolNo';
