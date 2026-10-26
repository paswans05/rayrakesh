import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const External = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M19 13v5.133c-0.002 1.582-1.284 2.865-2.867 2.867h-10.267c-1.582-0.002-2.865-1.284-2.867-2.867v-10.267c0.002-1.582 1.284-2.865 2.867-2.867h5.133c0.552 0 1 0.448 1 1s-0.448 1-1 1v0h-5.133c-0.478 0.001-0.866 0.388-0.867 0.867v10.267c0.001 0.478 0.388 0.866 0.867 0.867h10.267c0.478-0.001 0.866-0.388 0.867-0.867v-5.133c0-0.552 0.448-1 1-1s1 0.448 1 1v0zM20.923 3.618c-0.155-0.365-0.509-0.616-0.923-0.618h-5c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h2.586l-8.293 8.293c-0.188 0.182-0.305 0.437-0.305 0.719 0 0.552 0.448 1 1 1 0.282 0 0.537-0.117 0.719-0.305l8.293-8.293v2.586c0 0.552 0.448 1 1 1s1-0.448 1-1v0-5c-0-0.138-0.029-0.269-0.080-0.389l0.002 0.007z"></path>
      </svg>
    );
  }
);

External.displayName = 'External';
