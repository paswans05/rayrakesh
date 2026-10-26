import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SignVnd = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M18.467 3.521h-1.968v-1.771h-1.769v1.771h-2.017v1.769h2.017v2.899c-0.919-0.823-2.139-1.326-3.477-1.326-2.879 0-5.213 2.33-5.22 5.207v1.327c0.007 2.878 2.341 5.208 5.22 5.208 1.338 0 2.558-0.503 3.482-1.331l-0.005 0.004v1.179h1.769v-13.217h1.968zM11.291 16.836c-1.924-0.008-3.481-1.565-3.489-3.488v-1.327c-0-0.006-0-0.012-0-0.019 0-1.927 1.562-3.489 3.489-3.489s3.489 1.562 3.489 3.489c0 0.007-0 0.013-0 0.020v-0.001 1.327c-0.025 1.916-1.572 3.463-3.486 3.488l-0.002 0zM6.033 19.981h10.466v1.769h-10.466z"></path>
      </svg>
    );
  }
);

SignVnd.displayName = 'SignVnd';
