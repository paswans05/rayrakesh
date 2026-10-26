import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SignTry = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M7.008 21l-0.001-9.13-2.705 0.616 0.019-1.664 2.283-0.485 0.403-0.091v-2.332l-2.705 0.614 0.019-1.663 2.282-0.485 0.404-0.090v-3.289l2.056-0.001 0.001 2.816 5.155-1.368-0.019 1.663-5.137 1.33v2.333l5.155-1.369-0.019 1.664-5.137 1.329v7.622h1.12c3.751 0 7.537-2.083 7.537-6.737l1.978 0.045c-0.256 5.16-3.63 8.671-9.043 8.671z"></path>
      </svg>
    );
  }
);

SignTry.displayName = 'SignTry';
