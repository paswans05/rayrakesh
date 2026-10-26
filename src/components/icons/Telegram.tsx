import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Telegram = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M18.579 19.005c-0.216 0.954-0.78 1.192-1.582 0.742l-4.369-3.219-2.108 2.027c-0.203 0.262-0.517 0.428-0.87 0.428-0.003 0-0.006 0-0.009-0h0l0.314-4.449 8.097-7.317c0.352-0.314-0.076-0.488-0.547-0.174l-10.010 6.303-4.309-1.349c-0.937-0.293-0.954-0.937 0.195-1.387l16.855-6.494c0.78-0.293 1.463 0.174 1.209 1.366z"></path>
      </svg>
    );
  }
);

Telegram.displayName = 'Telegram';
