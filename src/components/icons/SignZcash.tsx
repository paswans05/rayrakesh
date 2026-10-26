import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SignZcash = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M11.168 21v-2.455h-4.107v-1.74l6.713-9.12h-6.713v-2.182h4.107v-2.503h1.664v2.503h4.107v1.739l-6.716 9.073h6.716v2.23h-4.107v2.455h-1.664z"></path>
      </svg>
    );
  }
);

SignZcash.displayName = 'SignZcash';
