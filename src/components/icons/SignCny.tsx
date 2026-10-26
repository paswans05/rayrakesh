import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SignCny = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M10.758 21v-4.419h-4.076v-1.563h4.076v-2.54h-4.076v-1.563h3.095l-4.551-7.915h2.838l3.934 7.407 4.016-7.407h2.76l-4.55 7.915h3.094v1.563h-4.076v2.54h4.076v1.563h-4.076v4.419h-2.484z"></path>
      </svg>
    );
  }
);

SignCny.displayName = 'SignCny';
