import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SignBnbAlt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12c6.627 0 12-5.373 12-12v0c0-6.627-5.373-12-12-12v0zM11.951 5.5c0 0.033 4.040 4.018 4.040 4.018l-1.466 1.47-2.541-2.548-2.509 2.515-1.466-1.47zM13.45 12l-1.466 1.47-1.466-1.47 1.466-1.47zM5.5 12l1.466-1.47 1.466 1.47-1.466 1.47zM12.016 18.5c0-0.033-4.040-4.018-4.040-4.018l1.466-1.47 2.541 2.548 2.509-2.482 1.466 1.47zM17.034 13.47l-1.466-1.47 1.466-1.47 1.466 1.47z"></path>
      </svg>
    );
  }
);

SignBnbAlt.displayName = 'SignBnbAlt';
