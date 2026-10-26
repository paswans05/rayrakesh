import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const LockAltFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M18.223 10h-0.723v-2.556c0-3.038-2.462-5.5-5.5-5.5s-5.5 2.462-5.5 5.5v0 2.556h-0.723c-1.537 0.014-2.777 1.263-2.777 2.801 0 0.006 0 0.012 0 0.018v-0.001 6.363c-0 0.005-0 0.011-0 0.017 0 1.539 1.241 2.788 2.776 2.801h12.447c1.537-0.014 2.777-1.263 2.777-2.801 0-0.006-0-0.012-0-0.018v0.001-6.363c0-0.005 0-0.011 0-0.017 0-1.539-1.241-2.788-2.776-2.801h-0.001zM12 18c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2v0c-0.001 1.104-0.896 1.999-2 2h-0zM15.5 10h-7v-2.556c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5v0z"></path>
      </svg>
    );
  }
);

LockAltFill.displayName = 'LockAltFill';
