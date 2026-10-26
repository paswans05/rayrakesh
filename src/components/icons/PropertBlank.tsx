import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const PropertBlank = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M18.5 3h-13c-1.38 0.001-2.499 1.12-2.5 2.5v13c0.001 1.38 1.12 2.499 2.5 2.5h13c1.38-0.001 2.499-1.12 2.5-2.5v-13c-0.001-1.38-1.12-2.499-2.5-2.5h-0zM5 5.5c0-0.276 0.224-0.5 0.5-0.5h13c0.276 0 0.5 0.224 0.5 0.5v1.5h-14zM19 18.5c-0 0.276-0.224 0.5-0.5 0.5h-13c-0.276-0-0.5-0.224-0.5-0.5v-9.5h14z"></path>
      </svg>
    );
  }
);

PropertBlank.displayName = 'PropertBlank';
