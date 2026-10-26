import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const PieFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M21.949 13c-0.496 4.729-4.22 8.453-8.906 8.946l-0.043 0.004-0.012-8.949zM12.986 11.026l8.964-0.025c-0.497-4.738-4.234-8.467-8.932-8.949l-0.043-0.004zM11 2.051c-5.075 0.525-9 4.779-9 9.949s3.924 9.424 8.957 9.946l0.043 0.004z"></path>
      </svg>
    );
  }
);

PieFill.displayName = 'PieFill';
