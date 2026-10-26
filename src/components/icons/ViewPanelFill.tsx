import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ViewPanelFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M21 13.5v7c-0.001 0.276-0.224 0.499-0.5 0.5h-17c-0.276-0.001-0.499-0.224-0.5-0.5v-7c0.001-0.276 0.224-0.499 0.5-0.5h17c0.276 0.001 0.499 0.224 0.5 0.5v0zM20.5 3h-17c-0.276 0.001-0.499 0.224-0.5 0.5v2c0.001 0.276 0.224 0.499 0.5 0.5h17c0.276-0.001 0.499-0.224 0.5-0.5v-2c-0.001-0.276-0.224-0.499-0.5-0.5h-0zM20.5 8h-17c-0.276 0.001-0.499 0.224-0.5 0.5v2c0.001 0.276 0.224 0.499 0.5 0.5h17c0.276-0.001 0.499-0.224 0.5-0.5v-2c-0.001-0.276-0.224-0.499-0.5-0.5h-0z"></path>
      </svg>
    );
  }
);

ViewPanelFill.displayName = 'ViewPanelFill';
