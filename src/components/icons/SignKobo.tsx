import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SignKobo = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M2.625 14.859v-1.969h2.203v-1.688h-2.203v-2.016h2.203v-6.188h2.906l3.844 6.188h5.203v-6.188h2.297v6.188h2.297v1.969h-2.25v1.687h2.25v1.969h-2.25v6.141h-2.719l-3.938-6.094h-5.297v6.141h-2.344v-6.141zM7.172 9.188h1.734l-1.734-2.766zM7.172 12.891h4.078l-1.078-1.688h-3zM13.875 12.891h2.953v-1.688h-3.984zM16.828 17.578v-2.719h-1.688z"></path>
      </svg>
    );
  }
);

SignKobo.displayName = 'SignKobo';
