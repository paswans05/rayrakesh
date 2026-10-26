import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ViewColFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M8 3.5v17c-0.001 0.276-0.224 0.499-0.5 0.5h-4c-0.276-0.001-0.499-0.224-0.5-0.5v-17c0.001-0.276 0.224-0.499 0.5-0.5h4c0.276 0.001 0.499 0.224 0.5 0.5v0zM13.5 3h-3c-0.276 0.001-0.499 0.224-0.5 0.5v17c0.001 0.276 0.224 0.499 0.5 0.5h3c0.276-0.001 0.499-0.224 0.5-0.5v-17c-0.001-0.276-0.224-0.499-0.5-0.5h-0zM20.5 3h-4c-0.276 0.001-0.499 0.224-0.5 0.5v17c0.001 0.276 0.224 0.499 0.5 0.5h4c0.276-0.001 0.499-0.224 0.5-0.5v-17c-0.001-0.276-0.224-0.499-0.5-0.5h-0z"></path>
      </svg>
    );
  }
);

ViewColFill.displayName = 'ViewColFill';
