import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const EditFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M19 19.25h-14c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h14c0.552 0 1-0.448 1-1s-0.448-1-1-1v0zM5.413 17.75h0.085l3.924-0.358c0.447-0.046 0.842-0.242 1.139-0.536l8.468-8.468c0.306-0.323 0.495-0.761 0.495-1.242 0-0.514-0.215-0.978-0.56-1.307l-0.001-0.001-2.578-2.578c-0.336-0.316-0.789-0.51-1.288-0.51-0.464 0-0.889 0.168-1.217 0.447l0.003-0.002-8.468 8.468c-0.294 0.297-0.491 0.691-0.536 1.13l-0.001 0.008-0.405 3.924c-0.003 0.026-0.004 0.057-0.004 0.087 0 0.518 0.42 0.939 0.939 0.939 0.002 0 0.005 0 0.007-0h-0zM15.076 4.577l2.569 2.569-1.882 1.835-2.522-2.522z"></path>
      </svg>
    );
  }
);

EditFill.displayName = 'EditFill';
