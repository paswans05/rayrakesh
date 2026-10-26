import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SignLtc = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M10.47 17.625l0.99-4.815 5.13-3.51 0.585-2.88-5.13 3.51 1.485-6.93h-3.915l-2.115 10.080-2.16 1.485-0.495 2.745 2.070-1.395-1.080 5.085h12.6l0.72-3.375h-8.685z"></path>
      </svg>
    );
  }
);

SignLtc.displayName = 'SignLtc';
