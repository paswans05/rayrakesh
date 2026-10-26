import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Houzz = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M9.871 15.001v5.999h-6.2v-18h4.4v4.199l12.258 3.439v10.362h-6.255v-5.999z"></path>
      </svg>
    );
  }
);

Houzz.displayName = 'Houzz';
