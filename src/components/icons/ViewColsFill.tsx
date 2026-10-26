import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ViewColsFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M11 3.5v17c-0.001 0.276-0.224 0.499-0.5 0.5h-2c-0.276-0.001-0.499-0.224-0.5-0.5v-17c0.001-0.276 0.224-0.499 0.5-0.5h2c0.276 0.001 0.499 0.224 0.5 0.5v0zM20.5 3h-2c-0.276 0.001-0.499 0.224-0.5 0.5v17c0.001 0.276 0.224 0.499 0.5 0.5h2c0.276-0.001 0.499-0.224 0.5-0.5v-17c-0.001-0.276-0.224-0.499-0.5-0.5h-0zM5.5 3h-2c-0.276 0.001-0.499 0.224-0.5 0.5v17c0.001 0.276 0.224 0.499 0.5 0.5h2c0.276-0.001 0.499-0.224 0.5-0.5v-17c-0.001-0.276-0.224-0.499-0.5-0.5h-0zM15.5 3h-2c-0.276 0.001-0.499 0.224-0.5 0.5v17c0.001 0.276 0.224 0.499 0.5 0.5h2c0.276-0.001 0.499-0.224 0.5-0.5v-17c-0.001-0.276-0.224-0.499-0.5-0.5h-0z"></path>
      </svg>
    );
  }
);

ViewColsFill.displayName = 'ViewColsFill';
