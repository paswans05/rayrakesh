import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SignZcashAlt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12c6.627 0 12-5.373 12-12v0c0-6.627-5.373-12-12-12v0zM15.567 8.564l-4.851 6.552h4.851v1.611h-2.967v1.773h-1.201v-1.773h-2.967v-1.256l4.849-6.587h-4.849v-1.577h2.967v-1.807h1.201v1.807h2.967z"></path>
      </svg>
    );
  }
);

SignZcashAlt.displayName = 'SignZcashAlt';
