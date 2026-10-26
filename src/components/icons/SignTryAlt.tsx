import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SignTryAlt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12c6.627 0 12-5.373 12-12v0c0-6.627-5.373-12-12-12v0zM11.603 18h-2.431l-0.001-6.087-1.803 0.411 0.013-1.109 1.522-0.323 0.269-0.061v-1.555l-1.803 0.409 0.013-1.109 1.521-0.323 0.269-0.061v-2.192l1.37-0.001 0.001 1.877 3.437-0.912-0.012 1.109-3.425 0.886v1.556l3.437-0.913-0.012 1.109-3.425 0.886v5.082h0.747c2.501 0 5.025-1.389 5.025-4.491l1.318 0.030c0.001 0.029 0.001 0.063 0.001 0.097 0 3.145-2.549 5.694-5.694 5.694-0.118 0-0.235-0.004-0.351-0.011l0.016 0.001z"></path>
      </svg>
    );
  }
);

SignTryAlt.displayName = 'SignTryAlt';
