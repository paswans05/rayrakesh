import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Microsoft = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M11 3v8h-8v-8zM11 13v8h-8v-8zM21 3v8h-8v-8zM21 13v8h-8v-8z"></path>
      </svg>
    );
  }
);

Microsoft.displayName = 'Microsoft';
