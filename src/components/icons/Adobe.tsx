import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Adobe = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M2 20.333v-16.667h7.417zM16.666 20.333h-3.168l-1.332-3.333h-3.416l3.251-7.166zM22 3.667v16.667l-7.418-16.667z"></path>
      </svg>
    );
  }
);

Adobe.displayName = 'Adobe';
