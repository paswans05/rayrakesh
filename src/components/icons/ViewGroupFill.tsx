import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ViewGroupFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M3 10v-2.5c0-0.276 0.224-0.5 0.5-0.5v0h7c0.276 0 0.5 0.224 0.5 0.5v0 2.5c0 0.276-0.224 0.5-0.5 0.5v0h-7c-0.276 0-0.5-0.224-0.5-0.5v0zM10.5 17h-7c-0.276 0-0.5 0.224-0.5 0.5v0 2.5c0 0.276 0.224 0.5 0.5 0.5v0h7c0.276 0 0.5-0.224 0.5-0.5v0-2.5c0-0.276-0.224-0.5-0.5-0.5v0zM20.5 17h-7c-0.276 0-0.5 0.224-0.5 0.5v0 2.5c0 0.276 0.224 0.5 0.5 0.5v0h7c0.276 0 0.5-0.224 0.5-0.5v0-2.5c0-0.276-0.224-0.5-0.5-0.5v0zM20.5 3h-17c-0.276 0-0.5 0.224-0.5 0.5v0 1c0 0.276 0.224 0.5 0.5 0.5v0h17c0.276 0 0.5-0.224 0.5-0.5v0-1c0-0.276-0.224-0.5-0.5-0.5v0zM20.5 13h-17c-0.276 0-0.5 0.224-0.5 0.5v0 1c0 0.276 0.224 0.5 0.5 0.5v0h17c0.276 0 0.5-0.224 0.5-0.5v0-1c0-0.276-0.224-0.5-0.5-0.5v0zM20.5 7h-7c-0.276 0-0.5 0.224-0.5 0.5v0 2.5c0 0.276 0.224 0.5 0.5 0.5v0h7c0.276 0 0.5-0.224 0.5-0.5v0-2.5c0-0.276-0.224-0.5-0.5-0.5v0z"></path>
      </svg>
    );
  }
);

ViewGroupFill.displayName = 'ViewGroupFill';
