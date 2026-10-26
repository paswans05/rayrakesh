import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ViewRowFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M21 3.5v2c-0.001 0.276-0.224 0.499-0.5 0.5h-17c-0.276-0.001-0.499-0.224-0.5-0.5v-2c0.001-0.276 0.224-0.499 0.5-0.5h17c0.276 0.001 0.499 0.224 0.5 0.5v0zM20.5 8h-17c-0.276 0.001-0.499 0.224-0.5 0.5v2c0.001 0.276 0.224 0.499 0.5 0.5h17c0.276-0.001 0.499-0.224 0.5-0.5v-2c-0.001-0.276-0.224-0.499-0.5-0.5h-0zM20.5 13h-17c-0.276 0.001-0.499 0.224-0.5 0.5v2c0.001 0.276 0.224 0.499 0.5 0.5h17c0.276-0.001 0.499-0.224 0.5-0.5v-2c-0.001-0.276-0.224-0.499-0.5-0.5h-0zM20.5 18h-17c-0.276 0.001-0.499 0.224-0.5 0.5v2c0.001 0.276 0.224 0.499 0.5 0.5h17c0.276-0.001 0.499-0.224 0.5-0.5v-2c-0.001-0.276-0.224-0.499-0.5-0.5h-0z"></path>
      </svg>
    );
  }
);

ViewRowFill.displayName = 'ViewRowFill';
