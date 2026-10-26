import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const MsgCircleFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M21.999 10.945c-0.277-4.843-4.15-8.698-8.976-8.944l-0.023-0.001h-0.522c-5.237 0.011-9.479 4.258-9.479 9.497 0 1.401 0.303 2.731 0.848 3.928l-0.024-0.060-1.772 5.318c-0.033 0.094-0.051 0.203-0.051 0.317 0 0.552 0.448 1 1 1 0.113 0 0.222-0.019 0.324-0.054l-0.007 0.002 5.318-1.772c1.129 0.519 2.45 0.822 3.842 0.824h0.024c5.245-0.005 9.495-4.255 9.5-9.5v-0z"></path>
      </svg>
    );
  }
);

MsgCircleFill.displayName = 'MsgCircleFill';
